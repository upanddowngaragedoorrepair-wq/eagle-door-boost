import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';
import eagleLogo from '@/assets/eagle-logo.webp';
export function Footer() {
  const {
    city,
    phoneFormatted,
    phoneLink
  } = useUrlParams();
  const currentYear = new Date().getFullYear();
  return <footer className="py-12 md:py-16 border-t border-border bg-card/30">
      <div className="container-main">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img alt="Eagle Automatic Gate" className="w-14 h-14" src="/lovable-uploads/63204ed7-0e01-4872-934a-d80ac91915ee.png" />
              <div>
                <h3 className="font-display text-xl font-bold text-foreground uppercase">
                  Eagle Automatic
                </h3>
                <p className="text-sm text-primary font-semibold uppercase tracking-wider">Gate & Door</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md mb-4">
              Premium automatic gate installation, repair, and access control services. 
              Serving {city} and surrounding areas with expert technicians and quality workmanship.
            </p>
            <p className="text-sm font-semibold text-primary">
              ★ Family Owned & Operated ★
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 uppercase tracking-wide">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href={phoneLink} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  {phoneFormatted}
                </a>
              </li>
              <li>
                <a href="mailto:info@eaglegate.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  info@eaglegate.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  Serving {city} & Area
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  Open Daily 7AM-8PM  
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 uppercase tracking-wide">Services</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Gate Repair</li>
              <li>Driveway Gates</li>
              <li>Sliding Gates</li>
              <li>Swing Gates</li>
              <li>Access Control</li>
              <li>Commercial Gates</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Eagle Automatic Gate & Door. All rights reserved. License #1138855</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>;
}