import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Palette, Shield, Award, Ruler, Wrench, Key, Smartphone, Home, Cog, Settings } from 'lucide-react';
import gateDriveway from '@/assets/card-driveway-gate.webp';
import drivewaySwing from '@/assets/service-driveway-swing.webp';
import drivewayBlack from '@/assets/service-driveway-black.webp';
import swingWhite from '@/assets/service-swing-white.webp';

const DrivewayGates = () => {
  const features = [
    { title: 'Custom Design Options', description: 'Wrought iron, aluminum, wood, or vinyl in any style.' },
    { title: 'Swing & Sliding Options', description: 'Perfect gate type based on your driveway layout.' },
    { title: 'Premium Materials', description: 'Heavy-gauge steel with powder coating finishes.' },
    { title: 'Automation Included', description: 'Premium LiftMaster operator with every install.' },
    { title: 'Security Integration', description: 'Keypads, intercoms, cameras, and smartphone control.' },
    { title: 'HOA-Compliant Designs', description: 'We ensure designs meet community guidelines.' },
  ];

  const benefits = [
    'Free design consultation',
    'Custom fabrication',
    'Premium operators included',
    'Lifetime structural warranty',
  ];

  const faqs = [
    { 
      question: 'What style of driveway gate is best?', 
      answer: 'Sliding gates suit sloped driveways; swing gates work best on flat areas with clearance.' 
    },
    { 
      question: 'How much does a driveway gate cost?', 
      answer: 'Installations range from $4,000 to $20,000+ depending on size and features.' 
    },
    { 
      question: 'Do I need a permit for a driveway gate?', 
      answer: 'Most cities require permits—we handle all permitting and inspections.' 
    },
    { 
      question: 'How long does installation take?', 
      answer: 'Most installations complete in 2-3 days including foundation and automation.' 
    },
  ];

  const trustCards = [
    { icon: Palette, title: 'Custom Design Consultation', description: 'Your vision, expertly realized.' },
    { icon: Shield, title: 'Code-Compliant Installation', description: 'Proper permits and inspections.' },
    { icon: Award, title: 'Premium Materials Only', description: 'Heavy-gauge steel & quality finishes.' },
    { icon: Ruler, title: 'Precision Fabrication', description: 'Built to exact specifications.' },
  ];

  const relatedServices = [
    { icon: Cog, label: 'Gate Automation', href: '/automatic-gates' },
    { icon: Key, label: 'Access Systems', href: '/access-control' },
    { icon: Smartphone, label: 'Smart Integration', href: '/access-control' },
    { icon: Wrench, label: 'Gate Repair', href: '/gate-repair' },
    { icon: Home, label: 'Fencing', href: '/fences' },
    { icon: Settings, label: 'Maintenance', href: '/gate-repair' },
  ];

  return (
    <ServicePageLayout
      title="Driveway Gate Installation"
      subtitle="Custom Entrance Gates"
      description="Make a stunning first impression with a custom driveway gate. We design, fabricate, and install premium entrance gates that enhance security and curb appeal."
      heroImage={gateDriveway}
      features={features}
      benefits={benefits}
      faqs={faqs}
      authorityHeadline="Why We Specialize in Driveway Gates"
      authoritySubheadline="Custom-built systems. Precision setup. Built to last."
      authorityImages={[drivewaySwing, drivewayBlack, swingWhite]}
      trustCards={trustCards}
      relatedServices={relatedServices}
    />
  );
};

export default DrivewayGates;
