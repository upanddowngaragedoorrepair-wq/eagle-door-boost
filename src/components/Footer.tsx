import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { Link } from 'react-router-dom';

export function Footer() {
  const { city, phoneFormatted, phoneLink } = useLocation2();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 md:py-20 border-t border-border relative" style={{ background: 'hsl(200, 45%, 13%)' }}>
      <div className="container-main relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 mb-14">
          {/* Brand */}
          <div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-4 mb-6"
            >
              <img alt="Eagle Automatic Gate" className="w-16 h-16" src="/lovable-uploads/63204ed7-0e01-4872-934a-d80ac91915ee.png" />
              <div>
                <h3 className="font-display text-2xl font-bold text-white uppercase">Eagle Automatic</h3>
                <p className="text-sm text-primary font-bold uppercase tracking-wider">Gate & Door</p>
              </div>
            </a>
            <p className="text-lg text-white/70 max-w-md mb-5 leading-relaxed">
              Premium automatic gate installation, repair, and access control services.
              Serving {city} & The Greater Bay Area with expert technicians and quality workmanship.
            </p>
            <p className="text-base font-bold text-primary">★ Family Owned & Operated ★</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6 uppercase tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href={phoneLink} className="flex items-center gap-3 text-lg text-white/70 hover:text-primary transition-colors font-semibold">
                  <Phone className="w-5 h-5 text-primary" />
                  {phoneFormatted}
                </a>
              </li>
              <li>
                <a href="mailto:info@eaglegate.com" className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  info@eaglegate.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-white/70">
                  <MapPin className="w-5 h-5 text-primary" />
                  Serving {city} & The Greater Bay Area
                </span>
              </li>
              <li>
                <span className="flex items-center gap-3 text-white/70">
                  <Clock className="w-5 h-5 text-primary" />
                  Open Daily 7AM-8PM
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors cursor-pointer">Services</a></li>
              <li><a href="#reviews" onClick={(e) => { e.preventDefault(); document.querySelector('#reviews')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors cursor-pointer">Reviews</a></li>
              <li><a href="#service-area" onClick={(e) => { e.preventDefault(); document.querySelector('#service-area')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors cursor-pointer">Service Area</a></li>
              <li><a href="#quote-form" onClick={(e) => { e.preventDefault(); document.querySelector('#quote-form')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors cursor-pointer">Free Estimate</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {currentYear} Eagle Automatic Gate & Door. All rights reserved. License #1138855</p>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
