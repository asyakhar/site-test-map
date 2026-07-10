"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Кнопка-глаз для включения/выключения высокого контраста и крупного шрифта.
 * Такая же логика, как в шапке главной: переключает классы на <html> и
 * запоминает выбор на сессию (sessionStorage), чтобы он не сбрасывался.
 */
export default function ContrastToggle({ className = "" }: { className?: string }) {
  const basePath = process.env.NODE_ENV === "production" ? "/site-test-map" : "";
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    setHighContrast(document.documentElement.classList.contains("high-contrast"));
  }, []);

  const toggle = () => {
    const next = !highContrast;
    setHighContrast(next);
    if (next) {
      document.documentElement.classList.add("high-contrast", "large-font");
    } else {
      document.documentElement.classList.remove("high-contrast", "large-font");
    }
    try {
      sessionStorage.setItem("visionPreference", next ? "partial" : "none");
    } catch {
      /* ignore */
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      className={`w-auto px-2 ${highContrast ? "text-white hover:bg-white/20" : ""} ${className}`}
      title="Версия для слабовидящих"
      aria-label="Версия для слабовидящих: высокий контраст и крупный шрифт"
      aria-pressed={highContrast}
    >
      <img
        src={`${basePath}/img/eye.png`}
        alt=""
        aria-hidden="true"
        className="h-5 w-auto object-contain dark-contrast:brightness-0 dark-contrast:invert"
      />
    </Button>
  );
}
