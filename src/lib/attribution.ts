/**
 * First-party advertising attribution capture.
 *
 * Captures click IDs + UTM parameters as soon as a visitor lands on ANY page,
 * persists them in localStorage (with a sessionStorage mirror as a fallback),
 * and never overwrites an existing non-empty value with an empty one.
 *
 * Values are stored and transmitted EXACTLY as they appear in the URL:
 * no trimming, decoding, hashing or other transformation.
 */

export const ATTRIBUTION_KEYS = [
  'gclid',
  'msclkid',
  'fbclid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const;

export type AttributionKey = (typeof ATTRIBUTION_KEYS)[number];
export type Attribution = Record<AttributionKey, string>;

const STORAGE_KEY = 'eag_attribution_v1';
const LANDING_URL_KEY = 'eag_landing_page_url';
const REFERRER_KEY = 'eag_referrer_url';

const emptyAttribution = (): Attribution =>
  ATTRIBUTION_KEYS.reduce((acc, k) => {
    acc[k] = '';
    return acc;
  }, {} as Attribution);

function safeGet(store: Storage | undefined, key: string): string | null {
  try {
    return store?.getItem(key) ?? null;
  } catch {
    return null;
  }
}

function safeSet(store: Storage | undefined, key: string, value: string) {
  try {
    store?.setItem(key, value);
  } catch {
    /* storage blocked (private mode / quota) — degrade gracefully */
  }
}

function readStored(): Attribution {
  const result = emptyAttribution();
  for (const store of [
    typeof localStorage !== 'undefined' ? localStorage : undefined,
    typeof sessionStorage !== 'undefined' ? sessionStorage : undefined,
  ]) {
    const raw = safeGet(store, STORAGE_KEY);
    if (!raw) continue;
    try {
      const parsed = JSON.parse(raw) as Partial<Attribution>;
      for (const k of ATTRIBUTION_KEYS) {
        const v = parsed?.[k];
        if (!result[k] && typeof v === 'string' && v !== '') result[k] = v;
      }
    } catch {
      /* corrupted entry — ignore */
    }
  }
  return result;
}

function persist(data: Attribution) {
  const raw = JSON.stringify(data);
  safeSet(typeof localStorage !== 'undefined' ? localStorage : undefined, STORAGE_KEY, raw);
  safeSet(typeof sessionStorage !== 'undefined' ? sessionStorage : undefined, STORAGE_KEY, raw);
}

/**
 * Merge the current URL's attribution parameters into stored values.
 * Non-empty URL values win; empty URL values never clear stored values.
 * Safe to call on every page/route change.
 */
export function captureAttribution(): Attribution {
  if (typeof window === 'undefined') return emptyAttribution();

  const stored = readStored();
  let params: URLSearchParams;
  try {
    params = new URLSearchParams(window.location.search);
  } catch {
    params = new URLSearchParams();
  }

  const merged: Attribution = { ...stored };
  for (const k of ATTRIBUTION_KEYS) {
    const fromUrl = params.get(k);
    if (fromUrl !== null && fromUrl !== '') merged[k] = fromUrl;
  }
  persist(merged);

  // Landing page + referrer are recorded once, on the visitor's first page.
  if (!safeGet(sessionStorage, LANDING_URL_KEY)) {
    safeSet(sessionStorage, LANDING_URL_KEY, window.location.href);
    safeSet(sessionStorage, REFERRER_KEY, document.referrer || '');
  }

  return merged;
}

export function getAttribution(): Attribution {
  if (typeof window === 'undefined') return emptyAttribution();
  return captureAttribution();
}

export function getLandingPageUrl(): string {
  if (typeof window === 'undefined') return '';
  return safeGet(sessionStorage, LANDING_URL_KEY) || window.location.href;
}

export function getReferrerUrl(): string {
  if (typeof window === 'undefined') return '';
  return safeGet(sessionStorage, REFERRER_KEY) ?? (typeof document !== 'undefined' ? document.referrer : '') ?? '';
}

function generateSubmissionId(): string {
  try {
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  } catch {
    /* fall through */
  }
  return `sub-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export type AttributionPayload = Attribution & {
  landing_page_url: string;
  referrer_url: string;
  page_url: string;
  submitted_at: string;
  form_submission_id: string;
  form_name: string;
};

/**
 * Build the attribution portion of a form submission payload.
 * Always returns every field (empty string when unavailable) so downstream
 * CRM/webhook mappings stay stable even with no advertising click ID present.
 */
export function buildAttributionPayload(formName: string): AttributionPayload {
  let attribution = emptyAttribution();
  try {
    attribution = getAttribution();
  } catch {
    /* never block a submission because of attribution */
  }

  return {
    ...attribution,
    landing_page_url: getLandingPageUrl(),
    referrer_url: getReferrerUrl(),
    page_url: typeof window !== 'undefined' ? window.location.href : '',
    submitted_at: new Date().toISOString(),
    form_submission_id: generateSubmissionId(),
    form_name: formName,
  };
}
