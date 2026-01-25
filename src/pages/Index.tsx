import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustBadges } from '@/components/TrustBadges';
import { Services } from '@/components/Services';
import { MidCTA } from '@/components/MidCTA';
import { ContactForm } from '@/components/ContactForm';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { StickyCallBar } from '@/components/StickyCallBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <MidCTA />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCallBar />
    </div>
  );
};

export default Index;
