"use client"

import dynamic from "next/dynamic"

const AccessibleYakutiaMap = dynamic(() => import("@/components/accessible-yakutia-map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="text-lg text-muted-foreground">Загрузка карты...</p>
      </div>
    </div>
  ),
})

export default function Home() {
  return <AccessibleYakutiaMap />
}
