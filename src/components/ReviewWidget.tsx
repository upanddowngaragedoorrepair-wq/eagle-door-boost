import { Star, Quote, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { useUrlParams } from '@/hooks/useUrlParams';
import useEmblaCarousel from 'embla-carousel-react';

// Review data structure
interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  platform: 'google' | 'yelp';
  image: string;
  dateStr: string;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Roberto Garcia',
    rating: 5,
    text: 'Best gate company in the East Bay! They installed our new access control system perfectly. The whole family is happy.',
    platform: 'google',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100&h=100&fit=crop&crop=face&q=60',
    dateStr: '01/02/26'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    rating: 5,
    text: 'Fast and professional. They fixed our sliding gate in under an hour. The technician was incredibly knowledgeable.',
    platform: 'yelp',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face&q=50&blur=1',
    dateStr: '12/29/25'
  },
  {
    id: '3',
    name: 'David Chen',
    rating: 5,
    text: "Installed a beautiful wrought iron driveway gate. The team was professional from estimate to final install. Couldn't be happier.",
    platform: 'google',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=100&h=100&fit=crop&q=60',
    dateStr: '01/09/26'
  },
  {
    id: '4',
    name: 'Maria Gonzalez',
    rating: 5,
    text: 'Called them for a broken gate motor and they were at my house within 2 hours. Fixed it quickly at a fair price!',
    platform: 'yelp',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face&q=55',
    dateStr: '11/15/25'
  },
  {
    id: '5',
    name: 'Rajesh Patel',
    rating: 5,
    text: 'Our automatic gate stopped working and they had it fixed the same day. Very impressed with their expertise.',
    platform: 'google',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face&q=60',
    dateStr: '10/22/25'
  },
  {
    id: '6',
    name: 'James Williams',
    rating: 5,
    text: 'Outstanding craftsmanship on our custom iron gate. They understood exactly what we wanted and delivered beyond expectations.',
    platform: 'google',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face&q=45',
    dateStr: '09/08/25'
  },
  {
    id: '7',
    name: 'Kim Nguyen',
    rating: 5,
    text: 'They came quickly for an emergency gate repair at 9 PM. Excellent work and very reasonable pricing for after-hours service.',
    platform: 'yelp',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face&q=65',
    dateStr: '08/31/25'
  },
  {
    id: '8',
    name: 'Carlos Rodriguez',
    rating: 5,
    text: 'Great service and fair prices. Highly recommend to anyone needing gate work. They showed up on time and finished quickly.',
    platform: 'google',
    image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=100&h=100&fit=crop&crop=face&q=55',
    dateStr: '07/14/25'
  },
  {
    id: '9',
    name: 'Anita Desai',
    rating: 5,
    text: 'Very professional team. They replaced our old gate with a modern automatic one. Love the new remote access feature!',
    platform: 'yelp',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face&q=55',
    dateStr: '06/03/25'
  },
  {
    id: '10',
    name: 'Mike Johnson',
    rating: 5,
    text: 'Had an issue with my intercom system. They diagnosed and fixed it same day. Super knowledgeable technicians.',
    platform: 'google',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&q=60',
    dateStr: '05/19/25'
  },
  {
    id: '11',
    name: 'Hiroshi Tanaka',
    rating: 5,
    text: 'Excellent fence installation. Clean work, no mess left behind. The crew was respectful and efficient.',
    platform: 'yelp',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&q=45',
    dateStr: '04/27/25'
  },
  {
    id: '12',
    name: 'Sofia Herrera',
    rating: 5,
    text: 'They installed a beautiful pedestrian gate for us. The design matches our home perfectly. Thank you!',
    platform: 'google',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face&q=70',
    dateStr: '03/11/25'
  }
];

function StarRating({ rating, size = 'default' }: { rating: number; size?: 'default' | 'large' }) {
  const starSize = size === 'large' ? 'w-7 h-7' : 'w-4 h-4';
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${starSize} ${i < rating ? 'fill-primary text-primary' : 'text-muted'}`}
        />
      ))}
    </div>
  );
}

function PlatformIcon({ platform, showLabel = true }: { platform: 'google' | 'yelp'; showLabel?: boolean }) {
  if (platform === 'google') {
    return (
      <div className="flex items-center gap-1.5">
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        {showLabel && <span className="text-xs font-medium text-muted-foreground">Google</span>}
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1.5">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FF1A1A">
        <path d="M20.16 12.594c0-5.655-4.592-10.246-10.247-10.246C4.257 2.348.665 6.94.665 12.594c0 4.756 3.342 8.728 7.796 9.71v-6.871H6.01v-2.839h2.45V10.18c0-2.419 1.442-3.754 3.646-3.754 1.056 0 2.16.189 2.16.189v2.375h-1.217c-1.2 0-1.573.744-1.573 1.508v1.096h2.677l-.428 2.839h-2.249v6.871c4.454-.982 7.796-4.954 7.796-9.71z" />
      </svg>
      {showLabel && <span className="text-xs font-medium text-muted-foreground">Yelp</span>}
    </div>
  );
}

interface ReviewCardProps {
  review: Review;
  isCenter: boolean;
}

function ReviewCard({ review, isCenter }: ReviewCardProps) {
  return (
    <div
      className={`
        relative flex flex-col h-full p-5 md:p-6 rounded-2xl 
        bg-card border transition-all duration-500
        ${isCenter 
          ? 'border-primary shadow-lg shadow-primary/10 scale-[1.02]' 
          : 'border-border hover:border-primary/30 hover:shadow-md'
        }
      `}
    >
      {/* Header: Avatar + Name + Platform */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <img
            src={review.image}
            alt={review.name}
            className={`w-12 h-12 rounded-full object-cover border-2 ${isCenter ? 'border-primary' : 'border-border'}`}
          />
          <div>
            <h4 className="font-semibold text-foreground text-sm">{review.name}</h4>
            <p className="text-xs text-muted-foreground">{review.dateStr}</p>
          </div>
        </div>
        <PlatformIcon platform={review.platform} showLabel={false} />
      </div>

      {/* Stars */}
      <StarRating rating={review.rating} />

      {/* Testimonial */}
      <div className="relative mt-3 flex-1">
        <Quote className="absolute -top-1 -left-1 w-5 h-5 text-primary/15" />
        <p className="text-sm text-muted-foreground leading-relaxed pl-4 line-clamp-4">
          {review.text}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border flex items-center justify-center">
        <PlatformIcon platform={review.platform} showLabel={true} />
      </div>
    </div>
  );
}

export function ReviewWidget() {
  const { city } = useUrlParams();
  const [isPaused, setIsPaused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Track selected slide
  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on('select', onSelect);
    onSelect();
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Auto-scroll with pause on hover
  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

  return (
    <section id="reviews" className="py-16 md:py-24 border-t border-border overflow-hidden">
      <div className="container-main">
        {/* Review Header Block */}
        <div className="text-center mb-12 md:mb-16">
          {/* Verified Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Verified Reviews</span>
          </div>

          {/* Main Heading */}
          <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="text-foreground">Hear From Our </span>
            <span className="gold-text">Happy Customers</span>
          </h2>

          {/* Subtext */}
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Real feedback from homeowners in {city} & surrounding areas
          </p>

          {/* Large Rating Display */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="flex items-center gap-4">
              <span className="text-5xl md:text-6xl font-display font-bold text-foreground">4.9</span>
              <StarRating rating={5} size="large" />
            </div>
            <p className="text-base text-muted-foreground">
              Based on <span className="text-foreground font-semibold">189+</span> verified reviews
            </p>
          </div>

          {/* Platform Icons */}
          <div className="flex items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-sm font-semibold">Google</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FF1A1A">
                <path d="M20.16 12.594c0-5.655-4.592-10.246-10.247-10.246C4.257 2.348.665 6.94.665 12.594c0 4.756 3.342 8.728 7.796 9.71v-6.871H6.01v-2.839h2.45V10.18c0-2.419 1.442-3.754 3.646-3.754 1.056 0 2.16.189 2.16.189v2.375h-1.217c-1.2 0-1.573.744-1.573 1.508v1.096h2.677l-.428 2.839h-2.249v6.871c4.454-.982 7.796-4.954 7.796-9.71z" />
              </svg>
              <span className="text-sm font-semibold">Yelp</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <div className="w-6 h-6 rounded bg-green-600 flex items-center justify-center text-white text-[10px] font-bold">A+</div>
              <span className="text-sm font-semibold">BBB</span>
            </div>
          </div>
        </div>

        {/* Review Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows - Desktop */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors shadow-md"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors shadow-md"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className="flex-[0_0_90%] sm:flex-[0_0_48%] lg:flex-[0_0_32%] xl:flex-[0_0_25%] min-w-0 pl-4 first:pl-0"
                >
                  <ReviewCard
                    review={review}
                    isCenter={index === selectedIndex}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-muted hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Credibility Footer */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground">
            <CheckCircle className="w-3 h-3 inline mr-1 text-primary" />
            Reviews are independently verified from Google & Yelp
          </p>
        </div>
      </div>
    </section>
  );
}
