import { Phone } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';
import eagleLogo from '@/assets/eagle-logo.webp';

export function Header() {
  const { phoneFormatted, phoneLink } = useUrlParams();

  return (
    <header className="fixed top-8 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={eagleLogo} alt="Eagle Automatic Gate" className="w-11 h-11 md:w-14 md:h-14" />
            <div className="hidden sm:block">
              <h1 className="font-display text-lg md:text-xl font-bold tracking-tight text-foreground uppercase">
                Eagle Automatic
              </h1>
              <p className="text-xs text-primary font-semibold -mt-0.5 uppercase tracking-wider">Gate & Door</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide">
              Services
            </a>
            <a href="#reviews" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide">
              Reviews
            </a>
            <a href="#quote-form" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide">
              Contact
            </a>
          </nav>

          {/* Phone CTAs - Bob's Style */}
          <div className="flex items-center gap-3">
            <a
              href={phoneLink}
              className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-semibold">Call Now</span>
            </a>
            <a
              href={phoneLink}
              className="btn-cta px-5 py-3 md:px-6 md:py-3.5 text-sm md:text-base min-h-[48px] md:min-h-[56px]"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Free Estimate</span>
              <span className="sm:hidden">{phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
