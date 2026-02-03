import { ServicePageLayout } from '@/components/ServicePageLayout';
import gateCommercial from '@/assets/card-automatic-gate.webp';

const Fences = () => {
  const features = [
    { title: 'Vinyl Fencing', description: 'Low-maintenance, weather-resistant vinyl fencing that never needs painting or staining.' },
    { title: 'Wood Fencing', description: 'Classic cedar and redwood options for a natural, timeless look with excellent privacy.' },
    { title: 'Wrought Iron Fencing', description: 'Elegant and durable iron fencing perfect for estate properties and security needs.' },
    { title: 'Chain Link Fencing', description: 'Affordable and practical solutions for property boundaries and commercial applications.' },
    { title: 'Aluminum Fencing', description: 'Rust-free aluminum that mimics the look of iron at a more affordable price point.' },
    { title: 'Privacy Fencing', description: 'Full-height privacy solutions that block views and reduce noise from neighbors.' },
  ];

  const benefits = [
    'Free property assessment',
    'Quality materials only',
    'Professional installation',
    'Matches existing gates',
    'Permit assistance',
    'Warranty coverage',
  ];

  const faqs = [
    { 
      question: 'What\'s the best fence material for privacy?', 
      answer: 'For maximum privacy, we recommend vinyl or wood fencing at 6ft+ height. Both options provide full visual barrier with excellent durability.' 
    },
    { 
      question: 'How much does fencing cost per foot?', 
      answer: 'Fencing costs range from $15-50 per linear foot depending on material and height. We provide free estimates with transparent pricing.' 
    },
    { 
      question: 'Do you need to remove my old fence?', 
      answer: 'We offer old fence removal as part of our installation service. We\'ll dispose of materials responsibly.' 
    },
    { 
      question: 'Can you match my new fence to my gate?', 
      answer: 'Yes! We specialize in creating cohesive looks between fencing and gate systems with matching styles and finishes.' 
    },
    { 
      question: 'How long does fence installation take?', 
      answer: 'Most residential fence installations are completed in 1-3 days depending on the linear footage and terrain.' 
    },
  ];

  return (
    <ServicePageLayout
      title="Fence Installation"
      subtitle="Quality Fencing Solutions"
      description="Define your property with quality fencing that complements your automatic gate. We install vinyl, wood, iron, and aluminum fencing with expert craftsmanship."
      heroImage={gateCommercial}
      features={features}
      benefits={benefits}
      faqs={faqs}
    />
  );
};

export default Fences;
