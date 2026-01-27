import { ServicePageLayout } from '@/components/ServicePageLayout';
import gateSwing from '@/assets/gate-swing.webp';

const AutomaticGates = () => {
  const features = [
    { title: 'Remote Control Access', description: 'Open and close your gate from your car, phone, or keypad—no more getting out in bad weather.' },
    { title: 'Enhanced Security', description: 'Automatic gates deter intruders and control who enters your property with precision.' },
    { title: 'Increased Property Value', description: 'A quality automatic gate system adds curb appeal and real estate value to your home.' },
    { title: 'Safety Features Built-In', description: 'Photo-eyes, auto-reverse, and loop detectors prevent accidents and protect your family.' },
    { title: 'Weather-Resistant', description: 'Our gates are engineered to withstand rain, wind, and extreme temperatures year-round.' },
    { title: 'Custom Designs Available', description: 'Choose from modern, traditional, or custom styles to match your home\'s architecture.' },
  ];

  const benefits = [
    'Free on-site consultation',
    'Same-day installation available',
    'Premium LiftMaster operators',
    '2-year warranty included',
    'Licensed & insured technicians',
    '24/7 emergency repairs',
  ];

  const faqs = [
    { 
      question: 'How much does an automatic gate cost?', 
      answer: 'Automatic gate systems typically range from $2,500 to $15,000+ depending on size, material, and features. We provide free estimates with transparent pricing—no hidden fees.' 
    },
    { 
      question: 'How long does installation take?', 
      answer: 'Most residential automatic gate installations are completed in 1-2 days. Commercial projects may take 3-5 days depending on complexity.' 
    },
    { 
      question: 'What brands do you install?', 
      answer: 'We\'re authorized dealers for LiftMaster, the industry\'s most reliable gate operator. We also service and repair all major brands.' 
    },
    { 
      question: 'Do automatic gates work during power outages?', 
      answer: 'Yes! All our systems include battery backup and manual release options so you\'re never locked in or out.' 
    },
    { 
      question: 'What maintenance is required?', 
      answer: 'We recommend annual maintenance checks to ensure optimal performance. Our team offers affordable maintenance plans.' 
    },
  ];

  return (
    <ServicePageLayout
      title="Automatic Gate Installation"
      subtitle="Electric Gate Experts"
      description="Upgrade your property with a premium automatic gate system. Enjoy hands-free convenience, enhanced security, and increased curb appeal—installed by certified professionals."
      heroImage={gateSwing}
      features={features}
      benefits={benefits}
      faqs={faqs}
    />
  );
};

export default AutomaticGates;
