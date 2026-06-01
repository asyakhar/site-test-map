"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Compass, 
  Heart, 
  MapPin, 
  Sparkles, 
  Eye, 
  Ear, 
  Users, 
  Utensils, 
  Brain, 
  Wind, 
  Hospital, 
  Accessibility,
  Menu,
  X,
  ChevronRight,
  Calendar
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

// Типы для категорий
type Category = {
  id: string;
  icon: any;
  label: string;
  color: string;
};

const categories: Category[] = [
  { id: "mobility", icon: Accessibility, label: "Проблемы с передвижением", color: "#457B9D" },
  { id: "vision", icon: Eye, label: "Нарушения зрения", color: "#FF6B6B" },
  { id: "hearing", icon: Ear, label: "Нарушения слуха", color: "#FFA07A" },
  { id: "deaf_mute", icon: Ear, label: "Глухонемые", color: "#DDA15E" }, // Используем ту же иконку для примера
  { id: "dietary", icon: Utensils, label: "Питание", color: "#95E1D3" },
  { id: "cardiovascular", icon: Heart, label: "Сердечно-сосудистые", color: "#E63946" },
  { id: "mental", icon: Brain, label: "Ментальные особенности", color: "#A8DADC" },
  { id: "respiratory", icon: Wind, label: "Респираторные", color: "#1D3557" },
  { id: "family", icon: Users, label: "Семьи с детьми", color: "#FFB703" },
  { id: "ethnomedicine", icon: Sparkles, label: "Народная медицина", color: "#8B5A3C" },
  { id: "health", icon: Hospital, label: "Здоровье", color: "#52B788" },
];

// Заглушки для карусели объектов
const sampleObjects = [
  { id: 1, name: "Музей мамонта", category: "Музей", img: "/img/priroda-yakutii.jpg" },
  { id: 2, name: "Царство вечной мерзлоты", category: "Развлечения", img: "/img/priroda-yakutii.jpg" },
  { id: 3, name: "Ленские столбы", category: "Природа", img: "/img/priroda-yakutii.jpg" },
];

// Заглушки для событий
const sampleEvents = [
  { id: 1, title: "Ысыах", date: "21 июня", location: "Урус-Хара" },
  { id: 2, title: "День города", date: "15 сентября", location: "Центральная площадь" },
];

export default function HomePage() {
  const router = useRouter();
  const [showFilters, setShowFilters] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Состояние для версии для слабовидящих
  const [highContrast, setHighContrast] = useState(false);
  const [largeFont, setLargeFont] = useState(false);

  // Применение классов для доступности
  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    
    if (largeFont) {
      document.documentElement.classList.add('large-font');
    } else {
      document.documentElement.classList.remove('large-font');
    }
  }, [highContrast, largeFont]);

  const toggleAccessibility = () => {
    // Простая логика переключения: если выключено - включаем оба, если включено - выключаем
    // В будущем можно сделать модальное окно выбора типа нарушения
    const newState = !highContrast;
    setHighContrast(newState);
    setLargeFont(newState);
  };

  const handleShowAll = () => {
    localStorage.removeItem("preferredLayers");
    localStorage.removeItem("preferredNeeds");
    router.push("/map");
  };

  return (
    <div className={`min-h-screen bg-[#F7F3E8] text-[#2C3E50] ${highContrast ? 'bg-black text-white' : ''} ${largeFont ? 'text-lg' : ''}`}>
      
      {/* Блок 1. Шапка сайта */}
      <header className={`sticky top-0 z-50 border-b shadow-sm transition-colors ${highContrast ? 'bg-black border-white' : 'bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60'}`}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Логотип */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-[#1B3A5C] hover:opacity-80 transition-opacity">
            <Compass className="size-8 text-[#4ECDC4]" />
            <span className={highContrast ? 'text-white' : ''}>Доступная Якутия</span>
          </Link>

          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => setShowFilters(true)} className="text-sm font-medium hover:text-[#4ECDC4] transition-colors">
              Настроить фильтры
            </button>
            <Link href="/advice" className="text-sm font-medium hover:text-[#4ECDC4] transition-colors">
              Практические советы
            </Link>
            <Link href="/yakutia" className="text-sm font-medium hover:text-[#4ECDC4] transition-colors">
              О Якутии
            </Link>
            <a href="#about" className="text-sm font-medium hover:text-[#4ECDC4] transition-colors">
              О проекте
            </a>
          </nav>

          {/* Кнопки справа */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleAccessibility}
              className={highContrast ? 'text-white hover:bg-white/20' : ''}
              title="Версия для слабовидящих"
            >
              <Eye className="size-5" />
            </Button>
            
            <Button 
              className="hidden md:flex bg-[#4ECDC4] hover:bg-[#3DBDB5] text-white"
              onClick={() => router.push('/map')}
            >
              Перейти на карту
            </Button>

            {/* Мобильное меню гамбургер */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Мобильное меню выпадающее */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b shadow-lg py-4 px-4 flex flex-col gap-4">
             <button onClick={() => { setShowFilters(true); setIsMobileMenuOpen(false); }} className="text-left py-2 font-medium">
              Настроить фильтры
            </button>
            <Link href="/advice" className="py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Практические советы
            </Link>
            <Link href="/yakutia" className="py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              О Якутии
            </Link>
            <a href="#about" className="py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              О проекте
            </a>
            <Button 
              className="w-full bg-[#4ECDC4] hover:bg-[#3DBDB5] text-white mt-2"
              onClick={() => { router.push('/map'); setIsMobileMenuOpen(false); }}
            >
              Перейти на карту
            </Button>
          </div>
        )}
      </header>

      {/* Блок 2. Главный экран */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Фон */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1603617914658-ccba22c09ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')`,
          }}
        >
          <div className={`absolute inset-0 ${highContrast ? 'bg-black/80' : 'bg-gradient-to-b from-[#1B3A5C]/80 via-[#1B3A5C]/60 to-[#1B3A5C]/90'}`} />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg ${largeFont ? 'text-7xl' : ''}`}>
              Откройте Якутию без границ
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
              Интерактивный навигатор для комфортного и доступного путешествия по Республике Саха.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#4ECDC4] hover:bg-[#3DBDB5] text-white text-lg px-8 py-6 rounded-xl shadow-lg"
                onClick={() => setShowFilters(true)}
              >
                <Sparkles className="mr-2 size-5" />
                Подобрать маршрут
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6 rounded-xl shadow-lg"
                onClick={() => router.push('/map')}
              >
                <MapPin className="mr-2 size-5" />
                Перейти на карту
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Блок 3. Популярные категории */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${highContrast ? 'text-white' : 'text-[#2C3E50]'}`}>
            Для кого мы создали этот сервис
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Card 
                  key={cat.id} 
                  className={`p-6 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-[#4ECDC4]/50 ${highContrast ? 'bg-gray-900 border-gray-700 text-white' : 'bg-[#F7F3E8]/50'}`}
                  onClick={() => {
                    // Логика быстрого выбора слоя
                    localStorage.setItem("preferredLayers", JSON.stringify([cat.id === 'vision' ? 'vision_impaired' : cat.id === 'hearing' ? 'hearing_impaired' : cat.id]));
                    router.push('/map');
                  }}
                >
                  <div 
                    className="size-12 rounded-full flex items-center justify-center text-white mb-2"
                    style={{ backgroundColor: highContrast ? '#fff' : cat.color }}
                  >
                    <Icon className={`size-6 ${highContrast ? 'text-black' : ''}`} />
                  </div>
                  <span className={`font-medium ${highContrast ? 'text-white' : 'text-[#2C3E50]'}`}>{cat.label}</span>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Блок 4. Карусель с объектами (Заглушка) */}
      <section className={`py-16 ${highContrast ? 'bg-black' : 'bg-[#F7F3E8]'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <h2 className={`text-3xl font-bold ${highContrast ? 'text-white' : 'text-[#2C3E50]'}`}>
              Популярные места
            </h2>
            <Link href="/map" className="text-[#4ECDC4] font-medium hover:underline flex items-center">
              Смотреть все <ChevronRight className="size-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleObjects.map((obj) => (
              <Card key={obj.id} className={`overflow-hidden group cursor-pointer ${highContrast ? 'bg-gray-900 border-gray-700' : ''}`}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={obj.img} 
                    alt={obj.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-3 right-3 bg-white/90 text-[#2C3E50]">
                    {obj.category}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className={`font-bold text-lg mb-2 ${highContrast ? 'text-white' : 'text-[#2C3E50]'}`}>{obj.name}</h3>
                  <p className={`text-sm line-clamp-2 ${highContrast ? 'text-gray-300' : 'text-gray-600'}`}>
                    Краткое описание объекта, чтобы заинтересовать пользователя перейти на страницу details.
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Блок 5. Анонсы событий */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${highContrast ? 'text-white' : 'text-[#2C3E50]'}`}>
            Ближайшие события
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sampleEvents.map((event) => (
              <Card key={event.id} className={`flex items-center p-4 gap-4 hover:shadow-md transition-shadow ${highContrast ? 'bg-gray-900 border-gray-700 text-white' : ''}`}>
                <div className={`size-16 rounded-lg flex flex-col items-center justify-center flex-shrink-0 ${highContrast ? 'bg-white text-black' : 'bg-[#4ECDC4]/10 text-[#4ECDC4]'}`}>
                  <Calendar className="size-6 mb-1" />
                  <span className="text-xs font-bold">{event.date.split(' ')[0]}</span>
                </div>
                <div>
                  <h3 className={`font-bold text-lg ${highContrast ? 'text-white' : 'text-[#2C3E50]'}`}>{event.title}</h3>
                  <p className={`text-sm ${highContrast ? 'text-gray-300' : 'text-gray-500'}`}>{event.date} • {event.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Блок 6. О проекте */}
      <section id="about" className={`py-20 ${highContrast ? 'bg-gray-900 text-white' : 'bg-[#1B3A5C] text-white'}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">О проекте</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8 leading-relaxed">
            «Доступная Якутия» — это некоммерческий проект, созданный для того, чтобы сделать туризм в регионе доступным для каждого. Мы собираем информацию об объектах, проверяем их доступность и помогаем планировать комфортные маршруты.
          </p>
          
          <div className="flex justify-center gap-8 items-center opacity-70 mt-12">
            {/* Заглушки для логотипов спонсоров */}
            <div className="h-12 w-32 bg-white/20 rounded flex items-center justify-center">Логотип 1</div>
            <div className="h-12 w-32 bg-white/20 rounded flex items-center justify-center">Логотип 2</div>
            <div className="h-12 w-32 bg-white/20 rounded flex items-center justify-center">Логотип 3</div>
          </div>
        </div>
      </section>

      {/* Модальное окно фильтров (существующее) */}
      <Dialog open={showFilters} onOpenChange={setShowFilters}>
        <DialogContent className={`max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl ${highContrast ? 'bg-black text-white border-gray-700' : 'bg-white'}`}>
          <DialogHeader>
            <DialogTitle className={`text-2xl ${highContrast ? 'text-white' : 'text-[#2C3E50]'}`}>
              Что для вас важно?
            </DialogTitle>
            <DialogDescription className={highContrast ? 'text-gray-300' : 'text-[#2C3E50]/70'}>
              Отметьте критерии, которые важны при выборе места. Это поможет нам подобрать идеальный маршрут.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            {categories.slice(0, 6).map((need) => { // Показываем только часть для примера
              const Icon = need.icon;
              return (
                <label
                  key={need.id}
                  className={`flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${highContrast ? 'border-gray-700 hover:border-white' : 'bg-white border-gray-200 hover:border-[#4ECDC4]/50'}`}
                >
                  <Checkbox className="mt-1" />
                  <div className="size-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${need.color}20` }}>
                    <Icon className="size-5" style={{ color: need.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold ${highContrast ? 'text-white' : 'text-[#2C3E50]'}`}>{need.label}</h3>
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
              className="flex-1 bg-[#4ECDC4] hover:bg-[#3DBDB5] text-white py-6 text-lg rounded-lg"
            >
              Показать подходящие места
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
}