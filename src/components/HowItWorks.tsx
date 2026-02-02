import { Phone, Search, Wrench } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';

import { FileText } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    number: 1,
    title: 'Schedule Your Service',
    description: 'Call or request a',
    highlight: 'FREE Estimate!'
  },
  {
    icon: Search,
    number: 2,
    title: 'Diagnosis',
    description: 'Technician arrives with a tablet to show our portfolio and explains the issue clearly.',
    highlight: null
  },
  {
    icon: FileText,
    number: 3,
    title: 'Estimation',
    description: 'Receive a detailed quote via email or text message.',
    highlight: null
  },
  {
    icon: Wrench,
    number: 4,
    title: 'Repair',
    description: 'Same-day fix using premium parts.',
    highlight: null
  }
];

export function HowItWorks() {
  const { phoneLink } = useUrlParams();

  return (
    <section className="py-16 md:py-20 bg-card/30">
      <div className="container-main">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-full">
            How We Work
          </span>
        </div>

        {/* Heading */}
        <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl mb-12 md:mb-16">
          How It <span className="gold-text">Works</span>
        </h2>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-[60%] h-0.5 bg-primary/40" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Icon Circle with Number Badge */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                    <step.icon className="w-8 h-8 text-primary-foreground" strokeWidth={2} />
                  </div>
                  {/* Number Badge */}
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-background text-foreground text-xs font-bold flex items-center justify-center border-2 border-primary">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm max-w-[220px]">
                  {step.description}
                  {step.highlight && (
                    <>
                      <br />
                      <a href={phoneLink} className="text-primary font-semibold hover:underline">
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
