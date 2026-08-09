/** Phone input helpers — keeps what the user types identical to what we send. */

/** Strip everything but digits, drop a leading US country code, cap at 10. */
export function phoneDigits(value: string): string {
  let d = (value || '').replace(/\D/g, '');
  if (d.length === 11 && d.startsWith('1')) d = d.slice(1);
  return d.slice(0, 10);
}

/** Live mask: (408) 420-1704 */
export function formatPhoneInput(value: string): string {
  const d = phoneDigits(value);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

export function isValidUsPhone(value: string): boolean {
  const d = phoneDigits(value);
  return d.length === 10 && !['0', '1'].includes(d[0]);
}

export function isValidZip(value: string): boolean {
  return /^\d{5}$/.test((value || '').trim());
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((value || '').trim());
}
