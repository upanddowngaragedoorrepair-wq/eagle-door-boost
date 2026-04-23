import { useState, useRef } from 'react';
import { Play, Phone, ShieldCheck, Star } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';

interface VideoItem {
  src: string;
  label: string;
}

const videoTestimonials: VideoItem[] = [
  { src: '/videos/review-1.mp4', label: 'Gate Repair – San Jose' },
  { src: '/videos/review-2.mp4', label: 'Driveway Gate Install' },
  { src: '/videos/review-3.mp4', label: 'Access Control Upgrade' },
  { src: '/videos/review-4.mp4', label: '5-Star Customer Review' },
];

function VideoCard({ src, label }: { src: string; label: string }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => videoRef.current?.play(), 50);
  };

  return (
    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-secondary border border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] group">
      {playing ? (
        <video
          ref={videoRef}
          src={src}
          controls
          playsInline
          className="w-full h-full object-cover"
          onEnded={() => setPlaying(false)}
        />
      ) : (
        <button
          onClick={handlePlay}
          className="w-full h-full relative block overflow-hidden bg-gradient-to-br from-secondary via-muted to-secondary"
          aria-label={`Play video: ${label}`}
        >
          {/* Subtle decorative rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-56 h-56 rounded-full border border-primary/10" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-44 h-44 rounded-full border border-primary/15" />
          </div>

          {/* Circular sneak-peek window */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-primary/40 shadow-[0_10px_40px_-8px_hsl(var(--primary)/0.5)] group-hover:scale-105 group-hover:ring-primary/70 transition-all duration-300">
              <video
                src={`${src}#t=0.5`}
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/35 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 text-primary-foreground ml-0.5" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

          {/* Animated pulse ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-40 h-40 md:w-44 md:h-44 rounded-full border-2 border-primary/40 animate-[pulse_2.2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
          </div>

          {/* Contextual label pill */}
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm text-[11px] md:text-xs font-bold tracking-wide text-white whitespace-nowrap max-w-[90%] truncate border border-white/10">
            {label}
          </span>

          {/* Bottom decorative bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
        </button>
      )}
    </div>
  );
}

export function VideoTestimonials() {
  const { phoneLink, phoneFormatted } = useLocation2();

  return (
    <section className="py-12 md:py-16 bg-[hsl(var(--navy))] relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-main relative">
        {/* Trust signal */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs md:text-sm font-semibold text-white/90">
            <ShieldCheck className="w-4 h-4 text-primary" />
            Trusted by 200+ homeowners in the Bay Area
          </span>
        </div>

        {/* Headline */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-center text-white tracking-tight">
          See <span className="text-primary">Real Customers</span> & Real Results
        </h3>
        <p className="text-center text-white/70 mt-3 mb-8 md:mb-10 text-base md:text-lg">
          Real work. Real clients. Real results.
        </p>

        {/* Video grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
          {videoTestimonials.map((v) => (
            <VideoCard key={v.src} src={v.src} label={v.label} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12 flex flex-col items-center text-center">
          <p className="text-white/90 text-base md:text-lg font-semibold mb-4 flex items-center gap-2">
            <Star className="w-4 h-4 text-primary fill-primary" />
            Need this done? Talk to a specialist now.
            <Star className="w-4 h-4 text-primary fill-primary" />
          </p>
          <a
            href={phoneLink}
            className="btn-cta text-base md:text-lg min-h-[60px] px-8 shadow-[0_4px_30px_-4px_hsl(42_74%_46%/0.5)]"
          >
            <Phone className="w-5 h-5" />
            Call Now: {phoneFormatted}
          </a>
        </div>
      </div>
    </section>
  );
}
