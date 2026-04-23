import { useState, useRef, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Play, Phone, ShieldCheck, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';

interface Slide {
  src: string;
  label: string;
  quote: string;
  highlight: string;
  author: string;
}

const slides: Slide[] = [
  {
    src: '/videos/review-1.mp4',
    label: 'Gate Repair',
    quote: 'I was told by 4 different companies to replace everything… Matt repaired it for a fraction of the cost.',
    highlight: 'fraction of the cost',
    author: 'Verified Customer',
  },
  {
    src: '/videos/review-2.mp4',
    label: 'Driveway Gate Install',
    quote: 'I chose them because of their 5.0 Yelp rating… They absolutely deserve it.',
    highlight: 'absolutely deserve it',
    author: 'Verified Customer',
  },
  {
    src: '/videos/review-3.mp4',
    label: 'Access Control Upgrade',
    quote: 'I was surprised this was completed in just one day.',
    highlight: 'just one day',
    author: 'Verified Customer',
  },
  {
    src: '/videos/review-4.mp4',
    label: '5-Star Customer Review',
    quote: 'Called them and they showed up within 45 minutes. Great service, hands down.',
    highlight: 'within 45 minutes',
    author: 'Verified Customer',
  },
];

function highlightQuote(quote: string, highlight: string) {
  if (!highlight) return quote;
  const idx = quote.toLowerCase().indexOf(highlight.toLowerCase());
  if (idx === -1) return quote;
  return (
    <>
      {quote.slice(0, idx)}
      <span className="text-primary">{quote.slice(idx, idx + highlight.length)}</span>
      {quote.slice(idx + highlight.length)}
    </>
  );
}

function VideoBlock({ src, label }: { src: string; label: string }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => videoRef.current?.play(), 50);
  };

  return (
    <div className="relative w-full aspect-[9/16] sm:aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden bg-secondary border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] group">
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
          aria-label={`Play video: ${label}`}
        >
          {/* Full video preview as background */}
          <video
            src={`${src}#t=0.5`}
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 pointer-events-none" />

          {/* Centered play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/40 blur-2xl scale-150" />
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-[0_10px_40px_-8px_hsl(var(--primary)/0.7)] group-hover:scale-110 transition-transform duration-300">
                <Play className="w-9 h-9 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
              </div>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/60 animate-[pulse_2.2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
            </div>
          </div>

          {/* Bottom shine bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

        </button>
      )}
    </div>
  );
}

export function VideoTestimonials() {
  const { phoneLink, phoneFormatted } = useLocation2();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Slow autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const id = window.setInterval(() => emblaApi.scrollNext(), 7000);
    const stop = () => window.clearInterval(id);
    const root = emblaApi.rootNode();
    root.addEventListener('mouseenter', stop);
    root.addEventListener('touchstart', stop, { passive: true });
    return () => {
      window.clearInterval(id);
      root.removeEventListener('mouseenter', stop);
      root.removeEventListener('touchstart', stop);
    };
  }, [emblaApi]);

  return (
    <section className="py-12 md:py-20 bg-[hsl(var(--navy))] relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-main relative">
        {/* Trust signal */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs md:text-sm font-semibold text-white/90">
            <ShieldCheck className="w-4 h-4 text-primary" />
            Customer Satisfaction Is Our 1st Priority
          </span>
        </div>

        {/* Headline */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-center text-white tracking-tight">
          See <span className="text-primary">Real Customers</span> & Real Results
        </h3>
        <p className="text-center text-white/70 mt-3 mb-8 md:mb-12 text-base md:text-lg">
          Real work. Real clients. Real results.
        </p>

        {/* Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Arrows - visible on all screens */}
          <button
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="flex absolute left-1 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-4 lg:-translate-x-6 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground/80 hover:bg-primary border border-white/20 hover:border-primary text-white items-center justify-center transition-all backdrop-blur-sm shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="flex absolute right-1 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-4 lg:translate-x-6 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground/80 hover:bg-primary border border-white/20 hover:border-primary text-white items-center justify-center transition-all backdrop-blur-sm shadow-lg"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex">
              {slides.map((s, i) => (
                <div key={s.src} className="flex-[0_0_100%] min-w-0 px-1">
                  <div className="relative rounded-3xl bg-white border border-border overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
                    {/* Big background quote icon */}
                    <Quote
                      className="absolute -top-6 -right-6 md:top-4 md:right-8 w-40 h-40 md:w-56 md:h-56 text-primary/15 pointer-events-none"
                      strokeWidth={1}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 p-5 md:p-8 lg:p-10 items-center relative">
                      {/* Video */}
                      <div className="w-full max-w-md mx-auto lg:max-w-none">
                        <VideoBlock src={s.src} label={s.label} />
                      </div>

                      {/* Quote side */}
                      <div className="flex flex-col text-center lg:text-left">
                        {/* Stars */}
                        <div className="flex justify-center lg:justify-start gap-1 mb-4">
                          {Array.from({ length: 5 }).map((_, k) => (
                            <Star key={k} className="w-5 h-5 md:w-6 md:h-6 text-primary fill-primary" />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-display font-bold text-foreground leading-tight tracking-tight">
                          <span className="text-primary text-3xl md:text-4xl leading-none mr-1">“</span>
                          {highlightQuote(s.quote, s.highlight)}
                          <span className="text-primary text-3xl md:text-4xl leading-none ml-1">”</span>
                        </blockquote>

                        {/* Author */}
                        <div className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-foreground/70 text-sm md:text-base">
                          <ShieldCheck className="w-4 h-4 text-primary" />
                          <span className="font-semibold">{s.author}</span>
                        </div>

                      
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === selectedIndex ? 'w-8 bg-primary' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
