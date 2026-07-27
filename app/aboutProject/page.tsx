import PageWrapper from "@/components/PageWrapper";

// Путь к статике (на GitHub Pages добавляется префикс репозитория)
const basePath = process.env.NODE_ENV === "production" ? "/site-test-map" : "";

// Группа участников: организация/роль + список людей
interface TeamGroup {
  org: string;
  members: string[];
}

const igmuGroup: TeamGroup = {
  org: "Студенты Иркутского государственного медицинского университета",
  members: [
    "Багирова Айнур Абидин кызы",
    "Баянова Екатерина Анатольевна",
    "Бельков Алексей Андреевич",
    "Болдырева Полина Анатольевна",
    "Буянов Андрей Вячеславович",
    "Гусейнова Лейла Видали кызы",
    "Кузнецова Диана Александровна",
    "Крутикова Екатерина Евгеньевна",
    "Розикова Умида Абдукаюмовна",
    "Сырова Асия Исмаровна",
    "Сырова Амина Исмаровна",
    "Тихомиров Евгений Александрович",
  ],
};

const otherGroups: TeamGroup[] = [
  {
    org: "Ординатор ИГМАПО МЗ РФ",
    members: ["Лаутина Юлия Александровна"],
  },
  {
    org: "Ординатор РНИМУ им. Н.И. Пирогова МЗ РФ",
    members: ["Эльмуродова Нодира Баходуровна"],
  },
  {
    org: "Студент УрФУ",
    members: ["Жулаев Амир Салаватович"],
  },
  {
    org: "Студент Хакасского государственного университета им. Н.Ф. Катанова",
    members: ["Галантюк Артём Андреевич"],
  },
  {
    org: "Специалист по молодёжной политике и воспитательной работе",
    members: ["Гуменникова Мария Сергеевна"],
  },
  {
    org: "Специалист по развитию государственных взаимоотношений",
    members: ["Мицилеско Анастасия Евгеньевна"],
  },
  {
    org: "Студентки ИТМО",
    members: ["Колмогорова Александра Сергеевна", "Харитонова Анастасия Анатольевна"],
  },
];

/* Декоративная полоса-узор (наш этно-орнамент).
   flip — отражает полосу по вертикали (для нижнего края рамки). */
function UzorBand({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none w-full bg-repeat-x"
      style={{
        height: "28px",
        backgroundImage: `url("${basePath}/img/uzor.svg")`,
        backgroundSize: "auto 28px",
        backgroundPosition: "center",
        opacity: 0.7,
        transform: flip ? "scaleY(-1)" : "none",
      }}
    />
  );
}

export default function AboutProjectPage() {
  return (
    <PageWrapper>
      <article className="max-w-4xl mx-auto">
        {/* Заголовок */}
        <h1
          className="font-sangha font text-center mb-8 text-[var(--color-green-dark)]"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          О нас
        </h1>

        {/* Основная информация*/}
        <div
          className="space-y-6 text-[var(--color-text-secondary)] leading-relaxed text-justify"
          style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}
        >
          <p>
            рассказать, зачем сервис создан,
            какую задачу решает и для кого предназначен. 
          </p>
          <p>
            -- описать цели и ценности программы: как
            формировались инклюзивные маршруты, кто помогал в их подготовке и какой
            результатмы планировали получить
          </p>
        </div>

        {/*Фото в рамке из узоров */}
        <figure className="mx-auto mt-12 w-full max-w-3xl">
          <div className="relative bg-[var(--color-bg-white)] p-3 shadow-[0_12px_30px_var(--color-card-shadow)] ring-1 ring-[var(--color-brown-light)]">
            <UzorBand />

            {/* Фото с боковыми орнаментными линиями */}
            <div className="border-x-2 border-[var(--color-brown-light)] px-3">
              <div className="aspect-[16/10] w-full overflow-hidden bg-[var(--color-bg-secondary)]">
                <img
                  src={"https://raw.githubusercontent.com/asyakhar/yakutia-images/main/team/us-2.jpg"}
                  alt="Фотография команды проекта"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <UzorBand flip />
          </div>
          <figcaption className="mt-3 text-center text-sm italic text-[var(--color-text-secondary)]">
            Команда экспедиции
          </figcaption>
        </figure>

        {/* Разделитель */}
        <div className="my-6 opacity-60">
          <UzorBand />
        </div>

        {/* Участники */}
        <section>
          <h2
            className="font-sangha font text-center mb-3 text-[var(--color-green-dark)]"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Участники программы
          </h2>
          <p className="text-center text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto">
            Команда из 20 человек, благодаря которым проект стал возможным:
          </p>

          {/* ИГМУ - карточка на всю ширину, имена в несколько колонок */}
          <div className="rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-bg-white)] p-6 shadow-sm md:p-8">
            <div className="mb-5 flex items-start gap-3">
              <span aria-hidden="true" className="mt-1 h-7 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
              <h3 className="font-sangha text-xl text-[var(--color-green-dark)] md:text-2xl">
                {igmuGroup.org}
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {igmuGroup.members.map((name) => (
                <li key={name} className="flex items-start gap-2 text-[var(--color-text-primary)]">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-brown-light)]" />
                  <span className="leading-snug">{name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* сетка крточек остальных участников */}
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherGroups.map((group) => (
              <div
                key={group.org}
                className="flex flex-col rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-bg-white)] p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-accent)]/50 hover:shadow-md"
              >
                <div className="mb-3 flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-0.5 h-5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                  <h3 className="text-sm font-semibold leading-snug text-[var(--color-green-dark)]">
                    {group.org}
                  </h3>
                </div>
                <ul className="space-y-1.5 pl-4">
                  {group.members.map((name) => (
                    <li key={name} className="leading-snug text-[var(--color-text-primary)]">
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </article>
    </PageWrapper>
  );
}
