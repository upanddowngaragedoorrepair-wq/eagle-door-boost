import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, MapPin, Zap, Shield, Star, Lock } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { formatPhoneInput, phoneDigits, isValidUsPhone, isValidZip, isValidEmail } from '@/lib/phone';


export function ContactForm() {
  const { city, cp, phoneLink, phoneFormatted } = useLocation2();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zipCode: '',
    address: '',
    message: '',
    gclid: '',
    msclkid: '',
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData((prev) => ({
      ...prev,
      gclid: params.get('gclid') || '',
      msclkid: params.get('msclkid') || '',
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidUsPhone(formData.phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!isValidZip(formData.zipCode)) {
      setError('Please enter a valid 5-digit zip code.');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('https://formspree.io/f/xdalkyzy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formatPhoneInput(formData.phone),
          phone_digits: phoneDigits(formData.phone),
          email: formData.email,
          zip: formData.zipCode,
          address: formData.address,
          message: formData.message,
          page_url: window.location.href,
          city: city,
          cp: cp
        })
      });


      if (res.ok) {
        const params = new URLSearchParams(window.location.search);
        const keepParams = ['city', 'cp', 'utm_source', 'utm_campaign', 'utm_medium', 'utm_term', 'utm_content', 'gclid', 'cd', 'kd'];
        const redirectParams = new URLSearchParams();
        keepParams.forEach((k) => {const v = params.get(k);if (v) redirectParams.set(k, v);});
        const qs = redirectParams.toString();
        navigate(`/form-submitted${qs ? `?${qs}` : ''}`);
        return;
      } else {
        const data = await res.json();
        setError(data?.errors?.map((err: any) => err.message).join(', ') || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full px-5 py-4 rounded-xl bg-background text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors text-base font-medium";

  return (
    <section id="quote-form" className="py-[72px] md:py-24 bg-card relative overflow-hidden border-t border-border">
      <div className="container-main relative">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Serving {city} & The Greater Bay Area</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-center mb-6 tracking-tight">
          <span className="text-foreground">Get Your </span>
          <span className="gold-text italic">Free Estimate</span>
        </h2>
        <p className="text-center text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Professional gate services — Schedule a no obligation quote. Fast response, fair prices.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border text-base font-semibold text-foreground shadow-sm">
            <Zap className="w-5 h-5 text-primary" />
            30-Min Response
          </span>
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border text-base font-semibold text-foreground shadow-sm">
            <Shield className="w-5 h-5 text-primary" />
            Licensed & Insured
          </span>
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border text-base font-semibold text-foreground shadow-sm">
            <Star className="w-5 h-5 text-[hsl(var(--gold-bright))] fill-[hsl(var(--gold-bright))]" />
            5-Star Rated
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Team Photo */}
          <div className="hidden lg:block">
            <img alt="Eagle Gate Team" className="w-full h-full object-cover rounded-3xl border border-border shadow-md" loading="lazy" decoding="async" src="/lovable-uploads/b3e45d0d-ebb8-4e10-a44e-2eaab66f2396.webp" />
          </div>

          {/* Form Card */}
          <div className="bg-card rounded-3xl p-10 shadow-lg border border-border relative">
            {/* Online Now Badge */}
            <div className="absolute top-6 right-6 inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-3 py-1">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="font-bold text-green-700 text-sm">Online Now</span>
            </div>

            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Request a Free Quote
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Fill out the form and we'll get back to you Shortly ! 
            </p>

            {error &&
            <div className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                {error}
              </div>
            }

            <form action="https://formspree.io/f/xdalkyzy" method="POST" onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Your Name *" required className={inputClass} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <input type="tel" name="phone" placeholder="Phone Number *" required inputMode="tel" autoComplete="tel" className={inputClass} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: formatPhoneInput(e.target.value) })} />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input type="email" name="email" placeholder="Email Address *" required inputMode="email" autoComplete="email" className={inputClass} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <input type="text" name="zip" placeholder="Zip Code *" required inputMode="numeric" pattern="[0-9]{5}" maxLength={5} className={inputClass} value={formData.zipCode} onChange={(e) => setFormData({ ...formData, zipCode: e.target.value.replace(/\D/g, '').slice(0, 5) })} />
              </div>


              <input type="text" name="address" placeholder="Street Address" className={inputClass} value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />

              <textarea name="message" placeholder="Tell us about your issue" rows={3} className={`${inputClass} resize-none`} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />

              <button type="submit" disabled={submitting} className="w-full btn-cta text-lg min-h-[60px]">
                <Send className="w-5 h-5" />
                {submitting ? 'Submitting...' : 'Get Your Free Estimate'}
              </button>
            </form>

            <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-5">
              <Lock className="w-4 h-4" />
              Your information is secure and will never be shared
            </p>
          </div>
        </div>
      </div>
    </section>);

}

export default ContactForm;