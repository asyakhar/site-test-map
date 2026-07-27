// scripts/csv-to-objects.js
// Конвертация таблицы "Таблица на карту - Лист1.csv" в public/data/objects.json.

const fs = require('fs');
const path = require('path');

const CSV_PATH =
  process.argv[2] ||
  path.join(process.env.USERPROFILE || process.env.HOME, 'Downloads', 'Таблица на карту - Лист1.csv');
const OUT_PATH = process.argv[3] || path.join(__dirname, '../public/data/objects.json');
const OLD_JSON_PATH = path.join(__dirname, '../public/data/objects.json');

// --- Парсер CSV ---
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

// Индексы колонок в таблице
const COL = {
  name: 0, type: 1, address: 2, description: 3, workingHours: 4,
  mobility: 5, vision_impaired: 6, hearing_impaired: 7, deaf_mute: 8,
  dietary: 9, cardiovascular: 10, respiratory: 11, mental: 12,
  family: 13, ethnomedicine: 14, health: 15,
  contraindications: 16, tickets: 17, benefits: 18,
  website: 19, phone: 20, yandexMap: 21, coordinates: 22, notes: 23,
  // ↓↓↓ НОВЫЕ КОЛОНКИ ↓↓↓
  videoUrls: 26,
  comment: 25,       // текст отзыва
  commentAuthor: 27, // автор отзыва
};

// Ключи доступности
const ACCESS_KEYS = [
  'mobility', 'vision_impaired', 'hearing_impaired', 'deaf_mute',
  'dietary', 'cardiovascular', 'respiratory', 'mental',
  'family', 'ethnomedicine', 'health',
];

// Категория ("Тип организации" -> слаг с иконкой)
const CATEGORY_RULES = [
  [/театр|филармони|эстрад/i, 'theater'],
  [/цирк/i, 'entertainment'],
  [/зоопарк/i, 'nature'],
  [/ресторан/i, 'restaurant'],
  [/кофейн|кафе/i, 'cafe'],
  [/медицин|реабилитац|диспансер|больниц|оздоровительн|поликлиник/i, 'medical'],
  [/музей|сокровищниц|галере|выставочн|хомус/i, 'museum'],
  [/университет|образовательн|коррекционн|школ|институт/i, 'education'],
  [/туристическ|усадьба|база отдыха|старый город/i, 'entertainment'],
  [/дом дружбы|национальн|культурно|прикладн/i, 'culture'],
  [/историческ|этнографическ/i, 'culture'],
];

function detectCategory(type) {
  const t = (type || '').toLowerCase();
  for (const [re, slug] of CATEGORY_RULES) if (re.test(t)) return slug;
  return 'culture';
}

function clean(s) {
  return (s || '').replace(/\r/g, '').trim();
}

function oneLine(s) {
  return clean(s).replace(/\s*\n\s*/g, ' ').replace(/\s+/g, ' ').trim();
}

function isEmptyCell(s) {
  const v = clean(s).toLowerCase();
  return v === '' || v === '-' || v === '—' || v === 'ь' || v === 'нет' || v === 'н/д';
}

function isNonFeature(s) {
  const v = clean(s).toLowerCase();
  return (
    v.startsWith('профильного отделения нет') ||
    v.startsWith('медицинское учреждение. профильного отделения нет') ||
    v.startsWith('не оказывает народную медицину') ||
    v.startsWith('специальных программ нет') ||
    v.startsWith('не предназначено') ||
    v === 'государственное учреждение'
  );
}

function parseCoordinates(coordCell, yandexCell) {
  const m = clean(coordCell).match(/(-?\d{1,3}\.\d{3,})\s*,\s*(-?\d{1,3}\.\d{3,})/);
  if (m) return [parseFloat(m[1]), parseFloat(m[2])];
  const ll = clean(yandexCell).match(/ll=(-?\d{1,3}\.\d+)(?:%2C|,)(-?\d{1,3}\.\d+)/i);
  if (ll) return [parseFloat(ll[2]), parseFloat(ll[1])];
  return null;
}

function asUrl(s) {
  const v = clean(s);
  if (!v) return undefined;
  if (/^https?:\/\//i.test(v)) return v;
  if (/^www\./i.test(v)) return 'https://' + v;
  return undefined;
}

function asPhone(s) {
  const v = clean(s);
  if (!v) return undefined;
  const first = v.split(/\n/)[0].trim();
  const stripped = first.replace(/^\s*(телефон[ыа]?|тел\.?|моб\.?|контакты?|номер)\s*:?\s*/i, '').trim();
  return (stripped || first) || undefined;
}

// --- Парсинг видео из CSV ---
function parseVideos(urlsRaw) {
  const urls = clean(urlsRaw);
  if (!urls) return undefined;

  const urlList = urls.split(/[,;\n]+/).map(s => s.trim()).filter(Boolean);
  if (urlList.length === 0) return undefined;

  return urlList.map((url) => ({ url }));
}

// --- Перенос фото из старого objects.json ---
function normalizeName(s) {
  return clean(s).toLowerCase().replace(/[«»"'().,]/g, ' ').replace(/\s+/g, ' ').trim();
}

const STOP = new Set([
  'республики', 'республиканский', 'саха', 'якутия', 'якутии', 'якутск', 'якутский',
  'государственный', 'государственное', 'государственная', 'национальный', 'национального',
  'национальная', 'центр', 'центра', 'музей', 'музея', 'имени', 'народов', 'народного',
  'культуры', 'россии', 'комплекс', 'учреждение', 'бюджетное', 'город', 'история', 'истории',
]);

function tokens(s) {
  return normalizeName(s).split(' ').filter((w) => w.length >= 5 && !STOP.has(w));
}

function buildPhotoMatcher() {
  let old = [];
  try { old = JSON.parse(fs.readFileSync(OLD_JSON_PATH, 'utf8')); } catch { old = []; }
  const entries = old
    .filter((o) => Array.isArray(o.photos) && o.photos.length)
    .map((o) => ({ name: o.name, tok: new Set(tokens(o.name)), photos: o.photos }));
  return function matchPhotos(newName) {
    const nt = new Set(tokens(newName));
    let best = null, bestScore = 0;
    for (const e of entries) {
      let score = 0;
      for (const w of nt) if (e.tok.has(w)) score++;
      if (score > bestScore) { bestScore = score; best = e; }
    }
    return bestScore >= 1 ? { photos: best.photos, from: best.name } : null;
  };
}

// --- Основной прогон ---
const raw = fs.readFileSync(CSV_PATH, 'utf8');
const rows = parseCSV(raw).filter((r) => clean(r[COL.name]) !== '');
const header = rows.shift();
const matchPhotos = buildPhotoMatcher();

const objects = [];
const missingCoords = [];
const photoReport = [];

rows.forEach((r, idx) => {
  const name = oneLine(r[COL.name]);
  const id = 'obj-' + String(idx + 1).padStart(2, '0');
  const category = detectCategory(r[COL.type]);

  const accessibility = {};
  const layers = ['inclusive'];
  for (const key of ACCESS_KEYS) {
    const cell = clean(r[COL[key]]);
    if (isEmptyCell(cell)) continue;
    accessibility[key] = oneLine(cell);
    if (!isNonFeature(cell)) layers.push(key);
  }

  const coordinates = parseCoordinates(r[COL.coordinates], r[COL.yandexMap]);
  if (!coordinates) missingCoords.push(`${id}  ${name}`);

  const photoMatch = matchPhotos(name);
  const photos = photoMatch ? photoMatch.photos : [];
  if (photoMatch) photoReport.push(`${id}  "${name}"  <=  "${photoMatch.from}"`);

  // --- ПАРСИМ ВИДЕО ---
  const videos = parseVideos(r[COL.videoUrls]);

  // --- ПАРСИМ ОТЗЫВ ---
  const comment = clean(r[COL.comment]);
  const commentAuthor = clean(r[COL.commentAuthor]);

  const contacts = {};
  const phone = asPhone(r[COL.phone]);
  const website = asUrl(r[COL.website]);
  const yandexMap = asUrl(r[COL.yandexMap]);
  if (phone) contacts.phone = phone;
  if (website) contacts.website = website;
  if (yandexMap) contacts.yandexMap = yandexMap;

  const obj = { id, name, category, layers, coordinates };
  const address = oneLine(r[COL.address]);
  const workingHours = clean(r[COL.workingHours]);
  const description = clean(r[COL.description]);
  const contraindications = clean(r[COL.contraindications]);
  const tickets = clean(r[COL.tickets]);
  const benefits = clean(r[COL.benefits]);
  const notes = clean(r[COL.notes]);

  if (address) obj.address = address;
  if (workingHours) obj.workingHours = workingHours;
  obj.description = description;
  obj.accessibility = accessibility;
  if (contraindications && !isEmptyCell(contraindications)) obj.contraindications = contraindications;
  if (tickets && !isEmptyCell(tickets)) obj.tickets = tickets;
  if (benefits && !isEmptyCell(benefits)) obj.benefits = benefits;
  if (notes && !isEmptyCell(notes)) obj.notes = notes;
  obj.photos = photos;
  if (videos && videos.length > 0) obj.videos = videos;
  if (comment) obj.comment = comment;
  if (commentAuthor) obj.commentAuthor = commentAuthor;
  obj.contacts = contacts;

  objects.push(obj);
});

fs.writeFileSync(OUT_PATH, JSON.stringify(objects, null, 2), 'utf8');

console.log(`\n✅ Готово: ${objects.length} объектов -> ${path.relative(process.cwd(), OUT_PATH)}`);
console.log(`\n📸 Перенос фото (${photoReport.length}):`);
photoReport.forEach((l) => console.log('  ' + l));
console.log(`\n⚠️ Нет координат (${missingCoords.length}) — впишите вручную в objects.json:`);
missingCoords.forEach((l) => console.log('  ' + l));