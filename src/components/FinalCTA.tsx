import { Phone, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLocation2 } from '@/contexts/LocationContext';
import techWorking from '@/assets/tech-working.webp';

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
  a: 'In many cities and counties, yes — especially for driveway gates, automated systems, or structural fence modifications.\n\nThe good news? We handle the permit process for you. Our team determines if a permit is required, prepares and submits applications, provides drawings and documentation, coordinates inspections, and ensures your installation meets local code. You focus on your project — we take care of the paperwork.'
}];


function FAQItem({ q, a }: {q: string;a: string;}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group">

        <span className="font-display font-bold text-foreground text-lg leading-snug group-hover:text-primary transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />

      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>

        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{a}</p>
      </div>
    </div>);

}

export function FinalCTA() {
  const { phoneLink, phoneFormatted } = useLocation2();

  return (
    <section className="py-20 md:py-28 border-t border-border bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-main relative">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-4">
            <span className="text-foreground">Common </span>
            <span className="gold-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Straight answers from technicians who've seen it all.
          </p>
        </div>

        {/* Horizontal image banner + CTA */}
        <div className="rounded-2xl overflow-hidden shadow-xl shadow-black/20 mb-10 flex flex-col sm:flex-row">
          <div className="sm:w-64 md:w-80 flex-shrink-0 h-48 sm:h-auto">
            <img

              alt="Eagle Automatic gate technician working on gate motor"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center top' }} src="/lovable-uploads/eea46d11-7ff4-4cee-a6db-9521584c3875.webp" />

          </div>
          <div className="bg-card border-t sm:border-t-0 sm:border-l border-border p-6 flex flex-col justify-center flex-1">
            <p className="text-foreground font-display font-bold text-xl mb-1">Still have questions?</p>
            <p className="text-muted-foreground mb-5">Talk to a technician directly — we're available now.</p>
            <a href={phoneLink} className="btn-cta w-full sm:w-auto self-start text-lg min-h-[52px]">
              <Phone className="w-5 h-5" />
              {phoneFormatted}
            </a>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-card rounded-3xl border border-border shadow-xl shadow-black/10 p-8 md:p-10">
          {faqs.map((faq, i) =>
          <FAQItem key={i} q={faq.q} a={faq.a} />
          )}
        </div>
      </div>
    </section>);

}

export default FinalCTA;