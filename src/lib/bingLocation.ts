/**
 * Bing Ads location detection — fully isolated from Google logic.
 * Only runs when ?msclkid= is present in the URL.
 *
 * Detection priority:
 *  1. ?cd=  → BING_CITY_MAP / BING_COUNTY_MAP
 *  2. ?gcd= → BING_CITY_MAP / BING_COUNTY_MAP
 *  3. ?county= (URL-encoded, + → space)
 *  4. "Bay Area"
 *
 * Phone:
 *  - ?ph=    → format XXX-XXX-XXXX
 *  - default 408-260-5673
 */

export const BING_DEFAULT_PHONE = "4082605673";
export const BING_DEFAULT_CITY = "Bay Area";

// 7 county-level Bing IDs → short county name
export const BING_COUNTY_MAP: Record<string, string> = {
  "113052": "Santa Clara",
  "113074": "Alameda",
  "113035": "San Mateo",
  "113034": "Contra Costa",
  "113062": "Santa Cruz",
  "113060": "San Francisco",
  "113054": "Marin",
};

// 138 Bing city IDs → city name
export const BING_CITY_MAP: Record<string, string> = {
  // Santa Clara County
  "43952": "San Jose", "43953": "Santa Clara", "43935": "Sunnyvale", "43960": "Cupertino",
  "43947": "Mountain View", "44021": "Palo Alto", "43944": "Milpitas", "43928": "Campbell",
  "43942": "Los Gatos", "44010": "Saratoga", "43991": "Morgan Hill", "43931": "Gilroy",
  "43929": "East Palo Alto", "43941": "Los Altos", "44004": "Los Altos Hills",
  "44025": "Stanford", "43999": "San Martin", "247748": "Monte Sereno",
  "249481": "East Foothills", "249068": "Loyola",

  // Alameda County
  "43600": "Oakland", "43552": "Alameda", "43563": "Hayward", "43930": "Fremont",
  "43940": "Livermore", "43949": "Pleasanton", "43556": "Berkeley", "43554": "Albany",
  "43557": "Castro Valley", "43559": "Dublin", "43562": "Emeryville", "43948": "Newark",
  "43569": "Piedmont", "43574": "San Leandro", "43575": "San Lorenzo",
  "43957": "Union City", "249453": "Ashland", "250215": "Cherryland",

  // San Mateo County
  "43897": "San Mateo", "43950": "Redwood City", "43876": "Burlingame", "43925": "Daly City",
  "43884": "South San Francisco", "43894": "San Bruno", "43872": "Belmont",
  "43880": "Foster City", "43943": "Menlo Park", "43890": "Millbrae", "43924": "Pacifica",
  "43895": "San Carlos", "43881": "Half Moon Bay", "43964": "Atherton", "43874": "Brisbane",
  "43904": "Colma", "43921": "Hillsborough", "44007": "Portola Valley", "44015": "Woodside",
  "249713": "Broadmoor", "135808": "La Honda", "43891": "Montara", "43892": "Moss Beach",
  "248258": "North Fair Oaks", "135976": "Pescadero",

  // Contra Costa County
  "43579": "Walnut Creek", "43604": "Concord", "43601": "Antioch", "43582": "Richmond",
  "43571": "Pittsburg", "43577": "San Ramon", "43587": "Brentwood", "43593": "Oakley",
  "43567": "Martinez", "43570": "Pinole", "43606": "Hercules", "43558": "Clayton",
  "43565": "Lafayette", "43592": "Moraga", "43599": "Orinda", "43602": "Danville",
  "43561": "El Cerrito", "43572": "Pleasant Hill", "43576": "San Pablo", "43553": "Alamo",
  "135202": "Bay Point", "135822": "Blackhawk", "43585": "Bethel Island", "134639": "Byron",
  "43603": "Crockett", "134599": "Diablo", "134165": "Discovery Bay", "43589": "El Sobrante",
  "44780": "Kensington", "135489": "Port Costa", "43573": "Rodeo", "248504": "Vine Hill",

  // Santa Cruz County
  "43954": "Santa Cruz", "43969": "Capitola", "43958": "Watsonville", "44000": "Scotts Valley",
  "43962": "Aptos", "43965": "Ben Lomond", "248174": "Bonny Doon", "43967": "Boulder Creek",
  "250032": "Corralitos", "43978": "Felton", "43979": "Freedom", "248361": "La Selva Beach",
  "43778": "Live Oak", "248172": "Opal Cliffs", "43996": "Rio del Mar", "43937": "Soquel",
  "248204": "Day Valley",

  // San Francisco County
  "43896": "San Francisco",

  // Marin County
  "43903": "Novato", "43898": "San Rafael", "43889": "Mill Valley", "43900": "Sausalito",
  "43902": "Tiburon", "43926": "Corte Madera", "43883": "Larkspur", "43906": "Fairfax",
  "43919": "San Anselmo", "43918": "Ross", "43914": "Kentfield", "43873": "Belvedere",
  "163119": "Greenbrae", "134053": "Lucas Valley-Marinwood", "43887": "Bolinas",
  "43907": "Forest Knolls", "134895": "Marshall", "162882": "Nicasio",
  "135247": "Point Reyes Station", "249731": "Santa Venetia", "134009": "Stinson Beach",
  "248586": "Strawberry", "135395": "Tomales", "43923": "Woodacre",
  "134963": "Tamalpais-Homestead Valley",
};

export type BingLocationSource =
  | "city"
  | "county"
  | "suffix_param"
  | "fallback"
  | "not_bing_visit";

export interface BingResolution {
  city: string;
  phoneDigits: string;
  phoneFormatted: string;
  phoneLink: string;
  source: BingLocationSource;
}

function formatBingPhone(digits: string): string {
  const d = digits.replace(/\D/g, "");
  if (d.length === 10) {
    return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
  }
  return digits;
}

function lookupBingId(id: string): { name: string; source: "city" | "county" } | null {
  if (!id) return null;
  if (BING_CITY_MAP[id]) return { name: BING_CITY_MAP[id], source: "city" };
  if (BING_COUNTY_MAP[id]) return { name: BING_COUNTY_MAP[id], source: "county" };
  return null;
}

/**
 * Returns Bing resolution if this is a Bing visit (msclkid present), else null.
 * Caller should fall through to existing Google logic when this returns null.
 */
export function resolveBingLocation(search: string): BingResolution | null {
  const params = new URLSearchParams(search);

  if (!params.has("msclkid")) {
    if (typeof window !== "undefined") {
      (window as unknown as Record<string, unknown>).__bingLocationSource = "not_bing_visit";
    }
    return null;
  }

  const cd = params.get("cd")?.trim() || "";
  const gcd = params.get("gcd")?.trim() || "";
  const countyParam = params.get("county")?.trim() || "";
  const phParam = params.get("ph")?.trim() || "";

  let name: string | null = null;
  let source: BingLocationSource = "fallback";

  // 1. ?cd=
  const cdHit = lookupBingId(cd);
  if (cdHit) {
    name = cdHit.name;
    source = cdHit.source;
  }

  // 2. ?gcd=
  if (!name) {
    const gcdHit = lookupBingId(gcd);
    if (gcdHit) {
      name = gcdHit.name;
      source = gcdHit.source;
    }
  }

  // 3. ?county= (URL-decoded, + → space)
  if (!name && countyParam) {
    name = decodeURIComponent(countyParam.replace(/\+/g, " ")).trim();
    if (name) source = "suffix_param";
  }

  // 4. fallback
  if (!name) {
    name = BING_DEFAULT_CITY;
    source = "fallback";
  }

  const phoneDigits = (phParam.replace(/\D/g, "").length === 10)
    ? phParam.replace(/\D/g, "")
    : BING_DEFAULT_PHONE;

  const phoneFormatted = formatBingPhone(phoneDigits);
  const phoneLink = `tel:+1${phoneDigits}`;

  if (typeof window !== "undefined") {
    (window as unknown as Record<string, unknown>).__bingLocationSource = source;
  }

  return { city: name, phoneDigits, phoneFormatted, phoneLink, source };
}
