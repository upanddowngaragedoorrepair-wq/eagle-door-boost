import { Shield, Zap, Clock, Star, DollarSign } from 'lucide-react';

const badges = [
  { icon: Zap, text: 'Same Day Service' },
  { icon: Shield, text: 'Free Estimates' },
  { icon: Star, text: '5-Star Rated' },
  { icon: Clock, text: '30-Min Response' },
  { icon: DollarSign, text: 'Best Price Guarantee' },
];

export function PromiseBadges() {
  return (
    <section className="py-10 md:py-14 border-t border-b border-border bg-card">
      <div className="container-main">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-5 py-3 rounded-full bg-background border border-border shadow-sm">
              <badge.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-foreground uppercase tracking-wide">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PromiseBadges;
