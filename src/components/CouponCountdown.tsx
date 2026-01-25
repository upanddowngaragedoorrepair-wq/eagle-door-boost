import { useState, useEffect } from 'react';
import { Clock, Percent, Phone } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';

function getTimeUntilEndOfMonth() {
  const now = new Date();
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
  return endOfMonth.getTime() - now.getTime();
}

export function CouponCountdown() {
  const { phoneLink } = useUrlParams();
  const [timeLeft, setTimeLeft] = useState(getTimeUntilEndOfMonth());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilEndOfMonth());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  return (
    <section className="py-16 md:py-20 border-t border-border">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-br from-primary/20 via-card to-card border border-primary/30">
          {/* Glow effects */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
          
          <div className="relative">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40">
                <span className="text-lg">🔥</span>
                <span className="text-sm font-bold text-primary uppercase tracking-wide">Limited Time Only</span>
                <span className="text-lg">🔥</span>
              </div>
            </div>

            <h2 className="section-heading text-3xl md:text-4xl mb-3">
              {currentMonth} <span className="gold-text">Exclusive Offers</span>
            </h2>
            
            <p className="text-center text-muted-foreground mb-8 max-w-lg mx-auto">
              Don't miss out! These deals expire at midnight on the last day of {currentMonth}. 
              Mention this offer when you call.
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center gap-3 md:gap-4 mb-10">
              {[
                { value: days, label: 'Days' },
                { value: hours, label: 'Hours' },
                { value: minutes, label: 'Mins' },
                { value: seconds, label: 'Secs' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-background border border-border flex items-center justify-center mb-2">
                    <span className="text-2xl md:text-3xl font-display font-bold text-foreground">
                      {String(item.value).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Offer Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <div className="p-5 rounded-2xl bg-background/80 border border-border text-center">
                <Percent className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display text-2xl font-bold text-foreground mb-1">$75 OFF</div>
                <p className="text-sm text-muted-foreground">Any Gate Repair Over $300</p>
              </div>
              <div className="p-5 rounded-2xl bg-background/80 border border-border text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display text-2xl font-bold text-foreground mb-1">FREE</div>
                <p className="text-sm text-muted-foreground">On-Site Diagnostic</p>
              </div>
              <div className="p-5 rounded-2xl bg-background/80 border border-border text-center">
                <Percent className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display text-2xl font-bold text-foreground mb-1">10% OFF</div>
                <p className="text-sm text-muted-foreground">New Gate Installation</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a href={phoneLink} className="btn-cta">
                <Phone className="w-5 h-5" />
                Claim Your Discount Now
              </a>
              <p className="text-xs text-muted-foreground mt-3">
                Present offer to technician • Cannot be combined
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
