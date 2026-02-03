import { useState } from 'react';
import { Send, MapPin, Zap, Shield, Star, Lock, CheckCircle } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';
import teamPhoto from '@/assets/team-photo.webp';
export function ContactForm() {
  const {
    city
  } = useUrlParams();
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
    return <section id="quote-form" className="py-20 md:py-28 bg-background">
        <div className="container-main">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Thank You!
            </h3>
            <p className="text-muted-foreground">
              We've received your request and will call you back shortly.
            </p>
          </div>
        </div>
      </section>;
  }
  return <section id="quote-form" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative curves */}
      <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1440 128" preserveAspectRatio="none">
          <path d="M0,64 C360,128 720,0 1080,64 C1260,96 1380,96 1440,64 L1440,0 L0,0 Z" fill="hsl(var(--primary) / 0.1)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden rotate-180">
        <svg className="absolute w-full h-full" viewBox="0 0 1440 128" preserveAspectRatio="none">
          <path d="M0,64 C360,128 720,0 1080,64 C1260,96 1380,96 1440,64 L1440,0 L0,0 Z" fill="hsl(var(--primary) / 0.1)" />
        </svg>
      </div>

      <div className="container-main relative">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wide">Serving {city} & The Greater Bay Area</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="section-heading text-4xl md:text-5xl lg:text-6xl mb-4">
          <span className="text-foreground">Get Your</span>{' '}
          <span className="gold-text italic">Free Estimate</span>
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-8">
          Professional gate services Schedule No Obligation Quote Fast response, fair prices.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary border border-border text-sm font-medium text-foreground">
            <Zap className="w-4 h-4 text-primary" />
            30-Min Response
          </span>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary border border-border text-sm font-medium text-foreground">
            <Shield className="w-4 h-4 text-primary" />
            Licensed & Insured
          </span>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary border border-border text-sm font-medium text-foreground">
            <Star className="w-4 h-4 text-primary" />
            5-Star Rated
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Team Photo */}
          <div className="hidden lg:block">
            <img alt="Eagle Gate Team" className="w-full h-full object-cover rounded-2xl" src="/lovable-uploads/9f447efa-be7f-4639-8424-0ffbec5d3e2e.png" />
          </div>

          {/* Form Card - Bob's Gold Style */}
          <div className="bg-primary rounded-2xl p-8 shadow-2xl relative">
            {/* Online Now Badge */}
            <div className="absolute top-6 right-6 items-center gap-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex flex-row mx-0 px-0 py-0 pr-0 pl-0 pt-0 pb-0 my-0">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-semibold text-primary-foreground text-base px-[5px]">Online Now</span>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2 mx-0 px-0 py-[9px]">
              Request a Free Quote
            </h3>
            <p className="text-primary-foreground/80 mb-8">
              Fill out the form and we'll get back to you in less than one minute!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name *" required className="w-full px-5 py-4 rounded-xl bg-primary-foreground/90 text-background placeholder:text-muted-foreground border-2 border-transparent focus:border-background/20 focus:outline-none transition-colors" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} />
              <input type="tel" placeholder="Phone Number *" required className="w-full px-5 py-4 rounded-xl bg-primary-foreground/90 text-background placeholder:text-muted-foreground border-2 border-transparent focus:border-background/20 focus:outline-none transition-colors" value={formData.phone} onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
              <input type="email" placeholder="Email Address" className="w-full px-5 py-4 rounded-xl bg-primary-foreground/90 text-background placeholder:text-muted-foreground border-2 border-transparent focus:border-background/20 focus:outline-none transition-colors" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} />
              <input type="text" placeholder="Zip Code *" required className="w-full px-5 py-4 rounded-xl bg-primary-foreground/90 text-background placeholder:text-muted-foreground border-2 border-transparent focus:border-background/20 focus:outline-none transition-colors" value={formData.zipCode} onChange={e => setFormData({
                ...formData,
                zipCode: e.target.value
              })} />
              </div>

            <input type="text" placeholder="Street Address" className="w-full px-5 py-4 rounded-xl bg-primary-foreground/90 text-background placeholder:text-muted-foreground border-2 border-transparent focus:border-background/20 focus:outline-none transition-colors" value={formData.address} onChange={e => setFormData({
              ...formData,
              address: e.target.value
            })} />

            <textarea placeholder="Tell us about your issue" rows={3} className="w-full px-5 py-4 rounded-xl bg-primary-foreground/90 text-background placeholder:text-muted-foreground border-2 border-transparent focus:border-background/20 focus:outline-none transition-colors resize-none" value={formData.message} onChange={e => setFormData({
              ...formData,
              message: e.target.value
            })} />

              <button type="submit" className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-background text-foreground font-display font-bold text-lg uppercase tracking-wide hover:bg-background/90 transition-colors border-2 border-background/20">
                <Send className="w-5 h-5" />
                Get Your Free Estimate
              </button>
            </form>

            <p className="flex items-center justify-center gap-2 text-xs text-primary-foreground/60 mt-4">
              <Lock className="w-3 h-3" />
              Your information is secure and will never be shared
            </p>
          </div>
        </div>
      </div>
    </section>;
}