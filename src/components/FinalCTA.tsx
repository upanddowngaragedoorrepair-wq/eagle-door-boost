import { Phone, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLocation2 } from '@/contexts/LocationContext';

const faqs = [
  {
    q: 'How quickly can you repair my automatic gate?',
    a: "We understand that a malfunctioning gate isn't just inconvenient — it can be a security risk. In most cases, we offer same-day service, and our technicians arrive fully equipped to diagnose and fix the issue on the first visit.\n\nWhether it's a motor failure, sensor issue, hinge problem, track misalignment, or electrical malfunction — we handle it quickly and professionally."
  },
  {
    q: "Do you install new driveway gates? What's included?",
    a: 'Yes. We design, fabricate, and install custom driveway gates for residential and commercial properties.\n\nYour installation includes: site evaluation and measurements, gate design consultation, professional installation, opener integration (if needed), and full system testing and safety check.'
  },
  {
    q: 'Can you fix or install gate openers and motors?',
    a: "Absolutely. We repair and install all major gate opener brands. If your gate opens halfway, makes grinding noises, doesn't respond to remotes, stops working intermittently, or has battery or control board issues — we can diagnose whether it needs repair or replacement."
  },
  {
    q: 'Do you install access control systems?',
    a: 'Yes. We install and service keypads, card readers, intercom systems, telephone entry systems, remote access solutions, and smart access control integrations. Whether you need secure entry for a private home, gated community, or commercial property — we design systems that are secure, user-friendly, and scalable.'
  },
  {
    q: 'Do you also repair fences and gate structures?',
    a: 'Yes. Beyond motors and electronics, we handle structural gate and fence repairs including sagging gates, broken hinges, damaged frames, welding repairs, wooden fence repair, and metal and iron fence restoration.'
  },
  {
    q: 'What should I expect during my service appointment?',
    a: 'From the moment you contact us, you can expect clear communication, on-time arrival, professional diagnosis, honest recommendations, clean and organized workmanship, and a safety inspection before we leave. We treat your property with respect.'
  },
  {
    q: 'Do I need a permit for a new gate installation?',
    a: 'In many cities and counties, yes — especially for driveway gates, automated systems, or structural fence modifications.\n\nThe good news? We handle the permit process for you. Our team determines if a permit is required, prepares and submits applications, provides drawings and documentation, coordinates inspections, and ensures your installation meets local code.'
  }
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="font-display font-bold text-foreground text-base md:text-lg leading-snug group-hover:text-primary transition-colors">
          {q}
        </span>
        <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm md:text-base">{a}</p>
      </div>
    </div>
  );
}

export function FinalCTA() {
  const { phoneLink, phoneFormatted } = useLocation2();

  return (
    <>
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background border-t border-border">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
              Common <span className="gold-text">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Straight answers from technicians who've seen it all.
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border shadow-sm p-6 md:p-10 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 section-dark">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            Call Now for <span className="text-primary">Same-Day Service</span>
          </h2>
          <p className="text-lg text-white/60 mb-8 max-w-lg mx-auto">
            Licensed, insured, and ready to help — our team is standing by right now.
          </p>
          <a href={phoneLink} className="btn-cta text-xl px-12 py-5 min-h-[64px] mb-6">
            <Phone className="w-6 h-6" />
            {phoneFormatted}
          </a>
          <p className="text-sm text-white/40">
            No obligation • Free estimates • Available 7 days a week
          </p>
        </div>
      </section>
    </>
  );
}

export default FinalCTA;
