"use client";

import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Sparkles,
  Eye,
  Ear,
  Users,
  Hospital,
  Accessibility,
  ChevronRight,
  Heart,
  Brain,
  Wind,
  Check,
  Utensils,
  AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import Header from "@/components/AppHeader";
import PopularPlaces from "@/components/PopularPlaces";
import UpcomingEvents from "@/components/UpcomingEvents";
import VisionModal from "@/components/VisionModal";

// Типы для категорий
type Category = {
  id: string;
  icon: any;
  label: string;
  color: string;
};
const basePath = process.env.NODE_ENV === 'production' ? '/site-test-map' : '';
const categories: Category[] = [
  { id: "mobility", icon: Accessibility, label: "Проблемы с передвижением", color: "#457B9D" },
  { id: "vision", icon: Eye, label: "Нарушения зрения", color: "#FF6B6B" },
  { id: "hearing", icon: Ear, label: "Нарушения слуха", color: "#FFA07A" },
  { id: "deaf_mute", icon: Ear, label: "Глухонемые", color: "#DDA15E" },
  { id: "dietary", icon: Heart, label: "Питание", color: "#95E1D3" },
  { id: "cardiovascular", icon: Heart, label: "Сердечно-сосудистые", color: "#E63946" },
  { id: "mental", icon: Brain, label: "Ментальные особенности", color: "#A8DADC" },
  { id: "respiratory", icon: Wind, label: "Респираторные", color: "#1D3557" },
  { id: "family", icon: Users, label: "Семьи с детьми", color: "#FFB703" },
  { id: "ethnomedicine", icon: Sparkles, label: "Народная медицина", color: "#8B5A3C" },
  { id: "health", icon: Hospital, label: "Здоровье", color: "#52B788" },
];

// id категории на главной - id слоя на карте
const toLayerId = (catId: string): string =>
  catId === 'vision' ? 'vision_impaired' : catId === 'hearing' ? 'hearing_impaired' : catId;

// Цвета карточек из шаблона Figma
const CARD_HEX: Record<string, string> = {
  green: '#384E41',
  blue: '#6A86A7',
  orange: '#FF9316',
  darkred: '#802405',
  taupe: '#7F715A',
};

type WhyCard = { label: string; icon: any; color: keyof typeof CARD_HEX; layer: string };
// Секция "Зачем мы создали этот сервис?", 3 колонки
const WHY_COLUMNS: { title: string; cards: WhyCard[] }[] = [
  {
    title: 'Чтобы стереть границы при',
    cards: [
      { label: 'проблемах с передвижением', icon: Accessibility, color: 'green', layer: 'mobility' },
      { label: 'нарушениях зрения', icon: Eye, color: 'blue', layer: 'vision_impaired' },
      { label: 'нарушениях слуха', icon: Ear, color: 'orange', layer: 'hearing_impaired' },
      { label: 'особой диете', icon: Utensils, color: 'darkred', layer: 'dietary' },
    ],
  },
  {
    title: 'Чтобы сделать путешествие безопасным',
    cards: [
      { label: 'при слабом сердце', icon: Heart, color: 'darkred', layer: 'cardiovascular' },
      { label: 'при респираторных проблемах', icon: Wind, color: 'taupe', layer: 'respiratory' },
    ],
  },
  {
    title: 'Чтобы вы смогли сосредоточиться на главном:',
    cards: [
      { label: 'На здоровье', icon: Hospital, color: 'orange', layer: 'health' },
      { label: 'На детях', icon: Users, color: 'green', layer: 'family' },
      { label: 'На исследовании нового', icon: Sparkles, color: 'blue', layer: 'ethnomedicine' },
    ],
  },
];

export default function HomePage() {
  const router = useRouter();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const basePath = process.env.NODE_ENV === 'production' ? '/site-test-map' : '';

  // Следим за режимом высокого контраста (класс на <html>)
  useEffect(() => {
    const check = () => setIsHighContrast(document.documentElement.classList.contains('high-contrast'));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const toggleNeed = (id: string) =>
    setSelectedNeeds((prev) =>
      prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]
    );

  // Сохранить выбранные слои и перейти на карту
  const applyNeedsAndGoToMap = () => {
    const layers =
      selectedNeeds.length > 0
        ? Array.from(new Set(selectedNeeds.map(toLayerId)))
        : ['inclusive'];
    try {
      localStorage.setItem('preferredLayers', JSON.stringify(layers));
    } catch {
      /* ignore */
    }
    setShowFilters(false);
    router.push('/map');
  };

  // ДОБАВЛЯЕМ ЭТОТ useEffect ДЛЯ ОБРАБОТКИ ЯКОРЯ
  useEffect(() => {
    // Проверяем флаг в sessionStorage (устанавливается в Header при клике на "О проекте")
    const shouldScrollToAbout = sessionStorage.getItem('scrollToAbout');

    if (shouldScrollToAbout === 'true') {
      // Удаляем флаг, чтобы не скроллить при обновлении страницы
      sessionStorage.removeItem('scrollToAbout');

      // Функция скролла
      const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      };

      // Проверяем, есть ли элемент уже в DOM
      if (document.getElementById('about')) {
        // Если есть - скроллим сразу
        setTimeout(scrollToAbout, 100);
      } else {
        // Если нет - ждем появления с MutationObserver
        const observer = new MutationObserver(() => {
          if (document.getElementById('about')) {
            observer.disconnect();
            scrollToAbout();
          }
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true
        });

        // Таймаут на всякий случай (если элемент так и не появился)
        const timeout = setTimeout(() => {
          observer.disconnect();
          scrollToAbout();
        }, 3000);

        return () => {
          observer.disconnect();
          clearTimeout(timeout);
        };
      }
    }
  }, []);// Пустой массив зависимостей — запускается только один раз при монтировании

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">

      {/* Ссылка «Перейти к содержимому» для клавиатуры и скринридеров */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-white focus:font-semibold focus:shadow-lg"
      >
        Перейти к содержимому
      </a>

      {/* Входное окно про нарушения зрения (раз за сессию, только на главной) */}
      <VisionModal />

      {/* Вызываем нашу новую переиспользуемую шапку и передаем функцию открытия фильтров */}
      <Header onOpenFilters={() => setShowFilters(true)} />

      <main id="main-content">
        {/* Блок 2. Главный экран с фоновым изображением */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-12 lg:py-16">
          {/* Фоновое изображение */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('${basePath}/img/background_photo.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Затемнение — теплое бежевое */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(248, 246, 241, 0.6) 0%, rgba(237, 235, 229, 0.4) 50%, rgba(248, 246, 241, 0.6) 100%)',
              }}
            />
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-8">

              {/* Левая часть — ФОТО */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 flex justify-center lg:justify-start w-full overflow-visible"
              >
                <div className="w-full max-w-[400px] lg:max-w-none flex justify-center items-center p-2">
                  <img
                    src={`${basePath}/img/cut_map.png`}
                    alt="Якутия"
                    className="max-w-full h-auto object-contain 
                             [-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent_85%)] 
                             [mask-image:linear-gradient(to_bottom,black_40%,transparent_85%)] 
                             lg:[-webkit-mask-image:none] lg:[mask-image:none] 
                             scale-100 lg:scale-125 origin-center"
                  />
                </div>
              </motion.div>

              {/* Правая часть — ТЕКСТ */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 text-center lg:text-right -mt-16 sm:-mt-24 lg:mt-0 relative z-10"
              >
                <h1
                  className="font-sangha font-bold leading-[1.05] tracking-wide text-green-dark"
                  style={{
                    fontSize: 'clamp(2.5rem, 6vw + 1rem, 4.5rem)',
                    textShadow: '17px -7px 13.9px rgba(99, 84, 62, 0)',
                  }}
                >
                  УВЕРЕННЫЙ МАРШРУТ
                  <br />
                  <span className="text-accent-custom">НАЧИНАЕТСЯ ЗДЕСЬ</span>
                </h1>

                <p
                  className="mt-6 max-w-xl mx-auto lg:ml-auto lg:mr-0 text-brown-dark leading-relaxed"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
                >
                  Интерактивный навигатор для комфортного и доступного путешествия по Республике Саха.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end mt-8">
                  {/* Кнопка "Перейти на карту" */}
                  <Button
                    size="lg"
                    className="
    bg-accent-custom 
    hover:bg-[var(--color-accent-hover)] 
    text-[var(--color-text-white)] 
    px-8 py-6 md:py-7 
    rounded-xl shadow-lg 
    font-bold tracking-wide 
    border-2 border-transparent
    hover:border-[var(--color-accent-hover)]
    min-w-[220px]
  "
                    style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
                    onClick={() => router.push('/map')}
                  >
                    <MapPin className="mr-2 size-5" />
                    Перейти на карту
                  </Button>

                  {/* Кнопка "Подобрать места" */}
                  <Button
                    size="lg"
                    variant="outline"
                    className="
    bg-[var(--color-button-primary-bg)] 
    text-[var(--color-button-primary-text)] 
    border-2 border-[var(--color-button-primary-border)]
    hover:bg-[var(--color-button-primary-hover)]
    hover:text-[var(--color-text-white)]
    hover:border-[var(--color-button-primary-hover)]
    px-8 py-6 md:py-7 
    rounded-xl shadow-lg 
    font-bold tracking-wide 
    transition-all duration-200
    min-w-[220px]
  "
                    style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
                    onClick={() => setShowFilters(true)}
                  >
                    <Sparkles className="mr-2 size-5" />
                    Подобрать места
                  </Button>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Блок 3. Зачем мы создали этот сервис */}
        <section className="relative py-16 lg:py-24 bg-[var(--color-bg-primary)] overflow-hidden">
          <img
            src={`${basePath}/img/events-pattern.png`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute -top-0 right-0 h-[650px] w-auto opacity-40 dark-contrast:hidden"
          />
          <img
            src={`${basePath}/img/events-pattern.png`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute top-[650px] right-0 h-[550px] w-auto opacity-40 dark-contrast:hidden"
          />
          <img
            src={`${basePath}/img/union.png`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute left-0 bottom-0 w-[40%] max-w-[700px] opacity-25 dark-contrast:hidden"
          />
          <div className="container relative mx-auto px-4">
            <h2
              className="font-sangha text-center mb-12 text-[var(--color-title-events)] dark-contrast:text-white"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Зачем мы создали этот сервис?
            </h2>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {WHY_COLUMNS.map((col) => (
                <div key={col.title} className="flex flex-col">
                  <h3 className="text-center font-bold text-[clamp(1.05rem,1.5vw,1.3rem)] text-[var(--color-green-dark)] dark-contrast:text-white mb-4 md:mb-5 md:min-h-[4.5rem] flex items-center justify-center">
                    {col.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-3 md:flex md:flex-col md:gap-4">
                    {col.cards.map((card) => {
                      const Icon = card.icon;
                      return (
                        <button
                          key={card.label}
                          type="button"
                          onClick={() => {
                            try {
                              localStorage.setItem('preferredLayers', JSON.stringify([card.layer]));
                            } catch {
                              /* ignore */
                            }
                            router.push('/map');
                          }}
                          style={
                            isHighContrast
                              ? { backgroundColor: '#000000', border: '2px solid #FFFFFF' }
                              : { backgroundColor: CARD_HEX[card.color] }
                          }
                          className="flex flex-col items-center justify-center gap-2.5 md:gap-3 rounded-2xl px-3 py-5 md:px-4 md:py-7 text-center text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl min-h-[120px] md:min-h-[130px] opacity-85 hover:opacity-100"
                        >
                          <Icon className="size-8 md:size-10" strokeWidth={2} />
                          <span className="font-bold text-[clamp(0.95rem,1.2vw,1.1rem)] leading-snug">
                            {card.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Блок 4. Карусель с объектами */}
        <section className="relative py-16 lg:py-24 bg-[var(--color-bg-secondary)] dark-contrast:bg-black overflow-hidden">
          <img
            src={`${basePath}/img/events-pattern.png`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute -top-4 right-0 h-[650px] w-auto opacity-40 dark-contrast:hidden"
          />
          <img
            src={`${basePath}/img/union.png`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute left-0 bottom-0 w-[40%] max-w-[700px] opacity-25 dark-contrast:hidden"
          />
          <div className="container relative mx-auto px-4">
            <div className="flex flex-wrap justify-between items-end gap-x-6 gap-y-2 mb-8">
              <h2 className="font-sangha"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#E38920' }}>
                ПОПУЛЯРНЫЕ МЕСТА
              </h2>
              <Link href="/map" className="text-[var(--color-accent)] font-medium hover:underline flex items-center text-[clamp(0.875rem,1.5vw,1rem)]">
                Смотреть все <ChevronRight className="size-4" />
              </Link>
            </div>

            <PopularPlaces />
          </div>
        </section>

        {/* Блок 5. Ближайшие события */}
        <section className="relative py-16 lg:py-24 bg-[var(--color-bg-primary)] overflow-hidden">
          <img
            src={`${basePath}/img/events-pattern.png`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute -top-4 right-0 h-[750px] w-auto opacity-40 dark-contrast:hidden"
          />
          <img
            src={`${basePath}/img/union.png`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 w-[42%] max-w-[700px] opacity-30 dark-contrast:hidden"
          />
          <div className="container relative mx-auto px-4">
            <h2
              className="font-sangha text-center mb-12 text-[var(--color-title-events)]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              БЛИЖАЙШИЕ СОБЫТИЯ
            </h2>
            <UpcomingEvents />
          </div>
        </section>

        {/* Блок 6. О проекте */}
        {(() => {
          // Объявляем basePath прямо внутри компонента перед рендером
          const basePath = process.env.NODE_ENV === 'production' ? '/site-test-map' : '';

          // Массив с ссылками на логотипы спонсоров
          const sponsors = [
            "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/sponsors/ekvo.png",
            "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/sponsors/igmu.png",
            "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/sponsors/yarmiats.png",
            "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/sponsors/ministerstvo.png",
            "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/sponsors/svfu.png",
            "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/sponsors/library.png",
            "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/sponsors/volmed.png",
            "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/sponsors/bchp.png",
            "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/sponsors/orz.png",
            "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/sponsors/russia_strana_vozm.png",
            "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/sponsors/hse_logo.png",
          ];

          return (
            <section
              id="about"
              className="relative overflow-hidden bg-[var(--color-bg-secondary)] pt-20 lg:pt-28 dark-contrast:bg-black"
            >
              {/* Фоновый контур карты — как в других секциях */}
              <img
                src={`${basePath}/img/union.png`}
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute left-0 bottom-0 w-[40%] max-w-[700px] opacity-25 dark-contrast:hidden"              />

              <div className="container relative z-10 mx-auto px-4 text-center">
                {/* Заголовок с фирменным акцентным шрифтом */}
                <h2
                  className="font-sangha mb-6 text-[var(--color-green-dark)] dark-contrast:text-white"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                  О ПРОЕКТЕ
                </h2>

                <p
                  className="max-w-4xl mx-auto mb-12 leading-relaxed text-[var(--color-text-secondary)] dark-contrast:text-gray-200"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
                >
                  «Доступная Якутия» — это некоммерческий проект, созданный для того, чтобы сделать туризм в регионе доступным для каждого. Мы собираем информацию об объектах, проверяем их доступность и помогаем планировать комфортные маршруты.
                </p>

                {/* Блок спонсоров */}
                <div className="mt-12 md:mt-16 relative z-10">
                  <h3 className="font-sangha mb-6 text-2xl md:text-3xl opacity-90">
                    Наши спонсоры
                  </h3>
                  <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {sponsors.map((url, index) => (
                      <img
                        key={index}
                        src={url}
                        alt={`Спонсор ${index + 1}`}
                        className="h-8 md:h-12 lg:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Коричневый узор внизу блока */}
              <div className="relative mt-16 w-full">
                <img
                  src={`${basePath}/img/about_brown.png`}
                  alt="Коричневый футер, элемент дизайна"
                  aria-hidden="true"
                  className="block h-auto w-full select-none pointer-events-none"
                />
                <img
                  src={`${basePath}/img/about_uzor.png`}
                  alt="Якутский национальный узор"
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-[0%] w-full select-none"                
                />
              </div>
            </section>
          );
        })()}
      </main>

      {/* Модальное окно фильтров */}
      <Dialog open={showFilters} onOpenChange={setShowFilters}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl bg-[var(--color-bg-primary)] border-[var(--color-card-border)] dark-contrast:bg-black dark-contrast:text-white dark-contrast:border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[var(--color-text-primary)] dark-contrast:text-white">
              Что для вас важно?
            </DialogTitle>
            <DialogDescription className="text-base mt-2 text-[var(--color-text-secondary)] dark-contrast:text-gray-300">
              Отметьте критерии, которые важны при выборе места. Это поможет нам подобрать подходящие объекты на карте.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            {categories.map((need) => {
              const Icon = need.icon;
              const isSelected = selectedNeeds.includes(need.id);
              return (
                <Fragment key={need.id}>
                <button
                  type="button"
                  onClick={() => toggleNeed(need.id)}
                  aria-pressed={isSelected}
                  className={`w-full flex items-start gap-4 p-4 rounded-lg border-2 text-left cursor-pointer transition-all bg-[var(--color-bg-white)] dark-contrast:bg-gray-900 dark-contrast:hover:border-white ${isSelected
                    ? 'border-[var(--color-accent)]'
                    : 'border-[var(--color-card-border)] hover:border-[var(--color-accent)]/50 dark-contrast:border-gray-700'
                    }`}
                >
                  <span
                    aria-hidden="true"
                    className={`mt-1 flex size-5 flex-shrink-0 items-center justify-center rounded border-2 transition-colors ${isSelected
                      ? 'bg-[var(--color-accent)] border-[var(--color-accent)]'
                      : 'border-[var(--color-card-border)] dark-contrast:border-gray-500'
                      }`}
                  >
                    {isSelected && <Check className="size-3.5 text-white" strokeWidth={3} />}
                  </span>
                  <div className="size-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${need.color}20` }}>
                    <Icon className="size-5" style={{ color: need.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-[var(--color-text-primary)] dark-contrast:text-white">{need.label}</h3>
                  </div>
                </button>

                {/* Дисклеймер сразу под строкой «Нарушения зрения» */}
                {need.id === 'vision' && isSelected && (
                  <div
                    role="note"
                    className="flex gap-3 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900 dark-contrast:bg-gray-900 dark-contrast:border-white dark-contrast:text-white"
                  >
                    <AlertTriangle className="size-5 flex-shrink-0 mt-0.5 text-amber-600 dark-contrast:text-white" />
                    <div className="space-y-2">
                      <p>
                        <strong>Внимание!</strong> На ряде пешеходных переходов Якутска установлены звуковые светофоры. Они подают специальные звуковые сигналы, помогая людям с нарушением зрения безопасно определить момент для перехода дороги.
                      </p>
                      <p>
                        В связи с природными и климатическими условиями дороги имеют неровности, учитывайте это при переходе дороги.
                      </p>
                    </div>
                  </div>
                )}
                </Fragment>
              );
            })}
          </div>

          <DialogFooter className="mt-6 flex-col sm:flex-row gap-3">
            <Button
              onClick={applyNeedsAndGoToMap}
              className="flex-1 bg-accent-custom hover:bg-[var(--color-accent-hover)] text-[var(--color-text-white)] py-6 text-lg rounded-lg font-bold"
            >
              Показать подходящие места
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
}