import { useState, useEffect, useRef, useMemo } from 'react';
import { Clock, Scissors } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
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
  discount: '$250 Off'
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
  const { phoneLink } = useLocation2();
  const [timeLeft, setTimeLeft] = useState(getTimeUntilEndOfMonth());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Only run timer when component is visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          intervalRef.current = setInterval(() => {
            setTimeLeft(getTimeUntilEndOfMonth());
          }, 1000);
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('coupon-section');
    if (section) observer.observe(section);
    
    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  
  const { days, hours, minutes, seconds } = useMemo(() => ({
    days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
    hours: Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
    minutes: Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60)),
    seconds: Math.floor(timeLeft % (1000 * 60) / 1000)
  }), [timeLeft]);
  
  const currentMonth = useMemo(() => 
    new Date().toLocaleString('default', { month: 'long' }).toUpperCase()
  , []);
  
  return (
    <section id="coupon-section" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30 pointer-events-none" />
      
      <div className="container-main relative">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-destructive text-destructive-foreground shadow-lg shadow-destructive/30">
            <span className="text-xl">🔥</span>
            <span className="text-base font-bold uppercase tracking-wider">Limited Time Only</span>
            <span className="text-xl">🔥</span>
          </div>
        </div>

        {/* Headline - BIGGER */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-center mb-6 tracking-tight">
          <span className="text-foreground">{currentMonth}</span>{' '}
          <span className="gold-text">EXCLUSIVE</span>{' '}
          <span className="text-foreground">COUPONS</span>
        </h2>
        
        <p className="text-center text-lg md:text-xl mb-3">
          <span className="text-destructive font-bold">DON'T MISS OUT!</span>{' '}
          <span className="text-muted-foreground">These deals expire at midnight on the last day of {new Date().toLocaleString('default', { month: 'long' })}.</span>
        </p>
        <p className="text-center text-muted-foreground mb-10 text-base">
          Screenshot coupon to technician for instant savings.
        </p>

        {/* Countdown Timer - Enhanced */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary border border-border shadow-lg">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <span className="text-base text-muted-foreground font-semibold">Offers expire in:</span>
          </div>
        </div>

        <div className="flex justify-center gap-4 md:gap-6 mb-16">
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
          }].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-card border-2 border-border flex items-center justify-center mb-3 shadow-xl shadow-black/20">
                <span className="text-4xl md:text-5xl font-display font-bold text-foreground">
                  {String(item.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-sm text-muted-foreground uppercase tracking-wider font-bold">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Coupon Cards Grid - Enhanced */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {coupons.map((coupon, index) => (
            <a 
              key={index} 
              href={phoneLink} 
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-dashed border-primary/50 hover:border-primary transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-2xl hover:-translate-y-2"
            >
              <img 
                src={coupon.image} 
                alt={coupon.label} 
                loading="lazy" 
                decoding="async" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              
              {/* Scissors Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm">
                <Scissors className="w-5 h-5 text-primary rotate-90" />
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-base text-primary font-bold uppercase tracking-wide mb-2">{coupon.label}</p>
                <p className="text-4xl md:text-5xl font-display font-bold text-foreground">{coupon.discount}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-muted-foreground">
          * Must be mentioned at time of booking. Cannot be combined with other offers.
        </p>
      </div>
    </section>
  );
}

export default CouponCountdown;
