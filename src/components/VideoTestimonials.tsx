import { useState, useRef } from 'react';
import { Play } from 'lucide-react';

const videoTestimonials = [
  '/videos/review-1.mp4',
  '/videos/review-2.mp4',
  '/videos/review-3.mp4',
  '/videos/review-4.mp4',
];

const overlayLabels = ['Watch Story', 'See Review', 'Our Work', 'Happy Client'];

function VideoCard({ src, index }: { src: string; index: number }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => videoRef.current?.play(), 50);
  };

  return (
    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-secondary border border-border shadow-sm group">
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
          aria-label="Play video testimonial"
        >
          {/* Subtle decorative rings in the background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-56 h-56 rounded-full border border-primary/10" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-44 h-44 rounded-full border border-primary/15" />
          </div>

          {/* Circular sneak-peek window with the actual video frame inside */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-primary/40 shadow-[0_10px_40px_-8px_hsl(var(--primary)/0.5)] group-hover:scale-105 group-hover:ring-primary/70 transition-all duration-300">
              <video
                src={`${src}#t=0.5`}
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              {/* Soft inner darkening for play-button contrast */}
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />
              {/* Play button centered inside the circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Animated pulse ring around the circle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-40 h-40 md:w-44 md:h-44 rounded-full border-2 border-primary/40 animate-[pulse_2.2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
          </div>

          {/* Label */}
          <span className="absolute bottom-4 left-0 right-0 z-10 text-center text-xs font-bold tracking-wide uppercase text-foreground/80 group-hover:text-primary transition-colors">
            {overlayLabels[index] || 'Watch'}
          </span>

          {/* Bottom decorative bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </button>
      )}
    </div>
  );
}

export function VideoTestimonials() {
  return (
    <section className="py-12 md:py-16 bg-background border-t border-border">
      <div className="container-main">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-8 text-foreground">
          Video <span className="gradient-text">Testimonials</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {videoTestimonials.map((src, i) => (
            <VideoCard key={i} src={src} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
