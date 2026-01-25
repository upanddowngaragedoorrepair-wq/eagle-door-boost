import { Phone } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';

export function Header() {
  const { phoneFormatted, phoneLink } = useUrlParams();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-display font-bold text-xl md:text-2xl">E</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-lg md:text-xl font-semibold tracking-tight text-foreground">
                Eagle Automatic
              </h1>
              <p className="text-xs text-muted-foreground -mt-0.5">Gate & Door</p>
            </div>
          </div>

          {/* Phone CTA */}
          <a
            href={phoneLink}
            className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/30 transition-all duration-300 group"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-display font-semibold text-sm md:text-base text-foreground">
              {phoneFormatted}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
