import { Phone, Mail, MapPin } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';

export function Footer() {
  const { city, phoneFormatted, phoneLink } = useUrlParams();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 border-t border-border">
      <div className="container-main">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-display font-bold text-xl">E</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Eagle Automatic
                </h3>
                <p className="text-xs text-muted-foreground">Gate & Door</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md mb-4">
              Premium automatic gate installation, repair, and access control services. 
              Serving {city} and surrounding areas with expert technicians and quality workmanship.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href={phoneLink} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  {phoneFormatted}
                </a>
              </li>
              <li>
                <a href="mailto:info@eaglegate.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  info@eaglegate.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  Serving {city}
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Automatic Gate Repair</li>
              <li>Driveway Gate Installation</li>
              <li>Access Control Systems</li>
              <li>Gate Openers & Motors</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Eagle Automatic Gate & Door. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
