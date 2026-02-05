import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Zap, Shield, TrendingUp, Lock, Sun, Palette, Home, Key, Wrench, Cog, Smartphone, Settings } from 'lucide-react';
import gateSwing from '@/assets/card-automatic-gate.webp';
import automaticLiftmaster from '@/assets/service-automatic-liftmaster.webp';

const AutomaticGates = () => {
  const features = [
    { title: 'Remote Control Access', description: 'Open from your car, phone, or keypad—hands-free.' },
    { title: 'Enhanced Security', description: 'Deter intruders and control property access.' },
    { title: 'Increased Property Value', description: 'Add curb appeal and real estate value.' },
    { title: 'Safety Features Built-In', description: 'Photo-eyes, auto-reverse, and loop detectors.' },
    { title: 'Weather-Resistant', description: 'Engineered for rain, wind, and extreme temps.' },
    { title: 'Custom Designs Available', description: 'Modern, traditional, or custom styles.' },
  ];

  const benefits = [
    'Free on-site consultation',
    'Same-day install available',
    'Premium LiftMaster operators',
    '2-year warranty included',
  ];

  const faqs = [
    { 
      question: 'Do You Install and Repair All Types of Automatic Gates?', 
      answer: 'Yes. We install and repair swing gates, sliding gates, cantilever gates, and custom automatic gate systems. We also service most major brands and can upgrade existing manual gates to fully automated systems. Related services: Gate repair, access control, gate openers.' 
    },
    { 
      question: 'Can You Help With Permits for Automatic Gate Installation?', 
      answer: 'Absolutely. Permit requirements vary by city and gate type. We guide you through the permitting process and make sure your gate installation meets local code and safety requirements. We handle the details — you avoid delays.' 
    },
    { 
      question: 'What Safety Features Can Be Added to Automatic Gates?', 
      answer: 'We can install safety loops, photo eyes, edge sensors, emergency release systems, and compliant access controls to protect vehicles, pedestrians, and children. Safety is never optional.' 
    },
    { 
      question: 'Can You Upgrade an Existing Gate System?', 
      answer: 'Yes. We frequently upgrade older systems with new motors, smart controls, keypads, intercoms, and mobile app access — without replacing the entire gate if not needed. Honest recommendations only.' 
    },
    { 
      question: 'How Long Does an Automatic Gate Installation Take?', 
      answer: 'Most installations are completed within a few days, depending on complexity and permitting. We focus on clean work, proper wiring, and long-term reliability — not rushing the job.' 
    },
  ];

  const trustCards = [
    { icon: Zap, title: 'Powerful Motor Systems', description: 'Reliable operation, every time.' },
    { icon: Shield, title: 'UL-Listed Safety Features', description: 'Certified safe for your family.' },
    { icon: TrendingUp, title: 'Boost Property Value', description: 'Premium ROI on your home.' },
    { icon: Lock, title: 'Advanced Security', description: 'Keep your property protected.' },
  ];

  const relatedServices = [
    { icon: Home, label: 'Driveway Gates', href: '/driveway-gates' },
    { icon: Key, label: 'Access Control', href: '/access-control' },
    { icon: Smartphone, label: 'Smart Integration', href: '/access-control' },
    { icon: Wrench, label: 'Gate Repair', href: '/gate-repair' },
    { icon: Cog, label: 'Gate Openers', href: '/automatic-gates' },
    { icon: Settings, label: 'Maintenance', href: '/gate-repair' },
  ];

  return (
    <ServicePageLayout
      title="Automatic Gate Installation"
      subtitle="Electric Gate Experts"
      description="Upgrade your property with a premium automatic gate system. Enjoy hands-free convenience, enhanced security, and increased curb appeal."
      heroImage={gateSwing}
      features={features}
      benefits={benefits}
      faqs={faqs}
      authorityHeadline="Why We Specialize in Automatic Gates"
      authoritySubheadline="Precision automation. Premium hardware. Expert installation."
      authorityImages={[automaticLiftmaster]}
      trustCards={trustCards}
      relatedServices={relatedServices}
    />
  );
};

export default AutomaticGates;
