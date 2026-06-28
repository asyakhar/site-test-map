"use client";

import { useState } from "react";
import { 
  Snowflake, 
  Sun, 
  Map, 
  Car, 
  AlertTriangle, 
  ArrowRight 
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Интерфейс для наших советов
interface AdviceItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: any;
  iconColorClass: string;
  iconBgClass: string;
  content: React.ReactNode;
}

// Данные с твоим текстом, разбитые на удобные React-компоненты
const adviceData: AdviceItem[] = [
  {
    id: "winter",
    title: "Как одеваться зимой",
    shortDesc: "Секреты «капусты», выбор правильной обуви и защита лица при -50°C.",
    icon: Snowflake,
    iconColorClass: "text-[#4A72B2]",
    iconBgClass: "bg-[#E8F0FE]",
    content: (
      <>
        <p className="mb-4 text-[var(--color-text-secondary)] text-lg">
          Зимой температура в Якутии в среднем опускается до -30/-40°C, а в самые холодные месяцы (декабрь и январь) нередко достигает отметок -50/-60°C. Обычный пуховик на -40°C не работает. Местные жители одеваются «капустой»:
        </p>
        
        <h3 className="font-bold text-xl text-[var(--color-green-dark)] mt-6 mb-3 border-b pb-2">Торс</h3>
        <ul className="space-y-3 text-[var(--color-text-primary)]">
          <li><strong className="text-[var(--color-accent-dark)]">1-ый слой:</strong> влагоотводящее термобелье. Для активностей — синтетика, а для города — шерсть или кашемир. <em>Хлопок запрещён</em> — намокает от пота и замерзает.</li>
          <li><strong className="text-[var(--color-accent-dark)]">2-ой слой:</strong> флисовый костюм или толстый шерстяной свитер.</li>
          <li><strong className="text-[var(--color-accent-dark)]">3-ий слой:</strong> плотная ветрозащитная куртка. Лучше всего подойдёт качественный длинный пуховик для экстремальных условий или натуральная шуба (овчина, песец, лиса). Поверх можно надеть утепленный комбинезон.</li>
        </ul>

        <h3 className="font-bold text-xl text-[var(--color-green-dark)] mt-6 mb-3 border-b pb-2">Ноги и руки</h3>
        <ul className="space-y-3 text-[var(--color-text-primary)]">
          <li><strong>Брюки:</strong> Тёплые горнолыжные утепленные брюки (удобно снимать в помещении). В сильные морозы под них надевают шерстяные или флисовые подштанники.</li>
          <li><strong>Носки:</strong> Термоноски + классические шерстяные носки. Не надевайте слишком много носков, иначе нарушится кровообращение и ноги быстро замерзнут.</li>
          <li><strong>Обувь:</strong> Берите на размер больше — под неё нужно подложить войлочную стельку и надеть шерстяной носок поверх термоноска. Подошва должна быть толстой из морозостойкой резины. Местные носят унты, торбаса или «баффины».</li>
          <li><strong>Руки:</strong> Варежки, и только меховые (песец, лиса), с внутренним шерстяным вкладышем. Перчатки на сильном морозе бесполезны.</li>
          <li><strong>Голова и лицо:</strong> Шапка-ушанка с натуральным мехом (песец, соболь). Уши и затылок должны быть закрыты. Обязателен шарф, закрывающий нижнюю часть лица.</li>
        </ul>
      </>
    )
  },
  {
    id: "summer",
    title: "Как одеваться летом",
    shortDesc: "Дышащие ткани, суточные перепады температур и защита от комаров.",
    icon: Sun,
    iconColorClass: "text-[#E38920]",
    iconBgClass: "bg-[#FFF4E5]",
    content: (
      <>
        <p className="mb-4 text-[var(--color-text-secondary)] text-lg">
          Летом суточный перепад бывает колоссальным. В центральной Якутии дневная температура может достигать +28°С...+32°С, а ночью опускаться до +10°С...+15°С. На севере ночью возможны заморозки до +1°C при дневном прогреве до +29°C.
        </p>
        
        <ul className="space-y-3 text-[var(--color-text-primary)] mb-6">
          <li><strong>Днём:</strong> надеваем легкие дышащие вещи из натуральных тканей (хлопок, лен). Подойдут футболки, шорты, свободные брюки и легкие платья.</li>
          <li><strong>Вечером:</strong> обязательно накиньте ветровку, джинсовку или флисовую кофту.</li>
          <li><strong>Для походов:</strong> спальник должен быть рассчитан на температуру от 0 до -5°C, даже если июль. Обувь для маршрутов выбирайте непромокаемую — много болотистых участков.</li>
        </ul>

        <h3 className="font-bold text-xl text-[var(--color-accent-dark)] mt-6 mb-3 bg-[var(--color-accent-light)]/30 p-3 rounded-lg">
          Комары — важный момент!
        </h3>
        <p className="mb-3 text-[var(--color-text-primary)]">
          В пик лета, с июня по июль, комаров становится очень много. Обязательно берём с собой:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)]">
          <li>Противомоскитную сетку.</li>
          <li>Репеллент с высокой концентрацией ДЭТА (не меньше 30%), берите несколько флаконов.</li>
          <li>Одежду, закрывающую открытые участки тела, с плотными манжетами и капюшоном, чтобы насекомые не заползали.</li>
        </ul>
        <p className="mt-4 text-sm text-[var(--color-text-secondary)] italic">
          К августу активность насекомых заметно снижается — это более комфортное время для туристических походов.
        </p>
      </>
    )
  },
  {
    id: "nav",
    title: "Навигация и связь",
    shortDesc: "Офлайн-карты, пауэрбанки и правила безопасности на маршруте.",
    icon: Map,
    iconColorClass: "text-[var(--color-green-medium)]",
    iconBgClass: "bg-[#EAF2ED]",
    content: (
      <>
        <p className="mb-4 text-[var(--color-text-secondary)] text-lg">
          Большинство маршрутов Якутии проходят вдали от цивилизации. Здесь нет сотовой связи, ближайший населённый пункт может быть в 50 км, а указатели на тропах встречаются редко.
        </p>
        
        <h3 className="font-bold text-xl text-[var(--color-green-dark)] mt-6 mb-3 border-b pb-2">Обязательно:</h3>
        <ul className="space-y-4 text-[var(--color-text-primary)]">
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent)] mt-1">✓</span>
            <span>Заранее скачайте <strong>офлайн-карты</strong> на телефон (например, Maps.Me, Organic Maps).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent)] mt-1">✓</span>
            <span>Возьмите с собой <strong>power-bank</strong>.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent)] mt-1">✓</span>
            <span>Для серьёзных экспедиций обязателен <strong>спутниковый телефон</strong> или персональный радиомаяк.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent)] mt-1">✓</span>
            <span>Всегда <strong>сообщайте доверенным лицам</strong> свой маршрут, контрольные точки и расчётное время прибытия. Договоритесь о времени связи по спутниковому телефону.</span>
          </li>
        </ul>
      </>
    )
  },
  {
    id: "car",
    title: "Автомобильные путешествия",
    shortDesc: "Что должно лежать в багажнике для поездок по Якутии.",
    icon: Car,
    iconColorClass: "text-[var(--color-brown-medium)]",
    iconBgClass: "bg-[#F3EBE1]",
    content: (
      <>
        <h3 className="font-bold text-xl text-[#4A72B2] mb-3 flex items-center gap-2">
          <Snowflake className="size-5" /> Если дорога зимой
        </h3>
        <p className="mb-3 text-[var(--color-text-primary)]">В машине обязательно должны быть:</p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] mb-8">
          <li>Тёплое одеяло (или спальник).</li>
          <li>Термос с горячим чаем и запас еды (не скоропортящиеся продукты: сухари, шоколад, орехи, консервы).</li>
          <li>Фонарик и спички в непромокаемой упаковке.</li>
          <li>Буксировочный трос, антигололёдные цепи и лопата.</li>
          <li>Заряженный телефон и автомобильное зарядное устройство.</li>
        </ul>

        <h3 className="font-bold text-xl text-[#E38920] mb-3 flex items-center gap-2 border-t pt-6">
          <Sun className="size-5" /> Если дорога летом
        </h3>
        <p className="mb-3 text-[var(--color-text-primary)]">Обязательно берём:</p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)]">
          <li>Солнцезащитные крема (SPF 30-50).</li>
          <li>Солнцезащитные очки.</li>
        </ul>
      </>
    )
  },
  {
    id: "blizzard",
    title: "Что делать при поломке в метель?",
    shortDesc: "Критически важная инструкция по выживанию, если машина заглохла.",
    icon: AlertTriangle,
    iconColorClass: "text-[#D32F2F]",
    iconBgClass: "bg-[#FCE8E8]",
    content: (
      <>
        <div className="bg-[#FCE8E8] border-l-4 border-[#D32F2F] p-4 mb-6 rounded-r-lg">
          <p className="text-[#D32F2F] font-bold text-lg">Очень важный момент, который нельзя обходить стороной.</p>
        </div>
        
        <p className="mb-4 text-[var(--color-text-primary)] font-medium">
          Если автомобиль заглох в метель, строго следуйте этим правилам:
        </p>

        <ol className="space-y-4 text-[var(--color-text-primary)] counter-reset">
          <li className="flex gap-3">
            <span className="flex-shrink-0 flex items-center justify-center size-8 rounded-full bg-[#D32F2F] text-white font-bold">1</span>
            <div><strong>Оставайтесь внутри машины</strong> — не пытайтесь идти пешком в неизвестном направлении.</div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 flex items-center justify-center size-8 rounded-full bg-[#D32F2F] text-white font-bold">2</span>
            <div><strong>Приоткройте окно</strong> для вентиляции, чтобы избежать отравления угарным газом, если работаете с двигателем.</div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 flex items-center justify-center size-8 rounded-full bg-[#D32F2F] text-white font-bold">3</span>
            <div><strong>Сигнализируйте:</strong> повесьте яркую ткань на антенну или зеркало, периодически подавайте звуковые сигналы (каждые 5–10 минут по 2–3 гудка).</div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 flex items-center justify-center size-8 rounded-full bg-[#D32F2F] text-white font-bold">4</span>
            <div><strong>Звоните 112:</strong> номер работает даже при отсутствии сети — звоните, если есть хоть минимальный сигнал.</div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 flex items-center justify-center size-8 rounded-full bg-[#D32F2F] text-white font-bold">5</span>
            <div><strong>Периодически включайте двигатель</strong> для обогрева, но не оставляйте его работающим долго без проветривания.</div>
          </li>
        </ol>
      </>
    )
  }
];

export default function AdvicePage() {
  const [selectedAdvice, setSelectedAdvice] = useState<AdviceItem | null>(null);

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 
            className="font-sangha font-bold text-[var(--color-green-dark)] mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Практические советы
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
            Собрали самую важную информацию о климате, экипировке и безопасности, чтобы ваше путешествие по Якутии прошло идеально.
          </p>
        </div>

        {/* Сетка карточек-советов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adviceData.map((item) => {
            const Icon = item.icon;
            return (
              <Card 
                key={item.id}
                onClick={() => setSelectedAdvice(item)}
                className="group p-6 bg-[var(--color-bg-white)] border-[var(--color-card-border)] hover:border-[var(--color-accent)] transition-all cursor-pointer shadow-sm hover:shadow-md h-full flex flex-col"
              >
                <div className={`size-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${item.iconBgClass} ${item.iconColorClass}`}>
                  <Icon className="size-7" />
                </div>
                
                <h3 className="font-bold text-xl text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-accent-hover)] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-[var(--color-text-secondary)] text-sm mb-6 flex-grow">
                  {item.shortDesc}
                </p>

                <div className="flex items-center gap-2 text-[var(--color-accent)] font-medium text-sm mt-auto">
                  Читать подробнее <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Модальное окно с полным текстом */}
        <Dialog open={!!selectedAdvice} onOpenChange={(open) => !open && setSelectedAdvice(null)}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-[var(--color-bg-white)] border-[var(--color-card-border)] p-0 gap-0 dark-contrast:bg-black dark-contrast:text-white dark-contrast:border-gray-700">
            {selectedAdvice && (
              <>
                <div className={`p-6 md:p-8 border-b ${selectedAdvice.iconBgClass} dark-contrast:bg-gray-900`}>
                  <div className="flex items-center gap-4">
                    <div className={`size-12 rounded-full flex items-center justify-center bg-white shadow-sm dark-contrast:bg-gray-800 ${selectedAdvice.iconColorClass}`}>
                      <selectedAdvice.icon className="size-6" />
                    </div>
                    <DialogTitle className="font-sangha text-3xl md:text-4xl text-[var(--color-text-primary)] dark-contrast:text-white leading-tight">
                      {selectedAdvice.title}
                    </DialogTitle>
                  </div>
                  <DialogDescription className="sr-only">
                    Подробная информация: {selectedAdvice.title}
                  </DialogDescription>
                </div>
                
                <div className="p-6 md:p-8 text-base">
                  {selectedAdvice.content}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </PageWrapper>
  );
}