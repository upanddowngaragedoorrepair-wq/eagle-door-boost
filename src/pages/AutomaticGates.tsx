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
      question: 'How much does an automatic gate cost?', 
      answer: 'Systems range from $2,500 to $15,000+ depending on size and features.' 
    },
    { 
      question: 'How long does installation take?', 
      answer: 'Most residential installs complete in 1-2 days. Commercial may take 3-5.' 
    },
    { 
      question: 'What brands do you install?', 
      answer: 'We\'re authorized LiftMaster dealers—the industry\'s most reliable operator.' 
    },
    { 
      question: 'Do automatic gates work during power outages?', 
      answer: 'Yes! All systems include battery backup and manual release options.' 
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
