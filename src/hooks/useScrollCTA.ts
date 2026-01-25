import { useState, useEffect } from 'react';

type CTALevel = 'top' | 'middle' | 'bottom';

interface CTAConfig {
  level: CTALevel;
  text: string;
  subtext: string;
}

const CTA_CONFIG: Record<CTALevel, Omit<CTAConfig, 'level'>> = {
  top: {
    text: 'Speak With a Gate Specialist',
    subtext: 'Avg response time ~30 sec',
  },
  middle: {
    text: 'Call for a Quick Quote',
    subtext: 'No obligation • Free estimates',
  },
  bottom: {
    text: 'Talk to a Field Technician Now',
    subtext: 'Direct line • Available now',
  },
};

export function useScrollCTA(): CTAConfig {
  const [level, setLevel] = useState<CTALevel>('top');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent < 33) {
        setLevel('top');
      } else if (scrollPercent < 66) {
        setLevel('middle');
      } else {
        setLevel('bottom');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    level,
    ...CTA_CONFIG[level],
  };
}
