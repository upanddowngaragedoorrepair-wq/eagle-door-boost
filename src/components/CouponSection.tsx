import { Phone, Wrench, DoorOpen, Settings } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import couponBg from '@/assets/coupon-bg.webp';

const coupons = [
{
  id: '#2451',
  title: 'GATE REPAIR SERVICE',
  subtitle: 'Valid for any gate repair service',
  discount: '5%',
  icon: Wrench
},
{
  id: '#2452',
  title: 'GATE INSTALLATION',
  subtitle: 'Valid for any gate installation',
  discount: '10%',
  icon: DoorOpen
},
{
  id: '#2453',
  title: 'GATE MAINTENANCE',
  subtitle: 'Valid for any gate maintenance',
  discount: '5%',
  icon: Settings
}];


export function CouponSection() {
  const { phoneFormatted, phoneLink } = useLocation2();

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <img
        src={couponBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.15]"
        loading="lazy"
        decoding="async" />

      <div className="absolute inset-0 bg-background/80 opacity-50" />
      <div className="container-main relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Redeem Our Special Coupons
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Save on your next gate service. Print or mention these coupons when you call.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {coupons.map((coupon) => {
            const Icon = coupon.icon;
            return (
              <div
                key={coupon.id}
                className="relative bg-card rounded-xl border-2 border-dashed border-primary/40 p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow overflow-hidden">

                {/* Decorative scissors */}
                <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-muted px-3 py-0.5 rounded-b-lg">
                  <span className="text-xs text-muted-foreground">✂ - - - - -</span>
                </div>

                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mt-4 mb-3">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-1">
                  {coupon.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">{coupon.subtitle}</p>

                <div className="flex items-baseline gap-1 mb-3">
                  <span className="font-display text-5xl font-extrabold text-primary">{coupon.discount}</span>
                  <span className="font-display text-2xl font-bold text-primary">OFF</span>
                </div>

                <div className="text-primary font-bold text-xs mb-2">
                  Printable Coupon {coupon.id}
                </div>

                <p className="text-[10px] text-muted-foreground leading-tight">
                  Free service call on all coupon offers.<br />
                  Not good with any other offer or discount.
                </p>
              </div>);

          })}
        </div>

        <div className="text-center">
          <a
            href={phoneLink}
            className="btn-cta inline-flex items-center gap-2 px-8 py-4 text-base">

            <Phone className="w-5 h-5" />
            Call Us {phoneFormatted}
          </a>
        </div>
      </div>
    </section>);

}