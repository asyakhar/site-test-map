"use client";

import { useEffect, useState } from "react";
import { Eye, ScanEye, Contrast, ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type VisionPreference = "none" | "full" | "partial";

const STORAGE_KEY = "visionPreference";

function applyPreference(pref: VisionPreference) {
  const root = document.documentElement;
  if (pref === "partial") {
    root.classList.add("high-contrast", "large-font");
  } else {
    root.classList.remove("high-contrast", "large-font");
  }
}

/**
 * Входное окно про нарушения зрения. Показывается один раз за сессию
 * (sessionStorage) только на главной. Два шага:
 *  1. «Есть ли у вас нарушения зрения?» → Да / Нет
 *  2. При «Да»: Полная потеря (скринридер, вид не меняем) / Частичная (контраст+шрифт)
 */
export default function VisionModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = sessionStorage.getItem(STORAGE_KEY);
    } catch {
      /* sessionStorage недоступен — просто не показываем окно */
    }
    if (!stored) {
      setStep(1);
      setOpen(true);
    }
  }, []);

  const resolve = (pref: VisionPreference) => {
    try {
      sessionStorage.setItem(STORAGE_KEY, pref);
    } catch {
      /* ignore */
    }
    applyPreference(pref);
    if (pref === "full") {
      setAnnouncement(
        "Сайт готов к работе со скринридером. Используйте команды озвучивания вашей программы для навигации."
      );
    }
    setOpen(false);
  };

  // Закрытие без явного выбора (Esc / клик вне окна) трактуем как «нет нарушений»
  const handleOpenChange = (next: boolean) => {
    if (!next) {
      let stored: string | null = null;
      try {
        stored = sessionStorage.getItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
      if (!stored) resolve("none");
      else setOpen(false);
    }
  };

  const btnBase =
    "w-full flex items-center gap-4 rounded-xl border-2 p-5 text-left transition-all " +
    "border-[var(--color-card-border)] bg-[var(--color-bg-white)] hover:border-[var(--color-accent)] " +
    "focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-accent)]/40 " +
    "dark-contrast:bg-gray-900 dark-contrast:border-gray-600 dark-contrast:hover:border-white";

  return (
    <>
      {/* Живая область для озвучивания скринридером */}
      <div role="status" aria-live="polite" className="sr-only">
        {announcement}
      </div>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="max-w-lg rounded-xl bg-[var(--color-bg-primary)] border-[var(--color-card-border)] dark-contrast:bg-black dark-contrast:text-white dark-contrast:border-gray-700">
          {step === 1 ? (
            <>
              <DialogHeader className="text-left">
                <DialogTitle className="font-sangha text-2xl md:text-3xl text-[var(--color-text-primary)] dark-contrast:text-white leading-tight">
                  Есть ли у вас нарушения зрения?
                </DialogTitle>
                <DialogDescription className="text-base mt-2 text-[var(--color-text-secondary)] dark-contrast:text-gray-300">
                  Мы можем подстроить сайт под вас, чтобы им было удобнее пользоваться.
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 flex flex-col gap-3">
                <button type="button" className={btnBase} onClick={() => setStep(2)}>
                  <span className="flex size-11 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent-dark)] dark-contrast:bg-white dark-contrast:text-black">
                    <Eye className="size-6" />
                  </span>
                  <span className="text-lg font-semibold text-[var(--color-text-primary)] dark-contrast:text-white">
                    Да
                  </span>
                </button>

                <button
                  type="button"
                  className={btnBase}
                  onClick={() => resolve("none")}
                >
                  <span className="flex size-11 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-green-dark)]/15 text-[var(--color-green-dark)] dark-contrast:bg-white dark-contrast:text-black">
                    <Contrast className="size-6" />
                  </span>
                  <span className="text-lg font-semibold text-[var(--color-text-primary)] dark-contrast:text-white">
                    Нет
                  </span>
                </button>
              </div>
            </>
          ) : (
            <>
              <DialogHeader className="text-left">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="mb-1 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] dark-contrast:text-gray-300 focus:outline-none focus-visible:underline"
                >
                  <ArrowLeft className="size-4" /> Назад
                </button>
                <DialogTitle className="font-sangha text-2xl md:text-3xl text-[var(--color-text-primary)] dark-contrast:text-white leading-tight">
                  Какой у вас тип нарушения?
                </DialogTitle>
                <DialogDescription className="text-base mt-2 text-[var(--color-text-secondary)] dark-contrast:text-gray-300">
                  Выберите вариант — сайт подстроится под вас.
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 flex flex-col gap-3">
                <button
                  type="button"
                  className={btnBase}
                  onClick={() => resolve("full")}
                >
                  <span className="flex size-11 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-green-dark)]/15 text-[var(--color-green-dark)] dark-contrast:bg-white dark-contrast:text-black">
                    <ScanEye className="size-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-lg font-semibold text-[var(--color-text-primary)] dark-contrast:text-white">
                      Полная потеря зрения
                    </span>
                    <span className="block text-sm text-[var(--color-text-secondary)] dark-contrast:text-gray-300">
                      Работа со скринридером
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  className={btnBase}
                  onClick={() => resolve("partial")}
                >
                  <span className="flex size-11 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent-dark)] dark-contrast:bg-white dark-contrast:text-black">
                    <Contrast className="size-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-lg font-semibold text-[var(--color-text-primary)] dark-contrast:text-white">
                      Частичная потеря зрения
                    </span>
                    <span className="block text-sm text-[var(--color-text-secondary)] dark-contrast:text-gray-300">
                      Применим высокий контраст и крупный шрифт
                    </span>
                  </span>
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
