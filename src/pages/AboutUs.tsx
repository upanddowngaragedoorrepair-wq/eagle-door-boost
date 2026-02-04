import { Phone, MessageSquare, CheckCircle, Star, Clock, Shield, Users, Award, Heart, Wrench } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { Header } from '@/components/Header';
import { UrgencyTicker } from '@/components/UrgencyTicker';
import { Footer } from '@/components/Footer';
import { StickyCallBar } from '@/components/StickyCallBar';
import { ContactForm } from '@/components/ContactForm';
import { ReviewWidget } from '@/components/ReviewWidget';
import teamPhoto from '@/assets/team-photo.webp';
import teamGroupPhoto from '@/assets/team-group-photo.webp';
import aboutHeroBg from '@/assets/about-hero-bg.webp';
const AboutUs = () => {
  const {
    city,
    phoneLink,
    phoneFormatted
  } = useLocation2();
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
        {/* Hero Section - Enhanced */}
        <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url(${aboutHeroBg})`
        }} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          {/* Gold accent glow */}
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-primary/5 blur-[120px] rounded-full" />

          <div className="container-main relative">
            <div className="max-w-4xl animate-fade-in">
              {/* Logo */}
              <div className="flex items-center gap-4 mb-8">
                <img alt="Eagle Automatic Gate" className="w-16 h-16" src="/lovable-uploads/5faee6f3-2cb8-4f00-b436-9852128e7ea4.png" />
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground uppercase tracking-wide">
                    Eagle Automatic
                  </h2>
                  <p className="text-sm text-primary font-bold uppercase tracking-wider">Gate & Door</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 mb-8 shadow-lg">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-wide">About Our Team</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-8 tracking-tight">
                <span className="text-foreground">Licensed & </span>
                <span className="gradient-text">Family-Operated.</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                For over 20 years, Eagle Automatic Gate & Door has been the trusted choice for homeowners and businesses 
                across {city} & The Greater Bay Area. We're not just technicians—we're neighbors committed to protecting 
                what matters most to you.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <a href={phoneLink} className="btn-cta text-xl min-h-[72px]">
                  <Phone className="w-7 h-7" />
                  Call: {phoneFormatted}
                </a>
                <a href="#quote-form" className="btn-secondary min-h-[68px] text-lg">
                  <MessageSquare className="w-6 h-6" />
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story - Enhanced */}
        <section className="py-24 md:py-32 bg-[hsl(45,30%,95%)] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-transparent to-background/10 pointer-events-none" />
          
          <div className="container-main relative">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 tracking-tight">
                  <span className="text-background">Our </span>
                  <span className="text-primary">Story</span>
                </h2>
                <div className="space-y-5 text-lg text-background/80 leading-relaxed">
                  <p>Eagle Automatic Gate & Door wasn't built in an office — it was built in the field. Our founder, Matt, grew up helping his father, an AC repair technician, learning early what it means to work hard, show up on time, and treat every customer's property with respect. Coming from a family-run background, he understands how important it is to keep business personal and built on trust.</p>
                  <p>
                    As the company grew, Matt focused on the technical side — mastering repair, troubleshooting, and custom installations — while his family was always there supporting the business behind the scenes. Before starting Eagle, Matt worked for professional companies like Viking Gates & Garage Doors and gained experience with other established providers. Over the years, he mastered the trade — but noticed something missing: too many companies focused only on finishing the job, not on quality, timing, or the overall customer experience.
                  </p>
                  <p>
                    So he started his own company — building custom gates himself with minimal tools and relentless motivation. His goal was simple: create a company that delivers efficiency, precision, and top-tier quality without cutting corners. Today, Eagle Automatic Gate & Door stands for craftsmanship, integrity, and service done right the first time — built on real family values and hands-on experience.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="bg-white rounded-3xl p-8 text-center shadow-xl shadow-black/10">
                  <div className="text-5xl font-display font-bold text-primary mb-3">20+</div>
                  <div className="text-lg text-background/70 font-semibold">Years Experience</div>
                </div>
                <div className="bg-white rounded-3xl p-8 text-center shadow-xl shadow-black/10">
                  <div className="text-5xl font-display font-bold text-primary mb-3">2,500+</div>
                  <div className="text-lg text-background/70 font-semibold">Happy Customers</div>
                </div>
                <div className="bg-white rounded-3xl p-8 text-center shadow-xl shadow-black/10">
                  <div className="text-5xl font-display font-bold text-primary mb-3">5★</div>
                  <div className="text-lg text-background/70 font-semibold">Average Rating</div>
                </div>
                <div className="bg-white rounded-3xl p-8 text-center shadow-xl shadow-black/10">
                  <div className="text-4xl font-display font-bold text-primary mb-3">Fast</div>
                  <div className="text-lg text-background/70 font-semibold">Emergency Service</div>
                </div>
              </div>
              
              {/* Team Photo */}
              <div className="mt-6">
                <img src={teamGroupPhoto} alt="Eagle Automatic Gate & Door Team" className="w-full rounded-3xl shadow-xl shadow-black/10 border border-white/20" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Values - Enhanced */}
        <section className="py-24 md:py-32 bg-secondary relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/30 pointer-events-none" />
          
          <div className="container-main relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
                <span className="text-foreground">Our </span>
                <span className="gradient-text">Values</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => <div key={index} className="bg-card rounded-3xl p-8 text-center border border-border shadow-xl shadow-black/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-18 h-18 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <value.icon className="w-9 h-9 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{value.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Enhanced */}
        <section className="py-24 md:py-32 relative overflow-hidden bg-[sidebar-accent-foreground] bg-secondary-foreground">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full" />
          
          <div className="container-main relative">
            <div className="bg-gradient-to-br from-primary/10 via-background to-primary/5 rounded-3xl p-10 md:p-14 shadow-primary/5 shadow-sm opacity-100 border-solid border-4 border-primary-foreground">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight">
                  <span className="text-foreground">Why </span>
                  <span className="gradient-text">Choose Us</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {['Licensed, Bonded & Insured', 'Same-Day Service Available', 'Upfront, Honest Pricing', 'Factory-Trained Technicians', 'Warranty on All Work', 'Family-Owned Business'].map((item, index) => <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border">
                    <CheckCircle className="w-7 h-7 text-primary flex-shrink-0" />
                    <span className="text-lg text-foreground font-semibold">{item}</span>
                  </div>)}
              </div>

              <div className="text-center">
                <a href={phoneLink} className="btn-cta text-xl min-h-[72px] inline-flex">
                  <Phone className="w-7 h-7" />
                  Speak With Our Team Today
                </a>
              </div>
            </div>
          </div>
        </section>

        <ReviewWidget />
        <ContactForm />

        {/* Final CTA - Enhanced */}
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full" />
          
          <div className="container-main relative text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight">
              <span className="text-foreground">Ready to Work With </span>
              <span className="gradient-text">The Best?</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who trust Eagle Automatic Gate & Door.
            </p>
            <a href={phoneLink} className="btn-cta text-2xl min-h-[80px] px-14 inline-flex">
              <Phone className="w-8 h-8" />
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
