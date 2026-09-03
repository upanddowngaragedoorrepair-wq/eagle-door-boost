import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Lock } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { formatPhoneInput, phoneDigits, isValidUsPhone, isValidZip, isValidEmail } from '@/lib/phone';


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
  const isMobile = useIsMobile();
  const [showRest, setShowRest] = useState(!isMobile);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    zip: '',
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

    if (isMobile && !showRest) {
      setError('');
      setShowRest(true);
      return;
    }

    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!isValidZip(formData.zip)) {
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
          message: `Service needed: ${formData.service}`,
          zip: formData.zip,
          page_url: window.location.href,
          city,
          cp,
          gclid: formData.gclid,
          msclkid: formData.msclkid,
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

  const inputClass = "w-full px-4 py-3.5 rounded-xl bg-background text-foreground placeholder:text-[hsl(214_18%_45%)] border border-[hsl(210_28%_86%)] focus:border-[hsl(var(--blue-mid))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--blue-mid))]/25 text-base font-medium transition-colors";

  return (
    <div className="bg-card rounded-3xl p-5 md:p-8 border border-[hsl(210_28%_88%)] shadow-[0_18px_50px_-18px_hsl(213_76%_12%/0.35)] relative">
      {/* Online badge */}
      <div className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-2.5 py-1">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="font-bold text-green-700 text-xs">Online Now</span>
      </div>

      <div className="block">
        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1.5 pr-24">
          Can't talk? Get a Free Estimate
        </h3>
        <p className="text-sm font-medium text-[hsl(var(--text-subtle))] mb-5">
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
          inputMode="tel"
          autoComplete="tel"
          className={inputClass}
          value={formData.phone}
          onChange={e => setFormData({ ...formData, phone: formatPhoneInput(e.target.value) })}
        />

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            showRest ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required={showRest}
              inputMode="email"
              autoComplete="email"
              className={inputClass}
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="text"
              name="zip"
              placeholder="Zip Code *"
              required={showRest}
              inputMode="numeric"
              pattern="[0-9]{5}"
              maxLength={5}

              className={inputClass}
              value={formData.zip}
              onChange={e => setFormData({ ...formData, zip: e.target.value.replace(/\D/g, '').slice(0, 5) })}
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
          </div>
        </div>

        <input type="hidden" name="gclid" value={formData.gclid} />
        <input type="hidden" name="msclkid" value={formData.msclkid} />

        <button
          type="submit"
          disabled={submitting}
          className="w-full btn-cta text-lg min-h-[56px]"
        >
          <Send className="w-5 h-5" />
          {submitting ? 'Submitting...' : isMobile && !showRest ? 'Continue' : 'Get Free Estimate'}
        </button>
        </form>

        <p className="flex items-center justify-center gap-2 text-xs font-medium text-[hsl(var(--text-subtle))] mt-3">
          <Lock className="w-4 h-4" />
          Your information is secure and will never be shared
        </p>
      </div>
    </div>
  );
}

export default HeroForm;
