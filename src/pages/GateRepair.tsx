import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Wrench, Zap, Clock, ThumbsUp, Settings, Shield, Smartphone, Key, Home, Cog } from 'lucide-react';
import gateRepair from '@/assets/card-gate-repair.webp';
import repairTech from '@/assets/service-gate-repair-tech.webp';
import repairTech2 from '@/assets/service-gate-repair-2.webp';
import gateMotor from '@/assets/service-gate-motor.webp';

const GateRepair = () => {
  const features = [
    { title: 'Same-Day Emergency Service', description: 'Gate stuck? We respond fast to get you operational.' },
    { title: 'Motor & Operator Repair', description: 'Expert diagnosis for LiftMaster, Elite, DoorKing, and more.' },
    { title: 'Sensor & Safety Repairs', description: 'Photo-eyes, loop detectors, and auto-reverse systems.' },
    { title: 'Track & Wheel Service', description: 'Alignment issues and worn components fixed right.' },
    { title: 'Hinge & Hardware Repair', description: 'Sagging gates and broken hinges restored fast.' },
    { title: 'Control Board Replacement', description: 'Electronic failures diagnosed and repaired.' },
  ];

  const benefits = [
    'Same-day service available',
    'All brands serviced',
    '90-day repair warranty',
    'Upfront pricing',
  ];

  const faqs = [
    { 
      question: 'Do You Repair All Types of Gate Issues?', 
      answer: 'Yes. We repair motors, sensors, hinges, tracks, wiring issues, access control failures, and mechanical wear on all types of automatic gates. Fast diagnostics, honest repairs.' 
    },
    { 
      question: 'Do You Offer Same-Day Gate Repair?', 
      answer: 'In many cases, yes. We prioritize urgent repairs, especially when gates are stuck open, closed, or unsafe. Emergency service available.' 
    },
    { 
      question: 'Will You Recommend Repair or Replacement?', 
      answer: 'We always start with repair. If replacement is necessary, we\'ll explain why and show you options — no pressure. If it can be fixed, we fix it.' 
    },
    { 
      question: 'Do You Repair Gates Installed by Other Companies?', 
      answer: 'Yes. We regularly service and repair gates installed by other contractors, regardless of brand or installer. Experience across systems.' 
    },
    { 
      question: 'Can You Upgrade My Gate During a Repair?', 
      answer: 'Yes. During repairs, we can upgrade safety features, motors, access control, or add smart functionality if desired.' 
    },
  ];

  const trustCards = [
    { icon: Wrench, title: 'Advanced Troubleshooting', description: 'Pinpoint issues fast with expert diagnostics.' },
    { icon: Settings, title: 'All Major Brands Serviced', description: 'LiftMaster, Elite, DoorKing & more.' },
    { icon: Clock, title: 'Same-Day Service Available', description: 'Emergency response when you need it.' },
    { icon: ThumbsUp, title: 'Honest Repair Recommendations', description: 'We fix what\'s needed—nothing more.' },
  ];

  const relatedServices = [
    { icon: Home, label: 'Driveway Gates', href: '/driveway-gates' },
    { icon: Cog, label: 'Gate Openers', href: '/automatic-gates' },
    { icon: Key, label: 'Access Control', href: '/access-control' },
    { icon: Smartphone, label: 'Intercom Systems', href: '/access-control' },
    { icon: Shield, label: 'Maintenance Plans', href: '/automatic-gates' },
    { icon: Zap, label: 'Emergency Service', href: '/gate-repair' },
  ];

  return (
    <ServicePageLayout
      title="Gate Repair Services"
      subtitle="Fast & Reliable Repairs"
      description="Gate stuck, making noise, or not responding? Our expert technicians diagnose and repair all automatic gate problems—same-day service available."
      heroImage={gateRepair}
      features={features}
      benefits={benefits}
      faqs={faqs}
      authorityHeadline="Why We Specialize in Gate Repair"
      authoritySubheadline="Fast diagnostics. Clean repairs. Long-term reliability."
      authorityImages={[gateMotor, repairTech]}
      trustCards={trustCards}
      relatedServices={relatedServices}
    />
  );
};

export default GateRepair;
