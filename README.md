# Доступная Якутия — Инклюзивный навигатор

Интерактивная карта медицинского и доступного туризма Республики Саха (Якутия).

![Доступная Якутия](https://picsum.photos/seed/yakutia-map/800/400)

## Возможности

- **12 тематических слоёв** — от инклюзивной среды до этномедицины
- **Гибкие фильтры доступности** — пандусы, шрифт Брайля, жестовый язык и многое другое
- **Персонализация** — автоматический подбор слоёв и фильтров на основе ваших потребностей
- **35+ объектов** — музеи, отели, рестораны, медицинские центры, парки
- **Адаптивный дизайн** — работает на компьютерах, планшетах и телефонах

## Слои карты

| Слой | Описание |
|------|----------|
| Инклюзивный | Объекты с доступной средой |
| Нарушения зрения | Брайль, аудиоописание, тактильные экспонаты |
| Нарушения слуха | Индукционные петли, визуальные табло |
| Глухонемые | Персонал со знанием жестового языка |
| Пищевой слой | Диабетическое, безглютеновое меню |
| Сердечно-сосудистые | Рядом с медучреждениями, кардио-диета |
| Опорно-двигательный | Пандусы, лифты, поручни |
| Ментальные особенности | Тихие зоны, сенсорно-дружественная среда |
| Респираторные | Чистый воздух, очистители |
| Семьи с детьми | Детские комнаты, игровые зоны |
| Народная медицина | Травничество, якутская баня |
| Польза для здоровья | Термальные источники, грязелечение |

## Быстрый старт

### Локальный запуск

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/YOUR_USERNAME/accessible-yakutia.git
   cd accessible-yakutia
   ```

2. Откройте `index.html` в браузере:
   - Двойной клик на файле, или
   - Используйте локальный сервер:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js
     npx serve
     ```

3. Перейдите по адресу `http://localhost:8000`

### Публикация на GitHub Pages

1. Создайте новый репозиторий на GitHub

2. Загрузите файлы проекта:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Accessible Yakutia map"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/accessible-yakutia.git
   git push -u origin main
   ```

3. GitHub Actions автоматически опубликует сайт

4. Если автоматическая публикация не сработала:
   - Перейдите в Settings → Pages
   - Source: выберите "GitHub Actions"
   - Или выберите "Deploy from a branch" → main → / (root)

5. Сайт будет доступен по адресу:
   ```
   https://YOUR_USERNAME.github.io/accessible-yakutia/
   ```

## Структура проекта

```
accessible-yakutia/
├── index.html              # Главная страница
├── css/
│   └── style.css           # Стили
├── js/
│   └── app.js              # Логика приложения
├── data/
│   └── objects.json        # База данных объектов
├── img/                    # Изображения (опционально)
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions для деплоя
└── README.md               # Документация
```

## Технологии

- **HTML5** — семантическая разметка
- **CSS3** — адаптивные стили, CSS Variables
- **JavaScript (ES6+)** — модульная архитектура
- **Leaflet.js** — интерактивные карты
- **OpenStreetMap** — картографические данные

## Доступность

Проект разработан с учётом стандартов WCAG:

- Семантическая HTML-разметка
- ARIA-атрибуты для интерактивных элементов
- Поддержка клавиатурной навигации
- Контрастные цвета
- Масштабируемый интерфейс

## Добавление новых объектов

Отредактируйте файл `data/objects.json`, добавив новый объект:

```json
{
  "id": "obj-XX",
  "name": "Название объекта",
  "category": "museum",
  "layers": ["inclusive", "family"],
  "coordinates": [62.0355, 129.6755],
  "properties": {
    "ramp": true,
    "wide_doors": true,
    ...
  },
  "description": "Описание объекта",
  "photos": ["img/photo.jpg"],
  "contacts": {
    "phone": "+7-4112-XX-XX-XX",
    "website": "https://example.ru"
  }
}
```

### Категории объектов

`museum`, `hotel`, `restaurant`, `cafe`, `park`, `theater`, `medical`, `spa`, `monument`, `shopping`, `sports`, `nature`, `culture`, `entertainment`, `education`

### Доступные слои

`inclusive`, `vision_impaired`, `hearing_impaired`, `deaf_mute`, `dietary`, `cardiovascular`, `mobility`, `mental`, `respiratory`, `family`, `ethnomedicine`, `health`

## Лицензия

MIT License — свободное использование и модификация.

## Контакты

По вопросам и предложениям: [создайте Issue](https://github.com/YOUR_USERNAME/accessible-yakutia/issues)

---

Сделано с ❤️ для доступной Якутии
