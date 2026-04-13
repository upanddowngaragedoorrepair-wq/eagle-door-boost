import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Lock, Phone, X, Tag, Clock } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

function getTimeUntilEndOfDay() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  return Math.max(0, end.getTime() - now.getTime());
}

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

export function PopupBookingForm() {
  const { city, cp, phoneLink, phoneFormatted } = useLocation2();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [msLeft, setMsLeft] = useState(getTimeUntilEndOfDay());
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    zip: '',
    notes: '10OFF',
  });

  const today = useMemo(() => {
    return new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem('popup_dismissed')) {
      setDismissed(true);
      return;
    }
    const timer = setTimeout(() => {
      if (!dismissed) setOpen(true);
    }, 20000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  useEffect(() => {
    const interval = setInterval(() => setMsLeft(getTimeUntilEndOfDay()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setDismissed(true);
    sessionStorage.setItem('popup_dismissed', 'true');
  };

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
          message: `Service needed: ${formData.service}\nDiscount code: 10OFF`,
          zip: formData.zip,
          notes: '10OFF - 10% Online Booking Discount',
          page_url: window.location.href,
          city,
          cp,
          source: 'popup_booking_form',
        }),
      });

      if (res.ok) {
        const params = new URLSearchParams(window.location.search);
        const keepParams = ['city', 'cp', 'utm_source', 'utm_campaign', 'utm_medium', 'utm_term', 'utm_content', 'gclid', 'cd', 'kd'];
        const redirectParams = new URLSearchParams();
        keepParams.forEach(k => { const v = params.get(k); if (v) redirectParams.set(k, v); });
        const qs = redirectParams.toString();
        handleClose();
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

  const handleCallClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'popup_call_click' });
  };

  if (dismissed && !open) return null;

  const inputClass = "w-full px-4 py-3 rounded-xl bg-background text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-base font-medium transition-colors";

  return (
    <Dialog open={open} onOpenChange={(val) => { if (!val) handleClose(); }}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto p-0 gap-0 rounded-2xl overflow-hidden border-none bg-card shadow-2xl">
        {/* Header */}
        <div className="bg-primary px-4 pt-4 pb-3 md:px-6 md:pt-6 md:pb-5 text-center relative">
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <DialogTitle className="font-display text-xl md:text-3xl font-bold text-primary-foreground mb-1.5">
            Get Free Quote
          </DialogTitle>
          <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-1.5 border border-accent/30">
            <Tag className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold text-accent">
              10% Off All Services When Booking Online
            </span>
          </div>
          <p className="text-primary-foreground/80 text-sm mt-2">
            Offer ends today, {today} • Add <span className="font-bold text-accent">10OFF</span> to the notes
          </p>
          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-1.5 mt-3">
            <Clock className="w-4 h-4 text-accent" />
            {(() => {
              const totalSec = Math.floor(msLeft / 1000);
              const h = String(Math.floor(totalSec / 3600)).padStart(2, '0');
              const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0');
              const s = String(totalSec % 60).padStart(2, '0');
              return (
                <div className="flex items-center gap-1 font-mono text-sm font-bold text-accent">
                  <span className="bg-accent/20 rounded px-1.5 py-0.5">{h}</span>
                  <span>:</span>
                  <span className="bg-accent/20 rounded px-1.5 py-0.5">{m}</span>
                  <span>:</span>
                  <span className="bg-accent/20 rounded px-1.5 py-0.5">{s}</span>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Form */}
        <div className="px-4 py-3 md:px-6 md:py-5">
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}

          <form action="https://formspree.io/f/xdalkyzy" method="POST" onSubmit={handleSubmit} className="space-y-3">
            <input type="text" name="name" placeholder="Your Name *" required className={inputClass}
              value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
            <input type="tel" name="phone" placeholder="Phone Number *" required className={inputClass}
              value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
            <input type="email" name="email" placeholder="Email Address" className={inputClass}
              value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
            <div className="grid grid-cols-2 gap-3">
              <input type="text" name="zip" placeholder="Zip Code" inputMode="numeric" pattern="[0-9]*" maxLength={5} className={inputClass}
                value={formData.zip} onChange={e => setFormData({ ...formData, zip: e.target.value.replace(/\D/g, '').slice(0, 5) })} />
              <select name="service" className={`${inputClass} appearance-none`}
                value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })}>
                <option value="">Service Needed</option>
                {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <textarea name="notes" placeholder="Notes (add 10OFF for 10% discount)" rows={2}
              className={`${inputClass} resize-none`}
              value={formData.notes} onChange={e => setFormData({ ...formData, notes: e.target.value })} />

            <button type="submit" disabled={submitting} className="w-full btn-cta text-lg min-h-[52px]">
              <Send className="w-5 h-5" />
              {submitting ? 'Submitting...' : 'Book Now & Save 10%'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm text-muted-foreground font-medium">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Call CTA */}
          <a
            href={phoneLink}
            onClick={handleCallClick}
            className="w-full btn-secondary text-lg min-h-[52px] flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call Now: {phoneFormatted}
          </a>

          <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-3">
            <Lock className="w-3.5 h-3.5" />
            Your information is secure and will never be shared
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PopupBookingForm;
