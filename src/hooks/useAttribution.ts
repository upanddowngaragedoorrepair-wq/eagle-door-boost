import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { captureAttribution, type Attribution, getLandingPageUrl, getReferrerUrl } from '@/lib/attribution';

/**
 * Keeps attribution fresh across client-side navigation and exposes the
 * stored values for hidden form fields.
 */
export function useAttribution() {
  const routerLocation = useLocation();
  const [attribution, setAttribution] = useState<Attribution>(() => captureAttribution());

  useEffect(() => {
    setAttribution(captureAttribution());
  }, [routerLocation.pathname, routerLocation.search]);

  return {
    attribution,
    landingPageUrl: getLandingPageUrl(),
    referrerUrl: getReferrerUrl(),
  };
}

export default useAttribution;
