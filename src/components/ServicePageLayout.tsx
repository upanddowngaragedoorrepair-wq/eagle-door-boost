import { Phone, MessageSquare, CheckCircle, Star, Clock, Shield, ArrowRight } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
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
  faqs: {
    question: string;
    answer: string;
  }[];
}
export function ServicePageLayout({
  title,
  subtitle,
  description,
  heroImage,
  features,
  benefits,
  faqs
}: ServicePageLayoutProps) {
  const {
    city,
    phoneLink,
    phoneFormatted
  } = useLocation2();
  return <div className="min-h-screen bg-background pb-14 md:pb-0">
      <UrgencyTicker />
      <Header />
      
      <main>
        {/* Hero Section with Animation */}
        <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url(${heroImage})`
        }} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          {/* Gold accent glow */}
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-primary/5 blur-[120px] rounded-full" />

          <div className="container-main relative">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              {/* Content */}
              <div className="animate-fade-in">
                {/* Logo */}
                <div className="flex items-center gap-4 mb-8">
                  <img src={eagleLogo} alt="Eagle Automatic Gate" className="w-16 h-16" />
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground uppercase tracking-wide">
                      Eagle Automatic
                    </h2>
                    <p className="text-sm text-primary font-bold uppercase tracking-wider">Gate & Door</p>
                  </div>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 mb-8 shadow-lg">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-primary uppercase tracking-wide">{subtitle}</span>
                </div>

                {/* Headline - BIGGER */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-8 tracking-tight">
                  <span className="text-foreground">{title} in </span>
                  <span className="gradient-text">{city}</span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
                  {description}
                </p>

                {/* Trust Badges */}
                

                {/* CTAs - BIGGER */}
                <div className="flex flex-col sm:flex-row gap-5">
                  <a href={phoneLink} className="btn-cta text-xl min-h-[72px]">
                    <Phone className="w-7 h-7" />
                    Call Now: {phoneFormatted}
                  </a>
                  <a href="#quote-form" className="btn-secondary min-h-[68px] text-lg">
                    <MessageSquare className="w-6 h-6" />
                    Get Free Quote
                  </a>
                </div>
              </div>

              {/* Right Side - Floating CTA Card */}
              <div className="hidden lg:block animate-scale-in">
                <div className="bg-card/95 backdrop-blur-lg rounded-3xl p-10 shadow-2xl shadow-black/30 border border-border">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-display font-bold text-foreground mb-3">
                      Get Your Free Estimate
                    </h3>
                    <p className="text-lg text-muted-foreground">No obligation • Expert advice</p>
                  </div>
                  
                  <div className="space-y-5 mb-8">
                    {benefits.slice(0, 4).map((benefit, index) => <div key={index} className="flex items-center gap-4">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                        <span className="text-lg text-foreground font-medium">{benefit}</span>
                      </div>)}
                  </div>

                  <a href={phoneLink} className="btn-cta w-full text-xl min-h-[68px] mb-5">
                    <Phone className="w-6 h-6" />
                    Talk to a Specialist Now
                  </a>
                  
                  <p className="text-center text-base text-muted-foreground font-semibold">
                    ★ Family Owned & Operated ★
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Enhanced */}
        <section className="py-24 md:py-32 bg-[hsl(45,30%,95%)] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-transparent to-background/10 pointer-events-none" />
          
          <div className="container-main relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
                <span className="text-background">Why Choose </span>
                <span className="text-primary">Eagle Automatic</span>
              </h2>
              <p className="text-xl text-background/70 max-w-3xl mx-auto">
                Professional service backed by decades of experience and thousands of satisfied customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 hover:-translate-y-3">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-background mb-3">{feature.title}</h3>
                  <p className="text-lg text-background/70 leading-relaxed">{feature.description}</p>
                </div>)}
            </div>

            {/* Mid-Section CTA */}
            <div className="mt-16 text-center">
              <a href={phoneLink} className="btn-cta text-xl min-h-[72px] inline-flex">
                <Phone className="w-7 h-7" />
                Get Your Free Quote Today
              </a>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <ReviewWidget />

        {/* FAQ Section - Enhanced */}
        <section className="py-24 md:py-32 bg-secondary relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/30 pointer-events-none" />
          
          <div className="container-main relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
                <span className="text-foreground">Frequently Asked </span>
                <span className="gradient-text">Questions</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-5">
              {faqs.map((faq, index) => <details key={index} className="group bg-card rounded-2xl border border-border overflow-hidden shadow-lg shadow-black/10">
                  <summary className="flex items-center justify-between p-7 cursor-pointer hover:bg-muted/50 transition-colors">
                    <span className="font-display font-bold text-foreground text-xl pr-4">{faq.question}</span>
                    <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-7 pb-7">
                    <p className="text-lg text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </details>)}
            </div>

            {/* FAQ CTA */}
            <div className="mt-14 text-center">
              <p className="text-xl text-muted-foreground mb-5">Still have questions?</p>
              <a href={phoneLink} className="btn-cta inline-flex text-lg">
                <Phone className="w-6 h-6" />
                Speak With an Expert
              </a>
            </div>
          </div>
        </section>

        {/* Coupons */}
        <CouponCountdown />

        {/* Contact Form */}
        <ContactForm />

        {/* Final Aggressive CTA - Enhanced */}
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full" />
          
          <div className="container-main relative text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight">
              <span className="text-foreground">Ready to Get </span>
              <span className="gradient-text">Started?</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Don't wait—call now and speak directly with a field technician who can help you today.
            </p>
            <a href={phoneLink} className="btn-cta text-2xl min-h-[80px] px-14 inline-flex">
              <Phone className="w-8 h-8" />
              Call {phoneFormatted} Now
            </a>
            <p className="mt-8 text-lg text-primary font-bold">
              ★ 100% Satisfaction Guaranteed ★
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCallBar />
    </div>;
}