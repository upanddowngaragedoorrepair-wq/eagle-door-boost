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
          className="w-full h-full relative block overflow-hidden"
          aria-label="Play video testimonial"
        >
          {/* Sneak-peek frame from the actual video (muted, paused at 0.5s) */}
          <video
            src={`${src}#t=0.5`}
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* Dark gradient for play-button contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60 pointer-events-none" />

          {/* Animated rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-24 h-24 rounded-full border-2 border-white/40 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-32 h-32 rounded-full border border-white/25 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite_0.5s]" />
          </div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40 group-hover:scale-110 transition-all duration-300">
              <Play className="w-7 h-7 text-primary-foreground ml-1" />
            </div>
          </div>

          {/* Label */}
          <span className="absolute bottom-3 left-0 right-0 z-10 text-center text-xs font-bold text-white tracking-wide uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            {overlayLabels[index] || 'Watch'}
          </span>

          {/* Bottom decorative bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
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
