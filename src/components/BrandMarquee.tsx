import { useRef, useState } from 'react';

interface Logo {
  name: string;
  image?: string;
}

interface BrandMarqueeProps {
  logos: Logo[];
  speed?: number; // seconds for full loop
}

export function BrandMarquee({ logos, speed = 30 }: BrandMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 md:py-20 bg-[hsl(var(--navy-deep))] border-t border-border overflow-hidden">
      <div className="container-main mb-10">
        <p className="text-center text-sm md:text-base text-muted-foreground tracking-wide uppercase">
          Authorized Service Provider for Leading Gate Brands
        </p>
      </div>

      {/* Marquee Container */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[hsl(var(--navy-deep))] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[hsl(var(--navy-deep))] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track - GPU accelerated */}
        <div
          ref={containerRef}
          className="flex items-center gap-6 md:gap-10 will-change-transform"
          style={{
            animation: `marquee-scroll ${speed}s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running',
            width: 'fit-content',
            transform: 'translateZ(0)', // Force GPU acceleration
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 group"
            >
              <div className="w-32 h-20 md:w-44 md:h-28 lg:w-52 lg:h-32 rounded-xl bg-card/60 border border-border flex items-center justify-center px-4 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/10 cursor-pointer">
                {logo.image ? (
                  <img
                    src={logo.image}
                    alt={`${logo.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                    draggable={false}
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-display font-bold text-sm md:text-base">
                      {logo.name.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="text-xs md:text-sm font-medium text-muted-foreground text-center leading-tight">
                      {logo.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
