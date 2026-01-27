import { ServicePageLayout } from '@/components/ServicePageLayout';
import gateDriveway from '@/assets/gate-driveway.webp';

const DrivewayGates = () => {
  const features = [
    { title: 'Custom Design Options', description: 'Choose from wrought iron, aluminum, wood, or vinyl in styles from modern to classic estate.' },
    { title: 'Swing & Sliding Options', description: 'We help you select the perfect gate type based on your driveway layout and slope.' },
    { title: 'Premium Materials', description: 'Heavy-gauge steel, powder coating, and galvanized finishes for lasting durability.' },
    { title: 'Automation Included', description: 'Every driveway gate installation includes a premium LiftMaster operator system.' },
    { title: 'Security Integration', description: 'Add keypads, intercoms, cameras, and smartphone control for complete security.' },
    { title: 'HOA-Compliant Designs', description: 'We work with your HOA to ensure designs meet community guidelines.' },
  ];

  const benefits = [
    'Free design consultation',
    'Custom fabrication',
    'Premium operators included',
    'Permit handling',
    'Foundation & post work',
    'Lifetime structural warranty',
  ];

  const faqs = [
    { 
      question: 'What style of driveway gate is best?', 
      answer: 'It depends on your space and aesthetic. Sliding gates are ideal for sloped driveways, while swing gates suit flat areas with more clearance. We\'ll help you choose.' 
    },
    { 
      question: 'How much does a driveway gate cost?', 
      answer: 'Driveway gate installations range from $4,000 to $20,000+ depending on size, material, and features. We offer free in-home estimates.' 
    },
    { 
      question: 'Do I need a permit for a driveway gate?', 
      answer: 'Most cities require permits for automatic gate installations. We handle all permitting and inspections as part of our service.' 
    },
    { 
      question: 'How long does installation take?', 
      answer: 'Most driveway gate installations are completed in 2-3 days, including foundation work, gate mounting, and automation setup.' 
    },
    { 
      question: 'Can you match my existing fence?', 
      answer: 'Absolutely. We offer custom fabrication to seamlessly match your existing fencing style and color.' 
    },
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
    />
  );
};

export default DrivewayGates;
