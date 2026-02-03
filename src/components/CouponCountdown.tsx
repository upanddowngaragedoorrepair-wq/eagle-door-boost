import { useState, useEffect } from 'react';
import { Clock, Scissors } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';
import gateRepair from '@/assets/gate-repair.webp';
import gateDriveway from '@/assets/gate-driveway.webp';
import gateSwing from '@/assets/gate-swing.webp';
import gateAccessControl from '@/assets/gate-access-control.webp';
function getTimeUntilEndOfMonth() {
  const now = new Date();
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
  return endOfMonth.getTime() - now.getTime();
}
const coupons = [{
  image: gateRepair,
  label: 'Gate Repair',
  discount: '10% OFF'
}, {
  image: gateAccessControl,
  label: 'Access Control',
  discount: '10% OFF'
}, {
  image: gateDriveway,
  label: 'New Gates',
  discount: '$250 OFF'
}, {
  image: gateSwing,
  label: 'New Customer',
  discount: '10% OFF'
}];
export function CouponCountdown() {
  const {
    phoneLink
  } = useUrlParams();
  const [timeLeft, setTimeLeft] = useState(getTimeUntilEndOfMonth());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilEndOfMonth());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor(timeLeft % (1000 * 60) / 1000);
  const currentMonth = new Date().toLocaleString('default', {
    month: 'long'
  }).toUpperCase();
  return <section className="py-20 md:py-28 bg-background">
      <div className="container-main">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-destructive text-destructive-foreground">
            <span className="text-lg">🔥</span>
            <span className="text-sm font-bold uppercase tracking-wide">Limited Time Only</span>
            <span className="text-lg">🔥</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="section-heading text-4xl md:text-5xl lg:text-6xl mb-4">
          <span className="text-foreground">{currentMonth}</span>{' '}
          <span className="gold-text">EXCLUSIVE</span>{' '}
          <span className="text-foreground">COUPONS</span>
        </h2>
        
        <p className="text-center text-lg mb-2">
          <span className="text-destructive font-bold">DON'T MISS OUT!</span>{' '}
          <span className="text-muted-foreground">These deals expire at midnight on the last day of {new Date().toLocaleString('default', {
            month: 'long'
          })}.</span>
        </p>
        <p className="text-center text-muted-foreground mb-8">
            screenshot coupon to technician for instant savings.
        </p>

        {/* Countdown Timer - Bob's Style */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary border border-border">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Offers expire in:</span>
          </div>
        </div>

        <div className="flex justify-center gap-3 md:gap-5 mb-14">
          {[{
          value: days,
          label: 'DAYS'
        }, {
          value: hours,
          label: 'HOURS'
        }, {
          value: minutes,
          label: 'MINS'
        }, {
          value: seconds,
          label: 'SECS'
        }].map((item, index) => <div key={index} className="text-center">
              <div className="w-18 h-18 md:w-24 md:h-24 rounded-2xl bg-card border-2 border-border flex items-center justify-center mb-2">
                <span className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  {String(item.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{item.label}</span>
            </div>)}
        </div>

        {/* Coupon Cards Grid - Bob's Exact Style */}
        <div className="grid md:grid-cols-2 gap-5 mb-10 max-w-4xl mx-auto">
          {coupons.map((coupon, index) => <a key={index} href={phoneLink} className="group relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-dashed border-primary/50 hover:border-primary transition-all duration-300">
              <img src={coupon.image} alt={coupon.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
              
              {/* Scissors Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Scissors className="w-4 h-4 text-primary rotate-90" />
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-1">{coupon.label}</p>
                <p className="text-3xl md:text-4xl font-display font-bold text-foreground">{coupon.discount}</p>
              </div>
            </a>)}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground">
          * Must Be Mentioned at time of booking Cannot be combined with other offers
        </p>
      </div>
    </section>;
}