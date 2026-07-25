'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Share2,
  MapPin,
  Phone,
  Globe,
  Navigation,
  Clock,
  Ticket as TicketIcon,
  BadgePercent,
  AlertTriangle,
  Info,
  Accessibility,
  Eye,
  Ear,
  Utensils,
  Heart,
  Wind,
  Brain,
  Users,
  Sparkles,
  Hospital,
  Building2,
  Hotel,
  UtensilsCrossed,
  Coffee,
  TreePine,
  Theater,
  Stethoscope,
  Flower2,
  Landmark,
  ShoppingBag,
  Dumbbell,
  Mountain,
  Palette,
  Ticket,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Video, // ← добавлено для иконки видео
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ContrastToggle from '@/components/ContrastToggle';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel';

// Типы
interface MapObject {
  id: string;
  name: string;
  category: string;
  layers: string[];
  coordinates: [number, number] | null;
  address?: string;
  workingHours?: string;
  description: string;
  accessibility: Record<string, string>;
  contraindications?: string;
  tickets?: string;
  benefits?: string;
  notes?: string;
  photos: string[];
  contacts: {
    phone?: string;
    website?: string;
    yandexMap?: string;
  };
  videos?: {
    url: string;
    title?: string;
  }[];
}

// Конфигурация категорий
const CATEGORY_CONFIG: Record<string, { name: string; icon: typeof Building2; color: string }> = {
  museum: { name: 'Музей', icon: Building2, color: '#8b5cf6' },
  hotel: { name: 'Гостиница', icon: Hotel, color: '#3b82f6' },
  restaurant: { name: 'Ресторан', icon: UtensilsCrossed, color: '#22c55e' },
  cafe: { name: 'Кафе', icon: Coffee, color: '#f97316' },
  park: { name: 'Парк', icon: TreePine, color: '#14b8a6' },
  theater: { name: 'Театр', icon: Theater, color: '#ec4899' },
  medical: { name: 'Медицина', icon: Stethoscope, color: '#ef4444' },
  spa: { name: 'СПА/Оздоровление', icon: Flower2, color: '#06b6d4' },
  monument: { name: 'Памятник', icon: Landmark, color: '#6366f1' },
  shopping: { name: 'Торговый центр', icon: ShoppingBag, color: '#eab308' },
  sports: { name: 'Спорт', icon: Dumbbell, color: '#84cc16' },
  nature: { name: 'Природа', icon: Mountain, color: '#0ea5e9' },
  culture: { name: 'Культура', icon: Palette, color: '#f43f5e' },
  entertainment: { name: 'Развлечения', icon: Ticket, color: '#d946ef' },
  education: { name: 'Образование', icon: GraduationCap, color: '#0284c7' },
};

// Категории доступности
const ACCESS_META: { id: string; name: string; icon: typeof Building2; color: string }[] = [
  { id: 'mobility', name: 'Передвижение', icon: Accessibility, color: '#457B9D' },
  { id: 'vision_impaired', name: 'Для незрячих и слабовидящих', icon: Eye, color: '#FF6B6B' },
  { id: 'hearing_impaired', name: 'Для слабослышащих', icon: Ear, color: '#FFA07A' },
  { id: 'deaf_mute', name: 'Для глухонемых', icon: Ear, color: '#DDA15E' },
  { id: 'dietary', name: 'Питание', icon: Utensils, color: '#2AA98B' },
  { id: 'cardiovascular', name: 'Сердечно-сосудистые', icon: Heart, color: '#E63946' },
  { id: 'respiratory', name: 'Дыхательная система', icon: Wind, color: '#1D3557' },
  { id: 'mental', name: 'Ментальные особенности', icon: Brain, color: '#7C9EC0' },
  { id: 'family', name: 'Семьи с детьми', icon: Users, color: '#E0A400' },
  { id: 'ethnomedicine', name: 'Народная медицина', icon: Sparkles, color: '#8B5A3C' },
  { id: 'health', name: 'Отдых с пользой для здоровья', icon: Hospital, color: '#52B788' },
];

// Функция для получения embed-ссылки (YouTube/Vimeo)
function getEmbedUrl(url: string): string | null {
  // YouTube
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  return null;
}

// Компонент для отображения одного видео
function VideoPlayer({ video }: { video: { url: string; title?: string } }) {
  const embedUrl = getEmbedUrl(video.url);
  const isYouTubeVimeo = !!embedUrl;

  return (
    <div className="mb-6 last:mb-0">
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
        {isYouTubeVimeo ? (
          <iframe
            src={embedUrl}
            title={video.title || 'Видео'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <video controls className="w-full h-full" preload="metadata">
            <source src={video.url} type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        )}
      </div>
      {video.title && (
        <p className="mt-2 text-sm text-muted-foreground">{video.title}</p>
      )}
    </div>
  );
}

export default function PlaceDetailClient({ id }: { id: string }) {
  const [place, setPlace] = useState<MapObject | null>(null);
  const [loading, setLoading] = useState(true);
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const basePath = process.env.NODE_ENV === 'production' ? '/site-test-map' : '';

  useEffect(() => {
    fetch(`${basePath}/data/objects.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: MapObject[]) => {
        const found = data.find((obj) => obj.id === id);
        setPlace(found || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading data:', err);
        setLoading(false);
      });
  }, [id, basePath]);

  // Отслеживаем текущий слайд
  useEffect(() => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
    api.on('select', () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-lg text-muted-foreground">Загрузка...</p>
        </div>
      </div>
    );
  }

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl text-foreground mb-4">Место не найдено</h2>
          <Link href="/map">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Вернуться к карте
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const categoryConfig = CATEGORY_CONFIG[place.category] || CATEGORY_CONFIG.museum;
  const CategoryIcon = categoryConfig.icon;
  const accessSections = ACCESS_META.filter((m) => place.accessibility && place.accessibility[m.id]);

  // Подготавливаем фото для галереи
  const photos = place.photos && place.photos.length > 0 ? place.photos : [`${basePath}/img/placeholder.jpg`];
  const hasMultiplePhotos = photos.length > 1;

  const phoneHref = place.contacts.phone ? place.contacts.phone.replace(/[^\d+]/g, '') : '';
  const routeUrl = place.coordinates
    ? `https://yandex.ru/maps/?rtext=~${place.coordinates[0]}%2C${place.coordinates[1]}&rtt=auto`
    : place.contacts.yandexMap;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 bg-card shadow-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/map">
            <Button variant="ghost" className="gap-2 text-foreground hover:text-primary">
              <ArrowLeft className="size-5" />
              <span className="hidden sm:inline">На карту</span>
            </Button>
          </Link>
          
          <h1 className="hidden sm:block text-lg md:text-xl text-foreground font-semibold flex-1 text-center px-4 line-clamp-1">
            {place.name}
          </h1>
          
          <div className="flex items-center gap-1">
            <ContrastToggle />
            <Button
              variant="ghost"
              className="gap-2 text-foreground"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: place.name, url: window.location.href });
                }
              }}
            >
              <Share2 className="size-5" />
              <span className="hidden sm:inline">Поделиться</span>
            </Button>
          </div>
        </div>
      </header>

      {/* ГАЛЕРЕЯ - КАРУСЕЛЬ */}
      <div className="relative w-full bg-black/5">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {photos.map((photo, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[300px] md:h-[450px] w-full">
                  <img
                    src={photo}
                    alt={`${place.name} - фото ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `${basePath}/img/placeholder.jpg`;
                    }}
                  />
                  {/* Градиент снизу для текста */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Индикатор количества фото */}
                  {hasMultiplePhotos && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {photos.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => api?.scrollTo(idx)}
                          className={`h-2 rounded-full transition-all ${
                            currentSlide === idx
                              ? 'w-8 bg-white'
                              : 'w-2 bg-white/50 hover:bg-white/70'
                          }`}
                          aria-label={`Перейти к фото ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Количество фото */}
                  {hasMultiplePhotos && (
                    <div className="absolute top-4 right-4 bg-black/60 text-white text-sm px-3 py-1.5 rounded-full backdrop-blur-sm">
                      {currentSlide + 1} / {photos.length}
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Кнопки навигации - только если фото > 1 */}
          {hasMultiplePhotos && (
            <>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black border-0 shadow-lg size-10 rounded-full flex items-center justify-center" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black border-0 shadow-lg size-10 rounded-full flex items-center justify-center" />
            </>
          )}
        </Carousel>
      </div>

      {/* КОНТЕНТ */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Badge
            className="mb-3 text-white border-0 px-3 py-1.5 text-sm"
            style={{ backgroundColor: categoryConfig.color }}
          >
            <CategoryIcon className="size-3.5 mr-1.5" />
            {categoryConfig.name}
          </Badge>
          
          <h1 className="text-3xl font-bold text-foreground mb-3">{place.name}</h1>

          <div className="flex flex-col gap-2 mb-4">
            {place.address && (
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="size-5 flex-shrink-0 text-primary mt-0.5" />
                <span>{place.address}</span>
              </div>
            )}
            {place.workingHours && (
              <div className="flex items-start gap-2 text-muted-foreground">
                <Clock className="size-5 flex-shrink-0 text-primary mt-0.5" />
                <span className="whitespace-pre-line">{place.workingHours}</span>
              </div>
            )}
          </div>

          {place.description && (
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{place.description}</p>
          )}
        </div>

        {/* ========== ВИДЕО ========== */}
        {place.videos && place.videos.length > 0 && (
          <Card className="mb-6 p-4 bg-card border-border shadow-md">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Video className="size-5 text-primary" />
              Видео
            </h2>
            <div className="space-y-4">
              {place.videos.map((video, index) => (
                <VideoPlayer key={index} video={video} />
              ))}
            </div>
          </Card>
        )}

        {/* Доступность */}
        <Card className="mb-6 p-6 gap-2 bg-card border-border shadow-md">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Accessibility className="size-5 text-primary" />
            Доступность и удобства
          </h2>

          {accessSections.length > 0 ? (
            <div className="space-y-5">
              {accessSections.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.id}>
                    <h3 className="text-sm font-semibold mb-1.5 flex items-center gap-2" style={{ color: m.color }}>
                      <span
                        className="flex items-center justify-center size-7 rounded-full flex-shrink-0"
                        style={{ backgroundColor: `${m.color}20` }}
                      >
                        <Icon className="size-4" />
                      </span>
                      {m.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line pl-9">
                      {place.accessibility[m.id]}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-muted-foreground">Информация об особенностях доступности уточняется</p>
          )}
        </Card>

        {/* Противопоказания */}
        {place.contraindications && (
          <Card className="mb-6 p-6 gap-2 bg-amber-50 border border-amber-200 shadow-md dark:bg-amber-950/30 dark:border-amber-700">
            <h2 className="text-lg font-semibold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
              <AlertTriangle className="size-5 text-amber-600 dark:text-amber-400" />
              Противопоказания
            </h2>
            <p className="text-amber-900/90 dark:text-amber-200/90 leading-relaxed whitespace-pre-line">
              {place.contraindications}
            </p>
          </Card>
        )}

        {/* Билеты */}
        {place.tickets && (
          <Card className="mb-6 p-6 gap-2 bg-card border-border shadow-md">
            <h2 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
              <TicketIcon className="size-5 text-primary" />
              Билеты
            </h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{place.tickets}</p>
          </Card>
        )}

        {/* Льготы */}
        {place.benefits && (
          <Card className="mb-6 p-6 gap-2 bg-card border-border shadow-md">
            <h2 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
              <BadgePercent className="size-5 text-primary" />
              Льготы
            </h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{place.benefits}</p>
          </Card>
        )}

        {/* Контакты */}
        <Card className="mb-6 p-6 gap-2 bg-card border-border shadow-md">
          <h2 className="text-xl font-semibold text-foreground mb-4">Контакты</h2>
          <div className="space-y-3">
            {place.contacts.phone && (
              <a
                href={`tel:${phoneHref}`}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="size-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">Телефон</div>
                  <div className="text-foreground font-medium">{place.contacts.phone}</div>
                </div>
              </a>
            )}

            {place.contacts.website && (
              <a
                href={place.contacts.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="size-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">Сайт</div>
                  <div className="text-foreground font-medium truncate">{place.contacts.website}</div>
                </div>
              </a>
            )}

            {place.contacts.yandexMap && (
              <a
                href={place.contacts.yandexMap}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="size-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">Яндекс.Карты</div>
                  <div className="text-foreground font-medium truncate">Открыть карточку места</div>
                </div>
              </a>
            )}

            {routeUrl && (
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-6 gap-2 text-sm sm:text-base"
                onClick={() => window.open(routeUrl, '_blank', 'noopener,noreferrer')}
              >
                <Navigation className="size-5 flex-shrink-0" />
                <span className="whitespace-nowrap">Построить маршрут</span>
                <span className="hidden sm:inline">в Яндекс.Картах</span>
              </Button>
            )}
          </div>
        </Card>

        {/* Примечания */}
        {place.notes && (
          <Card className="mb-6 p-5 gap-2 bg-muted/30 border-border shadow-sm">
            <div className="flex items-start gap-2">
              <Info className="size-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-foreground mb-1">Примечания</div>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{place.notes}</p>
              </div>
            </div>
          </Card>
        )}
      </div>

      <footer className="bg-foreground text-background py-8 mt-12 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm opacity-90 mb-2">© 2026 Доступная Якутия. Все права защищены.</p>
          <p className="text-xs opacity-70">
            Информация на сайте носит ознакомительный характер и не является медицинской консультацией. Перед
            посещением оздоровительных объектов и использованием народной медицины проконсультируйтесь со специалистом.
          </p>
        </div>
      </footer>
    </div>
  );
}