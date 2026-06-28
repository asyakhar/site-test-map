"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onOpenFilters?: () => void; 
}

export default function Header({ onOpenFilters }: HeaderProps) {
    
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const basePath = process.env.NODE_ENV === 'production' ? '/site-test-map' : '';
  useEffect(() => {
    if (document.documentElement.classList.contains('high-contrast')) {
      setHighContrast(true);
    }
  }, []);

  const toggleAccessibility = () => {
    const newState = !highContrast;
    setHighContrast(newState);
    
    if (newState) {
      document.documentElement.classList.add('high-contrast', 'large-font');
    } else {
      document.documentElement.classList.remove('high-contrast', 'large-font');
    }
  };

  const handleOpenFilters = () => {
    if (onOpenFilters) {
      onOpenFilters();
    } else {
      router.push('/'); 
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-colors relative ${
      highContrast 
        ? 'bg-black' 
        : 'bg-[var(--color-bg-primary)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-bg-primary)]/60'
    }`}>
      
      {/* Основная часть хедера */}
      <div className="container mx-auto px-4 h-16 flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <img 
  src={`${basePath}/img/logo_homus.png`} 
  alt="Логотип Доступная Якутия" 
  className="h-10 w-auto object-contain"
/>
          <span 
            className={`${highContrast ? 'text-white' : 'text-[var(--color-header-title)]'} font-sangha`}
            style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)',
              letterSpacing: '0.02em',
            }}
          >
            Доступная Якутия
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          
          <Link href="/advice" className="text-[clamp(0.875rem,1.5vw,1.125rem)] font-bold hover:text-[var(--color-accent)] transition-colors text-[var(--color-text-primary)]">
            Практические советы
          </Link>
          <Link href="/yakutia" className="text-[clamp(0.875rem,1.5vw,1.125rem)] font-bold hover:text-[var(--color-accent)] transition-colors text-[var(--color-text-primary)]">
            О Якутии
          </Link>
          <a href="#about" className="text-[clamp(0.875rem,1.5vw,1.125rem)] font-bold hover:text-[var(--color-accent)] transition-colors text-[var(--color-text-primary)]">
            О проекте
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleAccessibility}
            className={highContrast ? 'text-white hover:bg-white/20' : ''}
            title="Версия для слабовидящих"
          >
            <Eye className="size-5" />
          </Button>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Граница */}
      <div className={`border-b ${highContrast ? 'border-white/30' : 'border-[var(--color-card-border)]'}`} />
      
{/* SVG узор как фон */}
<div 
  className="w-full bg-repeat-x"
  style={{ 
    backgroundImage: `url("${basePath}/img/uzor.svg")`,
    backgroundSize: "auto 30px",
    backgroundPosition: "bottom center",
    height: "30px",
    opacity: highContrast ? 0.3 : 0.7,
    filter: highContrast ? 'invert(1)' : 'none',
  }}
/>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--color-bg-primary)] border-b border-[var(--color-card-border)] shadow-lg py-4 px-4 flex flex-col gap-4 z-20">
         
          <Link href="/advice" className="py-2 text-lg font-bold text-[var(--color-text-primary)]" onClick={() => setIsMobileMenuOpen(false)}>
            Практические советы
          </Link>
          <Link href="/yakutia" className="py-2 text-lg font-bold text-[var(--color-text-primary)]" onClick={() => setIsMobileMenuOpen(false)}>
            О Якутии
          </Link>
          <a href="#about" className="py-2 text-lg font-bold text-[var(--color-text-primary)]" onClick={() => setIsMobileMenuOpen(false)}>
            О проекте
          </a>
          <Button 
            className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-text-white)] mt-2 font-bold py-6 text-lg"
            onClick={() => { router.push('/map'); setIsMobileMenuOpen(false); }}
          >
            Перейти на карту
          </Button>
        </div>
      )}
    </header>
  );
}