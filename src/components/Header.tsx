import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import eagleLogo from '@/assets/eagle-logo.webp';
const navItems = [{
  label: 'About Us',
  href: '/about'
}, {
  label: 'Services',
  href: '#',
  children: [{
    label: 'Automatic Gates',
    href: '/automatic-gates'
  }, {
    label: 'Access Control',
    href: '/access-control'
  }, {
    label: 'Gate Repair',
    href: '/gate-repair'
  }, {
    label: 'Driveway Gates',
    href: '/driveway-gates'
  }, {
    label: 'Fences',
    href: '/fences'
  }]
}, {
  label: 'Reviews',
  href: '/#reviews'
}, {
  label: 'Contact',
  href: '/#quote-form'
}];
export function Header() {
  const {
    phoneFormatted,
    phoneLink
  } = useUrlParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  return <header className="fixed top-8 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img alt="Eagle Automatic Gate" className="w-11 h-11 md:w-14 md:h-14" src="/lovable-uploads/ecfdf4be-4e14-4bdb-b997-b4ac57b3caa1.png" />
            <div className="hidden sm:block">
              <h1 className="font-display text-lg md:text-xl font-bold tracking-tight text-foreground uppercase">
                Eagle Automatic
              </h1>
              <p className="text-xs text-primary font-semibold -mt-0.5 uppercase tracking-wider">Gate & Door</p>
            </div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map(item => item.children ? <div key={item.label} className="relative group">
                  <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide">
                    {item.label}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-card border border-border rounded-xl shadow-xl py-2 min-w-[200px]">
                      {item.children.map(child => <Link key={child.href} to={child.href} className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary ${location.pathname === child.href ? 'text-primary bg-primary/5' : 'text-foreground'}`}>
                          {child.label}
                        </Link>)}
                    </div>
                  </div>
                </div> : <Link key={item.href} to={item.href} className={`text-sm font-medium transition-colors uppercase tracking-wide ${location.pathname === item.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                  {item.label}
                </Link>)}
          </nav>

          {/* Phone CTAs */}
          <div className="flex items-center gap-3">
            <a href={phoneLink} className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-semibold">Call Now</span>
            </a>
            <a href={phoneLink} className="btn-cta px-5 py-3 md:px-6 md:py-3.5 text-sm md:text-base min-h-[48px] md:min-h-[56px]">
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Free Estimate</span>
              <span className="sm:hidden">{phoneFormatted}</span>
            </a>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-foreground hover:text-primary transition-colors">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-xl animate-fade-in">
            <nav className="container-main py-4 space-y-2">
              {navItems.map(item => item.children ? <div key={item.label}>
                    <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-foreground uppercase tracking-wide">
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {servicesOpen && <div className="pl-4 space-y-1">
                        {item.children.map(child => <Link key={child.href} to={child.href} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                            {child.label}
                          </Link>)}
                      </div>}
                  </div> : <Link key={item.href} to={item.href} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-foreground uppercase tracking-wide hover:text-primary transition-colors">
                    {item.label}
                  </Link>)}
            </nav>
          </div>}
      </div>
    </header>;
}