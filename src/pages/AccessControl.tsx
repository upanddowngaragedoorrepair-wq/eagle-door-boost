import { ServicePageLayout } from '@/components/ServicePageLayout';
import gateAccessControl from '@/assets/gate-access-control.webp';

const AccessControl = () => {
  const features = [
    { title: 'Keypad Entry Systems', description: 'Secure PIN-code access for family members, guests, and service providers.' },
    { title: 'Smartphone Control', description: 'Open gates from anywhere using our mobile app—perfect for delivery drivers and visitors.' },
    { title: 'Video Intercom Systems', description: 'See and speak with visitors before granting access from inside your home.' },
    { title: 'Remote Transmitters', description: 'Convenient handheld and car-mounted remotes for quick, hassle-free entry.' },
    { title: 'Card/Fob Access', description: 'Ideal for multi-tenant properties, businesses, and HOA communities.' },
    { title: 'Telephone Entry', description: 'Allow visitors to call your phone directly from the gate to request access.' },
  ];

  const benefits = [
    'Complete security solutions',
    'Multiple access methods',
    'Cloud-based management',
    'Visitor logging & history',
    'Integration with cameras',
    'Professional installation',
  ];

  const faqs = [
    { 
      question: 'Can I control my gate from my phone?', 
      answer: 'Absolutely! We install smartphone-compatible systems that let you open, close, and monitor your gate from anywhere in the world.' 
    },
    { 
      question: 'What\'s the best access control for a home?', 
      answer: 'For most homes, we recommend a combination keypad and smartphone system. This gives you flexible options for family, guests, and deliveries.' 
    },
    { 
      question: 'Do you install commercial access control?', 
      answer: 'Yes! We specialize in commercial-grade systems including card readers, vehicle tags, and multi-user management platforms.' 
    },
    { 
      question: 'Can I add access control to my existing gate?', 
      answer: 'In most cases, yes. We can retrofit keypads, intercoms, and smart controls to your current automatic gate system.' 
    },
    { 
      question: 'How secure are wireless access systems?', 
      answer: 'Modern systems use encrypted protocols that are extremely secure. We only install products that meet the highest security standards.' 
    },
  ];

  return (
    <ServicePageLayout
      title="Access Control Systems"
      subtitle="Smart Entry Solutions"
      description="Control who enters your property with advanced access control systems. From keypads to smartphone apps, we install complete security solutions for homes and businesses."
      heroImage={gateAccessControl}
      features={features}
      benefits={benefits}
      faqs={faqs}
    />
  );
};

export default AccessControl;
