import { useState, useEffect } from 'react';

interface UrlParams {
  city: string;
  phone: string;
  phoneFormatted: string;
  phoneLink: string;
  isLoading: boolean;
}

const DEFAULT_CITY = 'Your Area';
const DEFAULT_PHONE = '(888) 742-2174';

const COUNTY_PHONES: Record<string, string> = {
  "Marin": "415-689-8557",
  "Santa Clara": "408-809-9670",
  "San Francisco": "415-689-8557",
  "Alameda": "510-250-0820",
  "Contra Costa": "925-291-5716",
  "Sacramento": "916-264-9850",
  "Orange": "949-536-3302",
  "Riverside": "951-631-0241",
  "San Mateo": "650-436-5009",
  "Ventura": "805-427-9809",
  "Santa Cruz": "831-220-8854",
  "Monterey": "831-220-8854",
  "default": "(888) 742-2174"
};

const CITY_TO_COUNTY: Record<string, string> = {
  "San Jose":"Santa Clara","Santa Clara":"Santa Clara","Sunnyvale":"Santa Clara","Mountain View":"Santa Clara","Milpitas":"Santa Clara","Campbell":"Santa Clara","Cupertino":"Santa Clara","Los Gatos":"Santa Clara","Saratoga":"Santa Clara","Los Altos":"Santa Clara","Los Altos Hills":"Santa Clara","Gilroy":"Santa Clara","Morgan Hill":"Santa Clara",
  "San Francisco":"San Francisco","Daly City":"San Mateo","San Mateo":"San Mateo","Redwood City":"San Mateo","San Carlos":"San Mateo","Foster City":"San Mateo","Belmont":"San Mateo","Burlingame":"San Mateo","San Bruno":"San Mateo","Pacifica":"San Mateo","Half Moon Bay":"San Mateo","Millbrae":"San Mateo","Hillsborough":"San Mateo",
  "Oakland":"Alameda","Berkeley":"Alameda","Alameda":"Alameda","Fremont":"Alameda","Hayward":"Alameda","San Leandro":"Alameda","Union City":"Alameda","Newark":"Alameda","Pleasanton":"Alameda","Dublin":"Alameda","Livermore":"Alameda","San Ramon":"Alameda","Emeryville":"Alameda",
  "Concord":"Contra Costa","Walnut Creek":"Contra Costa","Antioch":"Contra Costa","Martinez":"Contra Costa","Pleasant Hill":"Contra Costa","Pittsburg":"Contra Costa","San Pablo":"Contra Costa","El Cerrito":"Contra Costa","Hercules":"Contra Costa","Pinole":"Contra Costa","Danville":"Contra Costa","Lafayette":"Contra Costa","Orinda":"Contra Costa","Moraga":"Contra Costa","Richmond":"Contra Costa","Brentwood":"Contra Costa","Oakley":"Contra Costa","Bay Point":"Contra Costa","El Sobrante":"Contra Costa","Clayton":"Contra Costa",
  "Sacramento":"Sacramento","Elk Grove":"Sacramento","Rancho Cordova":"Sacramento","Rosemont":"Sacramento","Elverta":"Sacramento","Folsom":"Sacramento","Fair Oaks":"Sacramento",
  "Irvine":"Orange","Costa Mesa":"Orange","Lake Forest":"Orange","Tustin":"Orange","Santa Ana":"Orange","Anaheim":"Orange",
  "Riverside":"Riverside","Corona":"Riverside","Murrieta":"Riverside","Moreno Valley":"Riverside","Eastvale":"Riverside","Perris":"Riverside",
  "Ventura":"Ventura","Moorpark":"Ventura",
  "Santa Cruz":"Santa Cruz","Soquel":"Santa Cruz",
  "Monterey":"Monterey","Salinas":"Monterey",
  "Los Angeles":"Los Angeles","Long Beach":"Los Angeles",
  "Santa Rosa":"Sonoma","Petaluma":"Sonoma",
  "San Rafael":"Marin","Novato":"Marin","Mill Valley":"Marin","Sausalito":"Marin","Corte Madera":"Marin","Larkspur":"Marin","Fairfax":"Marin","Tiburon":"Marin",
  "San Anselmo":"Marin","Ross":"Marin","Belvedere":"Marin","Kentfield":"Marin","Greenbrae":"Marin","Marin City":"Marin"
};

const AREACODE_TO_COUNTY: Record<string, string> = {
  "408":"Santa Clara","415":"Marin","510":"Alameda","916":"Sacramento","949":"Orange",
  "951":"Riverside","650":"San Mateo","805":"Ventura","831":"Santa Cruz"
};

function formatPhone(phone: string): string {
  const d = phone.replace(/\D/g, '');
  if (d.length === 11 && d.startsWith('1')) {
    return `(${d.slice(1, 4)}) ${d.slice(4, 7)}-${d.slice(7)}`;
  }
  if (d.length === 10) {
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  }
  return phone;
}

function getPhoneLink(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  return `tel:+1${digits}`;
}

const badLabel = (s: string | null | undefined): boolean => {
  if (!s) return true;
  const t = String(s).trim().toLowerCase();
  return t === "california" || t === "united states" || t === "usa";
};

const countyFromCity = (c: string): string | null => CITY_TO_COUNTY[c] || null;
const countyFromPhone = (p: string): string | null => AREACODE_TO_COUNTY[p.replace(/\D/g, '').slice(0, 3)] || null;
const countyPhone = (c: string | null): string => (c && COUNTY_PHONES[c]) || COUNTY_PHONES.default;

function cdVariants(id: string): string[] {
  const out: string[] = [];
  if (id) out.push(id);
  if (id && /^9199\d{4}$/.test(id)) out.push('919' + id.slice(4));
  return Array.from(new Set(out));
}

async function loadJson(url: string): Promise<Record<string, unknown>> {
  try {
    const response = await fetch(url, { cache: 'force-cache' });
    if (!response.ok) return {};
    return await response.json();
  } catch {
    return {};
  }
}

function normalizeToCity(label: string, allCities: string[], nbNameMap: Record<string, string>): string | null {
  if (!label) return null;
  const raw = String(label).trim();
  if (nbNameMap && nbNameMap[raw]) return nbNameMap[raw];
  const low = raw.toLowerCase();
  for (const c of allCities) {
    const cs = String(c || "").trim();
    if (cs && low.includes(cs.toLowerCase())) return cs;
  }
  return null;
}

function guessCityFromZip(z: string): string | null {
  if (!z) return null;
  const p = z.slice(0, 3);
  const MAP: Record<string, string> = {
    "900":"Los Angeles","901":"Los Angeles","902":"Los Angeles","903":"Inglewood","904":"Santa Monica","905":"Torrance","906":"Whittier",
    "907":"Long Beach","908":"Long Beach","909":"San Bernardino","910":"Pasadena","911":"Pasadena","912":"Glendale","913":"Van Nuys",
    "914":"Sherman Oaks","915":"Burbank","916":"North Hollywood","917":"West Covina","918":"Alhambra","919":"Chula Vista","920":"Oceanside",
    "921":"San Diego","922":"Cathedral City","923":"San Bernardino","924":"San Bernardino","925":"Riverside","926":"Irvine","927":"Santa Ana",
    "928":"Anaheim","930":"Ventura","931":"Santa Barbara","932":"Visalia","933":"Bakersfield","934":"San Luis Obispo","935":"Lancaster",
    "936":"Fresno","937":"Fresno","938":"Fresno","939":"Monterey","940":"San Mateo","941":"San Francisco","942":"Sacramento",
    "943":"Palo Alto","944":"San Mateo","945":"Oakland","946":"Oakland","947":"Berkeley","948":"Richmond","949":"San Rafael",
    "950":"San Jose","951":"San Jose","952":"Stockton","953":"Modesto","954":"Santa Rosa","955":"Eureka","956":"Sacramento",
    "957":"Sacramento","958":"Sacramento","959":"Chico","960":"Redding","961":"South Lake Tahoe"
  };
  return MAP[p] || null;
}

export function useUrlParams(): UrlParams {
  const [state, setState] = useState<UrlParams>(() => {
    const params = new URLSearchParams(window.location.search);
    const cityParam = params.get('city')?.trim() || '';
    const cpParam = params.get('cp')?.trim() || '';
    
    // Immediate values from URL params
    const phone = cpParam || DEFAULT_PHONE;
    return {
      city: cityParam ? decodeURIComponent(cityParam) : DEFAULT_CITY,
      phone: phone.replace(/\D/g, ''),
      phoneFormatted: formatPhone(phone),
      phoneLink: getPhoneLink(phone),
      isLoading: !cityParam // Only loading if we need to resolve from cd
    };
  });

  useEffect(() => {
    const resolveGeo = async () => {
      const params = new URLSearchParams(window.location.search);
      const cityParam = params.get('city')?.trim() || '';
      const cdRaw = params.get('cd')?.trim() || '';
      const cpParam = params.get('cp')?.trim() || '';
      const kdParam = params.get('kd')?.trim() || '';

      // If city is already set via URL param, just resolve phone
      if (cityParam) {
        const city = decodeURIComponent(cityParam);
        const county = countyFromCity(city);
        const phone = cpParam || countyPhone(county);
        setState({
          city,
          phone: phone.replace(/\D/g, ''),
          phoneFormatted: formatPhone(phone),
          phoneLink: getPhoneLink(phone),
          isLoading: false
        });
        return;
      }

      // No city param and no cd param - use defaults
      if (!cdRaw) {
        const phone = cpParam || DEFAULT_PHONE;
        setState({
          city: DEFAULT_CITY,
          phone: phone.replace(/\D/g, ''),
          phoneFormatted: formatPhone(phone),
          phoneLink: getPhoneLink(phone),
          isLoading: false
        });
        return;
      }

      // Resolve city from cd parameter
      const CD_CANDIDATES = cdVariants(cdRaw);
      
      const [critData, cityMapData, cdZipData, zipCityData, nbNameData, nbCdData, cdForceData, zipForceData] = await Promise.all([
        loadJson('/geo/geo-ca-criterionids.json'),
        loadJson('/geo/geo-ca-cityids.json'),
        loadJson('/geo/cd_to_zip.json'),
        loadJson('/geo/zip_to_city.json'),
        loadJson('/geo/neighborhood_name_to_city.json'),
        loadJson('/geo/neighborhood_cd_to_city.json'),
        loadJson('/geo/cd_force.json'),
        loadJson('/geo/zip_force.json')
      ]);

      const critMap = (critData.criterion_to_city || critData || {}) as Record<string, string>;
      const cityMap = (cityMapData.id_to_city || cityMapData || {}) as Record<string, string>;
      const cdToZip = (cdZipData.cd_to_zip || {}) as Record<string, string>;
      const zipToCity = (zipCityData.zip_to_city || {}) as Record<string, string>;
      const nbNameMap = (nbNameData.name_to_city || {}) as Record<string, string>;
      const nbCdMap = (nbCdData.cd_to_city || {}) as Record<string, string>;
      const CD_FORCE = (cdForceData.cd_to_city || {}) as Record<string, string>;
      const ZIP_FORCE = (zipForceData.zip_to_city || {}) as Record<string, string>;

      const ALL_CITY_NAMES = Array.from(new Set(
        Object.values(cityMap).concat(Object.values(zipToCity))
      )).filter(Boolean);

      const firstHit = (map: Record<string, string>) => CD_CANDIDATES.find(k => map && map[k]);

      let city: string | null = null;

      // Priority 1: Force override
      const cdOverride = firstHit(CD_FORCE);
      if (!city && cdOverride) city = CD_FORCE[cdOverride];

      // Priority 2: Neighborhood CD
      const cdByNb = firstHit(nbCdMap);
      if (!city && cdByNb) city = nbCdMap[cdByNb];

      // Priority 3: City map
      const cdByCityMap = firstHit(cityMap);
      if (!city && cdByCityMap && !badLabel(cityMap[cdByCityMap])) city = cityMap[cdByCityMap];

      // Priority 4: Criterion map
      const cdByCrit = firstHit(critMap);
      if (!city && cdByCrit) {
        const label = critMap[cdByCrit];
        if (!badLabel(label)) {
          city = normalizeToCity(label, ALL_CITY_NAMES, nbNameMap) || null;
        }
      }

      // Priority 5: ZIP lookup
      if (!city) {
        const cdForZip = firstHit(cdToZip);
        if (cdForZip) {
          const z = cdToZip[cdForZip];
          city = ZIP_FORCE[z] || zipToCity[z] || guessCityFromZip(z);
        }
      }

      // Priority 6: Keyword hint
      if (!city && kdParam) {
        const low = kdParam.toLowerCase();
        const hit = ALL_CITY_NAMES.find(c => low.includes(c.toLowerCase()));
        if (hit) city = hit;
      }

      if (badLabel(city)) city = null;

      // Resolve phone
      const county = city ? countyFromCity(city) : countyFromPhone(cpParam);
      const phone = cpParam || countyPhone(county);

      setState({
        city: city || DEFAULT_CITY,
        phone: phone.replace(/\D/g, ''),
        phoneFormatted: formatPhone(phone),
        phoneLink: getPhoneLink(phone),
        isLoading: false
      });
    };

    resolveGeo();
  }, []);

  return state;
}
