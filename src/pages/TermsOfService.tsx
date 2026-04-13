import { Header } from '@/components/Header';
import { UrgencyTicker } from '@/components/UrgencyTicker';
import { Footer } from '@/components/Footer';
import { useLocation2 } from '@/contexts/LocationContext';

const TermsOfService = () => {
  const { phoneFormatted } = useLocation2();

  return (
    <div className="min-h-screen bg-background">
      <UrgencyTicker />
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-main max-w-3xl">
          <h1 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            <section>
              <h2 className="font-sans text-xl font-bold text-foreground mt-8 mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using the Eagle Automatic Gate & Door website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
            </section>

            <section>
              <h2 className="font-sans text-xl font-bold text-foreground mt-8 mb-3">2. Services</h2>
              <p>Eagle Automatic Gate & Door provides automatic gate installation, gate repair, fence installation, and access control services in the Greater San Francisco Bay Area. All services are subject to availability and our standard service agreements.</p>
            </section>

            <section>
              <h2 className="font-sans text-xl font-bold text-foreground mt-8 mb-3">3. Estimates & Pricing</h2>
              <p>All estimates provided through our website are free and non-binding. Final pricing will be determined after an on-site assessment of your project. Prices are subject to change based on material costs, project scope, and site conditions.</p>
            </section>

            <section>
              <h2 className="font-sans text-xl font-bold text-foreground mt-8 mb-3">4. Warranty</h2>
              <p>Eagle Automatic Gate & Door stands behind our workmanship. Specific warranty terms will be outlined in your service agreement. Manufacturer warranties on equipment and materials may apply separately.</p>
            </section>

            <section>
              <h2 className="font-sans text-xl font-bold text-foreground mt-8 mb-3">5. Limitation of Liability</h2>
              <p>Eagle Automatic Gate & Door shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our total liability shall not exceed the amount paid for the specific service in question.</p>
            </section>

            <section>
              <h2 className="font-sans text-xl font-bold text-foreground mt-8 mb-3">6. Intellectual Property</h2>
              <p>All content on this website, including text, images, logos, and design, is the property of Eagle Automatic Gate & Door and is protected by copyright and trademark laws. You may not reproduce, distribute, or use any content without our written permission.</p>
            </section>

            <section>
              <h2 className="font-sans text-xl font-bold text-foreground mt-8 mb-3">7. Licensing</h2>
              <p>Eagle Automatic Gate & Door is a licensed contractor in the State of California. License #1138855. All work is performed in accordance with applicable local and state building codes.</p>
            </section>

            <section>
              <h2 className="font-sans text-xl font-bold text-foreground mt-8 mb-3">8. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of the website constitutes acceptance of any modified terms.</p>
            </section>

            <section>
              <h2 className="font-sans text-xl font-bold text-foreground mt-8 mb-3">9. Contact Us</h2>
              <p>If you have any questions about these Terms of Service, please contact us at {phoneFormatted} or email us at info@eagleautomaticgate.com.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
