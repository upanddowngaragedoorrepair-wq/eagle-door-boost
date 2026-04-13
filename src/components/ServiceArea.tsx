import { MapPin } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';

const areas: Record<string, string[]> = {
  'East Bay': ['Oakland', 'Berkeley', 'Fremont', 'Hayward', 'Concord', 'Walnut Creek', 'Dublin', 'Pleasanton', 'Livermore', 'San Leandro', 'Richmond', 'Antioch'],
  'South Bay': ['San Jose', 'Sunnyvale', 'Santa Clara', 'Milpitas', 'Campbell', 'Cupertino', 'Los Gatos', 'Saratoga'],
  'Peninsula & SF': ['San Francisco', 'San Mateo', 'Palo Alto', 'Redwood City', 'Daly City', 'Burlingame', 'Foster City', 'San Bruno'],
};

export function ServiceArea() {
  const { city } = useLocation2();

  return (
    <section id="service-area" className="py-[72px] md:py-24 bg-card border-t border-border">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-5 tracking-tight">
            <span className="text-foreground">Serving </span>
            <span className="gold-text">{city} & The Bay Area</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Local technicians serving the entire San Francisco Bay Area with fast response times.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {Object.entries(areas).map(([region, cities]) => (
            <div key={region} className="p-6 rounded-2xl bg-background border border-border shadow-sm">
              <h3 className="font-sans font-bold text-lg text-primary mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {region}
              </h3>
              <ul className="space-y-2">
                {cities.map(c => (
                  <li key={c} className="text-muted-foreground text-sm">{c}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;
