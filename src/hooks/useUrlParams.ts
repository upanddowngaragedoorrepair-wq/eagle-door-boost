import { useMemo } from 'react';

interface UrlParams {
  city: string;
  phone: string;
  phoneFormatted: string;
  phoneLink: string;
}

const DEFAULT_CITY = 'Your Area';
const DEFAULT_PHONE = '9255551234';

function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
}

export function useUrlParams(): UrlParams {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const city = params.get('city') || DEFAULT_CITY;
    const phone = params.get('phone') || DEFAULT_PHONE;
    
    return {
      city: decodeURIComponent(city),
      phone: phone.replace(/\D/g, ''),
      phoneFormatted: formatPhone(phone),
      phoneLink: `tel:+1${phone.replace(/\D/g, '')}`,
    };
  }, []);
}
