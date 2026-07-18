// scripts/update-photo.js
const fs = require('fs');
const path = require('path');

// === НАСТРОЙКИ ===
const GITHUB_USERNAME = 'asyakhar';
const REPO_NAME = 'yakutia-images';
const BRANCH = 'main';


const LOCAL_IMAGES_PATH = path.join('/Users', 'nastaharitonova', 'Documents', 'yakutia-images');

const OBJECTS_JSON_PATH = path.join(__dirname, '../public/data/objects.json');

// === СООТВЕТСТВИЕ ID → ПАПКИ ===
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

function getGitHubRawUrl(folderPath, filename) {
  return `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${REPO_NAME}/${BRANCH}/${folderPath}/${filename}`;
}

// === СКАНИРУЕМ ЛОКАЛЬНУЮ ПАПКУ ===
function scanLocalFolder(folderPath) {
  const fullPath = path.join(LOCAL_IMAGES_PATH, folderPath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️ Папка не найдена: ${folderPath}`);
    console.log(`   Искал: ${fullPath}`);
    return null;
  }
  
  try {
    const files = fs.readdirSync(fullPath);
    // Фильтруем только изображения
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp|bmp)$/i.test(file)
    );
    
    if (imageFiles.length === 0) {
      console.log(`⚠️ В папке нет изображений: ${folderPath}`);
      return null;
    }
    
    // Сортируем: main.* всегда первым, остальные по алфавиту
    imageFiles.sort((a, b) => {
      if (a.startsWith('main.')) return -1;
      if (b.startsWith('main.')) return 1;
      return a.localeCompare(b);
    });
    
    console.log(`   📸 Найдено файлов: ${imageFiles.length}`);
    imageFiles.forEach(file => console.log(`      - ${file}`));
    
    return imageFiles;
  } catch (error) {
    console.error(`❌ Ошибка чтения папки ${folderPath}:`, error.message);
    return null;
  }
}

// === ОСНОВНАЯ ФУНКЦИЯ ===
async function main() {
  console.log('🚀 Начинаем генерацию ссылок на GitHub...');
  console.log(`📁 Используем локальную папку: ${LOCAL_IMAGES_PATH}`);
  console.log('');
  
  // Проверяем существование корневой папки
  if (!fs.existsSync(LOCAL_IMAGES_PATH)) {
    console.error(`❌ Папка с фотографиями не найдена: ${LOCAL_IMAGES_PATH}`);
    console.log('💡 Убедитесь, что путь правильный:');
    console.log(`   Сейчас ищет: ${LOCAL_IMAGES_PATH}`);
    console.log('   Создайте папку или укажите правильный путь в LOCAL_IMAGES_PATH');
    return;
  }
  
  if (!fs.existsSync(OBJECTS_JSON_PATH)) {
    console.error(`❌ objects.json не найден: ${OBJECTS_JSON_PATH}`);
    return;
  }
  
  const objects = JSON.parse(fs.readFileSync(OBJECTS_JSON_PATH, 'utf8'));
  console.log(`📄 Найдено ${objects.length} объектов в objects.json`);
  console.log('');
  
  let updatedCount = 0;
  let totalPhotos = 0;
  const errors = [];
  const noPhotos = [];
  
  for (const obj of objects) {
    const folderPath = ID_MAPPING[obj.id];
    
    if (!folderPath) {
      console.log(`⚠️ Нет соответствия для ${obj.id} (${obj.name}), пропускаем`);
      continue;
    }
    
    console.log(`📂 Обработка: ${obj.name} (${obj.id})`);
    console.log(`   Путь: ${folderPath}`);
    
    const files = scanLocalFolder(folderPath);
    
    if (!files || files.length === 0) {
      console.log(`   ❌ Нет файлов\n`);
      noPhotos.push(`${obj.id} (${obj.name})`);
      continue;
    }
    
    const newPhotos = files.map(file => getGitHubRawUrl(folderPath, file));
    obj.photos = newPhotos;
    updatedCount++;
    totalPhotos += newPhotos.length;
    console.log(`   ✅ Обновлено (${newPhotos.length} фото)\n`);
  }
  
  // Сохраняем обновленный objects.json
  fs.writeFileSync(OBJECTS_JSON_PATH, JSON.stringify(objects, null, 2), 'utf8');
  
  // Итоговая статистика
  console.log('═══════════════════════════════════════════════');
  console.log(`🎉 Готово!`);
  console.log(`📊 Обновлено объектов: ${updatedCount} из ${objects.length}`);
  console.log(`📸 Всего фото: ${totalPhotos}`);
  console.log(`📈 Среднее фото на объект: ${(totalPhotos / updatedCount || 0).toFixed(1)}`);
  
  if (noPhotos.length > 0) {
    console.log(`\n⚠️ Без фото (${noPhotos.length}):`);
    noPhotos.forEach(name => console.log(`  ${name}`));
  }
  
  console.log(`\n📁 Файл сохранен: ${OBJECTS_JSON_PATH}`);
}

// Запускаем
main().catch(console.error);