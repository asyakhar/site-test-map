import fs from 'fs';
import path from 'path';

export interface MapObject {
  id: string;
  name: string;
  category: string;
  layers: string[];
  /** [широта, долгота]; null, если координаты не заданы (не показывается на карте) */
  coordinates: [number, number] | null;
  address?: string;
  workingHours?: string;
  description: string;
  /** Текст по категориям доступности; ключи совпадают с id слоёв/фильтров */
  accessibility: Record<string, string>;
  contraindications?: string;
  tickets?: string;
  benefits?: string;
  notes?: string;
  photos: string[];
  contacts: {
    phone?: string;
    website?: string;
    yandexMap?: string;
  };
}

export async function fetchObjects(): Promise<MapObject[]> {
  // Просто читаем файл напрямую — работает и в dev, и в production
  const filePath = path.join(process.cwd(), 'public', 'data', 'objects.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}