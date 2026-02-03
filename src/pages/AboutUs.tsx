import { Phone, MessageSquare, CheckCircle, Star, Clock, Shield, Users, Award, Heart, Wrench } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';
import { Header } from '@/components/Header';
import { UrgencyTicker } from '@/components/UrgencyTicker';
import { Footer } from '@/components/Footer';
import { StickyCallBar } from '@/components/StickyCallBar';
import { ContactForm } from '@/components/ContactForm';
import { ReviewWidget } from '@/components/ReviewWidget';
import eagleLogo from '@/assets/eagle-logo.webp';
import teamPhoto from '@/assets/team-photo.webp';
const AboutUs = () => {
  const {
    city,
    phoneLink,
    phoneFormatted
  } = useUrlParams();
  const values = [{
    icon: Shield,
    title: 'Integrity',
    description: 'We stand behind every job with honesty and transparency.'
  }, {
    icon: Award,
    title: 'Excellence',
    description: 'Premium quality workmanship on every installation and repair.'
  }, {
    icon: Heart,
    title: 'Customer First',
    description: 'Your satisfaction is our top priority, always.'
  }, {
    icon: Wrench,
    title: 'Expertise',
    description: '20+ years of combined experience in the industry.'
  }];
  return <div className="min-h-screen bg-background pb-14 md:pb-0">
      <UrgencyTicker />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url(${teamPhoto})`
        }} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />

          <div className="container-main relative">
            <div className="max-w-3xl animate-fade-in">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <img alt="Eagle Automatic Gate" className="w-14 h-14" src="/lovable-uploads/5faee6f3-2cb8-4f00-b436-9852128e7ea4.png" />
                <div>
                  <h2 className="font-display text-lg font-bold text-foreground uppercase tracking-wide">
                    Eagle Automatic
                  </h2>
                  <p className="text-sm text-primary font-semibold uppercase tracking-wider">Gate & Door</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">About Our Team</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6">
                <span className="text-foreground">Licensed & </span>
                <span className="gradient-text">Family-Operated.</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                For over 20 years, Eagle Automatic Gate & Door has been the trusted choice for homeowners and businesses 
                across {city} and surrounding areas. We're not just technicians—we're neighbors committed to protecting 
                what matters most to you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={phoneLink} className="btn-cta text-lg min-h-[64px]">
                  <Phone className="w-6 h-6" />
                  Call: {phoneFormatted}
                </a>
                <a href="#quote-form" className="btn-secondary min-h-[60px]">
                  <MessageSquare className="w-5 h-5" />
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-[hsl(45,30%,95%)]">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  <span className="text-background">Our </span>
                  <span className="text-primary">Story</span>
                </h2>
                <div className="space-y-4 text-background/80 leading-relaxed">
                  <p>Eagle Automatic Gate & Door was founded with a simple mission: provide honest, reliable, and exceptional gate services to our community. As a Family-owned business, we bring the same discipline, integrity, and dedication to every job that we learned serving our country.</p>
                  <p>
                    Today, we're proud to have helped thousands of families and businesses secure their properties 
                    with quality automatic gates, access control systems, and fencing solutions. Every member of our 
                    team is background-checked, factory-trained, and committed to treating your property like their own.
                  </p>
                  <p>
                    We partner with industry-leading manufacturers like LiftMaster to ensure you receive the most 
                    reliable and advanced gate systems available. From emergency repairs to custom installations, 
                    we handle every project with care and precision.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-4xl font-display font-bold text-primary mb-2">20+</div>
                  <div className="text-background/70 font-medium">Years Experience</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-4xl font-display font-bold text-primary mb-2">2,500+</div>
                  <div className="text-background/70 font-medium">Happy Customers</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-4xl font-display font-bold text-primary mb-2">5★</div>
                  <div className="text-background/70 font-medium">Average Rating</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-4xl font-display font-bold text-primary mb-2">Fast Response </div>
                  <div className="text-background/70 font-medium">Emergency Service Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary">
          <div className="container-main">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                <span className="text-foreground">Our </span>
                <span className="gradient-text">Values</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => <div key={index} className="bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container-main">
            <div className="bg-gradient-to-br from-primary/10 via-background to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  <span className="text-foreground">Why </span>
                  <span className="gradient-text">{city}</span>
                  <span className="text-foreground"> Choose</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {['Licensed, Bonded & Insured', 'Same-Day Service Available', 'Upfront, Honest Pricing', 'Factory-Trained Technicians', 'Warranty on All Work', 'Veteran-Owned Business'].map((item, index) => <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>)}
              </div>

              <div className="text-center">
                <a href={phoneLink} className="btn-cta text-lg min-h-[64px] inline-flex">
                  <Phone className="w-6 h-6" />
                  Speak With Our Team Today
                </a>
              </div>
            </div>
          </div>
        </section>

        <ReviewWidget />
        <ContactForm />

        {/* Final CTA */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          <div className="container-main relative text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-foreground">Ready to Work With </span>
              <span className="gradient-text">The Best?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Eagle Automatic Gate & Door.
            </p>
            <a href={phoneLink} className="btn-cta text-xl min-h-[72px] px-12 inline-flex">
              <Phone className="w-7 h-7" />
              Call {phoneFormatted} Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCallBar />
    </div>;
};
export default AboutUs;