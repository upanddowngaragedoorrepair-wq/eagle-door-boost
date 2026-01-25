import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const reviews = [
  {
    name: 'Jennifer Mitchell',
    location: 'Walnut Creek, CA',
    rating: 5,
    text: 'Fast and professional. They fixed our sliding gate in under an hour. The technician was incredibly knowledgeable and left everything spotless.',
    platform: 'google',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Michael Thompson',
    location: 'Danville, CA',
    rating: 5,
    text: 'Great service and fair prices. Highly recommend to anyone needing gate work. They showed up on time and finished quickly.',
    platform: 'yelp',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Sarah Johnson',
    location: 'Lafayette, CA',
    rating: 5,
    text: 'They came quickly for an emergency gate repair at 9 PM. Excellent work and very reasonable pricing for after-hours service.',
    platform: 'google',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'David Chen',
    location: 'Orinda, CA',
    rating: 5,
    text: 'Installed a beautiful wrought iron driveway gate. The team was professional from estimate to final install. Couldn\'t be happier.',
    platform: 'google',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-primary text-primary' : 'text-muted'}`}
        />
      ))}
    </div>
  );
}

function PlatformBadge({ platform }: { platform: string }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
      {platform === 'google' ? (
        <>
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span>Google</span>
        </>
      ) : (
        <>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FF1A1A">
            <path d="M20.16 12.594c0-5.655-4.592-10.246-10.247-10.246C4.257 2.348.665 6.94.665 12.594c0 4.756 3.342 8.728 7.796 9.71v-6.871H6.01v-2.839h2.45V10.18c0-2.419 1.442-3.754 3.646-3.754 1.056 0 2.16.189 2.16.189v2.375h-1.217c-1.2 0-1.573.744-1.573 1.508v1.096h2.677l-.428 2.839h-2.249v6.871c4.454-.982 7.796-4.954 7.796-9.71z"/>
          </svg>
          <span>Yelp</span>
        </>
      )}
    </div>
  );
}

export function ReviewWidget() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container-main">
        {/* Summary Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm font-medium text-primary">Verified Reviews</span>
          </div>
          
          <h2 className="section-heading mb-4">
            Hear From Our <span className="gold-text">Happy Customers</span>
          </h2>

          {/* Star Summary */}
          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-display font-bold text-foreground">4.9</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <p className="text-muted-foreground">Based on <span className="text-foreground font-semibold">2,500+</span> verified reviews</p>
          </div>

          {/* Platform Icons */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-sm font-medium">Google</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FF1A1A">
                <path d="M12.002 0C5.374 0 0 5.373 0 12s5.374 12 12.002 12C18.63 24 24 18.627 24 12S18.63 0 12.002 0zm5.312 17.18c-.382.382-.944.596-1.584.596H8.268c-.64 0-1.202-.214-1.584-.596-.382-.382-.596-.944-.596-1.584v-7.19c0-.64.214-1.202.596-1.584.382-.382.944-.596 1.584-.596h7.462c.64 0 1.202.214 1.584.596.382.382.596.944.596 1.584v7.19c0 .64-.214 1.202-.596 1.584z"/>
              </svg>
              <span className="text-sm font-medium">Yelp</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-6 h-6 rounded bg-green-600 flex items-center justify-center text-white text-xs font-bold">A+</div>
              <span className="text-sm font-medium">BBB</span>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`card-premium p-6 rounded-2xl transition-all duration-500 ${
                index === activeIndex ? 'ring-2 ring-primary/50 scale-[1.02]' : ''
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
              </div>
              
              <StarRating rating={review.rating} />
              
              <div className="relative mt-4">
                <Quote className="absolute -top-1 -left-1 w-6 h-6 text-primary/20" />
                <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                  {review.text}
                </p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border">
                <PlatformBadge platform={review.platform} />
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? 'w-6 bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
