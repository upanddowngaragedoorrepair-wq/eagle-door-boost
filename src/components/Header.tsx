import { Phone, Menu, X, ChevronDown, Clock } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ParamLink } from '@/components/NavLink';
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
    phoneLink,
    withParams
  } = useLocation2();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  return <header className="fixed top-8 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-2xl">
      <div className="container-main">
        <div className="flex items-center justify-between h-18 md:h-22">
          {/* Logo */}
          <ParamLink to="/" className="flex items-center gap-3">
            <img alt="Eagle Automatic Gate" className="w-12 h-12 md:w-16 md:h-16" src="/lovable-uploads/9b6ef84e-639b-4196-91f6-4fcec82647cc.webp" />
            <div className="hidden sm:block">
              <h1 className="font-display text-lg md:text-2xl font-bold tracking-tight text-foreground uppercase">
                Eagle Automatic
              </h1>
              <p className="text-xs md:text-sm text-primary font-semibold -mt-0.5 uppercase tracking-wider">Gate & Door</p>
            </div>
          </ParamLink>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(item => item.children ? <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide">
                  {item.label}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-card border border-border rounded-2xl shadow-2xl py-3 min-w-[220px]">
                    {item.children.map(child => <ParamLink key={child.href} to={child.href} className={`block px-5 py-3 text-sm font-semibold transition-colors hover:bg-primary/10 hover:text-primary ${location.pathname === child.href ? 'text-primary bg-primary/5' : 'text-foreground'}`}>
                        {child.label}
                      </ParamLink>)}
                  </div>
                </div>
              </div> : <ParamLink key={item.href} to={item.href} className={`text-sm font-bold transition-colors uppercase tracking-wide ${location.pathname === item.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                {item.label}
              </ParamLink>)}
          </nav>

          {/* Phone CTAs */}
          <div className="flex items-center gap-4">
            {/* Open Now badge in header */}
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-bold text-green-400">Open Now</span>
              <span className="text-[10px] text-muted-foreground">7am–7pm</span>
            </div>
            
            <a href={phoneLink} className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span className="text-sm font-bold">{phoneFormatted}</span>
            </a>
            <a href={phoneLink} className="btn-cta px-6 py-4 md:px-8 md:py-4 text-sm md:text-base min-h-[52px] md:min-h-[60px]">
              <Phone className="w-5 h-5 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Free Estimate</span>
              <span className="sm:hidden">{phoneFormatted}</span>
            </a>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-foreground hover:text-primary transition-colors">
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-2xl animate-fade-in">
            <nav className="container-main py-6 space-y-2">
              {navItems.map(item => item.children ? <div key={item.label}>
                  <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full px-4 py-4 text-base font-bold text-foreground uppercase tracking-wide">
                    {item.label}
                    <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && <div className="pl-4 space-y-1 bg-secondary/30 rounded-xl mx-2 py-2">
                      {item.children.map(child => <ParamLink key={child.href} to={child.href} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-muted-foreground hover:text-primary transition-colors">
                          {child.label}
                        </ParamLink>)}
                    </div>}
                </div> : <ParamLink key={item.href} to={item.href} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-4 text-base font-bold text-foreground uppercase tracking-wide hover:text-primary transition-colors">
                  {item.label}
                </ParamLink>)}
            </nav>
          </div>}
      </div>
    </header>;
}