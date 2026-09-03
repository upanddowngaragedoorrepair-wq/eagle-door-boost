import { Suspense } from 'react';
import { lazyRetry } from '@/lib/lazyRetry';
import { Header } from '@/components/Header';
import { UrgencyTicker } from '@/components/UrgencyTicker';
import { Hero } from '@/components/Hero';
import { TrustProofSection } from '@/components/TrustProofSection';
import { Services } from '@/components/Services';
import { VideoTestimonials } from '@/components/VideoTestimonials';
import { CallBand } from '@/components/CallBand';
import { LazySection, SectionPlaceholder } from '@/components/LazySection';

// Lazy load below-fold sections
const BrandLogos = lazyRetry(() => import('@/components/BrandLogos').then(m => ({ default: m.BrandLogos })));
const CouponSection = lazyRetry(() => import('@/components/CouponSection').then(m => ({ default: m.CouponSection })));
const FriendlyQuoteCTA = lazyRetry(() => import('@/components/FriendlyQuoteCTA').then(m => ({ default: m.FriendlyQuoteCTA })));
const RecentProjects = lazyRetry(() => import('@/components/RecentProjects').then(m => ({ default: m.RecentProjects })));
const BeforeAfter = lazyRetry(() => import('@/components/BeforeAfter').then(m => ({ default: m.BeforeAfter })));
const ReviewWidget = lazyRetry(() => import('@/components/ReviewWidget').then(m => ({ default: m.ReviewWidget })));
const TrustBadges = lazyRetry(() => import('@/components/TrustBadges').then(m => ({ default: m.TrustBadges })));
const ServiceAreaMap = lazyRetry(() => import('@/components/ServiceAreaMap').then(m => ({ default: m.ServiceAreaMap })));
const FinalCTA = lazyRetry(() => import('@/components/FinalCTA').then(m => ({ default: m.FinalCTA })));
const ContactForm = lazyRetry(() => import('@/components/ContactForm').then(m => ({ default: m.ContactForm })));
const Footer = lazyRetry(() => import('@/components/Footer').then(m => ({ default: m.Footer })));
const StickyCallBar = lazyRetry(() => import('@/components/StickyCallBar').then(m => ({ default: m.StickyCallBar })));
const PopupBookingForm = lazyRetry(() => import('@/components/PopupBookingForm').then(m => ({ default: m.PopupBookingForm })));

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <UrgencyTicker />
      <Header />
      <main>
        {/* Above-fold: call-first hero */}
        <Hero />
        <TrustProofSection />
        <Services />

        <CallBand
          headline="Get Your Free Estimate Today"
          location="band_services"
          subline="Free estimates • No obligation"
          stat={{ percent: 96, label: 'of repair calls completed on the first visit' }}
        />

        {/* Below-fold: proof first, then projects and offers */}
        <VideoTestimonials />

        <Suspense fallback={<SectionPlaceholder height={600} />}>
          <LazySection rootMargin="400px">
            <ReviewWidget />
          </LazySection>
        </Suspense>

        <CallBand
          headline="Talk to a real technician — not a call center."
          location="band_testimonials"
        />

        <Suspense fallback={<SectionPlaceholder height={400} />}>
          <LazySection rootMargin="300px">
            <RecentProjects />
          </LazySection>
        </Suspense>

        <Suspense fallback={<SectionPlaceholder height={500} />}>
          <LazySection rootMargin="300px">
            <BeforeAfter />
          </LazySection>
        </Suspense>

        <CallBand headline="Want this for your driveway? Let's talk." location="band_before_after" />


        <Suspense fallback={<SectionPlaceholder height={400} />}>
          <LazySection rootMargin="300px">
            <CouponSection />
          </LazySection>
        </Suspense>

        <CallBand
          headline="Claim your discount over the phone."
          location="band_coupon"
          subline="Free estimates • No obligation"
        />

        <Suspense fallback={<SectionPlaceholder height={200} />}>
          <LazySection rootMargin="300px">
            <BrandLogos />
          </LazySection>
        </Suspense>

        <Suspense fallback={<SectionPlaceholder height={400} />}>
          <LazySection rootMargin="300px">
            <TrustBadges />
          </LazySection>
        </Suspense>

        <Suspense fallback={<SectionPlaceholder height={400} />}>
          <LazySection rootMargin="300px">
            <ServiceAreaMap />
          </LazySection>
        </Suspense>

        <Suspense fallback={<SectionPlaceholder height={300} />}>
          <LazySection rootMargin="300px">
            <FriendlyQuoteCTA />
          </LazySection>
        </Suspense>

        <Suspense fallback={<SectionPlaceholder height={400} />}>
          <LazySection rootMargin="300px">
            <FinalCTA />
          </LazySection>
        </Suspense>

        <Suspense fallback={<SectionPlaceholder height={500} />}>
          <LazySection rootMargin="300px">
            <ContactForm />
          </LazySection>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <LazySection rootMargin="200px">
          <Footer />
        </LazySection>
      </Suspense>

      <Suspense fallback={null}>
        <StickyCallBar />
      </Suspense>

      <Suspense fallback={null}>
        <PopupBookingForm />
      </Suspense>
    </div>
  );
};

export default Index;
