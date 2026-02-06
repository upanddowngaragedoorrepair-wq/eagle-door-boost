import { useEffect, useState, useRef, ReactNode, Suspense, lazy, ComponentType } from 'react';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
}

/**
 * Defers rendering of children until they're about to enter the viewport.
 * Critical for reducing TBT and improving LCP by deferring non-critical JS execution.
 */
export function LazySection({ 
  children, 
  fallback = null,
  rootMargin = '200px',
  threshold = 0 
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Use IntersectionObserver to detect when section is approaching viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only need to trigger once
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div ref={ref}>
      {isVisible ? children : fallback}
    </div>
  );
}

/**
 * Placeholder that maintains layout space while content loads.
 * Prevents CLS when lazy sections become visible.
 */
export function SectionPlaceholder({ height = 400 }: { height?: number }) {
  return (
    <div 
      className="w-full bg-secondary/10 animate-pulse rounded-lg"
      style={{ minHeight: height }}
      aria-hidden="true"
    />
  );
}
