import { lazy, Suspense } from 'react';
import { Header } from '@/components/Header';
import { UrgencyTicker } from '@/components/UrgencyTicker';
import { Hero } from '@/components/Hero';
import { TrustBadges } from '@/components/TrustBadges';
import { Services } from '@/components/Services';
import { LazySection, SectionPlaceholder } from '@/components/LazySection';

// Lazy load below-fold heavy components to reduce initial JS execution
const ReviewWidget = lazy(() => import('@/components/ReviewWidget').then(m => ({ default: m.ReviewWidget })));
const HowItWorks = lazy(() => import('@/components/HowItWorks').then(m => ({ default: m.HowItWorks })));
const CouponCountdown = lazy(() => import('@/components/CouponCountdown').then(m => ({ default: m.CouponCountdown })));
const MidCTA = lazy(() => import('@/components/MidCTA').then(m => ({ default: m.MidCTA })));
const BrandLogos = lazy(() => import('@/components/BrandLogos').then(m => ({ default: m.BrandLogos })));
const ContactForm = lazy(() => import('@/components/ContactForm').then(m => ({ default: m.ContactForm })));
const RecentProjects = lazy(() => import('@/components/RecentProjects').then(m => ({ default: m.RecentProjects })));
const FinalCTA = lazy(() => import('@/components/FinalCTA').then(m => ({ default: m.FinalCTA })));
const CompareQuoteCTA = lazy(() => import('@/components/CompareQuoteCTA').then(m => ({ default: m.CompareQuoteCTA })));
const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));
const StickyCallBar = lazy(() => import('@/components/StickyCallBar').then(m => ({ default: m.StickyCallBar })));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Critical above-the-fold components - loaded immediately */}
      <UrgencyTicker />
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        
        {/* Below-fold components - deferred loading for better TBT */}
        <Suspense fallback={<SectionPlaceholder height={600} />}>
          <LazySection rootMargin="400px">
            <ReviewWidget />
          </LazySection>
        </Suspense>
        
        <Suspense fallback={<SectionPlaceholder height={400} />}>
          <LazySection rootMargin="300px">
            <HowItWorks />
          </LazySection>
        </Suspense>
        
        <Suspense fallback={<SectionPlaceholder height={500} />}>
          <LazySection rootMargin="300px">
            <CouponCountdown />
          </LazySection>
        </Suspense>
        
        <Suspense fallback={<SectionPlaceholder height={400} />}>
          <LazySection rootMargin="300px">
            <MidCTA />
          </LazySection>
        </Suspense>
        
        <Suspense fallback={<SectionPlaceholder height={200} />}>
          <LazySection rootMargin="300px">
            <BrandLogos />
          </LazySection>
        </Suspense>
        
        <Suspense fallback={<SectionPlaceholder height={500} />}>
          <LazySection rootMargin="300px">
            <ContactForm />
          </LazySection>
        </Suspense>
        
        <Suspense fallback={<SectionPlaceholder height={400} />}>
          <LazySection rootMargin="300px">
            <RecentProjects />
          </LazySection>
        </Suspense>
        
        <Suspense fallback={<SectionPlaceholder height={300} />}>
          <LazySection rootMargin="300px">
            <CompareQuoteCTA />
          </LazySection>
        </Suspense>
        
        <Suspense fallback={<SectionPlaceholder height={400} />}>
          <LazySection rootMargin="300px">
            <FinalCTA />
          </LazySection>
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <LazySection rootMargin="200px">
          <Footer />
        </LazySection>
      </Suspense>
      
      {/* StickyCallBar loads after scroll - already scroll-gated */}
      <Suspense fallback={null}>
        <StickyCallBar />
      </Suspense>
    </div>
  );
};

export default Index;
