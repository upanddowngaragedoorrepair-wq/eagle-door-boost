import { ServicePageLayout } from '@/components/ServicePageLayout';
import { TreePine, Shield, Paintbrush, Ruler, Home, Wrench, Key, Cog, Settings, Lock } from 'lucide-react';
import fenceWood from '@/assets/service-fence-wood.webp';
import fenceChain from '@/assets/service-fence-chain.webp';

const Fences = () => {
  const features = [
    { title: 'Vinyl Fencing', description: 'Low-maintenance and weather-resistant—never needs paint.' },
    { title: 'Wood Fencing', description: 'Classic cedar and redwood for natural privacy.' },
    { title: 'Wrought Iron Fencing', description: 'Elegant and durable for estates and security.' },
    { title: 'Chain Link Fencing', description: 'Affordable and practical for property boundaries.' },
    { title: 'Aluminum Fencing', description: 'Rust-free and mimics iron at a lower cost.' },
    { title: 'Privacy Fencing', description: 'Full-height solutions that block views and noise.' },
  ];

  const benefits = [
    'Free property assessment',
    'Quality materials only',
    'Professional installation',
    'Warranty coverage',
  ];

  const faqs = [
    { 
      question: 'What\'s the best fence material for privacy?', 
      answer: 'Vinyl or wood fencing at 6ft+ height provides full visual barrier.' 
    },
    { 
      question: 'How much does fencing cost per foot?', 
      answer: 'Fencing costs range from $15-50 per linear foot depending on material.' 
    },
    { 
      question: 'Do you remove old fences?', 
      answer: 'Yes—old fence removal is included and we dispose of materials responsibly.' 
    },
    { 
      question: 'Can you match my new fence to my gate?', 
      answer: 'Absolutely! We specialize in cohesive looks with matching styles and finishes.' 
    },
  ];

  const trustCards = [
    { icon: TreePine, title: 'Premium Material Selection', description: 'Cedar, vinyl, iron, and more.' },
    { icon: Ruler, title: 'Precision Installation', description: 'Level, plumb, and built to last.' },
    { icon: Paintbrush, title: 'Custom Finishes Available', description: 'Match your gate and home.' },
    { icon: Shield, title: 'Full Warranty Protection', description: 'Materials and workmanship covered.' },
  ];

  const relatedServices = [
    { icon: Home, label: 'Driveway Gates', href: '/driveway-gates' },
    { icon: Cog, label: 'Automatic Gates', href: '/automatic-gates' },
    { icon: Key, label: 'Access Control', href: '/access-control' },
    { icon: Wrench, label: 'Gate Repair', href: '/gate-repair' },
    { icon: Lock, label: 'Security Fencing', href: '/fences' },
    { icon: Settings, label: 'Gate Matching', href: '/driveway-gates' },
  ];

  return (
    <ServicePageLayout
      title="Fence Installation"
      subtitle="Quality Fencing Solutions"
      description="Define your property with quality fencing that complements your gate. We install vinyl, wood, iron, and aluminum fencing with expert craftsmanship."
      heroImage={fenceWood}
      features={features}
      benefits={benefits}
      faqs={faqs}
      authorityHeadline="Why We Specialize in Fencing"
      authoritySubheadline="Quality materials. Expert installation. Perfect finish."
      authorityImages={[fenceWood, fenceChain]}
      trustCards={trustCards}
      relatedServices={relatedServices}
    />
  );
};

export default Fences;
