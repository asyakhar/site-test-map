"use client";

import { useState } from "react";
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
  Calendar,
  Heart,
  Brain,
  Wind
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/AppHeader";

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

// Заглушки для карусели объектов
const sampleObjects = [
  { id: 1, name: "Музей мамонта", category: "Музей", img: `${basePath}/img/placeholder.jpg` },
  { id: 2, name: "Царство вечной мерзлоты", category: "Развлечения", img: `${basePath}/img/placeholder.jpg` },
  { id: 3, name: "Ленские столбы", category: "Природа", img: `${basePath}/img/placeholder.jpg` },
];

// Заглушки для событий
const sampleEvents = [
  { id: 1, title: "Ысыах", date: "21 июня", location: "Урус-Хара" },
  { id: 2, title: "День города", date: "15 сентября", location: "Центральная площадь" },
];

export default function HomePage() {
  const router = useRouter();
  const [showFilters, setShowFilters] = useState(false);
  const basePath = process.env.NODE_ENV === 'production' ? '/site-test-map' : '';
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      
      {/* Вызываем нашу новую переиспользуемую шапку и передаем функцию открытия фильтров */}
      <Header onOpenFilters={() => setShowFilters(true)} />

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
             scale-100 lg:scale-110 origin-center"
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
                <Button 
                  size="lg" 
                  className="bg-accent-custom hover:bg-[var(--color-accent-hover)] text-[var(--color-text-white)] px-8 py-6 md:py-7 rounded-xl shadow-lg font-bold tracking-wide"
                  style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
                  onClick={() => router.push('/map')}
                >
                  <MapPin className="mr-2 size-5" />
                  Перейти на карту
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-[#9CB6E0] hover:bg-[#708FC0] border-0 text-white px-8 py-6 md:py-7 rounded-xl shadow-lg font-bold tracking-wide"
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

      {/* Блок 3. Популярные категории */}
      <section className="py-16 lg:py-24 bg-[var(--color-bg-primary)]">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-center mb-12 text-[var(--color-text-primary)]"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
            Для кого мы создали этот сервис
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Card 
                  key={cat.id} 
                  className="p-6 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-[var(--color-accent)]/50 bg-[var(--color-bg-primary)] border-[var(--color-card-border)] dark-contrast:bg-gray-900 dark-contrast:border-gray-700"
                  onClick={() => {
                    localStorage.setItem("preferredLayers", JSON.stringify([cat.id === 'vision' ? 'vision_impaired' : cat.id === 'hearing' ? 'hearing_impaired' : cat.id]));
                    router.push('/map');
                  }}
                >
                  <div 
                    className="size-12 rounded-full flex items-center justify-center text-[var(--color-text-white)] mb-2 dark-contrast:bg-white"
                    style={{ backgroundColor: cat.color }}
                  >
                    <Icon className="size-6 dark-contrast:text-black" />
                  </div>
                  <span className="font-medium text-[clamp(0.875rem,1.5vw,1rem)] text-[var(--color-text-primary)] dark-contrast:text-white">{cat.label}</span>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Блок 4. Карусель с объектами */}
      <section className="py-16 lg:py-24 bg-[var(--color-bg-secondary)] dark-contrast:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <h2 className="font-bold text-[var(--color-text-primary)] dark-contrast:text-white"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
              Популярные места
            </h2>
            <Link href="/map" className="text-[var(--color-accent)] font-medium hover:underline flex items-center text-[clamp(0.875rem,1.5vw,1rem)]">
              Смотреть все <ChevronRight className="size-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleObjects.map((obj) => (
              <Card key={obj.id} className="overflow-hidden group cursor-pointer bg-[var(--color-bg-primary)] border-[var(--color-card-border)] dark-contrast:bg-gray-900 dark-contrast:border-gray-700">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img 
                    src={obj.img} 
                    alt={obj.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-3 right-3 bg-white/90 text-[var(--color-text-primary)] text-sm">
                    {obj.category}
                  </Badge>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-bold text-[clamp(1.125rem,2vw,1.25rem)] mb-2 text-[var(--color-text-primary)] dark-contrast:text-white">{obj.name}</h3>
                  <p className="text-[clamp(0.875rem,1.5vw,1rem)] line-clamp-2 text-[var(--color-text-secondary)] dark-contrast:text-gray-300">
                    Краткое описание объекта, чтобы заинтересовать пользователя перейти на страницу details.
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Блок 5. Анонсы событий */}
      <section className="py-16 lg:py-24 bg-[var(--color-bg-primary)]">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-center mb-12 text-[var(--color-text-primary)] dark-contrast:text-white"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
            Ближайшие события
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sampleEvents.map((event) => (
              <Card key={event.id} className="flex items-center p-4 md:p-6 gap-4 hover:shadow-md transition-shadow bg-[var(--color-bg-primary)] border-[var(--color-card-border)] dark-contrast:bg-gray-900 dark-contrast:border-gray-700 dark-contrast:text-white">
                <div className="size-16 md:size-20 rounded-lg flex flex-col items-center justify-center flex-shrink-0 bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] dark-contrast:bg-white dark-contrast:text-black">
                  <Calendar className="size-6 md:size-7 mb-1" />
                  <span className="text-xs md:text-sm font-bold">{event.date.split(' ')[0]}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[clamp(1.125rem,2vw,1.25rem)] text-[var(--color-text-primary)] dark-contrast:text-white">{event.title}</h3>
                  <p className="text-[clamp(0.875rem,1.5vw,1rem)] mt-1 text-[var(--color-text-secondary)] dark-contrast:text-gray-300">{event.date} • {event.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Блок 6. О проекте */}
      <section id="about" className="py-20 lg:py-32 bg-[var(--color-green-dark)] text-white dark-contrast:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bold mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>О проекте</h2>
          <p className="max-w-3xl mx-auto opacity-90 mb-8 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
            «Доступная Якутия» — это некоммерческий проект, созданный для того, чтобы сделать туризм в регионе доступным для каждого. Мы собираем информацию об объектах, проверяем их доступность и помогаем планировать комфортные маршруты.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center opacity-70 mt-12">
            <div className="h-12 w-32 bg-white/20 rounded flex items-center justify-center text-sm md:text-base">Логотип 1</div>
            <div className="h-12 w-32 bg-white/20 rounded flex items-center justify-center text-sm md:text-base">Логотип 2</div>
            <div className="h-12 w-32 bg-white/20 rounded flex items-center justify-center text-sm md:text-base">Логотип 3</div>
          </div>
        </div>
      </section>

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
            {categories.slice(0, 6).map((need) => {
              const Icon = need.icon;
              return (
                <label
                  key={need.id}
                  className="flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all bg-[var(--color-bg-white)] border-[var(--color-card-border)] hover:border-[var(--color-accent)]/50 dark-contrast:border-gray-700 dark-contrast:hover:border-white"
                >
                  <Checkbox className="mt-1" />
                  <div className="size-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${need.color}20` }}>
                    <Icon className="size-5" style={{ color: need.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-[var(--color-text-primary)] dark-contrast:text-white">{need.label}</h3>
                  </div>
                </label>
              );
            })}
          </div>
          <DialogFooter className="mt-6 flex-col sm:flex-row gap-3">
            <Button
              onClick={() => {
                setShowFilters(false);
                router.push('/map');
              }}
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