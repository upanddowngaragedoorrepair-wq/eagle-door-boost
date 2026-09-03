import { ATTRIBUTION_KEYS, type Attribution, type AttributionPayload } from '@/lib/attribution';

interface AttributionFieldsProps {
  attribution: Attribution;
  landingPageUrl?: string;
  referrerUrl?: string;
}

/** Hidden inputs mirroring the exact field names sent in the backend payload. */
export function AttributionFields({ attribution, landingPageUrl = '', referrerUrl = '' }: AttributionFieldsProps) {
  return (
    <>
      {ATTRIBUTION_KEYS.map((key) => (
        <input key={key} type="hidden" name={key} value={attribution[key] || ''} />
      ))}
      <input type="hidden" name="landing_page_url" value={landingPageUrl} />
      <input type="hidden" name="referrer_url" value={referrerUrl} />
    </>
  );
}

export type { Attribution, AttributionPayload };
export default AttributionFields;
