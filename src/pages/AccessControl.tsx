import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Smartphone, Lock, Video, Wifi, Key, Shield, Home, Wrench, Cog, Settings } from 'lucide-react';
import gateAccessControl from '@/assets/card-access-control.webp';
import accessKeypad from '@/assets/service-access-keypad.webp';

const AccessControl = () => {
  const features = [
    { title: 'Keypad Entry Systems', description: 'Secure PIN-code access for family and guests.' },
    { title: 'Smartphone Control', description: 'Open gates from anywhere using our mobile app.' },
    { title: 'Video Intercom Systems', description: 'See and speak with visitors before granting access.' },
    { title: 'Remote Transmitters', description: 'Convenient handheld and car-mounted remotes.' },
    { title: 'Card/Fob Access', description: 'Ideal for multi-tenant and commercial properties.' },
    { title: 'Telephone Entry', description: 'Visitors call your phone directly to request access.' },
  ];

  const benefits = [
    'Complete security solutions',
    'Multiple access methods',
    'Cloud-based management',
    'Ask Us for a Real Client Reference',
  ];

  const faqs = [
    { 
      question: 'What Access Control Systems Do You Install?', 
      answer: 'We install keypads, card readers, phone-based systems, intercoms, vehicle readers, and smart access systems for residential and commercial properties. Custom solutions for your property.' 
    },
    { 
      question: 'Can Access Control Be Added to My Existing Gate?', 
      answer: 'Yes. In most cases, access control systems can be integrated into your current gate or operator without full replacement. Cost-effective upgrades available.' 
    },
    { 
      question: 'Are Access Control Systems Secure?', 
      answer: 'Absolutely. We install encrypted systems with controlled access levels, audit logs, and optional remote management to ensure security and accountability. Security without complexity.' 
    },
    { 
      question: 'Do You Install Intercom and Video Systems?', 
      answer: 'Yes. We install audio and video intercom systems, including smartphone-connected solutions like DoorBird and similar platforms. See and speak before you open.' 
    },
    { 
      question: 'Can You Help With Commercial or HOA Access Control?', 
      answer: 'Yes. We design and install scalable access control solutions for HOAs, apartments, and commercial properties, including multi-user management and compliance features.' 
    },
  ];

  const trustCards = [
    { icon: Lock, title: 'Enterprise-Grade Security', description: 'Bank-level encryption protocols.' },
    { icon: Wifi, title: 'Cloud-Based Management', description: 'Monitor and control remotely.' },
    { icon: Video, title: 'Video Integration Ready', description: 'See who\'s at your gate anytime.' },
    { icon: Smartphone, title: 'App-Enabled Control', description: 'Full access from your phone.' },
  ];

  const relatedServices = [
    { icon: Home, label: 'Driveway Gates', href: '/driveway-gates' },
    { icon: Cog, label: 'Gate Automation', href: '/automatic-gates' },
    { icon: Video, label: 'Intercom Systems', href: '/access-control' },
    { icon: Wrench, label: 'Gate Repair', href: '/gate-repair' },
    { icon: Key, label: 'Keypad Systems', href: '/access-control' },
    { icon: Settings, label: 'Smart Integration', href: '/automatic-gates' },
  ];

  return (
    <ServicePageLayout
      title="Access Control Systems"
      subtitle="Smart Entry Solutions"
      description="Control who enters your property with advanced access control systems. From keypads to smartphone apps, we install complete security solutions."
      heroImage={gateAccessControl}
      features={features}
      benefits={benefits}
      faqs={faqs}
      authorityHeadline="Why We Specialize in Access Control"
      authoritySubheadline="Smart security. Seamless integration. Total control."
      authorityImages={[accessKeypad]}
      trustCards={trustCards}
      relatedServices={relatedServices}
    />
  );
};

export default AccessControl;
