// scripts/csv-to-events.js
// Конвертация data/events.csv -> public/data/events.json.
// Запуск:  node scripts/csv-to-events.js
// (по умолчанию читает data/events.csv, пишет public/data/events.json)

const fs = require('fs');
const path = require('path');

const CSV_PATH = process.argv[2] || path.join(__dirname, '../data/events.csv');
const OUT_PATH = process.argv[3] || path.join(__dirname, '../public/data/events.json');

// --- Парсер CSV (RFC4180: кавычки, экранированные кавычки, переводы строк внутри ячеек) ---
function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\r') { /* skip */ }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else field += c;
    }
  }
  if (field.length > 0 || row.length > 0) { row.push(field); rows.push(row); }
  return rows;
}

// Индексы колонок (5-я колонка — базовое имя файла фото, напр. "ysyakh")
const COL = { name: 0, date: 1, description: 2, location: 3, photo: 4 };

// Русские месяцы -> номер
const MONTHS = {
  'января': 1, 'февраля': 2, 'марта': 3, 'апреля': 4, 'мая': 5, 'июня': 6,
  'июля': 7, 'августа': 8, 'сентября': 9, 'октября': 10, 'ноября': 11, 'декабря': 12,
};

// "13 февраля" -> { day: 13, month: 2 }
function parseRuDate(s) {
  const m = String(s).trim().toLowerCase().match(/(\d{1,2})\s+([а-яё]+)/);
  if (!m) return { day: null, month: null };
  return { day: parseInt(m[1], 10), month: MONTHS[m[2]] || null };
}

// Аккуратная очистка многострочного текста: обрезаем пробелы у строк,
// убираем пустые строки, схлопываем двойные пробелы. Переносы строк сохраняем
// (для читаемых абзацев/списков в модальном окне).
function cleanMultiline(s) {
  return String(s || '')
    .replace(/\r/g, '')
    .split('\n')
    .map((line) => line.replace(/[ \t]+/g, ' ').trim())
    .filter((line) => line.length > 0)
    .join('\n')
    .trim();
}

// --- Основной прогон ---
const raw = fs.readFileSync(CSV_PATH, 'utf8');
const rows = parseCSV(raw).filter((r) => (r[COL.name] || '').trim() !== '');
rows.shift(); // заголовок

const events = rows.map((r, idx) => {
  const name = (r[COL.name] || '').trim();
  const dateRaw = (r[COL.date] || '').trim();
  const { day, month } = parseRuDate(dateRaw);
  return {
    id: 'evt-' + String(idx + 1).padStart(2, '0'),
    name,
    dateLabel: dateRaw,           // "13 февраля" — для показа в модальном окне
    month,                        // 1..12 — для сортировки/формата DD.MM
    day,                          // 1..31
    description: cleanMultiline(r[COL.description]),
    location: cleanMultiline(r[COL.location]),
    photo: (r[COL.photo] || '').trim(),  // базовое имя файла фото (без расширения); файл кладётся в public/img/events/<photo>.jpg
  };
});

fs.writeFileSync(OUT_PATH, JSON.stringify(events, null, 2), 'utf8');

console.log(`\nГотово: ${events.length} событий -> ${path.relative(process.cwd(), OUT_PATH)}`);
const noDate = events.filter((e) => !e.month || !e.day);
if (noDate.length) {
  console.log(`\nНе удалось разобрать дату (${noDate.length}):`);
  noDate.forEach((e) => console.log(`  ${e.id}  "${e.name}"  ("${e.dateLabel}")`));
}
