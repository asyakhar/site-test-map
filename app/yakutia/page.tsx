"use client";

import Link from "next/link";
import { ArrowLeft, Mountain, Snowflake, Sun, Wind, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function YakutiaPage() {
  return (
    <div className="min-h-screen bg-[#F7F3E8] text-[#2C3E50]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-[#1B3A5C] hover:opacity-80 transition-opacity">
            <ArrowLeft className="size-6" />
            <span>На главную</span>
          </Link>
          <h1 className="text-lg md:text-xl font-semibold text-[#1B3A5C]">О Якутии</h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548860287-3f22b4e1d6d4?auto=format&fit=crop&q=80&w=1920')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B3A5C]/70 to-[#1B3A5C]/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Республика Саха (Якутия)</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Самый крупный регион России, край вечной мерзлоты, алмазов и уникальной культуры.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* Intro */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1B3A5C]">Добро пожаловать в край контрастов</h2>
          <p className="text-lg leading-relaxed mb-4">
            Якутия — это место, где зима длится 7-8 месяцев, а температура опускается до -60°C, но лето может быть жарким (+30°C). 
            Это родина мамонтов, крупнейшая алмазная провинция мира и дом для коренных народов Севера, сохраняющих свои традиции тысячелетиями.
          </p>
          <p className="text-lg leading-relaxed">
            Для туристов с ограниченными возможностями здоровья Якутия может быть непростым, но невероятно интересным направлением. 
            Мы собрали информацию, чтобы сделать ваше путешествие максимально комфортным.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 bg-white border-0 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Snowflake className="size-6" />
              </div>
              <h3 className="text-xl font-bold">Климат</h3>
            </div>
            <p className="text-[#2C3E50]/80">
              Резко континентальный климат. Зимой обязательна многослойная одежда из натуральных материалов и меха. 
              Летом много комаров и мошки — нужны репелленты и закрытая одежда.
            </p>
          </Card>

          <Card className="p-6 bg-white border-0 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                <Sun className="size-6" />
              </div>
              <h3 className="text-xl font-bold">Полярный день</h3>
            </div>
            <p className="text-[#2C3E50]/80">
              В северных районах (за полярным кругом) летом солнце не заходит сутками. 
              Это может влиять на сон и самочувствие, поэтому возьмите маску для сна.
            </p>
          </Card>

          <Card className="p-6 bg-white border-0 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Mountain className="size-6" />
              </div>
              <h3 className="text-xl font-bold">Природа</h3>
            </div>
            <p className="text-[#2C3E50]/80">
              Ленские столбы, горы Бырранга, множество рек и озер. 
              Многие природные объекты труднодоступны, требуют подготовки и сопровождения.
            </p>
          </Card>

          <Card className="p-6 bg-white border-0 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                <Wind className="size-6" />
              </div>
              <h3 className="text-xl font-bold">Традиции</h3>
            </div>
            <p className="text-[#2C3E50]/80">
              Уважайте местные обычаи. Не шумите в тайге, не мусорьте. 
              Якутский народ известен своим гостеприимством и бережным отношением к природе.
            </p>
          </Card>
        </div>

        {/* Safety Block */}
        <Card className="p-8 bg-amber-50 border-amber-200 border-2 mb-12">
          <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <MapPin className="size-6" />
            Важно для туристов с ОВЗ
          </h3>
          <ul className="space-y-3 text-amber-900/90 list-disc list-inside">
            <li>
              <strong>Медицина:</strong> В Якутске есть хорошие клиники, но в отдаленных районах медицинская помощь может быть затруднена. 
              Возьмите запас необходимых лекарств.
            </li>
            <li>
              <strong>Транспорт:</strong> Внутрирегиональные перелеты часто зависят от погоды. 
              Закладывайте дополнительное время на дорогу.
            </li>
            <li>
              <strong>Доступность:</strong> Только крупные объекты в Якутске полностью адаптированы. 
              Используйте наши фильтры, чтобы найти подходящие места.
            </li>
          </ul>
        </Card>

        <div className="text-center">
          <Button asChild size="lg" className="bg-[#4ECDC4] hover:bg-[#3DBDB5] text-white px-8 py-6 text-lg rounded-xl">
            <Link href="/map">Перейти к карте объектов</Link>
          </Button>
        </div>

      </main>

      {/* Footer Simple */}
      <footer className="bg-[#1B3A5C] text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">© 2026 Доступная Якутия</p>
        </div>
      </footer>
    </div>
  );
}