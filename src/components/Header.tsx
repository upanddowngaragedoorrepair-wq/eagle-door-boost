import { Phone, Menu, X } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Service Area', href: '#service-area' },
  { label: 'Contact', href: '#quote-form' },
];

export function Header() {
  const { phoneFormatted, phoneLink } = useLocation2();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    const retryInterval = setInterval(() => {
      const el = document.querySelector(href);
      if (el) {
        clearInterval(retryInterval);
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
    setTimeout(() => clearInterval(retryInterval), 3000);
  };

  return (
    <header className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[hsl(222,47%,11%)]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3"
          >
            <img
              alt="Eagle Automatic Gate"
              width={64}
              height={64}
              className="w-11 h-11 md:w-14 md:h-14"
              src="/lovable-uploads/9b6ef84e-639b-4196-91f6-4fcec82647cc.webp"
              fetchPriority="high"
              decoding="async"
            />
            <div className="hidden sm:block">
              <h1 className="font-display text-base md:text-xl font-bold tracking-tight text-white uppercase leading-tight">
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
                className="text-sm font-bold text-white/70 hover:text-primary transition-colors uppercase tracking-wide cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a href={phoneLink} className="hidden md:flex items-center gap-2 text-white/70 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-bold">{phoneFormatted}</span>
            </a>

            <a href={phoneLink} className="btn-cta px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base min-h-[44px] md:min-h-[48px]">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[hsl(222,47%,11%)]/98 backdrop-blur-md border-b border-white/10 animate-fade-in">
            <nav className="container-main py-4 space-y-1">
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-4 py-3.5 text-base font-bold text-white uppercase tracking-wide hover:text-primary transition-colors cursor-pointer"
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
