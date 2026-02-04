import { Phone, MessageSquare, CheckCircle, Star, Clock, Shield, ArrowRight, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
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

interface TrustCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface RelatedService {
  icon: LucideIcon;
  label: string;
  href: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: ServiceFeature[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  // New props for enhanced sections
  authorityHeadline: string;
  authoritySubheadline: string;
  authorityImages: string[];
  trustCards: TrustCard[];
  relatedServices: RelatedService[];
}

export function ServicePageLayout({
  title,
  subtitle,
  description,
  heroImage,
  features,
  benefits,
  faqs,
  authorityHeadline,
  authoritySubheadline,
  authorityImages,
  trustCards,
  relatedServices,
}: ServicePageLayoutProps) {
  const { city, phoneLink, phoneFormatted } = useLocation2();

  return (
    <div className="min-h-screen bg-background pb-14 md:pb-0">
      <UrgencyTicker />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-primary/5 blur-[120px] rounded-full" />

          <div className="container-main relative">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div className="animate-fade-in">
                <div className="flex items-center gap-4 mb-8">
                  <img src={eagleLogo} alt="Eagle Automatic Gate" className="w-16 h-16" />
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground uppercase tracking-wide">
                      Eagle Automatic
                    </h2>
                    <p className="text-sm text-primary font-bold uppercase tracking-wider">Gate & Door</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 mb-8 shadow-lg">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-primary uppercase tracking-wide">{subtitle}</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-8 tracking-tight">
                  <span className="text-foreground">{title} in </span>
                  <span className="gradient-text">{city}</span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
                  {description}
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <span className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-card/80 border border-border text-base font-semibold shadow-lg">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Licensed & Insured
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-card/80 border border-border text-base font-semibold shadow-lg">
                    <Clock className="w-5 h-5 text-primary" />
                    Same Day Service
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-card/80 border border-border text-base font-semibold shadow-lg">
                    <Star className="w-5 h-5 fill-primary text-primary" />
                    5-Star Rated
                  </span>
                </div>

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

              <div className="hidden lg:block animate-scale-in">
                <div className="bg-card/95 backdrop-blur-lg rounded-3xl p-10 shadow-2xl shadow-black/30 border border-border">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-display font-bold text-foreground mb-3">
                      Get Your Free Estimate
                    </h3>
                    <p className="text-lg text-muted-foreground">No obligation • Expert advice</p>
                  </div>
                  
                  <div className="space-y-5 mb-8">
                    {benefits.slice(0, 4).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                        <span className="text-lg text-foreground font-medium">{benefit}</span>
                      </div>
                    ))}
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

        {/* NEW: Authority Section */}
        <section className="py-20 md:py-28 bg-[hsl(222,47%,9%)] relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 pointer-events-none" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 blur-[100px] rounded-full" />
          
          <div className="container-main relative">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight text-white">
                {authorityHeadline}
              </h2>
              <p className="text-xl md:text-2xl text-primary font-semibold">
                {authoritySubheadline}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              {/* Left: Images */}
              <div className="order-2 lg:order-1 space-y-5">
                {authorityImages.slice(0, 1).map((img, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-transparent to-primary/10 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img 
                      src={img} 
                      alt={`${title} showcase ${idx + 1}`}
                      className="relative w-full max-h-[400px] object-cover rounded-3xl shadow-lg shadow-black/25 border border-white/10 hover:border-primary/30 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Right: Trust Cards + Additional Image */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {trustCards.map((card, index) => (
                    <div 
                      key={index} 
                      className="group p-6 rounded-2xl bg-[hsl(222,47%,12%)] border border-white/10 shadow-xl shadow-black/30 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300"
                    >
                      <div className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center bg-primary/15 text-primary group-hover:scale-110 group-hover:bg-primary/25 transition-all duration-300">
                        <card.icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-white mb-2">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Image below cards */}
                {authorityImages.length > 1 && (
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-transparent to-primary/10 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img 
                      src={authorityImages[1]} 
                      alt={`${title} showcase`}
                      className="relative w-full max-h-[300px] object-cover rounded-3xl shadow-lg shadow-black/25 border border-white/10 hover:border-primary/30 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Authority CTA */}
            <div className="mt-14 text-center">
              <a href={phoneLink} className="btn-cta text-xl min-h-[68px] inline-flex">
                <Phone className="w-6 h-6" />
                Get Expert Help Now
              </a>
            </div>
          </div>
        </section>

        {/* NEW: Related Services Grid */}
        <section className="py-16 md:py-20 bg-secondary/50 relative">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 tracking-tight">
                <span className="text-foreground">Related </span>
                <span className="gradient-text">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Complete gate & access solutions under one roof
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {relatedServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="group flex flex-col items-center p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-card/80 hover:-translate-y-1 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 mb-3 rounded-lg flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-semibold text-center text-foreground group-hover:text-primary transition-colors">
                    {service.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
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
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-3xl p-8 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 hover:-translate-y-3"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-background mb-3">{feature.title}</h3>
                  <p className="text-lg text-background/70 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a href={phoneLink} className="btn-cta text-xl min-h-[72px] inline-flex">
                <Phone className="w-7 h-7" />
                Get Your Free Quote Today
              </a>
            </div>
          </div>
        </section>

        <ReviewWidget />

        {/* FAQ Section */}
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
              {faqs.map((faq, index) => (
                <details 
                  key={index}
                  className="group bg-card rounded-2xl border border-border overflow-hidden shadow-lg shadow-black/10"
                >
                  <summary className="flex items-center justify-between p-7 cursor-pointer hover:bg-muted/50 transition-colors">
                    <span className="font-display font-bold text-foreground text-xl pr-4">{faq.question}</span>
                    <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-7 pb-7">
                    <p className="text-lg text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-14 text-center">
              <p className="text-xl text-muted-foreground mb-5">Still have questions?</p>
              <a href={phoneLink} className="btn-cta inline-flex text-lg">
                <Phone className="w-6 h-6" />
                Speak With an Expert
              </a>
            </div>
          </div>
        </section>

        <CouponCountdown />
        <ContactForm />

        {/* Final CTA */}
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
    </div>
  );
}
