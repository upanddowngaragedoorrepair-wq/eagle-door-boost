import { Phone } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';

export function Header() {
  const { phoneFormatted, phoneLink } = useUrlParams();

  return (
    <header className="fixed top-8 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary to-gold-soft flex items-center justify-center shadow-gold">
              <span className="text-primary-foreground font-display font-bold text-xl md:text-2xl">E</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-lg md:text-xl font-bold tracking-tight text-foreground uppercase">
                Eagle Automatic
              </h1>
              <p className="text-xs text-muted-foreground -mt-0.5 uppercase tracking-wider">Gate & Door</p>
            </div>
          </div>

          {/* Phone CTA - Bob's Style */}
          <a
            href={phoneLink}
            className="flex items-center gap-2.5 px-5 py-2.5 md:px-6 md:py-3 rounded-xl bg-primary hover:bg-primary/90 transition-all duration-300 group shadow-gold"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground group-hover:scale-110 transition-transform" />
            <span className="font-display font-bold text-sm md:text-base text-primary-foreground uppercase tracking-wide">
              {phoneFormatted}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
