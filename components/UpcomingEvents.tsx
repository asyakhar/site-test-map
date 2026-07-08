"use client";

import { useEffect, useMemo, useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface EventItem {
  id: string;
  name: string;
  dateLabel: string;
  month: number | null;
  day: number | null;
  description: string;
  location: string;
  /** Базовое имя файла фото (без расширения); файл в public/img/events/<photo>.jpg */
  photo: string;
}

// month/day -> "13.02"
function shortDate(e: EventItem): string {
  if (!e.month || !e.day) return "";
  return `${String(e.day).padStart(2, "0")}.${String(e.month).padStart(2, "0")}`;
}

// Сортировка по кругу от сегодняшней даты: сначала ближайшие предстоящие,
// затем — по хронологии дальше (годовые праздники повторяются каждый год).
function sortUpcomingFirst(events: EventItem[]): EventItem[] {
  const now = new Date();
  const todayKey = (now.getMonth() + 1) * 100 + now.getDate();
  const score = (e: EventItem) => {
    if (!e.month || !e.day) return Number.MAX_SAFE_INTEGER; // без даты — в конец
    const k = e.month * 100 + e.day;
    return k >= todayKey ? k : k + 1300; // прокрутка на следующий год
  };
  return [...events].sort((a, b) => score(a) - score(b));
}

export default function UpcomingEvents() {
  const basePath = process.env.NODE_ENV === "production" ? "/site-test-map" : "";
  const [events, setEvents] = useState<EventItem[]>([]);
  const [selected, setSelected] = useState<EventItem | null>(null);

  useEffect(() => {
    fetch(`${basePath}/data/events.json`)
      .then((res) => (res.ok ? res.json() : Promise.reject(`HTTP ${res.status}`)))
      .then((data: EventItem[]) => setEvents(data))
      .catch((err) => console.error("Error loading events:", err));
  }, [basePath]);

  const sorted = useMemo(() => sortUpcomingFirst(events), [events]);

  if (events.length === 0) return null;

  return (
    <>
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent className="-ml-4">
          {sorted.map((event) => (
            <CarouselItem key={event.id} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
              <div className="relative aspect-[11/10] overflow-hidden rounded-3xl shadow-md">
                {/* Фото события (public/img/events/<photo>.jpg); пока файла нет — заглушка */}
                <img
  src={event.photo ? `https://raw.githubusercontent.com/asyakhar/yakutia-images/e0c4feb0ec5f84087a12417ce81037948d9c9561/events/${event.photo}.jpg` : `${basePath}/img/placeholder.jpg`}
  alt=""
  className="w-full h-full object-cover"
  onError={(e) => {
    e.currentTarget.src = `${basePath}/img/placeholder.jpg`;
  }}
/>
                {/* Затемнение фото + градиент снизу для читаемости текста */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Дата — сверху справа */}
                <span className="absolute top-4 right-4 text-2xl md:text-3xl font-extrabold text-white drop-shadow-md">
                  {shortDate(event)}
                </span>

                {/* Название + кнопка — снизу */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight drop-shadow-md line-clamp-2">
                    {event.name}
                  </h3>
                  <button
                    onClick={() => setSelected(event)}
                    className="mt-3 inline-flex items-center rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#1B3A5C] shadow hover:bg-white transition-colors"
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-4" />
        <CarouselNext className="hidden sm:flex -right-4" />
      </Carousel>

      {/* Модальное окно с подробной информацией (как в «Практических советах») */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-[var(--color-bg-white)] border-[var(--color-card-border)] p-0 gap-0 dark-contrast:bg-black dark-contrast:text-white dark-contrast:border-gray-700">
          {selected && (
            <>
              <DialogHeader className="p-6 md:p-8 border-b bg-[var(--color-accent-light)]/40 dark-contrast:bg-gray-900 text-left space-y-2">
                <div className="flex items-center gap-2 text-[var(--color-accent-dark)] dark-contrast:text-white font-semibold">
                  <CalendarDays className="size-5" />
                  <span>{selected.dateLabel}</span>
                </div>
                <DialogTitle className="font-sangha text-3xl md:text-4xl text-[var(--color-text-primary)] dark-contrast:text-white leading-tight">
                  {selected.name}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Подробная информация о празднике: {selected.name}
                </DialogDescription>
              </DialogHeader>

              <div className="p-6 md:p-8 space-y-6">
                {selected.description && (
                  <div>
                    <h3 className="font-bold text-lg text-[var(--color-green-dark)] dark-contrast:text-white mb-2">
                      О празднике
                    </h3>
                    <p className="text-[var(--color-text-primary)] dark-contrast:text-gray-200 leading-relaxed whitespace-pre-line">
                      {selected.description}
                    </p>
                  </div>
                )}
                {selected.location && (
                  <div>
                    <h3 className="font-bold text-lg text-[var(--color-green-dark)] dark-contrast:text-white mb-2 flex items-center gap-2">
                      <MapPin className="size-5 text-[var(--color-accent)]" />
                      Где и как отмечают
                    </h3>
                    <p className="text-[var(--color-text-primary)] dark-contrast:text-gray-200 leading-relaxed whitespace-pre-line">
                      {selected.location}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
