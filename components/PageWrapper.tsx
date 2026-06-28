import AppHeader from "@/components/AppHeader";

interface PageWrapperProps {
  children: React.ReactNode;
  onOpenFilters?: () => void;
}

export default function PageWrapper({ children, onOpenFilters }: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <AppHeader onOpenFilters={onOpenFilters} />
      <main className="container mx-auto px-4 py-12 md:py-16">
        {children}
      </main>
    </div>
  );
}