import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitted) {
    return (
      <section id="quote-form" className="py-16 md:py-24 border-t border-border">
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
      </section>
    );
  }

  return (
    <section id="quote-form" className="py-16 md:py-24 border-t border-border">
      <div className="container-main">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading mb-4">
              Request a <span className="gold-text">Callback</span>
            </h2>
            <p className="text-muted-foreground">
              Prefer a callback? Leave your info — no pressure.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card-premium p-6 md:p-8 rounded-2xl">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="(925) 555-1234"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground appearance-none cursor-pointer"
                >
                  <option value="">Select a service...</option>
                  <option value="repair">Gate Repair</option>
                  <option value="installation">New Gate Installation</option>
                  <option value="access-control">Access Control System</option>
                  <option value="maintenance">Maintenance & Inspection</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <button type="submit" className="btn-cta w-full">
                <Send className="w-5 h-5" />
                Request Callback
              </button>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              We respect your privacy. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
