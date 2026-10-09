import { useState, useRef, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Play, ShieldCheck, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Slide {
  src: string;
  label: string;
  quote: string;
  highlight: string;
  name?: string;
  location?: string;
}

const slides: Slide[] = [
  {
    src: '/videos/review-1.mp4',
    label: 'Gate Repair',
    quote: 'I was told by 4 different companies to replace everything… Matt repaired it for a fraction of the cost.',
    highlight: 'fraction of the cost',
  },
  {
    src: '/videos/review-2.mp4',
    label: 'Driveway Gate Install',
    quote: 'I chose them because of their 5.0 Yelp rating… They absolutely deserve it.',
    highlight: 'absolutely deserve it',
  },
  {
    src: '/videos/review-3.mp4',
    label: 'Access Control Upgrade',
    quote: 'I was surprised this was completed in just one day.',
    highlight: 'just one day',
  },
  {
    src: '/videos/review-4.mp4',
    label: '5-Star Customer Review',
    quote: 'Called them and they showed up within 45 minutes. Great service, hands down.',
    highlight: 'within 45 minutes',
  },
];

function highlightQuote(quote: string, highlight: string) {
  const index = quote.toLowerCase().indexOf(highlight.toLowerCase());
  if (!highlight || index === -1) return quote;
  return <>{quote.slice(0, index)}<span className={highlight === 'just one day' ? 'testimonials__highlight' : undefined}>{quote.slice(index, index + highlight.length)}</span>{quote.slice(index + highlight.length)}</>;
}

function VideoBlock({ src, label, active, onPlayingChange }: {
  src: string; label: string; active: boolean; onPlayingChange: (playing: boolean) => void;
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (!active) {
      videoRef.current?.pause();
      setPlaying(false);
    }
  }, [active]);

  return (
    <div className="testimonials__video">
      {playing ? (
        <video ref={videoRef} controls autoPlay playsInline
          onPlay={() => onPlayingChange(true)} onPause={() => onPlayingChange(false)}
          onEnded={() => { setPlaying(false); onPlayingChange(false); }}>
          <source src={src.replace('.mp4', '.webm')} type="video/webm" />
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <Button variant="ghost" className="testimonials__video-trigger" aria-label={`Play video: ${label}`}
          onClick={() => { setPlaying(true); onPlayingChange(true); }}>
          <img src={src.replace('/videos/', '/videos/thumbnails/').replace('.mp4', '.webp')}
            alt={`${label} customer video thumbnail`} width={720} height={1280} loading="lazy" />
          <span className="testimonials__play"><Play aria-hidden="true" fill="currentColor" /></span>
        </Button>
      )}
    </div>
  );
}

function TestimonialCard({ slide, active, onPlayingChange }: {
  slide: Slide; active: boolean; onPlayingChange: (playing: boolean) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const card = ref.current;
    if (!card || !active || revealed) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setRevealed(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    observer.observe(card);
    return () => observer.disconnect();
  }, [active, revealed]);

  return (
    <article ref={ref} className={`testimonials__card${revealed ? ' is-revealed' : ''}`} aria-hidden={!active} {...(!active ? { inert: '' } : {})}>
      <div className="testimonials__content">
        <div className="testimonials__stars" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }, (_, i) => <Star key={i} fill="currentColor" aria-hidden="true" />)}
        </div>
        <div className="testimonials__quote-wrap">
          <Quote className="testimonials__decoration" aria-hidden="true" />
          <blockquote className="testimonials__quote">“{highlightQuote(slide.quote, slide.highlight)}”</blockquote>
        </div>
        <div className="testimonials__verified"><ShieldCheck aria-hidden="true" /><span>Verified Customer</span></div>
        <p className="testimonials__identity">{slide.name || slide.label}{slide.location ? `, ${slide.location}` : ''}</p>
      </div>
      <VideoBlock src={slide.src} label={slide.label} active={active} onPlayingChange={onPlayingChange} />
    </article>
  );
}

export function VideoTestimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [interacted, setInteracted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const navigate = useCallback((direction: 'prev' | 'next') => {
    setInteracted(true);
    setPlaying(false);
    if (direction === 'prev') emblaApi?.scrollPrev(); else emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => { setSelectedIndex(emblaApi.selectedScrollSnap()); setPlaying(false); };
    const onPointer = () => setInteracted(true);
    onSelect();
    emblaApi.on('select', onSelect).on('pointerDown', onPointer);
    return () => { emblaApi.off('select', onSelect).off('pointerDown', onPointer); };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || interacted || playing || hovered || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      if (!document.hidden) emblaApi.scrollNext();
    }, 7000);
    return () => window.clearInterval(id);
  }, [emblaApi, interacted, playing, hovered]);

  return (
    <section id="video-testimonials" className="testimonials" aria-labelledby="testimonials-heading">
      <div className="container-main">
        <h3 id="testimonials-heading" className="testimonials__heading">See <span className="gold-text">Real Customers</span> & Real Results</h3>
        <p className="testimonials__subtitle">Real work. Real clients. Real results.</p>
        <div className="testimonials__slider" role="region" aria-roledescription="carousel" aria-label="Customer video testimonials"
          onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setInteracted(true)}>
          <div className="testimonials__viewport" ref={emblaRef}>
            <div className="testimonials__track">
              {slides.map((slide, i) => <div className="testimonials__slide" key={slide.src}>
                <TestimonialCard slide={slide} active={i === selectedIndex} onPlayingChange={setPlaying} />
              </div>)}
            </div>
          </div>
          <nav className="testimonials__navigation" aria-label="Testimonial navigation">
            <Button variant="outline" size="icon" className="testimonials__arrow" title="Previous testimonial" aria-label="Previous testimonial" onClick={() => navigate('prev')}><ChevronLeft /></Button>
            <span className="testimonials__counter" aria-live="polite" aria-atomic="true">{selectedIndex + 1} / {slides.length}</span>
            <Button variant="outline" size="icon" className="testimonials__arrow" title="Next testimonial" aria-label="Next testimonial" onClick={() => navigate('next')}><ChevronRight /></Button>
          </nav>
        </div>
      </div>
    </section>
  );
}
