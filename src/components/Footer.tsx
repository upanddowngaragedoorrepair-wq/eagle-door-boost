import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { ParamLink } from '@/components/NavLink';

export function Footer() {
  const { city, phoneFormatted, phoneLink } = useLocation2();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 md:py-20 border-t border-border bg-secondary/30 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none" />
      
      <div className="container-main relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <ParamLink to="/" className="flex items-center gap-4 mb-6">
              <img alt="Eagle Automatic Gate" className="w-16 h-16" src="/lovable-uploads/63204ed7-0e01-4872-934a-d80ac91915ee.png" />
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground uppercase">
                  Eagle Automatic
                </h3>
                <p className="text-sm text-primary font-bold uppercase tracking-wider">Gate & Door</p>
              </div>
            </ParamLink>
            <p className="text-lg text-muted-foreground max-w-md mb-5 leading-relaxed">
              Premium automatic gate installation, repair, and access control services. 
              Serving Your Area & The Greater Bay Area with expert technicians and quality workmanship.
            </p>
            <p className="text-base font-bold text-primary">
              ★ Family Owned & Operated ★
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg text-foreground mb-6 uppercase tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href={phoneLink} className="flex items-center gap-3 text-lg text-muted-foreground hover:text-primary transition-colors font-semibold">
                  <Phone className="w-5 h-5 text-primary" />
                  {phoneFormatted}
                </a>
              </li>
              <li>
                <a href="mailto:info@eaglegate.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  info@eaglegate.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  Serving {city} & Area
                </span>
              </li>
              <li>
                <span className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  Open Daily 7AM-8PM
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg text-foreground mb-6 uppercase tracking-wide">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><ParamLink to="/gate-repair" className="hover:text-primary transition-colors">Gate Repair</ParamLink></li>
              <li><ParamLink to="/driveway-gates" className="hover:text-primary transition-colors">Driveway Gates</ParamLink></li>
              <li><ParamLink to="/automatic-gates" className="hover:text-primary transition-colors">Sliding Gates</ParamLink></li>
              <li><ParamLink to="/automatic-gates" className="hover:text-primary transition-colors">Swing Gates</ParamLink></li>
              <li><ParamLink to="/access-control" className="hover:text-primary transition-colors">Access Control</ParamLink></li>
              <li><ParamLink to="/fences" className="hover:text-primary transition-colors">Commercial Gates</ParamLink></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Eagle Automatic Gate & Door. All rights reserved. License #1138855</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
