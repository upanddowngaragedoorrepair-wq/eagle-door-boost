import { Star, Quote, CheckCircle, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation2 } from '@/contexts/LocationContext';
import useEmblaCarousel from 'embla-carousel-react';

import profile1 from '@/assets/reviews/profile-1.webp';
import profile2 from '@/assets/reviews/profile-2.webp';
import profile3 from '@/assets/reviews/profile-3.webp';
import profile4 from '@/assets/reviews/profile-4.webp';
import profile5 from '@/assets/reviews/profile-5.webp';
import profile6 from '@/assets/reviews/profile-6.webp';
import profile7 from '@/assets/reviews/profile-7.webp';
import profile8 from '@/assets/reviews/profile-8.webp';
import profile9 from '@/assets/reviews/profile-9.webp';
import profile10 from '@/assets/reviews/profile-10.webp';
import profile11 from '@/assets/reviews/profile-11.webp';
import profile12 from '@/assets/reviews/profile-12.webp';
import homeAdvisorLogo from '@/assets/homeadvisor-badge.png';

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  platform: 'google' | 'homeadvisor';
  image: string;
  dateStr: string;
}

const reviews: Review[] = [
  { id: '1', name: 'Roberto Garcia', rating: 5, text: 'Best gate company in the East Bay! They installed our new access control system perfectly. The whole family is happy.', platform: 'google', image: profile1, dateStr: '01/02/26' },
  { id: '2', name: 'Priya Sharma', rating: 5, text: 'Fast and professional. They fixed our sliding gate in under an hour. The technician was incredibly knowledgeable.', platform: 'homeadvisor', image: profile4, dateStr: '12/29/25' },
  { id: '3', name: 'David Chen', rating: 5, text: "Installed a beautiful wrought iron driveway gate. The team was professional from estimate to final install. Couldn't be happier.", platform: 'google', image: profile3, dateStr: '01/09/26' },
  { id: '4', name: 'Maria Gonzalez', rating: 5, text: 'Called them for a broken gate motor and they were at my house within 2 hours. Fixed it quickly at a fair price!', platform: 'homeadvisor', image: profile2, dateStr: '11/15/25' },
  { id: '5', name: 'Rajesh Patel', rating: 5, text: 'Our automatic gate stopped working and they had it fixed the same day. Very impressed with their expertise.', platform: 'google', image: profile5, dateStr: '10/22/25' },
  { id: '6', name: 'James Williams', rating: 5, text: 'Outstanding craftsmanship on our custom iron gate. They understood exactly what we wanted and delivered beyond expectations.', platform: 'google', image: profile6, dateStr: '09/08/25' },
  { id: '7', name: 'Kim Nguyen', rating: 5, text: 'They came quickly for an emergency gate repair at 9 PM. Excellent work and very reasonable pricing for after-hours service.', platform: 'homeadvisor', image: profile9, dateStr: '08/31/25' },
  { id: '8', name: 'Carlos Rodriguez', rating: 5, text: 'Great service and fair prices. Highly recommend to anyone needing gate work. They showed up on time and finished quickly.', platform: 'google', image: profile8, dateStr: '07/14/25' },
  { id: '9', name: 'Anita Desai', rating: 5, text: 'Very professional team. They replaced our old gate with a modern automatic one. Love the new remote access feature!', platform: 'homeadvisor', image: profile7, dateStr: '06/03/25' },
  { id: '10', name: 'Mike Johnson', rating: 5, text: 'Had an issue with my intercom system. They diagnosed and fixed it same day. Super knowledgeable technicians.', platform: 'google', image: profile10, dateStr: '05/19/25' },
  { id: '11', name: 'Hiroshi Tanaka', rating: 5, text: 'Excellent fence installation. Clean work, no mess left behind. The crew was respectful and efficient.', platform: 'homeadvisor', image: profile11, dateStr: '04/27/25' },
  { id: '12', name: 'Ken B', rating: 5, text: 'They installed a beautiful pedestrian gate for us. The design matches our home perfectly. Thank you!', platform: 'google', image: profile12, dateStr: '03/11/25' },
];

function StarRating({ rating, size = 'default' }: { rating: number; size?: 'default' | 'large' }) {
  const starSize = size === 'large' ? 'w-8 h-8' : 'w-5 h-5';
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`${starSize} ${i < rating ? 'fill-primary text-primary' : 'text-border'}`} />
      ))}
    </div>
  );
}

function PlatformIcon({ platform, showLabel = true }: { platform: 'google' | 'homeadvisor'; showLabel?: boolean }) {
  if (platform === 'google') {
    return (
      <div className="flex items-center gap-1.5">
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        {showLabel && <span className="text-sm font-semibold text-muted-foreground">Google</span>}
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1.5">
      <img src={homeAdvisorLogo} alt="Home Advisor" className="w-5 h-5 rounded object-contain" loading="lazy" decoding="async" />
      {showLabel && <span className="text-sm font-semibold text-muted-foreground">Home Advisor</span>}
    </div>
  );
}

function ReviewCard({ review, isCenter }: { review: Review; isCenter: boolean }) {
  return (
    <div className={`relative flex flex-col h-full p-6 md:p-7 rounded-2xl bg-card border transition-all duration-500 ${
      isCenter ? 'border-primary shadow-md scale-[1.02]' : 'border-border hover:border-primary/30 hover:shadow-md shadow-sm'
    }`}>
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <img src={review.image} alt={review.name} loading="lazy" decoding="async" className={`w-14 h-14 rounded-full object-cover border-2 ${isCenter ? 'border-primary' : 'border-border'}`} />
          <div>
            <h4 className="font-bold text-foreground">{review.name}</h4>
            <p className="text-sm text-muted-foreground">{review.dateStr}</p>
          </div>
        </div>
        <PlatformIcon platform={review.platform} showLabel={false} />
      </div>
      <StarRating rating={review.rating} />
      <div className="relative mt-4 flex-1">
        <Quote className="absolute -top-1 -left-1 w-6 h-6 text-primary/15" />
        <p className="text-base text-muted-foreground leading-relaxed pl-5 line-clamp-4">{review.text}</p>
      </div>
      <div className="mt-5 pt-4 border-t border-border flex items-center justify-center">
        <PlatformIcon platform={review.platform} showLabel={true} />
      </div>
    </div>
  );
}

const videoTestimonials = [
  '/videos/review-1.mp4',
  '/videos/review-2.mp4',
  '/videos/review-3.mp4',
  '/videos/review-4.mp4',
];

function VideoCard({ src, index }: { src: string; index: number }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => videoRef.current?.play(), 50);
  };

  const overlayLabels = ['Watch Story', 'See Review', 'Our Work', 'Happy Client'];

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
          className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-secondary via-muted/80 to-secondary relative"
          aria-label="Play video testimonial"
        >
          {/* Animated rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-24 h-24 rounded-full border-2 border-primary/20 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-32 h-32 rounded-full border border-primary/10 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite_0.5s]" />
          </div>

          {/* Play button */}
          <div className="relative z-10 w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-110 group-hover:shadow-primary/40 transition-all duration-300">
            <Play className="w-7 h-7 text-primary-foreground ml-1" />
          </div>

          {/* Label */}
          <span className="relative z-10 mt-4 text-sm font-bold text-foreground/80 tracking-wide uppercase group-hover:text-primary transition-colors duration-300">
            {overlayLabels[index] || 'Watch'}
          </span>

          {/* Bottom decorative bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:via-primary transition-colors duration-300" />
        </button>
      )}
    </div>
  );
}

export function ReviewWidget() {
  const { city } = useLocation2();
  const [isPaused, setIsPaused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', skipSnaps: false, dragFree: false });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isPaused) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

  return (
    <section id="reviews" className="py-[72px] md:py-24 border-t border-border overflow-hidden bg-card">
      <div className="container-main">
        <div className="text-center mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 mb-8">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Verified Reviews</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
            <span className="text-foreground">Hear From Our </span>
            <span className="gold-text">Happy Customers</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Real feedback from homeowners in {city} & Surrounding Areas
          </p>

          <div className="flex flex-col items-center gap-4 mb-10">
            <div className="flex items-center gap-5">
              <span className="text-6xl md:text-7xl font-display font-bold text-foreground">4.9</span>
              <StarRating rating={5} size="large" />
            </div>
            <p className="text-lg text-muted-foreground">
              Based on <span className="text-foreground font-bold">189+</span> verified reviews
            </p>
          </div>

          <div className="flex items-center justify-center gap-10 md:gap-14">
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-base font-bold">Google</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <img src={homeAdvisorLogo} alt="Home Advisor" className="w-7 h-7 rounded object-contain" loading="lazy" decoding="async" />
              <span className="text-base font-bold">Home Advisor</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-7 h-7 rounded bg-green-600 flex items-center justify-center text-white text-xs font-bold">A+</div>
              <span className="text-base font-bold">BBB</span>
            </div>
          </div>
        </div>

        <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <button onClick={scrollPrev} className="hidden md:flex absolute -left-5 lg:-left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card border border-border items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors shadow-md" aria-label="Previous review">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={scrollNext} className="hidden md:flex absolute -right-5 lg:-right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card border border-border items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors shadow-md" aria-label="Next review">
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex will-change-transform">
              {reviews.map((review, index) => (
                <div key={review.id} className="flex-[0_0_90%] sm:flex-[0_0_48%] lg:flex-[0_0_32%] xl:flex-[0_0_25%] min-w-0 pl-5 first:pl-0">
                  <ReviewCard review={review} isCenter={index === selectedIndex} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-10">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${index === selectedIndex ? 'w-10 bg-primary' : 'w-2.5 bg-border hover:bg-muted-foreground/50'}`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="mt-14">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-8 text-foreground">
            Video <span className="gradient-text">Testimonials</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {videoTestimonials.map((src, i) => (
              <VideoCard key={i} src={src} index={i} />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 inline mr-2 text-primary" />
            Reviews are independently verified from Google & Home Advisor
          </p>
        </div>
      </div>
    </section>
  );
}

export default ReviewWidget;
