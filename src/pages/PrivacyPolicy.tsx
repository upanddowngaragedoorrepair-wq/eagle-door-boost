import { Header } from '@/components/Header';
import { UrgencyTicker } from '@/components/UrgencyTicker';
import { Footer } from '@/components/Footer';
import { useLocation2 } from '@/contexts/LocationContext';

const PrivacyPolicy = () => {
  const { phoneFormatted } = useLocation2();

  return (
    <div className="min-h-screen bg-background">
      <UrgencyTicker />
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-main max-w-3xl">
          <h1 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            <section>
              <h2 className="font-sans text-xl font-bold text-foreground mt-8 mb-3">1. Information We Collect</h2>
              <p>When you use our website or request a quote, we may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name, email address, and phone number</li>
                <li>Property address and service location</li>
                <li>Details about your gate, fence, or access control project</li>
                <li>Browser type, IP address, and website usage data</li>
              </ul>
            </section>

            <section>
              <h2 className="font-sans text-xl font-bold text-foreground mt-8 mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Respond to your quote requests and inquiries</li>
                <li>Provide and improve our gate and fence services</li>
                <li>Communicate with you about your project</li>
                <li>Send promotional offers (you may opt out at any time)</li>
                <li>Analyze website traffic to improve user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="font-sans text-xl font-bold text-foreground mt-8 mb-3">3. Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.</p>
            </section>

            <section>
              <h2 className="font-sans text-xl font-bold text-foreground mt-8 mb-3">4. Cookies & Tracking</h2>
              <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings.</p>
            </section>

            <section>
              <h2 className="font-sans text-xl font-bold text-foreground mt-8 mb-3">5. Data Security</h2>
              <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="font-sans text-xl font-bold text-foreground mt-8 mb-3">6. Your Rights</h2>
              <p>California residents have the right to request disclosure of information collected, request deletion of personal information, and opt out of the sale of personal information under the California Consumer Privacy Act (CCPA).</p>
            </section>

            <section>
              <h2 className="font-sans text-xl font-bold text-foreground mt-8 mb-3">7. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at {phoneFormatted} or email us at info@eagleautomaticgate.com.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
