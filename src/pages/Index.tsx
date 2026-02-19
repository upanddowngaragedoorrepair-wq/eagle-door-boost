import { lazy, Suspense } from 'react';
import { Header } from '@/components/Header';
import { UrgencyTicker } from '@/components/UrgencyTicker';
import { Hero } from '@/components/Hero';
import { PromiseBadges } from '@/components/PromiseBadges';
import { Services } from '@/components/Services';
import { LazySection, SectionPlaceholder } from '@/components/LazySection';

// Lazy load below-fold sections
const BrandLogos = lazy(() => import('@/components/BrandLogos').then(m => ({ default: m.BrandLogos })));
const RecentProjects = lazy(() => import('@/components/RecentProjects').then(m => ({ default: m.RecentProjects })));
const ReviewWidget = lazy(() => import('@/components/ReviewWidget').then(m => ({ default: m.ReviewWidget })));
const TrustBadges = lazy(() => import('@/components/TrustBadges').then(m => ({ default: m.TrustBadges })));
const ServiceAreaMap = lazy(() => import('@/components/ServiceAreaMap').then(m => ({ default: m.ServiceAreaMap })));
const FinalCTA = lazy(() => import('@/components/FinalCTA').then(m => ({ default: m.FinalCTA })));
const ContactForm = lazy(() => import('@/components/ContactForm').then(m => ({ default: m.ContactForm })));
const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));
const StickyCallBar = lazy(() => import('@/components/StickyCallBar').then(m => ({ default: m.StickyCallBar })));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyTicker />
      <Header />
      <main>
        {/* Above-fold: Hero with inline form */}
        <Hero />
        <PromiseBadges />
        <Services />

        {/* Below-fold: lazy loaded sections */}
        <Suspense fallback={<SectionPlaceholder height={200} />}>
          <LazySection rootMargin="300px">
            <BrandLogos />
          </LazySection>
        </Suspense>

        <Suspense fallback={<SectionPlaceholder height={400} />}>
          <LazySection rootMargin="300px">
            <RecentProjects />
          </LazySection>
        </Suspense>

        <Suspense fallback={<SectionPlaceholder height={600} />}>
          <LazySection rootMargin="400px">
            <ReviewWidget />
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
    </div>
  );
};

export default Index;
