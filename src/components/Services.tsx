import { useState, useMemo } from 'react';
import { Phone, CheckCircle, Wrench, X, ChevronLeft, ChevronRight, ChevronDown, Zap } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import gateRepair from '@/assets/card-gate-repair.webp';
import gateDriveway from '@/assets/card-driveway-gate.webp';
import gateSliding from '@/assets/card-sliding-gate.webp';
import gateSwing from '@/assets/card-pedestrian-gate.webp';
import gateAccessControl from '@/assets/card-access-control.webp';
import gateCommercial from '@/assets/card-commercial-gate.webp';
import cardFences from '@/assets/card-fences-new.webp';

// Driveway gallery images
import dg1 from '@/assets/driveway-gallery/driveway-1.webp';
import dg2 from '@/assets/driveway-gallery/driveway-2.webp';
import dg3 from '@/assets/driveway-gallery/driveway-3.webp';
import dg4 from '@/assets/driveway-gallery/driveway-4.webp';
import dg5 from '@/assets/driveway-gallery/driveway-5.webp';
import dg6 from '@/assets/driveway-gallery/driveway-6.webp';
import dg7 from '@/assets/driveway-gallery/driveway-7.webp';
import dg8 from '@/assets/driveway-gallery/driveway-8.webp';
import dg9 from '@/assets/driveway-gallery/driveway-9.webp';
import dg10 from '@/assets/driveway-gallery/driveway-10.webp';
import dg11 from '@/assets/driveway-gallery/driveway-11.webp';
import dg12 from '@/assets/driveway-gallery/driveway-12.webp';

import repairWelding from '@/assets/service-proof/gate-repair-welding.webp';
import repairTeamwork from '@/assets/service-proof/gate-repair-teamwork.webp';
import pedestrianModernGate from '@/assets/service-proof/pedestrian-gate-modern.webp';
import pedestrianFenceGate from '@/assets/service-proof/pedestrian-gate-fence.jpeg';
import pedestrianEntryGate from '@/assets/service-proof/pedestrian-gate-entry.jpeg';
import accessControlCallbox from '@/assets/service-proof/access-control-callbox.jpg';
import accessControlKeyFob from '@/assets/service-proof/access-control-keyfob.jpg';
import commercialCantilever from '@/assets/service-proof/commercial-cantilever.jpg';
import commercialBarrier from '@/assets/service-proof/commercial-barrier.png';
import fencesMetal from '@/assets/service-proof/fences-metal.webp';
import fencesWoodLattice from '@/assets/service-proof/fences-wood-lattice.jpeg';

const drivewayGallery = [dg1, dg2, dg3, dg4, dg5, dg6, dg7, dg8, dg9, dg10, dg11, dg12];

interface ServiceData {
  image: string;
  title: string;
  bullets: string[];
  gallery: string[] | null;
  expandedLabel: string;
  expandedItems: string[];
  cta: string;
  urgency: string;
  proofImages?: string[];
}

const services: ServiceData[] = [
{
  image: gateRepair,
  title: 'Gate Repair',
  bullets: [
    'Complete repair for noisy, stuck, or damaged automatic gates',
    'We fix motors, sensors, tracks, and more',
    'Same-day service',
    'All gate types',
    'Warranty included',
  ],
  gallery: null,
  expandedLabel: 'We repair:',
  expandedItems: ['Motors & openers', 'Sensors & safety eyes', 'Hinges & rollers', 'Stuck or jammed gates', 'Chains, belts & tracks', 'Welding repairs'],
  cta: 'Call for Gate Repair',
  urgency: 'Same-day service available.',
  proofImages: [repairWelding, repairTeamwork],
},
{
  image: gateDriveway,
  title: 'Driveway Gates',
  bullets: [
    'Custom driveway gate installation',
    'Professional-grade parts for smooth and secure operation',
    'Metal, Wood, Aluminum, Vinyl',
    'Premium materials',
    'Automatic Gates, Smart Systems',
  ],
  gallery: drivewayGallery,
  expandedLabel: 'We install:',
  expandedItems: ['Sliding gates', 'Swing gates', 'Steel & iron gates', 'Wood & vinyl gates', 'Automatic openers', 'Smart access systems'],
  cta: 'Get Driveway Gate Estimate',
  urgency: 'Free on-site estimate.',
  proofImages: [dg2, dg8],
},
{
  image: gateSwing,
  title: 'Pedestrian Gates',
  bullets: [
    'Custom pedestrian gate installation for walkways and side entries',
    'Secure access for foot traffic without opening the main gate',
    'Self-closing options',
    'ADA compliant',
    'Keypad & intercom ready',
  ],
  gallery: null,
  expandedLabel: 'We handle:',
  expandedItems: ['Walk-through gates', 'Side entry gates', 'Safe Guard Plates', 'Anti-climb gates', 'Keypad & intercom ready', 'Custom designs'],
  cta: 'Call for Pedestrian Gates',
  urgency: 'Fast quote in minutes.',
  proofImages: [pedestrianModernGate, pedestrianFenceGate, pedestrianEntryGate],
},
{
  image: gateAccessControl,
  title: 'Access Control',
  bullets: [
    'Keypads, intercoms, remotes, and smartphone-controlled access',
    'Total property security',
    'Smart tech',
    'Remote access',
    'Secure entry',
  ],
  gallery: null,
  expandedLabel: 'We install & repair:',
  expandedItems: ['Keypads & pin pads', 'Intercoms & video entry', 'Telephone entry systems', 'Multi Resident Access', 'Key fobs system', 'Call boxes'],
  cta: 'Call for Access Control',
  urgency: 'Need this exact service? Call now.',
  proofImages: [accessControlCallbox, accessControlKeyFob],
},
{
  image: gateCommercial,
  title: 'Commercial Gates',
  bullets: [
    'Solutions for businesses, HOAs, warehouses, and industrial properties',
    'Heavy-duty security',
    'High traffic',
    'Industrial grade',
    '24/7 support',
  ],
  gallery: null,
  expandedLabel: 'We install:',
  expandedItems: ['Parking Lot & Garage Gates', 'Cantilever gates', 'Rollup Gates & Garage', 'Chain-link gates', 'Barrier gate'],
  cta: 'Call for Commercial Gates',
  urgency: '24/7 commercial support.',
  proofImages: [commercialCantilever, commercialBarrier],
},
{
  image: cardFences,
  title: 'Fences & Pillars',
  bullets: [
    'Wood, vinyl, chain-link, wrought iron & aluminum fencing',
    'Custom concrete & steel pillars for a premium entrance look',
    'Permit handling — we manage applications & inspections',
    'Residential & commercial, HOA compliant installations',
  ],
  gallery: null,
  expandedLabel: 'We build:',
  expandedItems: ['Wood fences', 'Wrought iron fences', 'Chain-link fencing', 'Vinyl & aluminum', 'Concrete pillars', 'Steel columns'],
  cta: 'Call for Fencing Estimate',
  urgency: 'We handle permits for you.',
  proofImages: [fencesWood],
}];


function DrivewayGalleryModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex(i => (i - 1 + drivewayGallery.length) % drivewayGallery.length);
  const next = () => setActiveIndex(i => (i + 1) % drivewayGallery.length);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-border">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Driveway Gates Gallery</h2>
            <p className="text-sm text-muted-foreground">These are only some of our most recent installations. We offer many additional styles, access control systems, and custom configurations not shown. Call Now To see More Design Options</p>
          </div>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-muted transition-colors" aria-label="Close gallery">
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>
        <div className="relative bg-black">
          <img src={drivewayGallery[activeIndex]} alt={`Driveway gate project ${activeIndex + 1}`} className="w-full h-[420px] object-contain" />
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors" aria-label="Previous image">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors" aria-label="Next image">
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-3 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
            {activeIndex + 1} / {drivewayGallery.length}
          </div>
        </div>
        <div className="flex gap-2 p-4 overflow-x-auto">
          {drivewayGallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                i === activeIndex ? 'border-primary opacity-100' : 'border-transparent opacity-60 hover:opacity-90'
              }`}
            >
              <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" loading="lazy" decoding="async" width={64} height={64} />
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}


function ServiceCard({ service, isOpen, onToggle, phoneLink, phoneFormatted, onGalleryOpen }: {
  service: ServiceData;
  isOpen: boolean;
  onToggle: () => void;
  phoneLink: string;
  phoneFormatted: string;
  onGalleryOpen: () => void;
}) {
  return (
    <div
      className={`bg-card rounded-3xl overflow-hidden border shadow-sm transition-all duration-500 cursor-pointer ${
        isOpen ? 'border-primary/40 shadow-lg shadow-primary/5' : 'border-border hover:shadow-lg hover:-translate-y-2'
      }`}
      onClick={() => {
        onToggle();
      }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          decoding="async"
          width={400}
          height={192}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {service.gallery && (
          <button
            onClick={(e) => { e.stopPropagation(); onGalleryOpen(); }}
            className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full hover:bg-primary/90 transition-colors"
          >
            View Gallery
          </button>
        )}
        <h3 className="absolute bottom-4 left-6 font-display text-2xl md:text-3xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] [text-shadow:_0_0_1px_rgba(0,0,0,0.9),_1px_1px_0_rgba(0,0,0,0.6),-1px_-1px_0_rgba(0,0,0,0.6),_1px_-1px_0_rgba(0,0,0,0.6),-1px_1px_0_rgba(0,0,0,0.6)]">
          {service.title}
        </h3>
      </div>

      {/* Default content */}
      <div className="p-7">
        <ul className="space-y-2.5 mb-4">
          {service.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2.5 text-muted-foreground text-sm">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tap to expand hint */}
        <div className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${isOpen ? 'text-primary' : 'text-muted-foreground'}`}>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          <span>{isOpen ? 'Collapse' : 'Tap for details & call'}</span>
        </div>
      </div>

      {/* Expanded conversion panel */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-7 pb-7">
          {/* Divider */}
          <div className="border-t border-primary/20 mb-5" />

          {/* "We handle:" list */}
          <p className="text-sm font-bold text-foreground mb-3">{service.expandedLabel}</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-5">
            {service.expandedItems.map((item, i) => (
              <span key={i} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>

          {/* Proof images */}
          {service.proofImages && service.proofImages.length > 0 && (
            <div className="flex gap-2 mb-5">
              {service.proofImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${service.title} example ${i + 1}`}
                  className="w-24 h-16 object-cover rounded-lg border border-border"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          )}

          {/* Urgency line */}
          <p className="flex items-center gap-1.5 text-xs text-primary font-semibold mb-3">
            <Zap className="w-3.5 h-3.5" />
            {service.urgency}
          </p>

          {/* CTA button */}
          <a
            href={phoneLink}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-primary text-primary-foreground font-display font-bold text-base uppercase tracking-wide hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-5 h-5" />
            {service.cta}: {phoneFormatted}
          </a>
        </div>
      </div>
    </div>
  );
}


export function Services() {
  const { phoneLink, phoneFormatted } = useLocation2();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const serviceWord = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get('kd') || params.get('utm_term') || params.get('keyword') || params.get('kw') || '';
    const kw = raw.toLowerCase().trim();
    if (!kw) return 'Gate';
    if (/access|intercom|keypad|smart.?entry|buzzer|callbox|entry.?system/.test(kw)) return 'Access Control';
    if (/automatic|electric|opener|motor|liftmaster|operator|remote|battery/.test(kw)) return 'Automatic Gate';
    if (/fence|fencing|railing|picket|vinyl fence|chain.?link|wrought iron/.test(kw)) return 'Fence & Gate';
    if (/driveway|driveway gate|residential gate/.test(kw)) return 'Driveway Gate';
    if (/sliding|slide gate/.test(kw)) return 'Sliding Gate';
    if (/swing|swing gate|pedestrian/.test(kw)) return 'Swing Gate';
    if (/commercial|industrial|warehouse|hoa|business/.test(kw)) return 'Commercial Gate';
    if (/repair|broken|fix|stuck|maintenance|service|emergency/.test(kw)) return 'Gate Repair';
    return 'Gate';
  }, []);

  return (
    <section id="services" className="py-[72px] md:py-24 bg-background relative">
      <div className="container-main relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 mb-8">
            <Wrench className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Professional Services</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
            <span className="text-foreground">Our </span>
            <span className="gold-text">{serviceWord}</span>{' '}
            <span className="text-foreground">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From emergency repairs to complete installations, our certified technicians deliver exceptional results every time.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              phoneLink={phoneLink}
              phoneFormatted={phoneFormatted}
              onGalleryOpen={() => setGalleryOpen(true)}
            />
          ))}
        </div>
      </div>

      <DrivewayGalleryModal open={galleryOpen} onClose={() => setGalleryOpen(false)} />
    </section>
  );
}
