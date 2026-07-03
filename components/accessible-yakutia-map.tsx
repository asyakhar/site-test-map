"use client"

import { useEffect, useState, useCallback } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap, AttributionControl } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useRouter } from "next/navigation";
import {
  Filter,
  X,
  RotateCcw,
  Phone,
  Globe,
  MapPin,
  Accessibility,
  Eye,
  Ear,
  Utensils,
  Heart,
  Brain,
  Wind,
  Users,
  Sparkles,
  Hospital,
  Clock,
  Building2,
  Hotel,
  UtensilsCrossed,
  Coffee,
  TreePine,
  Theater,
  Stethoscope,
  Flower2,
  Landmark,
  ShoppingBag,
  Dumbbell,
  Mountain,
  Palette,
  Ticket,
  GraduationCap,
  Menu,
  Search,
  List,
} from "lucide-react"

// Types
interface MapObject {
  id: string
  name: string
  category: string
  layers: string[]
  coordinates: [number, number] | null
  address?: string
  workingHours?: string
  description: string
  accessibility: Record<string, string>
  contraindications?: string
  tickets?: string
  benefits?: string
  notes?: string
  photos: string[]
  contacts: {
    phone?: string
    website?: string
    yandexMap?: string
  }
}

export interface AccessibleYakutiaMapProps {
  onPlaceSelect?: (id: string) => void
}

// Configuration
const CONFIG = {
  mapCenter: [62.0355, 129.6755] as [number, number],
  defaultZoom: 11,
  minZoom: 5,
  maxZoom: 18,
}

// Theme Colors
const THEME = {
  primary: "#4ECDC4",
  secondary: "#1B3A5C",
  background: "#F7F3E8",
  textMain: "#2C3E50",
}

// Filter colors
const FILTER_COLORS: Record<string, string> = {
  inclusive: "#4ECDC4",
  vision_impaired: "#FF6B6B",
  hearing_impaired: "#FFA07A",
  deaf_mute: "#DDA15E",
  dietary: "#95E1D3",
  cardiovascular: "#E63946",
  mobility: "#457B9D",
  mental: "#A8DADC",
  respiratory: "#1D3557",
  family: "#FFB703",
  ethnomedicine: "#8B5A3C",
  health: "#52B788",
}

// Filter definitions
const CATEGORY_FILTERS = [
  { id: "inclusive", name: "Доступная среда", icon: Accessibility },
  { id: "vision_impaired", name: "Нарушения зрения", icon: Eye },
  { id: "hearing_impaired", name: "Нарушения слуха", icon: Ear },
  { id: "deaf_mute", name: "Глухонемые", icon: Ear },
  { id: "dietary", name: "Питание", icon: Utensils },
  { id: "cardiovascular", name: "Сердечно-сосудистые", icon: Heart },
  { id: "mobility", name: "Подвижность", icon: Accessibility },
  { id: "mental", name: "Ментальные особенности", icon: Brain },
  { id: "respiratory", name: "Респираторные", icon: Wind },
  { id: "family", name: "Семьи с детьми", icon: Users },
  { id: "ethnomedicine", name: "Народная медицина", icon: Sparkles },
  { id: "health", name: "Здоровье", icon: Hospital },
]

const CATEGORY_CONFIG: Record<string, { name: string; icon: typeof Building2 }> = {
  museum: { name: "Музей", icon: Building2 },
  hotel: { name: "Гостиница", icon: Hotel },
  restaurant: { name: "Ресторан", icon: UtensilsCrossed },
  cafe: { name: "Кафе", icon: Coffee },
  park: { name: "Парк", icon: TreePine },
  theater: { name: "Театр", icon: Theater },
  medical: { name: "Медицина", icon: Stethoscope },
  spa: { name: "СПА/Оздоровление", icon: Flower2 },
  monument: { name: "Памятник", icon: Landmark },
  shopping: { name: "Торговый центр", icon: ShoppingBag },
  sports: { name: "Спорт", icon: Dumbbell },
  nature: { name: "Природа", icon: Mountain },
  culture: { name: "Культура", icon: Palette },
  entertainment: { name: "Развлечения", icon: Ticket },
  education: { name: "Образование", icon: GraduationCap },
}

// Метаданные категорий доступности (ключи совпадают с id слоёв/фильтров)
const ACCESS_META: { id: string; name: string; icon: typeof Building2 }[] = [
  { id: "mobility", name: "Передвижение", icon: Accessibility },
  { id: "vision_impaired", name: "Для незрячих и слабовидящих", icon: Eye },
  { id: "hearing_impaired", name: "Для слабослышащих", icon: Ear },
  { id: "deaf_mute", name: "Для глухонемых", icon: Ear },
  { id: "dietary", name: "Питание", icon: Utensils },
  { id: "cardiovascular", name: "Сердечно-сосудистые", icon: Heart },
  { id: "respiratory", name: "Дыхательная система", icon: Wind },
  { id: "mental", name: "Ментальные особенности", icon: Brain },
  { id: "family", name: "Семьи с детьми", icon: Users },
  { id: "ethnomedicine", name: "Народная медицина", icon: Sparkles },
  { id: "health", name: "Отдых с пользой для здоровья", icon: Hospital },
]

function getCategoryMarkerIcon(category: string, color: string) {
  const iconPaths: Record<string, string> = {
    museum: '<path d="M3 22V8l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M6 22V11h4v11"/><path d="M14 22V11h4v11"/>',
    hotel: '<path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>',
    restaurant: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
    cafe: '<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/>',
    park: '<path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"/><path d="M7 16v6"/><path d="M13 19v3"/><path d="M19 10v.2A3 3 0 0 1 17.9 16v0H14v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"/><path d="M16 16v6"/>',
    theater: '<path d="M2 10s3-3 3-8"/><path d="M22 10s-3-3-3-8"/><path d="M10 2c0 4.4-3.6 8-8 8"/><path d="M14 2c0 4.4 3.6 8 8 8"/><path d="M2 10s2 2 2 5"/><path d="M22 10s-2 2-2 5"/><path d="M8 15h8"/><path d="M2 22v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1"/>',
    medical: '<path d="M12 6v4"/><path d="M14 14h-4"/><path d="M14 18h-4"/><path d="M14 8h-4"/><path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"/>',
    spa: '<path d="M12 22c5.5-2.5 7-8.5 7-12a5 5 0 0 0-5-5c-2 0-3.5 1.5-4 3-.5-1.5-2-3-4-3a5 5 0 0 0-5 5c0 3.5 1.5 9.5 7 12l2-1 2 1z"/>',
    monument: '<path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
    shopping: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    sports: '<circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/><path d="M2 12h20"/>',
    nature: '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',
    culture: '<path d="M12 2v4"/><path d="m6.8 14-3.5 2"/><path d="m20.7 7-3.5 2"/><path d="M6.8 10 3.3 8"/><path d="m20.7 17-3.5-2"/><circle cx="12" cy="12" r="6"/>',
    entertainment: '<rect width="20" height="12" x="2" y="6" rx="2"/><path d="M6 12h.01"/><path d="M10 12h.01"/><path d="M14 12h.01"/><path d="M18 12h.01"/>',
    education: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  }
  const iconPath = iconPaths[category] || '<circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/>'
  
  return L.divIcon({
    className: "custom-marker-wrapper",
    html: `<div style="width: 36px; height: 36px; background: #1f6fc5; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border: 2px solid white;">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconPath}</svg>
    </div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -18],
  })
}

function MapBoundsController({ objects }: { objects: MapObject[] }) {
  const map = useMap()
  useEffect(() => {
    const coords = objects
      .map((obj) => obj.coordinates)
      .filter((c): c is [number, number] => Array.isArray(c))
    if (coords.length > 0) {
      const bounds = L.latLngBounds(coords)
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 13 })
    }
  }, [objects, map])
  return null
}

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

// Вспомогательный компонент для сайдбара, чтобы избежать проблем с фокусом
interface SidebarContentProps {
  activeLayers: string[]
  searchQuery: string
  filteredObjectsCount: number
  toggleLayer: (id: string) => void
  resetFilters: () => void
  setSearchQuery: (query: string) => void
  onClose?: () => void
}

function SidebarContent({
  activeLayers,
  searchQuery,
  filteredObjectsCount,
  toggleLayer,
  resetFilters,
  setSearchQuery,
  onClose,
}: SidebarContentProps) {
  return (
    <div className="flex h-full flex-col bg-white">
      {/* Header with Search */}
      <div className="flex flex-col border-b border-gray-200 bg-[#1B3A5C] px-4 py-4 gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4ECDC4] text-white shadow-lg">
              <Filter className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-bold text-white">Фильтры</h2>
              <p className="text-xs text-white/80">Показано: {filteredObjectsCount} мест</p>
            </div>
          </div>
          {onClose && (
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>
        
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
          <input
            type="text"
            placeholder="Поиск по названию..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:bg-white/15 transition-all"
          />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Категории доступности */}
        <div className="space-y-2">
          <p className="font-bold text-[#2C3E50]">Кому подходит</p>
          <p className="text-xs text-gray-500 -mt-1 mb-1">Показать места с информацией для выбранных групп</p>
          <div className="space-y-1">
            {CATEGORY_FILTERS.map((filter) => {
              const IconComponent = filter.icon
              const isActive = activeLayers.includes(filter.id)
              return (
                <label key={filter.id} className={`flex cursor-pointer items-center gap-3 rounded-lg p-2.5 transition-all border ${isActive ? "bg-[#4ECDC4]/10 border-[#4ECDC4]" : "bg-white border-gray-200 hover:border-[#4ECDC4]/50"}`}>
                  <Checkbox checked={isActive} onCheckedChange={() => toggleLayer(filter.id)} className="data-[state=checked]:bg-[#4ECDC4] data-[state=checked]:border-[#4ECDC4]" />
                  <div className="size-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${FILTER_COLORS[filter.id]}20` }}>
                    <IconComponent className="size-4" style={{ color: FILTER_COLORS[filter.id] }} />
                  </div>
                  <span className="text-sm font-medium text-[#2C3E50]">{filter.name}</span>
                </label>
              )
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <Button variant="outline" className="w-full gap-2 h-11 border-[#1B3A5C]/20 text-[#1B3A5C] hover:bg-[#1B3A5C]/5" onClick={resetFilters}>
          <RotateCcw className="h-4 w-4" /> Сбросить фильтры
        </Button>
      </div>
    </div>
  )
}

export default function AccessibleYakutiaMap({ onPlaceSelect }: AccessibleYakutiaMapProps) {

const basePath = process.env.NODE_ENV === 'production' ? '/site-test-map' : ''
  const router = useRouter();
  const [objects, setObjects] = useState<MapObject[]>([])
  const [activeLayers, setActiveLayers] = useState<string[]>(["inclusive"])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [placesListOpen, setPlacesListOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const basePath = process.env.NODE_ENV === 'production' ? '/site-test-map' : ''
    fetch(`${basePath}/data/objects.json`)
      .then((res) => res.ok ? res.json() : Promise.reject(`HTTP ${res.status}`))
      .then((data) => setObjects(data))
      .catch((err) => console.error("Error loading data:", err))
  }, [])

  const toggleLayer = useCallback((id: string) => {
    setActiveLayers((prev) => prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id])
  }, [])

  const resetFilters = useCallback(() => {
    setActiveLayers(["inclusive"])
    setSearchQuery("")
  }, [])

  const filteredObjects = objects.filter((obj) => {
    // Показываем на карте только объекты с координатами
    if (!obj.coordinates) return false

    // 1. Поиск
    const matchesSearch = searchQuery.trim() === "" ||
      obj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      obj.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    // 2. Слои (кому подходит)
    return obj.layers.some((layer) => activeLayers.includes(layer))
  })

  const getMarkerColor = useCallback((obj: MapObject) => {
    for (const layer of obj.layers) {
      if (activeLayers.includes(layer) && FILTER_COLORS[layer]) return FILTER_COLORS[layer]
    }
    return FILTER_COLORS.inclusive
  }, [activeLayers])

  const activeFilterCount = activeLayers.length - 1

  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-[#F7F3E8]">
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-[1001] lg:hidden backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
      )}

      <div
        className={`fixed inset-y-0 right-0 w-full max-w-[320px] z-[1002] transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl`}
        style={{ transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <SidebarContent
          activeLayers={activeLayers}
          searchQuery={searchQuery}
          filteredObjectsCount={filteredObjects.length}
          toggleLayer={toggleLayer}
          resetFilters={resetFilters}
          setSearchQuery={setSearchQuery}
          onClose={() => setMobileMenuOpen(false)}
        />
      </div>

      <header className="absolute left-0 right-0 top-0 z-[1000] lg:hidden h-16 bg-[#1B3A5C] shadow-lg flex items-center px-4 gap-4">
        <button onClick={() => router.push("/")} className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
          <MapPin className="h-6 w-6 text-[#4ECDC4]" />
          <span className="font-bold text-lg leading-tight">Доступная Якутия</span>
        </button>
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input 
            placeholder="Поиск..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-full bg-white/90 border-0 text-sm focus:ring-2 focus:ring-[#4ECDC4] focus:outline-none"
          />
        </div>
        <button onClick={() => setMobileMenuOpen(true)} className="size-10 rounded-full bg-[#4ECDC4] text-white shadow-lg hover:bg-[#3DBDB5] flex items-center justify-center relative" aria-label="Фильтры">
          <Menu className="size-5" />
          {activeFilterCount > 0 && <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#1B3A5C] text-xs font-bold shadow">{activeFilterCount}</span>}
        </button>
      </header>

      <aside className="hidden lg:flex h-full w-80 flex-shrink-0 flex-col border-r border-gray-200 shadow-xl z-10 bg-white">
        <div className="flex items-center gap-3 bg-[#1B3A5C] px-6 py-5 text-white shadow-md cursor-pointer hover:bg-[#162F4C] transition-colors" onClick={() =>router.push("/")}>
          <div className="relative size-10">
            <MapPin className="size-10 text-[#4ECDC4]" strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Доступная Якутия</h1>
            <p className="text-sm text-white/80">Инклюзивный навигатор</p>
          </div>
        </div>
        <SidebarContent
          activeLayers={activeLayers}
          searchQuery={searchQuery}
          filteredObjectsCount={filteredObjects.length}
          toggleLayer={toggleLayer}
          resetFilters={resetFilters}
          setSearchQuery={setSearchQuery}
        />
      </aside>

      <main className="relative flex-1 pt-[64px] lg:pt-0 bg-[#F7F3E8]">
        <MapContainer attributionControl={false} center={CONFIG.mapCenter} zoom={CONFIG.defaultZoom} minZoom={CONFIG.minZoom} maxZoom={CONFIG.maxZoom} className="h-full w-full z-0" zoomControl={true}>
          <AttributionControl prefix={false} />
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {filteredObjects.map((obj) => (
            <Marker key={obj.id} position={obj.coordinates!} icon={getCategoryMarkerIcon(obj.category, getMarkerColor(obj))}>
              <Popup maxWidth={480} minWidth={260} className="custom-popup">
                <div className="flex flex-col sm:flex-row overflow-hidden rounded-xl border-0 bg-white sm:w-[460px]">
                  {/* Фото: сверху на мобильном, слева на десктопе */}
                  <div className="relative h-36 sm:h-auto sm:w-40 sm:flex-shrink-0">
                    <img
                      src={obj.photos && obj.photos.length > 0
                        ? obj.photos[0]
                        : `${basePath}/img/placeholder.jpg`}
                      alt={obj.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `${basePath}/img/placeholder.jpg`;
                      }}
                    />
                  </div>

                  {/* Контент */}
                  <div className="p-4 space-y-2.5 sm:flex-1 sm:min-w-0">
                    <div>
                      <Badge className="mb-1.5 text-white border-0 shadow-sm" style={{ backgroundColor: getMarkerColor(obj) }}>
                        {CATEGORY_CONFIG[obj.category]?.name || obj.category}
                      </Badge>
                      <h3 className="text-base font-bold text-[#2C3E50] leading-tight">{obj.name}</h3>
                    </div>

                    {obj.address && (
                      <div className="flex items-start gap-2 text-sm text-[#2C3E50]/80">
                        <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#4ECDC4]" />
                        <span>{obj.address}</span>
                      </div>
                    )}
                    {obj.workingHours && (
                      <div className="flex items-start gap-2 text-sm text-[#2C3E50]/80">
                        <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#4ECDC4]" />
                        <span className="line-clamp-2 whitespace-pre-line">{obj.workingHours}</span>
                      </div>
                    )}

                    {(() => {
                      const groups = ACCESS_META.filter((m) => obj.layers.includes(m.id))
                      if (groups.length === 0) return null
                      return (
                        <div className="flex flex-wrap gap-1.5">
                          {groups.map((m) => {
                            const Icon = m.icon
                            return (
                              <span
                                key={m.id}
                                title={m.name}
                                className="flex items-center justify-center size-7 rounded-full"
                                style={{ backgroundColor: `${FILTER_COLORS[m.id]}20` }}
                              >
                                <Icon className="size-4" style={{ color: FILTER_COLORS[m.id] }} />
                              </span>
                            )
                          })}
                        </div>
                      )
                    })()}

                    <div className="flex flex-col gap-1.5 pt-2 border-t border-gray-100">
                      {obj.contacts.phone && (
                        <a href={`tel:${obj.contacts.phone.replace(/[^\d+]/g, '')}`} className="flex items-center gap-2 text-sm text-[#1B3A5C] hover:text-[#4ECDC4] transition-colors font-medium">
                          <Phone className="h-4 w-4 flex-shrink-0" /> <span className="line-clamp-1">{obj.contacts.phone}</span>
                        </a>
                      )}
                      {obj.contacts.website && (
                        <a href={obj.contacts.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#1B3A5C] hover:text-[#4ECDC4] transition-colors font-medium">
                          <Globe className="h-4 w-4 flex-shrink-0" /> Перейти на сайт
                        </a>
                      )}
                      {onPlaceSelect && (
                        <Button className="w-full mt-1 bg-[#4ECDC4] hover:bg-[#3DBDB5] text-white rounded-lg" onClick={() => onPlaceSelect(obj.id)}>
                          Подробнее
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
          {filteredObjects.length > 0 && <MapBoundsController objects={filteredObjects} />}
        </MapContainer>

        {/* Кнопка «Список мест» (десктоп) */}
        <button
          onClick={() => setPlacesListOpen((v) => !v)}
          className="absolute top-4 right-4 z-[1000] hidden lg:flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-[#1B3A5C] shadow-lg hover:bg-gray-50 transition-colors"
        >
          <List className="h-4 w-4 text-[#4ECDC4]" />
          Список мест
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#4ECDC4] px-1.5 text-xs font-bold text-white">{filteredObjects.length}</span>
        </button>

        {/* Правая панель со списком мест (десктоп) */}
        <div
          className={`absolute inset-y-0 right-0 z-[1001] hidden w-96 max-w-[90%] transform flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:flex ${placesListOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between border-b border-gray-200 bg-[#1B3A5C] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4ECDC4]">
                <List className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-bold">Все места</h2>
                <p className="text-xs text-white/80">Найдено: {filteredObjects.length}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setPlacesListOpen(false)} className="text-white hover:bg-white/20">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredObjects.length === 0 && (
              <p className="p-6 text-center text-sm text-gray-500">Ничего не найдено. Измените фильтры или запрос.</p>
            )}
            {filteredObjects.map((obj) => {
              const CatIcon = CATEGORY_CONFIG[obj.category]?.icon || MapPin
              const color = getMarkerColor(obj)
              const groups = ACCESS_META.filter((m) => obj.layers.includes(m.id))
              return (
                <button
                  key={obj.id}
                  onClick={() => onPlaceSelect?.(obj.id)}
                  className="flex w-full items-start gap-3 border-b border-gray-100 p-3 text-left transition-colors hover:bg-[#4ECDC4]/5"
                >
                  <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${color}20` }}>
                    <CatIcon className="size-5" style={{ color }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-[#2C3E50] leading-snug">{obj.name}</div>
                    {obj.address && (
                      <div className="mt-0.5 flex items-start gap-1 text-xs text-gray-500">
                        <MapPin className="mt-0.5 h-3 w-3 flex-shrink-0" />
                        <span className="line-clamp-1">{obj.address}</span>
                      </div>
                    )}
                    {groups.length > 0 && (
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {groups.map((m) => {
                          const Icon = m.icon
                          return (
                            <span
                              key={m.id}
                              title={m.name}
                              className="flex size-5 items-center justify-center rounded-full"
                              style={{ backgroundColor: `${FILTER_COLORS[m.id]}20` }}
                            >
                              <Icon className="size-3" style={{ color: FILTER_COLORS[m.id] }} />
                            </span>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:hidden pointer-events-none">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium shadow-lg bg-white/90 backdrop-blur-md border border-gray-200 text-[#1B3A5C]">
            <MapPin className="h-4 w-4 mr-2 text-[#4ECDC4]" /> {filteredObjects.length} мест
          </Badge>
        </div>
      </main>
    </div>
  )
}