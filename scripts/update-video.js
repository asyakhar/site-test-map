// scripts/update-video.js
const fs = require('fs');
const path = require('path');

// === НАСТРОЙКИ ===
const GITHUB_USERNAME = 'asyakhar';
const REPO_NAME = 'yakutia-images';
const BRANCH = 'main';

// Путь к локальной папке с медиа (там должна быть папка video)
const LOCAL_IMAGES_PATH = path.join('/Users', 'nastaharitonova', 'Documents', 'yakutia-images');
const OBJECTS_JSON_PATH = path.join(__dirname, '../public/data/objects.json');

// === ФУНКЦИЯ ДЛЯ ГЕНЕРАЦИИ RAW-ССЫЛКИ ===
function getGitHubRawUrl(folderPath, filename) {
  return `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${REPO_NAME}/${BRANCH}/${folderPath}/${filename}`;
}

// === СКАНИРУЕМ ПАПКУ VIDEO ===
function scanVideoFolder() {
  const videoFolderPath = path.join(LOCAL_IMAGES_PATH, 'video');
  if (!fs.existsSync(videoFolderPath)) {
    console.log(`⚠️ Папка video не найдена: ${videoFolderPath}`);
    return null;
  }

  try {
    const files = fs.readdirSync(videoFolderPath);
    // Фильтруем только видеофайлы (расширения)
    const videoFiles = files.filter(file =>
      /\.(mp4|mov|webm|ogg|avi|mkv)$/i.test(file)
    );
    if (videoFiles.length === 0) {
      console.log(`⚠️ В папке video нет видеофайлов`);
      return null;
    }
    console.log(`📹 Найдено видеофайлов: ${videoFiles.length}`);
    return videoFiles;
  } catch (error) {
    console.error(`❌ Ошибка чтения папки video:`, error.message);
    return null;
  }
}

// === ОСНОВНАЯ ФУНКЦИЯ ===
async function main() {
  console.log('🚀 Начинаем обновление видео-ссылок...');
  console.log(`📁 Используем локальную папку: ${LOCAL_IMAGES_PATH}`);
  console.log('');

  // Проверяем существование корневой папки
  if (!fs.existsSync(LOCAL_IMAGES_PATH)) {
    console.error(`❌ Папка с медиа не найдена: ${LOCAL_IMAGES_PATH}`);
    console.log('💡 Убедитесь, что путь правильный.');
    return;
  }

  if (!fs.existsSync(OBJECTS_JSON_PATH)) {
    console.error(`❌ objects.json не найден: ${OBJECTS_JSON_PATH}`);
    return;
  }

  const objects = JSON.parse(fs.readFileSync(OBJECTS_JSON_PATH, 'utf8'));
  console.log(`📄 Найдено ${objects.length} объектов в objects.json`);
  console.log('');

  // Сканируем видеофайлы
  const videoFiles = scanVideoFolder();
  if (!videoFiles) {
    console.log('❌ Нет видеофайлов для обработки. Завершаем.');
    return;
  }

  // Создаём карту: имя файла (без расширения) → полное имя файла с расширением
  // Будем искать файлы, начинающиеся с ID объекта (например, "obj-08.mp4")
  const fileMap = {};
  videoFiles.forEach(file => {
    const baseName = path.parse(file).name; // имя без расширения
    // Если имя файла начинается с "obj-" – используем его как ключ
    if (baseName.startsWith('obj-')) {
      // Если несколько файлов для одного ID – сохраняем все
      if (!fileMap[baseName]) fileMap[baseName] = [];
      fileMap[baseName].push(file);
    }
  });

  let updatedCount = 0;
  let totalVideos = 0;
  const noVideos = [];

  for (const obj of objects) {
    const objId = obj.id; // например, "obj-08"
    const matchingFiles = fileMap[objId] || [];

    if (matchingFiles.length === 0) {
      // Если нет видео – удаляем поле videos (или можно оставить как есть)
      // Я рекомендую удалить, чтобы не было устаревших ссылок
      if (obj.videos) {
        delete obj.videos;
        console.log(`🗑️ Удалены видео для ${objId} (${obj.name}) – файлы не найдены`);
      }
      noVideos.push(`${objId} (${obj.name})`);
      continue;
    }

    // Сортируем файлы (например, main.* – первым, но здесь такого нет)
    matchingFiles.sort((a, b) => a.localeCompare(b));

    // Генерируем массив объектов { url, title? }
    const videos = matchingFiles.map(file => ({
      url: getGitHubRawUrl('video', file),
      // Можно вытащить название из имени файла, если нужно
      title: file.replace(/\.[^.]+$/, '') // убираем расширение
    }));

    // Обновляем поле videos
    obj.videos = videos;
    updatedCount++;
    totalVideos += videos.length;
    console.log(`✅ ${objId} (${obj.name}): добавлено ${videos.length} видео`);
  }

  // Сохраняем обновленный objects.json
  fs.writeFileSync(OBJECTS_JSON_PATH, JSON.stringify(objects, null, 2), 'utf8');

  // Итоговая статистика
  console.log('═══════════════════════════════════════════════');
  console.log(`🎉 Готово!`);
  console.log(`📊 Обновлено объектов с видео: ${updatedCount} из ${objects.length}`);
  console.log(`📹 Всего видеофайлов добавлено: ${totalVideos}`);
  if (noVideos.length > 0) {
    console.log(`\n⚠️ Без видео (${noVideos.length}):`);
    noVideos.forEach(name => console.log(`  ${name}`));
  }
  console.log(`\n📁 Файл сохранен: ${OBJECTS_JSON_PATH}`);
}

// Запускаем
main().catch(console.error);