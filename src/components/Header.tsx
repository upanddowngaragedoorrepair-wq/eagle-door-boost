import { Phone, Menu, X } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { useState } from 'react';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Service Area', href: '#service-area' },
  { label: 'Contact', href: '#quote-form' },
];

export function Header() {
  const { phoneFormatted, phoneLink } = useLocation2();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-8 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-main">
        <div className="flex items-center justify-between h-18 md:h-22">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3"
          >
            <img
              alt="Eagle Automatic Gate"
              className="w-12 h-12 md:w-16 md:h-16"
              src="/lovable-uploads/9b6ef84e-639b-4196-91f6-4fcec82647cc.webp"
            />
            <div className="hidden sm:block">
              <h1 className="font-display text-lg md:text-2xl font-bold tracking-tight text-foreground uppercase">
                Eagle Automatic
              </h1>
              <p className="text-xs md:text-sm text-primary font-semibold -mt-0.5 uppercase tracking-wider">
                Gate & Door
              </p>
            </div>
          </a>

          {/* Nav - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Open Now + Phone + CTA + Mobile Menu */}
          <div className="flex items-center gap-5">
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold text-green-700">Open Now</span>
              <span className="text-[10px] text-muted-foreground">7AM-8PM</span>
            </div>

            <a href={phoneLink} className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span className="text-sm font-bold">{phoneFormatted}</span>
            </a>

            <a href={phoneLink} className="btn-cta px-6 py-4 md:px-8 md:py-4 text-sm md:text-base min-h-[52px] md:min-h-[60px]">
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">{phoneFormatted}</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-lg animate-fade-in">
            <nav className="container-main py-6 space-y-2">
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-4 py-4 text-base font-bold text-foreground uppercase tracking-wide hover:text-primary transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
