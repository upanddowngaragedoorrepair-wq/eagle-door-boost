import { lazy, Suspense } from 'react';
import { Header } from '@/components/Header';
import { UrgencyTicker } from '@/components/UrgencyTicker';
import { Hero } from '@/components/Hero';
import { TrustProofSection } from '@/components/TrustProofSection';
import { LazySection, SectionPlaceholder } from '@/components/LazySection';

// Eager load above-fold
import { TrustBadges } from '@/components/TrustBadges';
import { Services } from '@/components/Services';

// Lazy load below-fold sections
const BrandLogos = lazy(() => import('@/components/BrandLogos').then(m => ({ default: m.BrandLogos })));
const MidCTA = lazy(() => import('@/components/MidCTA').then(m => ({ default: m.MidCTA })));
const ReviewWidget = lazy(() => import('@/components/ReviewWidget').then(m => ({ default: m.ReviewWidget })));
const ContactForm = lazy(() => import('@/components/ContactForm').then(m => ({ default: m.ContactForm })));
const RecentProjects = lazy(() => import('@/components/RecentProjects').then(m => ({ default: m.RecentProjects })));
const FinalCTA = lazy(() => import('@/components/FinalCTA').then(m => ({ default: m.FinalCTA })));
const ServiceAreaMap = lazy(() => import('@/components/ServiceAreaMap').then(m => ({ default: m.ServiceAreaMap })));
const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));
const StickyCallBar = lazy(() => import('@/components/StickyCallBar').then(m => ({ default: m.StickyCallBar })));

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <UrgencyTicker />
      <Header />
      <main>
        {/* Hero → Trust Bar → Why Choose Us → Services (above-fold priority) */}
        <Hero />
        <TrustProofSection />
        <TrustBadges />
        <Services />

        {/* Brand logos marquee */}
        <Suspense fallback={<SectionPlaceholder height={100} />}>
          <LazySection rootMargin="300px">
            <BrandLogos />
          </LazySection>
        </Suspense>

        {/* CTA Strip */}
        <Suspense fallback={<SectionPlaceholder height={200} />}>
          <LazySection rootMargin="300px">
            <MidCTA />
          </LazySection>
        </Suspense>

        {/* Reviews */}
        <Suspense fallback={<SectionPlaceholder height={500} />}>
          <LazySection rootMargin="400px">
            <ReviewWidget />
          </LazySection>
        </Suspense>

        {/* Form */}
        <Suspense fallback={<SectionPlaceholder height={500} />}>
          <LazySection rootMargin="300px">
            <ContactForm />
          </LazySection>
        </Suspense>

        {/* Gallery */}
        <Suspense fallback={<SectionPlaceholder height={400} />}>
          <LazySection rootMargin="300px">
            <RecentProjects />
          </LazySection>
        </Suspense>

        {/* Service Area Map */}
        <Suspense fallback={<SectionPlaceholder height={400} />}>
          <LazySection rootMargin="300px">
            <ServiceAreaMap />
          </LazySection>
        </Suspense>

        {/* FAQ + Final CTA */}
        <Suspense fallback={<SectionPlaceholder height={600} />}>
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

      <Suspense fallback={null}>
        <StickyCallBar />
      </Suspense>
    </div>
  );
};

export default Index;
