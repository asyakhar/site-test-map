// scripts/generate-github-links.js
const fs = require('fs');
const path = require('path');

// === НАСТРОЙКИ ===
const GITHUB_USERNAME = 'asyakhar';
const REPO_NAME = 'yakutia-images';
const BRANCH = 'main';

// Путь к objects.json в вашем проекте
const OBJECTS_JSON_PATH = path.join(__dirname, '../public/data/objects.json');

// === СООТВЕТСТВИЕ ID → ПАПКИ (ВСЕ 31 ОБЪЕКТ) ===
const ID_MAPPING = {
  // Музеи
  "obj-01": "museum/arheology-etno-museum",
  "obj-03": "museum/mammoth-museum",
  "obj-04": "museum/treasury",
  "obj-05": "museum/yaroslavsky-museum",
  "obj-08": "museum/khomus-museum",
  "obj-09": "museum/national-art-museum",
  "obj-24": "museum/foreign-art-gallery",
  "obj-28": "museum/music-museum",

  // Театры
  "obj-16": "theater/opera-theater",
  "obj-17": "theater/sakha-theater",
  "obj-18": "theater/philharmonic",
  "obj-19": "theater/estrada-theater",
  "obj-30": "theater/circus",

  // Туристические комплексы
  "obj-02": "tourism/permafrost-kingdom",
  "obj-07": "tourism/old-town",
  "obj-10": "tourism/atlasov-estate",
  "obj-11": "tourism/simekh",
  "obj-23": "tourism/history-park",
  "obj-29": "tourism/friendship-house",

  // Медицина
  "obj-13": "health/medical-center",
  "obj-14": "health/yarmiac",
  "obj-15": "health/oncology-center",
  "obj-20": "health/raduga-center",
  "obj-21": "health/rehabilitation-center",

  // Образование
  "obj-06": "education/permafrost-institute",
  "obj-12": "education/svfu",
  "obj-22": "education/adaptive-school",

  // Рестораны и кафе
  "obj-25": "food/avrora-restaurant",
  "obj-26": "food/green-city-restaurant",
  "obj-27": "food/coffeeshop-company",

  // Природа
  "obj-31": "nature/orto-doydu-zoo",
};

// === КАКИЕ ФАЙЛЫ ЕСТЬ В ПАПКЕ (вы указываете вручную) ===
// Если вы знаете, какие файлы есть в каждой папке на GitHub
const PHOTO_FILES = {
  "museum/arheology-etno-museum": ["main.jpg"],
  "museum/mammoth-museum": ["main.jpeg"],
  "museum/treasury": ["main.jpg"],
  "museum/yaroslavsky-museum": ["main.jpg"],
  "museum/khomus-museum": ["main.jpg"],
  "museum/national-art-museum": ["main.jpg"],
  "museum/foreign-art-gallery": ["main.jpeg"],
  "museum/music-museum": ["main.jpg"],
  "theater/opera-theater": ["main.jpg"],
  "theater/sakha-theater": ["main.jpg"],
  "theater/philharmonic": ["main.png"],
  "theater/estrada-theater": ["main.jpeg"],
  "theater/circus": ["main.jpg"],
  "tourism/permafrost-kingdom": ["main.jpg"],
  "tourism/old-town": ["main.jpeg"],
  "tourism/atlasov-estate": ["main.jpg"],
  "tourism/simekh": ["main.jpg"],
  "tourism/history-park": ["main.jpg"],
  "tourism/friendship-house": ["main.jpeg"],
  "health/medical-center": ["main.jpg"],
  "health/yarmiac": ["main.jpeg"],
  "health/oncology-center": ["main.jpeg"],
  "health/raduga-center": ["main.jpg"],
  "health/rehabilitation-center": ["main.jpeg"],
  "education/permafrost-institute": ["main.jpg"],
  "education/svfu": ["main.jpg"],
  "education/adaptive-school": ["main.jpg"],
  "food/avrora-restaurant": ["main.jpeg"],
  "food/green-city-restaurant": ["main.jpeg"],
  "food/coffeeshop-company": ["main.jpeg"],
  "nature/orto-doydu-zoo": ["main.jpg"],
};

function getGitHubRawUrl(folderPath, filename) {
  return `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${REPO_NAME}/${BRANCH}/${folderPath}/${filename}`;
}

async function main() {
  console.log('🚀 Начинаем генерацию ссылок на GitHub...');
  
  if (!fs.existsSync(OBJECTS_JSON_PATH)) {
    console.error(`❌ objects.json не найден: ${OBJECTS_JSON_PATH}`);
    return;
  }
  
  const objects = JSON.parse(fs.readFileSync(OBJECTS_JSON_PATH, 'utf8'));
  console.log(`📄 Найдено ${objects.length} объектов в objects.json`);
  
  let updatedCount = 0;
  let totalObjects = objects.length;
  
  for (const obj of objects) {
    const folderPath = ID_MAPPING[obj.id];
    
    if (!folderPath) {
      console.log(`⚠️ Нет соответствия для ${obj.id} (${obj.name}), пропускаем`);
      continue;
    }
    
    const files = PHOTO_FILES[folderPath] || [];
    
    if (files.length === 0) {
      console.log(`⚠️ Нет файлов для ${obj.id} (${obj.name}) в папке ${folderPath}`);
      continue;
    }
    
    const newPhotos = files.map(file => getGitHubRawUrl(folderPath, file));
    obj.photos = newPhotos;
    updatedCount++;
    console.log(`✅ ${obj.id} (${obj.name}): ${newPhotos.length} фото`);
  }
  
  fs.writeFileSync(OBJECTS_JSON_PATH, JSON.stringify(objects, null, 2));
  console.log(`\n🎉 Готово! Обновлено ${updatedCount} объектов из ${totalObjects}`);
}

main().catch(console.error);