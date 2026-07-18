"use client"

import { useEffect, useState, useCallback } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap, AttributionControl } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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

// Filter colors
const FILTER_COLORS: Record<string, string> = {
  inclusive: "#E38920",
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

// ⭐ КАТЕГОРИИ С ЦВЕТАМИ ⭐
const CATEGORY_CONFIG: Record<string, { name: string; icon: typeof Building2; color: string }> = {
  museum: { name: "Музей", icon: Building2, color: "#8b5cf6" },
  hotel: { name: "Гостиница", icon: Hotel, color: "#3b82f6" },
  restaurant: { name: "Ресторан", icon: UtensilsCrossed, color: "#22c55e" },
  cafe: { name: "Кафе", icon: Coffee, color: "#f97316" },
  park: { name: "Парк", icon: TreePine, color: "#14b8a6" },
  theater: { name: "Театр", icon: Theater, color: "#ec4899" },
  medical: { name: "Медицина", icon: Stethoscope, color: "#ef4444" },
  spa: { name: "СПА/Оздоровление", icon: Flower2, color: "#06b6d4" },
  monument: { name: "Памятник", icon: Landmark, color: "#6366f1" },
  shopping: { name: "Торговый центр", icon: ShoppingBag, color: "#eab308" },
  sports: { name: "Спорт", icon: Dumbbell, color: "#84cc16" },
  nature: { name: "Природа", icon: Mountain, color: "#0ea5e9" },
  culture: { name: "Культура", icon: Palette, color: "#f43f5e" },
  entertainment: { name: "Развлечения", icon: Ticket, color: "#d946ef" },
  education: { name: "Образование", icon: GraduationCap, color: "#0284c7" },
}

// Метаданные категорий доступности
const ACCESS_META: { id: string; name: string; icon: typeof Building2 }[] = [
  { id: "mobility", name: "Передвижение", icon: Accessibility },
  { id: "vision_impaired", name: "Нарушения зрения", icon: Eye },
  { id: "hearing_impaired", name: "Нарушения слуха", icon: Ear },
  { id: "deaf_mute", name: "Глухонемые", icon: Ear },
  { id: "dietary", name: "Питание", icon: Utensils },
  { id: "cardiovascular", name: "Сердечно-сосудистые", icon: Heart },
  { id: "respiratory", name: "Дыхательная система", icon: Wind },
  { id: "mental", name: "Ментальные особенности", icon: Brain },
  { id: "family", name: "Семьи с детьми", icon: Users },
  { id: "ethnomedicine", name: "Народная медицина", icon: Sparkles },
  { id: "health", name: "Отдых с пользой", icon: Hospital },
]

// ⭐ ФУНКЦИЯ СОЗДАНИЯ ИКОНКИ С ЦВЕТОМ КАТЕГОРИИ ⭐
function getCategoryMarkerIcon(category: string) {
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
  
  // ⭐ БЕРЁМ ЦВЕТ ИЗ CATEGORY_CONFIG ⭐
  const pinColor = CATEGORY_CONFIG[category]?.color || "#B86A18";

  return L.divIcon({
    className: "custom-marker-wrapper",
    html: `<div style="position: relative; width: 36px; height: 48px; filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));">
      <svg width="36" height="48" viewBox="0 0 36 48" style="position: absolute; top: 0; left: 0;">
        <path d="M 18 2 C 9.163 2 2 9.163 2 18 C 2 31 18 46 18 46 C 18 46 34 31 34 18 C 34 9.163 26.837 2 18 2 Z" fill="${pinColor}" stroke="white" stroke-width="2"/>
      </svg>
      <div style="position: absolute; top: 9px; left: 0; width: 100%; display: flex; justify-content: center; align-items: center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          ${iconPath}
        </svg>
      </div>
    </div>`,
    iconSize: [36, 48],
    iconAnchor: [18, 46], 
    popupAnchor: [0, -46], 
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

interface SidebarContentProps {
  activeLayers: string[]
  searchQuery: string
  filteredObjectsCount: number
  toggleLayer: (id: string) => void
  resetFilters: () => void
  setSearchQuery: (query: string) => void
  onClose?: () => void
  objects: MapObject[]
  onPlaceSelect?: (id: string) => void
  getBadgeColor: (obj: MapObject) => string
}

function SidebarContent({
  activeLayers,
  searchQuery,
  filteredObjectsCount,
  toggleLayer,
  resetFilters,
  setSearchQuery,
  onClose,
  objects,
  onPlaceSelect,
  getBadgeColor
}: SidebarContentProps) {
  const basePath = process.env.NODE_ENV === 'production' ? '/site-test-map' : ''
  const [showAllFilters, setShowAllFilters] = useState(false);

  return (
    <div className="flex h-full flex-col bg-[var(--color-bg-white)] overflow-hidden">
      {onClose && (
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-card-border)] lg:hidden bg-[var(--color-bg-white)] z-20">
          <h2 className="font-sangha text-2xl text-[var(--color-green-dark)] leading-none pt-1">Списки и фильтры</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-[var(--color-text-primary)]">
            <X className="h-6 w-6" />
          </Button>
        </div>
      )}

      <div className="flex flex-col px-5 py-4 border-b border-[var(--color-card-border)] bg-[var(--color-bg-white)] shadow-sm z-10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-text-secondary)]" />
          <input
            type="text"
            placeholder="Поиск места..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-card-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:bg-[var(--color-bg-white)] transition-all"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-[var(--color-bg-primary)]">
        <div className="p-5 bg-[var(--color-bg-white)] border-b border-[var(--color-card-border)]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-bold text-[var(--color-green-dark)]">Кому подходит:</span>
            {activeLayers.length > 1 && (
              <button onClick={resetFilters} className="text-xs text-[var(--color-accent)] hover:underline flex items-center gap-1 font-medium">
                <RotateCcw className="size-3" /> Сбросить
              </button>
            )}
          </div>
          
          {/* Фильтры "Кому подходит" */}
          <div className="flex flex-wrap gap-2">
            {(() => {
              const VISIBLE_FILTERS_COUNT = 4;
              const visibleFilters = showAllFilters 
                ? CATEGORY_FILTERS 
                : CATEGORY_FILTERS.slice(0, VISIBLE_FILTERS_COUNT);
              const hiddenCount = CATEGORY_FILTERS.length - VISIBLE_FILTERS_COUNT;
              
              return (
                <>
                  {visibleFilters.map((filter) => {
                    const IconComponent = filter.icon;
                    const isActive = activeLayers.includes(filter.id);
                    return (
                      <button
                        key={filter.id}
                        onClick={() => toggleLayer(filter.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
                          isActive 
                            ? "bg-[var(--color-accent)]/10 border-[var(--color-accent)] text-[var(--color-text-primary)] shadow-sm" 
                            : "bg-[var(--color-bg-white)] border-[var(--color-card-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/50"
                        }`}
                      >
                        <IconComponent className="size-3.5" style={{ color: isActive ? FILTER_COLORS[filter.id] : 'currentColor' }} />
                        <span className="text-xs font-bold">{filter.name}</span>
                      </button>
                    );
                  })}
                  
                  {!showAllFilters && hiddenCount > 0 && (
                    <button
                      onClick={() => setShowAllFilters(true)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border bg-[var(--color-bg-white)] border-[var(--color-card-border)] text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-all"
                    >
                      <span className="text-xs font-bold">+{hiddenCount}</span>
                    </button>
                  )}
                  
                  {showAllFilters && (
                    <button
                      onClick={() => setShowAllFilters(false)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border bg-[var(--color-bg-white)] border-[var(--color-card-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/50 transition-all"
                    >
                      <span className="text-xs font-bold">Скрыть</span>
                    </button>
                  )}
                </>
              );
            })()}
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div className="text-sm font-bold text-[var(--color-text-secondary)] px-1 mb-1">
            Найдено мест: {filteredObjectsCount}
          </div>
          
          {objects.length === 0 && (
            <p className="p-6 text-center text-sm text-[var(--color-text-secondary)]">Ничего не найдено. Измените фильтры или поисковый запрос.</p>
          )}
          
          {objects.map((obj) => {
            const CatIcon = CATEGORY_CONFIG[obj.category]?.icon || MapPin
            const color = getBadgeColor(obj)
            const groups = ACCESS_META.filter((m) => obj.layers.includes(m.id))
            return (
              <button
                key={obj.id}
                onClick={() => onPlaceSelect?.(obj.id)}
                className="flex w-full items-start gap-4 border border-[var(--color-card-border)] rounded-xl bg-[var(--color-bg-white)] p-4 text-left transition-all hover:border-[var(--color-accent)]/50 hover:shadow-md"
              >
                <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full border border-[var(--color-card-border)]" style={{ backgroundColor: `${color}15` }}>
                  <CatIcon className="size-5" style={{ color }} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-[var(--color-text-primary)] leading-snug">{obj.name}</div>
                  {obj.address && (
                    <div className="mt-1 flex items-start gap-1 text-xs text-[var(--color-text-secondary)]">
                      <MapPin className="mt-0.5 h-3 w-3 flex-shrink-0 text-[var(--color-accent)]" />
                      <span className="line-clamp-1">{obj.address}</span>
                    </div>
                  )}
                  {groups.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {groups.map((m) => {
                        const Icon = m.icon
                        return (
                          <span
                            key={m.id}
                            title={m.name}
                            className="flex items-center gap-1.5 px-2 py-1 rounded-full border border-[var(--color-card-border)]"
                            style={{ backgroundColor: `${FILTER_COLORS[m.id]}15` }}
                          >
                            <Icon className="size-3.5" style={{ color: FILTER_COLORS[m.id] }} />
                            <span className="text-xs font-bold text-[var(--color-text-primary)]">{m.name}</span>
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
    </div>
  )
}

// Компонент попапа с адаптивным дизайном
function CustomPopupContent({ obj, onPlaceSelect, getBadgeColor, basePath }: {
  obj: MapObject;
  onPlaceSelect?: (id: string) => void;
  getBadgeColor: (obj: MapObject) => string;
  basePath: string;
}) {
  const groups = ACCESS_META.filter((m) => obj.layers.includes(m.id));
  const [showAllGroups, setShowAllGroups] = useState(false);
  
  const visibleGroups = showAllGroups ? groups : groups.slice(0, 4);
  const hiddenCount = groups.length - 4;
  
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-[var(--color-bg-white)] shadow-lg max-h-[80vh] w-[85vw] sm:w-[320px] md:w-[380px]">
      {/* Фото */}
      <div className="relative h-32 w-full flex-shrink-0">
        <img
          src={obj.photos && obj.photos.length > 0 ? obj.photos[0] : `${basePath}/img/placeholder.jpg`}
          alt={obj.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = `${basePath}/img/placeholder.jpg`;
          }}
        />
      </div>

      {/* Контент с прокруткой */}
      <div className="p-3 sm:p-4 space-y-2 overflow-y-auto max-h-[300px] sm:max-h-[400px]">
        <div>
          <Badge 
            className="mb-2 text-white border-0 shadow-sm text-xs sm:text-sm" 
            style={{ backgroundColor: getBadgeColor(obj) }}
          >
            {CATEGORY_CONFIG[obj.category]?.name || obj.category}
          </Badge>
          <h3 className="text-sm sm:text-base font-bold text-[var(--color-text-primary)] leading-tight">
            {obj.name}
          </h3>
        </div>

        <div className="text-xs sm:text-sm text-[var(--color-text-secondary)] space-y-1.5">
          {obj.address && (
            <div className="flex items-start gap-1.5">
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0 text-[var(--color-accent)]" />
              <span className="line-clamp-2">{obj.address}</span>
            </div>
          )}
          {obj.workingHours && (
            <div className="flex items-start gap-1.5">
              <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0 text-[var(--color-accent)]" />
              <span className="line-clamp-1 text-xs sm:text-sm">{obj.workingHours}</span>
            </div>
          )}
        </div>

        {/* Значки доступности */}
        {groups.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {visibleGroups.map((m) => {
              const Icon = m.icon
              return (
                <span
                  key={m.id}
                  className="flex items-center gap-1 px-1.5 py-0.5 rounded-full border border-[var(--color-card-border)]"
                  style={{ backgroundColor: `${FILTER_COLORS[m.id]}15` }}
                >
                  <Icon className="size-2.5 sm:size-3" style={{ color: FILTER_COLORS[m.id] }} />
                  <span className="text-[8px] sm:text-[10px] font-bold text-[var(--color-text-primary)] hidden xs:inline">
                    {m.name}
                  </span>
                </span>
              )
            })}
            
            {!showAllGroups && hiddenCount > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowAllGroups(true);
                }}
                className="flex items-center gap-1 px-1.5 py-0.5 rounded-full border border-[var(--color-card-border)] hover:border-[var(--color-accent)] transition-all"
                style={{ backgroundColor: `${FILTER_COLORS.inclusive}15` }}
              >
                <span className="text-[8px] sm:text-[10px] font-bold text-[var(--color-accent)]">
                  +{hiddenCount}
                </span>
              </button>
            )}
            
            {showAllGroups && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowAllGroups(false);
                }}
                className="flex items-center gap-1 px-1.5 py-0.5 rounded-full border border-[var(--color-card-border)] hover:border-[var(--color-accent)] transition-all"
              >
                <span className="text-[8px] sm:text-[10px] font-bold text-[var(--color-text-secondary)]">
                  Скрыть
                </span>
              </button>
            )}
          </div>
        )}

        {onPlaceSelect && (
          <div className="pt-2 border-t border-[var(--color-card-border)]">
            <Button 
              className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white rounded-xl font-bold py-2.5 sm:py-3 text-xs sm:text-sm"
              onClick={() => onPlaceSelect(obj.id)}
            >
              Подробнее
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AccessibleYakutiaMap({ onPlaceSelect }: AccessibleYakutiaMapProps) {

const basePath = process.env.NODE_ENV === 'production' ? '/site-test-map' : ''
  const router = useRouter();
  const [objects, setObjects] = useState<MapObject[]>([])
  const [activeLayers, setActiveLayers] = useState<string[]>(["inclusive"])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isHighContrast, setIsHighContrast] = useState(false);

  // Отслеживаем высококонтрастный режим
  useEffect(() => {
    const checkHighContrast = () => {
      const isHC = document.documentElement.classList.contains('high-contrast');
      setIsHighContrast(isHC);
    };
    
    checkHighContrast();
    
    const observer = new MutationObserver(checkHighContrast);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Функция переключения высококонтрастного режима
  const toggleAccessibility = () => {
    const newState = !isHighContrast;
    setIsHighContrast(newState);
    
    if (newState) {
      document.documentElement.classList.add('high-contrast', 'large-font');
    } else {
      document.documentElement.classList.remove('high-contrast', 'large-font');
    }
  };

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
    if (!obj.coordinates) return false
    const matchesSearch = searchQuery.trim() === "" ||
      obj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      obj.description.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;
    return obj.layers.some((layer) => activeLayers.includes(layer))
  })

  const getBadgeColor = useCallback((obj: MapObject) => {
    for (const layer of obj.layers) {
      if (activeLayers.includes(layer) && FILTER_COLORS[layer]) return FILTER_COLORS[layer]
    }
    return FILTER_COLORS.inclusive
  }, [activeLayers])

  return (
    <div className="relative flex h-full w-full overflow-hidden bg-[var(--color-bg-primary)]">
      
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-[1001] lg:hidden backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
      )}

<div
  className={`fixed inset-y-0 left-0 w-full max-w-[85vw] z-[1002] transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl`}
  style={{ transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }}
>
        <SidebarContent
          activeLayers={activeLayers}
          searchQuery={searchQuery}
          filteredObjectsCount={filteredObjects.length}
          toggleLayer={toggleLayer}
          resetFilters={resetFilters}
          setSearchQuery={setSearchQuery}
          onClose={() => setMobileMenuOpen(false)}
          objects={filteredObjects}
          onPlaceSelect={onPlaceSelect}
          getBadgeColor={getBadgeColor}
        />
      </div>

      <header className="absolute left-0 right-0 top-0 z-[1000] lg:hidden h-16 bg-[var(--color-bg-white)] border-b border-[var(--color-card-border)] shadow-sm flex items-center px-2 md:px-4 gap-1 md:gap-2 justify-between">
        <button onClick={() => router.push("/")} className="flex items-center gap-1 md:gap-2 hover:opacity-80 transition-opacity flex-shrink-0 min-w-0">
          <img 
            src={`${basePath}/img/logo_homus.png`} 
            alt="Логотип Доступная Якутия" 
            className="h-7 md:h-8 w-auto object-contain"
          />
          <span 
            className={`font-sangha text-base md:text-xl leading-tight pt-1 ${
              isHighContrast ? 'text-white' : 'text-[var(--color-green-dark)]'
            }`}
          >
            Доступная Якутия
          </span>
        </button>
        
        <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
          {/* Кнопка "глаз" для мобильной версии */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleAccessibility}
            className={`${isHighContrast ? 'text-white hover:bg-white/20' : ''} w-8 h-8 md:w-10 md:h-10`}
            title="Версия для слабовидящих"
          >
            <Eye className="size-4 md:size-5" />
          </Button>
          
          <button 
            onClick={() => setMobileMenuOpen(true)} 
            className="px-2 md:px-4 py-2 rounded-full bg-[var(--color-accent)] text-white shadow-md hover:bg-[var(--color-accent-hover)] flex items-center gap-1 md:gap-2 font-bold text-xs md:text-sm flex-shrink-0"
            aria-label="Меню"
          >
            <Menu className="size-3 md:size-4" />
            <span className="hidden xs:inline">Списки</span>
            <span className="xs:hidden">Фильтры</span>
          </button>
        </div>
      </header>

      <aside className="hidden lg:flex h-full w-[400px] flex-shrink-0 flex-col border-r border-[var(--color-card-border)] shadow-xl z-10 bg-[var(--color-bg-white)]">
        <div className="flex items-center gap-4 bg-[var(--color-bg-white)] border-b border-[var(--color-card-border)] px-6 py-6 text-[var(--color-text-primary)] shadow-sm cursor-pointer hover:bg-[var(--color-bg-primary)] transition-colors" onClick={() =>router.push("/")}>
          <img 
            src={`${basePath}/img/logo_homus.png`} 
            alt="Логотип Доступная Якутия" 
            className="h-12 w-auto object-contain"
          />
          <div>
            <h1 className={`text-2xl font-sangha tracking-tight ${isHighContrast ? 'text-white' : 'text-[var(--color-green-dark)]'}`}>
              Доступная Якутия
            </h1>
            <p className="text-sm text-[var(--color-text-secondary)]">Вернуться на главную</p>
          </div>
        </div>
        
        <SidebarContent
          activeLayers={activeLayers}
          searchQuery={searchQuery}
          filteredObjectsCount={filteredObjects.length}
          toggleLayer={toggleLayer}
          resetFilters={resetFilters}
          setSearchQuery={setSearchQuery}
          objects={filteredObjects}
          onPlaceSelect={onPlaceSelect}
          getBadgeColor={getBadgeColor}
        />
      </aside>

      <main className="relative flex-1 pt-[64px] lg:pt-0 bg-[var(--color-bg-primary)]">
        <MapContainer 
          attributionControl={false} 
          center={CONFIG.mapCenter} 
          zoom={CONFIG.defaultZoom} 
          minZoom={CONFIG.minZoom} 
          maxZoom={CONFIG.maxZoom} 
          className="h-full w-full z-0" 
          zoomControl={true}
        >
          <AttributionControl prefix={false} />
          <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
          />
          {filteredObjects.map((obj) => (
            <Marker key={obj.id} position={obj.coordinates!} icon={getCategoryMarkerIcon(obj.category)}>
              <Popup 
                maxWidth={400} 
                minWidth={280} 
                className="custom-popup"
              >
                <CustomPopupContent 
                  obj={obj} 
                  onPlaceSelect={onPlaceSelect} 
                  getBadgeColor={getBadgeColor} 
                  basePath={basePath} 
                />
              </Popup>
            </Marker>
          ))}
          {filteredObjects.length > 0 && <MapBoundsController objects={filteredObjects} />}
        </MapContainer>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:hidden pointer-events-none z-[400]">
          <Badge variant="secondary" className="px-5 py-3 text-sm font-bold shadow-lg bg-[var(--color-bg-white)]/90 backdrop-blur-md border border-[var(--color-card-border)] text-[var(--color-text-primary)] rounded-full">
            <MapPin className="h-4 w-4 mr-2 text-[var(--color-accent)]" /> Найдено: {filteredObjects.length}
          </Badge>
        </div>
      </main>
    </div>
  )
}