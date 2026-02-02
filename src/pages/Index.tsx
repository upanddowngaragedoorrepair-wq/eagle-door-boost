import { Header } from '@/components/Header';
import { UrgencyTicker } from '@/components/UrgencyTicker';
import { Hero } from '@/components/Hero';
import { TrustBadges } from '@/components/TrustBadges';
import { Services } from '@/components/Services';
import { ReviewWidget } from '@/components/ReviewWidget';
import { HowItWorks } from '@/components/HowItWorks';
import { CouponCountdown } from '@/components/CouponCountdown';
import { MidCTA } from '@/components/MidCTA';
import { BrandLogos } from '@/components/BrandLogos';
import { ContactForm } from '@/components/ContactForm';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { StickyCallBar } from '@/components/StickyCallBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyTicker />
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <ReviewWidget />
        <HowItWorks />
        <CouponCountdown />
        <MidCTA />
        <BrandLogos />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCallBar />
    </div>
  );
};

export default Index;
