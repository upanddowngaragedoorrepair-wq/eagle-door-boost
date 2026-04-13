import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Lock, Clock } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';

export function ContactForm() {
  const { city, cp } = useLocation2();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zipCode: '',
    address: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('https://formspree.io/f/xdalkyzy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
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
        keepParams.forEach((k) => { const v = params.get(k); if (v) redirectParams.set(k, v); });
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

  const inputClass = "w-full px-4 py-3.5 rounded-xl bg-background text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors text-base";

  return (
    <section id="quote-form" className="py-16 md:py-24 bg-card border-t border-border">
      <div className="container-main">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight">
            Get Your <span className="gold-text">Free Estimate</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Fill out the form — we'll call you back within 5–15 minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Image */}
          <div className="hidden lg:block">
            <img
              alt="Eagle Gate Team"
              className="w-full h-full object-cover rounded-2xl border border-border shadow-md"
              loading="lazy"
              decoding="async"
              src="/lovable-uploads/b3e45d0d-ebb8-4e10-a44e-2eaab66f2396.webp"
            />
          </div>

          {/* Form Card */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-md border border-border relative">
            {/* Response time badge */}
            <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>Average callback time: <span className="font-bold text-foreground">5–15 minutes</span></span>
            </div>

            {error && (
              <div className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                {error}
              </div>
            )}

            <form action="https://formspree.io/f/xdalkyzy" method="POST" onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Your Name *" required className={inputClass} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <input type="tel" name="phone" placeholder="Phone Number *" required className={inputClass} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="email" name="email" placeholder="Email Address" className={inputClass} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <input type="text" name="zip" placeholder="Zip Code *" required className={inputClass} value={formData.zipCode} onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })} />
              </div>
              <input type="text" name="address" placeholder="Street Address" className={inputClass} value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
              <textarea name="message" placeholder="Tell us about your project or issue" rows={3} className={`${inputClass} resize-none`} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />

              <button type="submit" disabled={submitting} className="w-full btn-cta text-lg min-h-[56px]">
                <Send className="w-5 h-5" />
                {submitting ? 'Submitting...' : 'Get Your Free Estimate'}
              </button>
            </form>

            <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
              <Lock className="w-4 h-4" />
              Your information is secure and will never be shared
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
