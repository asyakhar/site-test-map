"use client";

import Link from "next/link";
import { ArrowLeft, Info, AlertTriangle, HeartPulse, Bus, Utensils, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const adviceData = [
  {
    id: "clothes",
    title: "Как одеваться?",
    icon: <Info className="size-5" />,
    content: (
      <div className="space-y-2 text-[#2C3E50]/80">
        <p><strong>Зимой:</strong> Принцип трех слоев. Термобелье, флис/шерсть, верхняя одежда (пуховик или мех). Обязательны теплые головные уборы, варежки (не перчатки!) и термоноски.</p>
        <p><strong>Летом:</strong> Одежда из натуральных тканей, закрывающая руки и ноги (защита от комаров). Удобная обувь для ходьby.</p>
      </div>
    )
  },
  {
    id: "medicine",
    title: "Аптечка и здоровье",
    icon: <HeartPulse className="size-5" />,
    content: (
      <div className="space-y-2 text-[#2C3E50]/80">
        <p>Возьмите с собой индивидуальный запас лекарств на весь trip + 3-5 дней запаса.</p>
        <p>Обязательно: средства от аллергии (антигистаминные), обезболивающие, пластыри, средства от укусов насекомых (Фенистил-гель).</p>
        <p>Если у вас есть хронические заболевания, возьмите выписку от врача на русском языке.</p>
      </div>
    )
  },
  {
    id: "transport",
    title: "Транспорт и передвижение",
    icon: <Bus className="size-5" />,
    content: (
      <div className="space-y-2 text-[#2C3E50]/80">
        <p>В Якутске работает такси (Яндекс, Maxim). Общественный транспорт доступен, но не все остановки оборудованы пандусами.</p>
        <p>Для поездок за город лучше арендовать автомобиль с водителем или заказывать трансфер заранее, предупреждая о необходимости автомобиля с низким полом или местом для коляски.</p>
      </div>
    )
  },
  {
    id: "food",
    title: "Питание и особенности меню",
    icon: <Utensils className="size-5" />,
    content: (
      <div className="space-y-2 text-[#2C3E50]/80">
        <p>Национальная кухня богата мясом (конина, оленина) и рыбой. Если у вас есть ограничения (безглютеновое, диабетическое питание), уточняйте состав блюд у официанта.</p>
        <p>Используйте фильтр «Питание» на нашей карте, чтобы найти заведения с подходящим меню.</p>
      </div>
    )
  },
  {
    id: "photo",
    title: "Фотография и этикет",
    icon: <Camera className="size-5" />,
    content: (
      <div className="space-y-2 text-[#2C3E50]/80">
        <p>Всегда спрашивайте разрешение перед фотографированием местных жителей, особенно в национальной одежде или во время обрядов.</p>
        <p>Не фотографируйте священные места (алаасы, обоо) без разрешения проводника.</p>
      </div>
    )
  },
  {
    id: "emergency",
    title: "Экстренные службы",
    icon: <AlertTriangle className="size-5" />,
    content: (
      <div className="space-y-2 text-[#2C3E50]/80">
        <p><strong>Единый номер спасения:</strong> 112</p>
        <p><strong>Полиция:</strong> 102</p>
        <p><strong>Скорая помощь:</strong> 103</p>
        <p>Сохраните контакты вашего отеля и гида в телефоне.</p>
      </div>
    )
  }
];

export default function AdvicePage() {
  return (
    <div className="min-h-screen bg-[#F7F3E8] text-[#2C3E50]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-[#1B3A5C] hover:opacity-80 transition-opacity">
            <ArrowLeft className="size-6" />
            <span>На главную</span>
          </Link>
          <h1 className="text-lg md:text-xl font-semibold text-[#1B3A5C]">Советы туристам</h1>
          <div className="w-10" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4">Практические советы</h1>
          <p className="text-lg text-[#2C3E50]/70">
            Собрали самую важную информацию, чтобы ваше путешествие по Якутии было безопасным и комфортным.
          </p>
        </div>

        <Card className="p-2 bg-white border-0 shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            {adviceData.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-b last:border-0">
                <AccordionTrigger className="text-left hover:no-underline hover:bg-[#F7F3E8]/50 px-4 py-4 rounded-lg transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-[#4ECDC4]/10 flex items-center justify-center text-[#4ECDC4] shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-lg font-medium text-[#2C3E50]">{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-6 pt-2 text-base leading-relaxed">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <div className="mt-12 p-6 bg-[#1B3A5C] rounded-xl text-white text-center">
          <h3 className="text-xl font-bold mb-2">Не нашли ответ на свой вопрос?</h3>
          <p className="mb-6 opacity-90">Напишите нам, и мы постараемся помочь вам с планированием поездки.</p>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#1B3A5C]">
            Связаться с нами
          </Button>
        </div>
      </main>

      <footer className="bg-[#1B3A5C] text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">© 2026 Доступная Якутия</p>
        </div>
      </footer>
    </div>
  );
}