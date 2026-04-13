import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Lock } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';

const serviceOptions = [
  'Gate Repair',
  'Driveway Gates',
  'Sliding Gates',
  'Swing Gates',
  'Access Control',
  'Commercial Gates',
  'Fences',
  'Other',
];

export function HeroForm() {
  const { city, cp } = useLocation2();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
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
          message: `Service needed: ${formData.service}`,
          page_url: window.location.href,
          city,
          cp,
        }),
      });

      if (res.ok) {
        const params = new URLSearchParams(window.location.search);
        const keepParams = ['city', 'cp', 'utm_source', 'utm_campaign', 'utm_medium', 'utm_term', 'utm_content', 'gclid', 'cd', 'kd'];
        const redirectParams = new URLSearchParams();
        keepParams.forEach(k => { const v = params.get(k); if (v) redirectParams.set(k, v); });
        const qs = redirectParams.toString();
        navigate(`/form-submitted${qs ? `?${qs}` : ''}`);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3.5 rounded-xl bg-background text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-base font-medium transition-colors";

  return (
    <div className="bg-card rounded-3xl p-8 md:p-10 shadow-lg border border-border relative">
      {/* Online badge */}
      <div className="absolute top-5 right-5 inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-3 py-1">
        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
        <span className="font-bold text-green-700 text-sm">Online Now</span>
      </div>

      <h3 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-2">
        Get Your Free Estimate
      </h3>
      <p className="text-base text-muted-foreground mb-6">
        No obligation • Expert advice • Fast response
      </p>

      {error && (
        <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
          {error}
        </div>
      )}

      <form action="https://formspree.io/f/xdalkyzy" method="POST" onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          required
          className={inputClass}
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          required
          className={inputClass}
          value={formData.phone}
          onChange={e => setFormData({ ...formData, phone: e.target.value })}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className={inputClass}
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
        <select
          name="service"
          className={`${inputClass} appearance-none`}
          value={formData.service}
          onChange={e => setFormData({ ...formData, service: e.target.value })}
        >
          <option value="">Service Needed</option>
          {serviceOptions.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <button
          type="submit"
          disabled={submitting}
          className="w-full btn-cta text-lg min-h-[56px]"
        >
          <Send className="w-5 h-5" />
          {submitting ? 'Submitting...' : 'Get Free Estimate'}
        </button>
      </form>

      <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
        <Lock className="w-4 h-4" />
        Your information is secure and will never be shared
      </p>
    </div>
  );
}

export default HeroForm;
