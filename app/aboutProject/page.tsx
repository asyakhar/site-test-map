import PageWrapper from "@/components/PageWrapper";

// Путь к статике (на GitHub Pages добавляется префикс репозитория)
const basePath = process.env.NODE_ENV === "production" ? "/site-test-map" : "";

interface Participant {
  name: string;
  uni: string;
}

const participants: Participant[] = [
  { name: "Имя Фамилия", uni: "ИГМУ" },
  { name: "Имя Фамилия", uni: "ИГМУ" },
  { name: "Имя Фамилия", uni: " " },
  { name: "Имя Фамилия", uni: " " },
  { name: "Имя Фамилия", uni: " " },
  { name: "Имя Фамилия", uni: " " },
  { name: "Имя Фамилия", uni: " " },
  { name: "Имя Фамилия", uni: " " },
  { name: "Имя Фамилия", uni: " " },
  { name: "Имя Фамилия", uni: " " },
  { name: "Имя Фамилия", uni: " " },
  { name: "Имя Фамилия", uni: " " },
  { name: "Имя Фамилия", uni: " " },
  { name: "Имя Фамилия", uni: " " },
  { name: "Имя Фамилия", uni: " " },
  { name: "Имя Фамилия", uni: " " },
  { name: "Имя Фамилия", uni: " " },
  { name: "Имя Фамилия", uni: " " },
  { name: "Имя Фамилия", uni: " " },
  { name: "Имя Фамилия", uni: " " },
];

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

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
                  src={`${basePath}/img/placeholder.jpg`}
                  alt="Фотография проекта"
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
        <div className="my-14 opacity-60">
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

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {participants.map((person, index) => (
              <li
                key={index}
                className="group flex flex-col items-center rounded-xl border border-[var(--color-card-border)] bg-[var(--color-bg-white)] p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:border-[var(--color-accent)]/50"
              >
                <h3 className="font-semibold text-[var(--color-text-primary)] leading-snug">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  {person.uni}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </PageWrapper>
  );
}
