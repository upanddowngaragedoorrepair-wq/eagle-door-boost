import { Phone, MessageSquare, CheckCircle, Star, Clock, Shield, ArrowRight } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';
import { Header } from './Header';
import { UrgencyTicker } from './UrgencyTicker';
import { Footer } from './Footer';
import { StickyCallBar } from './StickyCallBar';
import { ContactForm } from './ContactForm';
import { ReviewWidget } from './ReviewWidget';
import { CouponCountdown } from './CouponCountdown';
import eagleLogo from '@/assets/eagle-logo.webp';

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: ServiceFeature[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export function ServicePageLayout({
  title,
  subtitle,
  description,
  heroImage,
  features,
  benefits,
  faqs,
}: ServicePageLayoutProps) {
  const { city, phoneLink, phoneFormatted } = useUrlParams();

  return (
    <div className="min-h-screen bg-background pb-14 md:pb-0">
      <UrgencyTicker />
      <Header />
      
      <main>
        {/* Hero Section with Animation */}
        <section className="relative min-h-[80vh] flex items-center pt-28 pb-16 overflow-hidden">
          {/* Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />

          <div className="container-main relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="animate-fade-in">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-6">
                  <img src={eagleLogo} alt="Eagle Automatic Gate" className="w-14 h-14" />
                  <div>
                    <h2 className="font-display text-lg font-bold text-foreground uppercase tracking-wide">
                      Eagle Automatic
                    </h2>
                    <p className="text-sm text-primary font-semibold uppercase tracking-wider">Gate & Door</p>
                  </div>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wide">{subtitle}</span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6">
                  <span className="text-foreground">{title} in </span>
                  <span className="gradient-text">{city}</span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  {description}
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-secondary/80 border border-border text-sm font-medium">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Licensed & Insured
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-secondary/80 border border-border text-sm font-medium">
                    <Clock className="w-4 h-4 text-primary" />
                    Same Day Service
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-secondary/80 border border-border text-sm font-medium">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    5-Star Rated
                  </span>
                </div>

                {/* CTAs - Aggressive */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={phoneLink} className="btn-cta text-lg min-h-[64px]">
                    <Phone className="w-6 h-6" />
                    Call Now: {phoneFormatted}
                  </a>
                  <a href="#quote-form" className="btn-secondary min-h-[60px]">
                    <MessageSquare className="w-5 h-5" />
                    Get Free Quote
                  </a>
                </div>
              </div>

              {/* Right Side - Floating CTA Card */}
              <div className="hidden lg:block animate-scale-in">
                <div className="bg-card/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-border">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                      Get Your Free Estimate
                    </h3>
                    <p className="text-muted-foreground">No obligation • Expert advice</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    {benefits.slice(0, 4).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <a href={phoneLink} className="btn-cta w-full text-lg min-h-[60px] mb-4">
                    <Phone className="w-5 h-5" />
                    Talk to a Specialist Now
                  </a>
                  
                  <p className="text-center text-sm text-muted-foreground">
                    ★ Veteran-Owned & Family-Operated ★
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-[hsl(45,30%,95%)]">
          <div className="container-main">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                <span className="text-background">Why Choose </span>
                <span className="text-primary">Eagle Automatic</span>
              </h2>
              <p className="text-lg text-background/70 max-w-2xl mx-auto">
                Professional service backed by decades of experience and thousands of satisfied customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-background mb-2">{feature.title}</h3>
                  <p className="text-background/70">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Mid-Section CTA */}
            <div className="mt-14 text-center">
              <a href={phoneLink} className="btn-cta text-lg min-h-[64px] inline-flex">
                <Phone className="w-6 h-6" />
                Get Your Free Quote Today
              </a>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <ReviewWidget />

        {/* FAQ Section */}
        <section className="py-20 bg-secondary">
          <div className="container-main">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                <span className="text-foreground">Frequently Asked </span>
                <span className="gradient-text">Questions</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <details 
                  key={index}
                  className="group bg-card rounded-2xl border border-border overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/50 transition-colors">
                    <span className="font-display font-semibold text-foreground text-lg pr-4">{faq.question}</span>
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>

            {/* FAQ CTA */}
            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-4">Still have questions?</p>
              <a href={phoneLink} className="btn-cta inline-flex">
                <Phone className="w-5 h-5" />
                Speak With an Expert
              </a>
            </div>
          </div>
        </section>

        {/* Coupons */}
        <CouponCountdown />

        {/* Contact Form */}
        <ContactForm />

        {/* Final Aggressive CTA */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          <div className="container-main relative text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-foreground">Ready to Get </span>
              <span className="gradient-text">Started?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't wait—call now and speak directly with a field technician who can help you today.
            </p>
            <a href={phoneLink} className="btn-cta text-xl min-h-[72px] px-12 inline-flex">
              <Phone className="w-7 h-7" />
              Call {phoneFormatted} Now
            </a>
            <p className="mt-6 text-primary font-semibold">
              ★ 100% Satisfaction Guaranteed ★
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCallBar />
    </div>
  );
}
