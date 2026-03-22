import { useMemo } from 'react';
import { useLocation2 } from '@/contexts/LocationContext';
import eaglePin from '@/assets/eagle-pin.png';

const COUNTY_ANCHOR: Record<string, string> = {
  'Marin': 'San Rafael',
  'Santa Clara': 'San Jose',
  'San Francisco': 'San Francisco',
  'Alameda': 'Oakland',
  'Contra Costa': 'Concord',
  'Sacramento': 'Sacramento',
  'Orange': 'Irvine',
  'Riverside': 'Riverside',
  'San Mateo': 'San Mateo',
  'Ventura': 'Ventura',
  'Santa Cruz': 'Santa Cruz',
  'Monterey': 'Monterey',
};

const AREACODE_TO_COUNTY: Record<string, string> = {
  '408': 'Santa Clara',
  '415': 'Marin',
  '510': 'Alameda',
  '925': 'Contra Costa',
  '916': 'Sacramento',
  '949': 'Orange',
  '951': 'Riverside',
  '650': 'San Mateo',
  '805': 'Ventura',
  '831': 'Santa Cruz',
};

export function ServiceAreaMap() {
  const { city, cp } = useLocation2();

  const mapCity = useMemo(() => {
    // If we have a real city (not default "Pros"), use it
    if (city && city !== 'Pros' && city !== 'California') {
      return city + ', CA';
    }
    // Fallback: resolve from cp area code
    if (cp) {
      const ac = cp.replace(/\D/g, '').slice(0, 3);
      const county = AREACODE_TO_COUNTY[ac];
      if (county && COUNTY_ANCHOR[county]) {
        return COUNTY_ANCHOR[county] + ', CA';
      }
    }
    return 'San Francisco Bay Area, CA';
  }, [city, cp]);

  const displayCity = city && city !== 'Pros' ? city : 'The Bay Area';

  const mapSrc = useMemo(() => {
    return `https://www.google.com/maps?q=${encodeURIComponent(mapCity)}&output=embed&z=10&t=m`;
  }, [mapCity]);

  return (
    <section id="service-area" className="service-area-map-section">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-white text-center text-[28px] md:text-[36px] font-display font-bold mb-10">
          Proudly Serving{' '}
          <span className="text-[hsl(var(--primary))]">{displayCity}</span>
          {' '}& 30 Miles Around
        </h2>

        <div className="relative max-w-[1200px] mx-auto">
          {/*
            PERF: loading="lazy" defers iframe until near-viewport.
            explicit height prevents CLS when iframe loads.
          */}
          <iframe
            src={mapSrc}
            title={`Service area map for ${displayCity}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width={1200}
            height={420}
            className="w-full h-[300px] md:h-[420px] border-0 rounded-2xl"
            style={{ boxShadow: '0 15px 40px rgba(0, 0, 0, 0.35)' }}
            allowFullScreen
          />
          {/* Eagle pin overlay */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 pointer-events-none w-[100px] h-[100px] md:w-[140px] md:h-[140px]"
            style={{
              transform: 'translate(-50%, -65%)',
              filter: 'drop-shadow(0 10px 18px rgba(0, 0, 0, 0.4))',
            }}
          >
            <img
              src={eaglePin}
              alt="Eagle Automatic Gate pin"
              width={140}
              height={140}
              className="w-full h-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceAreaMap;
