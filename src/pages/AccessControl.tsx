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
      question: 'Can I control my gate from my phone?', 
      answer: 'Absolutely! We install smartphone-compatible systems for remote access anywhere.' 
    },
    { 
      question: 'What\'s the best access control for a home?', 
      answer: 'We recommend a keypad and smartphone combo for flexible family and guest access.' 
    },
    { 
      question: 'Do you install commercial access control?', 
      answer: 'Yes! We specialize in commercial-grade card readers and multi-user platforms.' 
    },
    { 
      question: 'Can I add access control to my existing gate?', 
      answer: 'In most cases, yes—we retrofit keypads and smart controls to current systems.' 
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
