import { ServicePageLayout } from '@/components/ServicePageLayout';
import gateRepair from '@/assets/card-gate-repair.webp';

const GateRepair = () => {
  const features = [
    { title: 'Same-Day Emergency Service', description: 'Gate stuck open or closed? We offer rapid response to get you back in operation fast.' },
    { title: 'Motor & Operator Repair', description: 'Expert diagnosis and repair for LiftMaster, Elite, DoorKing, and all major brands.' },
    { title: 'Sensor & Safety Repairs', description: 'Fix photo-eyes, loop detectors, and auto-reverse systems for safe operation.' },
    { title: 'Track & Wheel Service', description: 'Bent tracks, worn wheels, and alignment issues repaired to factory specs.' },
    { title: 'Hinge & Hardware Repair', description: 'Sagging gates, broken hinges, and rusted hardware restored or replaced.' },
    { title: 'Control Board Replacement', description: 'Electronic board failures diagnosed and repaired with quality components.' },
  ];

  const benefits = [
    'Same-day service available',
    'All brands serviced',
    '90-day repair warranty',
    'Upfront pricing',
    'Factory-trained techs',
    '24/7 emergency line',
  ];

  const faqs = [
    { 
      question: 'How fast can you get here?', 
      answer: 'We offer same-day service for most repairs. Emergency calls are typically responded to within 2-4 hours depending on your location.' 
    },
    { 
      question: 'My gate won\'t open—what should I do?', 
      answer: 'First, check for any obstructions. If clear, call us immediately. Most gates have a manual release—we can walk you through it if needed.' 
    },
    { 
      question: 'Do you repair all gate brands?', 
      answer: 'Yes! Our technicians are trained on LiftMaster, Elite, DoorKing, Ramset, Viking, and all major manufacturers.' 
    },
    { 
      question: 'How much do repairs typically cost?', 
      answer: 'Repairs range from $150 for minor fixes to $800+ for major component replacements. We provide free estimates before any work begins.' 
    },
    { 
      question: 'Is there a warranty on repairs?', 
      answer: 'All our repairs come with a 90-day workmanship warranty. Parts warranties vary by manufacturer.' 
    },
  ];

  return (
    <ServicePageLayout
      title="Gate Repair Services"
      subtitle="Fast & Reliable Repairs"
      description="Gate stuck, making noise, or not responding? Our expert technicians diagnose and repair all automatic gate problems—same-day service available."
      heroImage={gateRepair}
      features={features}
      benefits={benefits}
      faqs={faqs}
    />
  );
};

export default GateRepair;
