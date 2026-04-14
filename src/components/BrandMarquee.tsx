import { useRef, useState } from 'react';
import authorizedBadge from '@/assets/authorized-distributor-badge.png';

interface Logo {
  name: string;
  image?: string;
}

interface BrandMarqueeProps {
  logos: Logo[];
  speed?: number;
}

export function BrandMarquee({ logos, speed = 30 }: BrandMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 md:py-20 bg-card border-t border-border overflow-hidden">
      <div className="container-main mb-10">
        <div className="flex items-center justify-center gap-3">
          <img src={authorizedBadge} alt="Authorized Distributor" width={120} height={120} className="w-[89px] h-[89px] md:w-[120px] md:h-[120px] object-contain -rotate-12 drop-shadow-lg" />
          <p className="text-sm tracking-wide uppercase font-display md:text-2xl font-extrabold text-primary">
            Authorized Service Provider for Leading Gate Brands
          </p>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}>

        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        <div
          ref={containerRef}
          className="flex items-center gap-6 md:gap-10 will-change-transform"
          style={{
            animation: `marquee-scroll ${speed}s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running',
            width: 'fit-content',
            transform: 'translateZ(0)'
          }}>

          {duplicatedLogos.map((logo, index) =>
          <div key={`${logo.name}-${index}`} className="flex-shrink-0 group">
              <div className="w-32 h-20 md:w-44 md:h-28 lg:w-52 lg:h-32 rounded-xl bg-background border border-border flex items-center justify-center px-4 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/40 group-hover:shadow-md cursor-pointer">
                {logo.image ?
              <img
                src={logo.image}
                alt={`${logo.name} logo`}
                loading="lazy"
                decoding="async"
                className="max-w-full max-h-full object-contain transition-all duration-300"
                draggable={false} /> :


              <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary font-display font-bold text-sm md:text-base">
                      {logo.name.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="text-xs md:text-sm font-medium text-muted-foreground text-center leading-tight">
                      {logo.name}
                    </span>
                  </div>
              }
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}