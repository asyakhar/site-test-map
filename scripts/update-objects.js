// scripts/update-photos-only.js
const fs = require('fs');
const path = require('path');

// === НАСТРОЙКИ ===
const GITHUB_USERNAME = 'asyakhar';
const REPO_NAME = 'yakutia-images';
const BRANCH = 'main';

// Путь к вашему репозиторию с фото (локально)
const PHOTOS_REPO_PATH = path.join(process.env.HOME, 'Visual Studio Code', 'yakutia-images');
// ИЛИ если репозиторий лежит в другом месте:
// const PHOTOS_REPO_PATH = path.join(process.env.HOME, 'Documents', 'yakutia-images');

// Путь к objects.json в вашем проекте
const OBJECTS_JSON_PATH = path.join(__dirname, '../public/data/objects.json');

// === СООТВЕТСТВИЕ ID (из вашего JSON -> папки на GitHub) ===
// Ключ: ID из objects.json (например, "obj-01")
// Значение: путь к папке в репозитории yakutia-images
const ID_MAPPING = {
  // Музеи
  "obj-01": "museum/arheoloпн-etno-museum", // Музей археологии и этнографии
  "obj-03": "museum/mammoth-museum", // Музей мамонта
  "obj-04": "museum/treasury", // Сокровищница
  "obj-05": "museum/yaroslavsky-museum", // Якутский музей
  "obj-08": "museum/khomus-museum", // Музей Хомуса
  "obj-09": "museum/national-art-museum", // Национальный художественный музей
  // "obj-07": "museum/music-museum", // Музей музыки и фольклора (если есть фото)
  // "obj-??": "museum/foreign-art-gallery", // Галерея зарубежного искусства
  
  // Театры
  // "obj-??": "theater/opera-theater",
  // "obj-??": "theater/sakha-theater",
  // "obj-??": "theater/philharmonic",
  // "obj-??": "theater/estrada-theater",
  // "obj-??": "theater/circus",
  
  // Туристические комплексы
  "obj-02": "tourism/permafrost-kingdom", // Царство вечной мерзлоты
  "obj-07": "tourism/old-town", // Старый город
  "obj-10": "tourism/atlasov-estate", // Усадьба Атласовых
  // "obj-??": "tourism/simekh",
  // "obj-??": "tourism/history-park",
  // "obj-??": "tourism/friendship-house",
  
  // Медицина
  // "obj-??": "health/medical-center",
  // "obj-??": "health/yarmiac",
  // "obj-??": "health/oncology-center",
  // "obj-??": "health/raduga-center",
  // "obj-??": "health/rehabilitation-center",
  
  // Образование
  "obj-06": "education/permafrost-institute", // Институт мерзлотоведения
  // "obj-??": "education/svfu",
  // "obj-??": "education/adaptive-school",
  
  // Рестораны
  // "obj-??": "food/avrora-restaurant",
  // "obj-??": "food/green-city-restaurant",
  // "obj-??": "food/coffeeshop-company",
  
  // Природа
  "obj-11": "nature/orto-doydu-zoo", // Парк Бизонарий
  // "obj-12": "???" // Ленские столбы (если есть фото)
};

// === ФУНКЦИИ ===

// Получить список файлов в папке
function getPhotoFiles(folderPath) {
  if (!fs.existsSync(folderPath)) return [];
  
  const files = fs.readdirSync(folderPath);
  return files
    .filter(f => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
    .sort((a, b) => {
      // main.jpg должен быть первым
      if (a === 'main.jpg' || a === 'main.png' || a === 'main.webp') return -1;
      if (b === 'main.jpg' || b === 'main.png' || b === 'main.webp') return 1;
      return a.localeCompare(b);
    });
}

// Сгенерировать ссылку на GitHub Raw
function getGitHubRawUrl(folderPath, filename) {
  return `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${REPO_NAME}/${BRANCH}/${folderPath}/${filename}`;
}

// === ГЛАВНАЯ ФУНКЦИЯ ===
async function main() {
  console.log('🚀 Начинаем обновление фото в objects.json...');
  
  // 1. Проверяем, что папка с фото существует
  if (!fs.existsSync(PHOTOS_REPO_PATH)) {
    console.error(`❌ Папка с фото не найдена: ${PHOTOS_REPO_PATH}`);
    console.log('💡 Укажите правильный путь к репозиторию yakutia-images');
    return;
  }
  
  // 2. Проверяем, что objects.json существует
  if (!fs.existsSync(OBJECTS_JSON_PATH)) {
    console.error(`❌ objects.json не найден: ${OBJECTS_JSON_PATH}`);
    return;
  }
  
  // 3. Читаем текущий objects.json
  const objects = JSON.parse(fs.readFileSync(OBJECTS_JSON_PATH, 'utf8'));
  console.log(`📄 Найдено ${objects.length} объектов в objects.json`);
  
  // 4. Обновляем photos для каждого объекта
  let updatedCount = 0;
  
  for (const obj of objects) {
    const folderPath = ID_MAPPING[obj.id];
    
    if (!folderPath) {
      console.log(`⚠️ Нет соответствия для ${obj.id} (${obj.name}), пропускаем`);
      continue;
    }
    
    const fullFolderPath = path.join(PHOTOS_REPO_PATH, folderPath);
    const photoFiles = getPhotoFiles(fullFolderPath);
    
    if (photoFiles.length === 0) {
      console.log(`⚠️ Нет фото для ${obj.id} (${obj.name}) в папке ${folderPath}`);
      continue;
    }
    
    // Генерируем новые ссылки
    const newPhotos = photoFiles.map(file => getGitHubRawUrl(folderPath, file));
    
    // Обновляем поле photos
    obj.photos = newPhotos;
    updatedCount++;
    console.log(`✅ ${obj.id} (${obj.name}): ${newPhotos.length} фото обновлено`);
  }
  
  // 5. Сохраняем обновлённый JSON
  fs.writeFileSync(OBJECTS_JSON_PATH, JSON.stringify(objects, null, 2));
  console.log(`\n🎉 Готово! Обновлено ${updatedCount} объектов из ${objects.length}`);
}

main().catch(console.error);