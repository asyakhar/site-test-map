"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface MapObject {
  id: string;
  name: string;
  category: string;
  description: string;
  photos: string[];
}

// Русские подписи категорий (тег на карточке)
const CATEGORY_LABELS: Record<string, string> = {
  museum: "Музей",
  hotel: "Гостиница",
  restaurant: "Ресторан",
  cafe: "Кафе",
  park: "Парк",
  theater: "Театр",
  medical: "Медицина",
  spa: "СПА/Оздоровление",
  monument: "Памятник",
  shopping: "Торговый центр",
  sports: "Спорт",
  nature: "Природа",
  culture: "Культура",
  entertainment: "Развлечения",
  education: "Образование",
};

export default function PopularPlaces() {
  const basePath = process.env.NODE_ENV === "production" ? "/site-test-map" : "";
  const [places, setPlaces] = useState<MapObject[]>([]);
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  useEffect(() => {
    fetch(`${basePath}/data/objects.json`)
      .then((res) => (res.ok ? res.json() : Promise.reject(`HTTP ${res.status}`)))
      .then((data: MapObject[]) => {
        // Показываем места с фотографиями (они наиболее наполнены); если таких нет — все
        const withPhotos = data.filter((o) => Array.isArray(o.photos) && o.photos.length > 0);
        setPlaces(withPhotos.length >= 3 ? withPhotos : data);
      })
      .catch((err) => console.error("Error loading data:", err));
  }, [basePath]);

  if (places.length === 0) return null;

  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      plugins={[autoplay.current]}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {places.map((obj) => (
          <CarouselItem key={obj.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <Link href={`/place/${obj.id}`} className="block h-full">
              <Card className="h-full overflow-hidden py-0 group cursor-pointer bg-[var(--color-bg-primary)] border-[var(--color-card-border)] dark-contrast:bg-gray-900 dark-contrast:border-gray-700 hover:shadow-lg transition-shadow">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={obj.photos && obj.photos.length > 0 ? obj.photos[0] : `${basePath}/img/placeholder.jpg`}
                    alt={obj.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = `${basePath}/img/placeholder.jpg`;
                    }}
                  />
                  <Badge className="absolute top-3 right-3 bg-white/90 text-[var(--color-text-primary)] text-sm">
                    {CATEGORY_LABELS[obj.category] || obj.category}
                  </Badge>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-bold text-[clamp(1.125rem,2vw,1.25rem)] mb-2 text-[var(--color-text-primary)] dark-contrast:text-white line-clamp-1">
                    {obj.name}
                  </h3>
                  <p className="text-[clamp(0.875rem,1.5vw,1rem)] line-clamp-2 text-[var(--color-text-secondary)] dark-contrast:text-gray-300">
                    {obj.description ? obj.description.replace(/\s+/g, " ").trim() : "Подробнее об объекте на странице места."}
                  </p>
                </div>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex -left-4" />
      <CarouselNext className="hidden sm:flex -right-4" />
    </Carousel>
  );
}
