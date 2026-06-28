"use client";

import Link from "next/link";
import { Mountain, Snowflake, Sun, Wind, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PageWrapper from "@/components/PageWrapper";

export default function YakutiaPage() {
  return (
    <PageWrapper>
      <article className="max-w-4xl mx-auto">
        
        {/* Заголовок */}
        <h1 
          className="font-sangha font-bold text-center mb-10 text-[var(--color-green-dark)]"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          О Якутии
        </h1>

        {/* Твой текст (без изменений) */}
        <div 
          className="space-y-6 text-[var(--color-text-secondary)] leading-relaxed text-justify" 
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
        >
          <p>
            Республика Саха (Якутия) - самый крупный регион России. Она расположена на северо-востоке страны и занимает площадь более 3 миллионов квадратных километров - это примерно пятая часть всей России. По территории Якутию можно сравнить с целой Индией, при этом население здесь чуть больше миллиона человек. Такое соотношение создаёт уникальную ситуацию: на огромных пространствах сохранилась нетронутая природа, а плотность населения остаётся одной из самых низких в стране.
          </p>
          <p>
            Природа поражает своим разнообразием. Здесь есть всё: бескрайняя тайга, горные хребты, тундра и арктическое побережье. По территории республики протекают крупнейшие реки - Лена, Вилюй и Алдан, а из недр добывают алмазы, золото, уголь и другие полезные ископаемые. Климат региона резко континентальный, с огромными перепадами температур: зимой морозы могут достигать -50°C и ниже, а летом воздух прогревается до +30°C и выше. Это край, где вечная мерзлота покрывает большую часть территории, а продолжительность дня меняется от нескольких часов зимой до почти круглосуточного света летом.
          </p>
          <p>
            Якутия  - это не только уникальная природа, но и богатейшая культура. Коренное население - якуты (саха) - веками сохраняли свой язык, традиции, эпос и ремёсла. Здесь почитают природу и духов предков, проводят национальные праздники и передают из поколения в поколение искусство резьбы по кости, ювелирного дела и горлового пения. Одновременно с этим в республике развиваются наука, образование и современное искусство, что делает Якутию регионом с живой и динамичной культурной жизнью.
          </p>
          <p>
            В последние годы республика активно развивает туристическую сферу. Строятся новые гостиницы, обновляются дороги и транспортная инфраструктура, появляются туристические кластеры и национальные парки. Всё больше людей приезжают сюда, чтобы увидеть северное сияние, сплавиться по рекам, побывать в горах или познакомиться с бытом и культурой коренных народов. Особое внимание уделяется созданию доступной среды. Разрабатываются маршруты с учётом потребностей маломобильных граждан, внедряются адаптированные экскурсии, а в туристической сфере всё чаще учитываются принципы инклюзивности.
          </p>
          <p>
            Это место, где суровые природные условия сочетаются с тёплым гостеприимством. Сюда приезжают не за курортным комфортом, а за настоящими впечатлениями: за ощущением бескрайнего пространства, за чистым воздухом и за редким чувством единения с природой. Это регион, который остаётся в памяти надолго и открывает Россию с совершенно другой, малоизвестной стороны. Якутия готова принимать гостей и показывает, что путешествие по северным территориям может быть комфортным и доступным для самого разного круга людей.
          </p>
        </div>

        {/* Сетка особенностей (обновленный дизайн) */}
        <div className="grid md:grid-cols-2 gap-6 mt-16 mb-12">
          <Card className="p-6 bg-[var(--color-bg-white)] border-[var(--color-card-border)] hover:border-[var(--color-accent)]/50 transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-12 rounded-full bg-[#E8F0FE] flex items-center justify-center text-[#4A72B2]">
                <Snowflake className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Климат</h3>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base">
              Резко континентальный. Зимой обязательна многослойная одежда. 
              Летом могут потребоваться репелленты и закрытая одежда для поездок на природу.
            </p>
          </Card>

          <Card className="p-6 bg-[var(--color-bg-white)] border-[var(--color-card-border)] hover:border-[var(--color-accent)]/50 transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-12 rounded-full bg-[#FFF4E5] flex items-center justify-center text-[#E38920]">
                <Sun className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Световой день</h3>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base">
              В северных районах летом солнце не заходит сутками (белые ночи). 
              Это может влиять на сон, рекомендуем брать с собой маску для сна.
            </p>
          </Card>

          <Card className="p-6 bg-[var(--color-bg-white)] border-[var(--color-card-border)] hover:border-[var(--color-accent)]/50 transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-12 rounded-full bg-[#EAF2ED] flex items-center justify-center text-[var(--color-green-medium)]">
                <Mountain className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Природа</h3>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base">
              Многие природные объекты труднодоступны и требуют подготовки. 
              Мы отмечаем на карте места, куда можно добраться с комфортом.
            </p>
          </Card>

          <Card className="p-6 bg-[var(--color-bg-white)] border-[var(--color-card-border)] hover:border-[var(--color-accent)]/50 transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-12 rounded-full bg-[#F3EBE1] flex items-center justify-center text-[var(--color-brown-medium)]">
                <Wind className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Традиции</h3>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base">
              Якутский народ известен своим гостеприимством и глубоким уважением к природе. 
              Соблюдение местных обычаев сделает ваше путешествие приятнее.
            </p>
          </Card>
        </div>

        {/* Блок безопасности */}
        <Card className="p-8 bg-[var(--color-accent-light)]/20 border-[var(--color-accent-light)] border-2 mb-12 rounded-xl">
          <h3 className="text-2xl font-bold text-[var(--color-accent-dark)] mb-4 flex items-center gap-3">
            <MapPin className="size-6" />
            Важно для туристов с ОВЗ
          </h3>
          <ul className="space-y-3 text-[var(--color-brown-dark)] list-disc list-inside text-sm md:text-base">
            <li>
              <strong>Медицина:</strong> В Якутске есть отличные клиники, но в отдаленных районах помощь может быть затруднена. Всегда берите запас лекарств.
            </li>
            <li>
              <strong>Транспорт:</strong> Локальная логистика часто зависит от погоды. Закладывайте резервное время.
            </li>
            <li>
              <strong>Доступность:</strong> Используйте фильтры на нашей карте, чтобы найти проверенные адаптированные объекты.
            </li>
          </ul>
        </Card>

        {/* Кнопка перехода */}
        <div className="text-center pb-8">
          <Button asChild size="lg" className="bg-accent-custom hover:bg-[var(--color-accent-hover)] text-white px-10 py-7 text-lg rounded-xl font-bold shadow-md transition-transform hover:scale-105">
            <Link href="/map">Перейти к карте объектов</Link>
          </Button>
        </div>

      </article>
    </PageWrapper>
  );
}