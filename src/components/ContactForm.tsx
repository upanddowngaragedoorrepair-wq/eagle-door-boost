import { useState } from 'react';
import { Send, MapPin, Zap, Shield, Star, Lock, CheckCircle } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
export function ContactForm() {
  const {
    city
  } = useLocation2();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zipCode: '',
    address: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  if (submitted) {
    return <section id="quote-form" className="py-24 md:py-32 bg-background">
        <div className="container-main">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <h3 className="font-display text-3xl font-bold text-foreground mb-5">
              Thank You!
            </h3>
            <p className="text-lg text-muted-foreground">
              We've received your request and will call you back shortly.
            </p>
          </div>
        </div>
      </section>;
  }
  return <section id="quote-form" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative curves */}
      <div className="absolute top-0 left-0 right-0 h-40 overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1440 128" preserveAspectRatio="none">
          <path d="M0,64 C360,128 720,0 1080,64 C1260,96 1380,96 1440,64 L1440,0 L0,0 Z" fill="hsl(var(--primary) / 0.1)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden rotate-180">
        <svg className="absolute w-full h-full" viewBox="0 0 1440 128" preserveAspectRatio="none">
          <path d="M0,64 C360,128 720,0 1080,64 C1260,96 1380,96 1440,64 L1440,0 L0,0 Z" fill="hsl(var(--primary) / 0.1)" />
        </svg>
      </div>

      <div className="container-main relative">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">Serving {city} & The Greater Bay Area</span>
          </div>
        </div>

        {/* Headline - BIGGER */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-center mb-6 tracking-tight">
          <span className="text-foreground">Get Your</span>{' '}
          <span className="gold-text italic">Free Estimate</span>
        </h2>
        <p className="text-center text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Professional gate services — Schedule a no obligation quote. Fast response, fair prices.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary border border-border text-base font-semibold text-foreground shadow-lg">
            <Zap className="w-5 h-5 text-primary" />
            30-Min Response
          </span>
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary border border-border text-base font-semibold text-foreground shadow-lg">
            <Shield className="w-5 h-5 text-primary" />
            Licensed & Insured
          </span>
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary border border-border text-base font-semibold text-foreground shadow-lg">
            <Star className="w-5 h-5 text-primary" />
            5-Star Rated
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Team Photo */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-2xl rounded-3xl" />
              <img alt="Eagle Gate Team" className="relative w-full h-full object-cover rounded-3xl shadow-2xl shadow-black/40 border border-border" src="/lovable-uploads/9f447efa-be7f-4639-8424-0ffbec5d3e2e.png" />
            </div>
          </div>

          {/* Form Card - Enhanced */}
          <div className="bg-primary rounded-3xl p-10 shadow-2xl shadow-primary/20 relative">
            {/* Online Now Badge */}
            <div className="absolute top-6 right-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 py-0 px-[5px] pb-0 pr-[10px] my-0 mb-0 mr-[4px] mt-0">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-bold text-primary-foreground text-sm">Online Now</span>
            </div>

            <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
              Request a Free Quote
            </h3>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Fill out the form and we'll get back to you in less than one minute!
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name *" required className="w-full px-5 py-4 rounded-xl bg-primary-foreground/90 text-background placeholder:text-muted-foreground border-2 border-transparent focus:border-background/20 focus:outline-none transition-colors text-base font-medium" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} />
                <input type="tel" placeholder="Phone Number *" required className="w-full px-5 py-4 rounded-xl bg-primary-foreground/90 text-background placeholder:text-muted-foreground border-2 border-transparent focus:border-background/20 focus:outline-none transition-colors text-base font-medium" value={formData.phone} onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <input type="email" placeholder="Email Address" className="w-full px-5 py-4 rounded-xl bg-primary-foreground/90 text-background placeholder:text-muted-foreground border-2 border-transparent focus:border-background/20 focus:outline-none transition-colors text-base font-medium" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} />
                <input type="text" placeholder="Zip Code *" required className="w-full px-5 py-4 rounded-xl bg-primary-foreground/90 text-background placeholder:text-muted-foreground border-2 border-transparent focus:border-background/20 focus:outline-none transition-colors text-base font-medium" value={formData.zipCode} onChange={e => setFormData({
                ...formData,
                zipCode: e.target.value
              })} />
              </div>

              <input type="text" placeholder="Street Address" className="w-full px-5 py-4 rounded-xl bg-primary-foreground/90 text-background placeholder:text-muted-foreground border-2 border-transparent focus:border-background/20 focus:outline-none transition-colors text-base font-medium" value={formData.address} onChange={e => setFormData({
              ...formData,
              address: e.target.value
            })} />

              <textarea placeholder="Tell us about your issue" rows={3} className="w-full px-5 py-4 rounded-xl bg-primary-foreground/90 text-background placeholder:text-muted-foreground border-2 border-transparent focus:border-background/20 focus:outline-none transition-colors resize-none text-base font-medium" value={formData.message} onChange={e => setFormData({
              ...formData,
              message: e.target.value
            })} />

              <button type="submit" className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-background text-foreground font-display font-bold text-lg uppercase tracking-wide hover:bg-background/90 transition-colors border-2 border-background/20 shadow-lg">
                <Send className="w-5 h-5" />
                Get Your Free Estimate
              </button>
            </form>

            <p className="flex items-center justify-center gap-2 text-sm text-primary-foreground/60 mt-5">
              <Lock className="w-4 h-4" />
              Your information is secure and will never be shared
            </p>
          </div>
        </div>
      </div>
    </section>;
}
export default ContactForm;