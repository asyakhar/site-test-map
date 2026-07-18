"use client"

import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
// Удаляем импорт Header
// import Header from "@/components/AppHeader"

const AccessibleYakutiaMap = dynamic(
  () => import("@/components/accessible-yakutia-map"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-screen w-full items-center justify-center bg-[var(--color-bg-primary)]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[var(--color-accent)] border-t-transparent" />
          <p className="text-lg text-[var(--color-text-primary)]">Загрузка карты...</p>
        </div>
      </div>
    ),
  }
)

export default function MapPage() {
  const router = useRouter()

  const handlePlaceSelect = (id: string) => {
    router.push(`/place/${id}`)
  }

  return (
    // Убираем flex-col и Header, карта должна занимать весь экран
    <div className="h-dvh w-full overflow-hidden bg-[var(--color-bg-primary)]">
      <AccessibleYakutiaMap onPlaceSelect={handlePlaceSelect} />
    </div>
  )
}