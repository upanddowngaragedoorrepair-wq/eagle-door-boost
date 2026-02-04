import { ServicePageLayout } from '@/components/ServicePageLayout';
import { TreePine, Shield, Paintbrush, Ruler, Home, Wrench, Key, Cog, Settings, Lock, CheckCircle, Heart } from 'lucide-react';
import fenceWood from '@/assets/fence-wood.webp';
import fenceMetal from '@/assets/fence-metal.webp';
import fenceWoodHero from '@/assets/fence-wood-hero.webp';
import fenceHero from '@/assets/service-fence-wood.webp';

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
    'Ask Us for a Real Client Reference',
    'Warranty coverage',
  ];

  const faqs = [
    { 
      question: 'How Do I Know Where My Property Line Is Before Installing a Fence?', 
      answer: 'Installing a fence in the wrong location can cause costly disputes. We always recommend verifying property lines before installation. If needed, we can guide you through obtaining a professional survey to ensure your fence is placed correctly and compliantly. We build it right — the first time.' 
    },
    { 
      question: 'Do I Need a Permit to Install a Fence?', 
      answer: 'Permit requirements vary by city and fence height. Our team is familiar with local regulations and will let you know if a permit is required for your specific project. We make sure your fence meets local codes and HOA guidelines when applicable. No surprises. No compliance issues.' 
    },
    { 
      question: 'How Long Does Fence Installation Take?', 
      answer: 'Most residential fence installations are completed within 1–3 days, depending on size and material. We focus on efficient scheduling while maintaining high-quality workmanship — no rushed jobs, no shortcuts. Clean work. On time.' 
    },
    { 
      question: 'What Type of Fence Is Best for My Property?', 
      answer: 'The right fence depends on your goals — privacy, security, aesthetics, or durability. We offer wood, vinyl, chain-link, and custom metal fencing options and will walk you through the best choice based on your property and budget. Practical advice. Honest recommendations.' 
    },
    { 
      question: 'Do You Offer a Warranty on Fence Installation?', 
      answer: 'Yes. We stand behind our work. Our fence installations are backed by workmanship warranties, and we use quality materials designed for long-term durability. Built to last — not just to install.' 
    },
  ];

  const trustCards = [
    { icon: Shield, title: 'Expert-Level Craftsmanship', description: 'Every installation and repair is performed by trained technicians with real field experience.' },
    { icon: CheckCircle, title: 'Clean & Code-Compliant Work', description: 'Proper wiring, correct hardware, and no shortcuts — ever.' },
    { icon: Wrench, title: 'Built for Long-Term Reliability', description: 'We use premium parts and industry-approved systems only.' },
    { icon: Heart, title: 'Honest Recommendations', description: "If it can be repaired, we'll repair it. If it needs replacement, we'll explain why." },
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
      heroImage={fenceHero}
      features={features}
      benefits={benefits}
      faqs={faqs}
      authorityHeadline="Why We're the Specialists in Fencing"
      authoritySubheadline="Precision installation. Clean work. Built to last."
      authorityImages={[fenceWoodHero, fenceMetal]}
      trustCards={trustCards}
      relatedServices={relatedServices}
    />
  );
};

export default Fences;
