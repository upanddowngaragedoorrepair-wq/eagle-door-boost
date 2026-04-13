import { Phone, Search, Wrench, FileText } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';

const steps = [{
  icon: Phone,
  number: 1,
  title: 'Schedule Your Service',
  description: 'Call or request a',
  highlight: 'FREE Estimate!'
}, {
  icon: Search,
  number: 2,
  title: 'On-Site Inspection',
  description: 'We identify the issue and explain your options clearly.',
  highlight: null
}, {
  icon: FileText,
  number: 3,
  title: 'Estimation',
  description: 'You receive clear pricing before any work begins.',
  highlight: null
}, {
  icon: Wrench,
  number: 4,
  title: 'We Get It Done',
  description: 'Repair or installation — completed professionally and built to last.',
  highlight: null
}];

export function HowItWorks() {
  const { phoneLink } = useLocation2();
  
  return (
    <section className="py-24 md:py-32 bg-[#ebebe0] relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-transparent to-background/10 pointer-events-none" />
      
      <div className="container-main relative">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-6 py-2.5 text-sm font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/30">
            We'll get it done right the 1st time
          </span>
        </div>

        {/* Heading - BIGGER */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-center mb-16 tracking-tight text-secondary">
          How It <span className="gold-text">Works</span>
        </h2>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 w-[60%] h-1 bg-primary/40 rounded-full" />

          <div className="grid md:grid-cols-4 gap-10 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Icon Circle with Number Badge */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/40">
                    <step.icon className="w-10 h-10 text-primary-foreground" strokeWidth={2} />
                  </div>
                  {/* Number Badge */}
                  <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-background text-foreground text-sm font-bold flex items-center justify-center border-3 border-primary shadow-lg">
                    {step.number}
                  </span>
                </div>

                {/* Title - BIGGER */}
                <h3 className="font-sans text-xl md:text-2xl font-bold mb-3 text-secondary">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base max-w-[240px] text-muted leading-relaxed">
                  {step.description}
                  {step.highlight && (
                    <>
                      <br />
                      <a href={phoneLink} className="text-primary font-bold hover:underline text-xl">
                        {step.highlight}
                      </a>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
