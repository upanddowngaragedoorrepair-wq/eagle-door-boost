/**
 * Shared service mapping from URL keyword parameters.
 * Used by Hero H1 and Services section heading.
 */

export interface ServiceMapping {
  /** The dynamic service label, e.g. "Gate Repair", "Fences & Gates" */
  label: string;
  /** Whether the heading should use "Solutions" instead of "Services" */
  isCombined: boolean;
}

const COMBINED_LABELS = new Set([
  'Fences & Gates',
  'Gate & Garage Door',
  'Gate & Access Control',
]);

export function getServiceMapping(): ServiceMapping {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('kd') || params.get('utm_term') || params.get('keyword') || params.get('kw') || '';
  const kw = raw.toLowerCase().trim();

  if (!kw) return { label: 'Gate', isCombined: false };

  const hasFence = /fence|fencing/.test(kw);
  const hasGate = /gate/.test(kw);
  const hasGarage = /garage\s*door|garage/.test(kw);
  const hasAccess = /access\s*control|intercom|keypad|telephone\s*entry/.test(kw);
  const hasRepair = /repair|fix|broken|not\s*working/.test(kw);
  const hasInstall = /install/.test(kw);
  const hasAutomation = /automatic|electric|motor(?:ized)?|opener|remote|auto\s*gate/.test(kw);
  const hasMaterial = /metal|iron|steel|wrought\s*iron|aluminum|wood\s*gate/.test(kw);

  // 1. FENCES + GATES (combined)
  if (hasFence && hasGate) return { label: 'Fences & Gates', isCombined: true };

  // 2. GATE + GARAGE DOOR (combined)
  if (hasGate && hasGarage) return { label: 'Gate & Garage Door', isCombined: true };

  // 3. GATE + ACCESS CONTROL (combined)
  if (hasGate && hasAccess) return { label: 'Gate & Access Control', isCombined: true };

  // 4. ACCESS CONTROL ONLY
  if (hasAccess) return { label: 'Access Control', isCombined: false };

  // 5. GARAGE DOOR ONLY
  if (hasGarage) return { label: 'Garage Doors', isCombined: false };

  // 6. REPAIR INTENT (overrides automation)
  if (hasRepair) return { label: 'Automatic Gate Repair', isCombined: false };

  // 7. INSTALLATION INTENT
  if (hasInstall) return { label: 'Gate Installation', isCombined: false };

  // 8. AUTOMATION INTENT
  if (hasAutomation) return { label: 'Automatic Gates', isCombined: false };

  // 9. FENCE ONLY (no gate mentioned)
  if (hasFence) return { label: 'Fences & Gates', isCombined: true };

  // 10. MATERIAL KEYWORDS → simple "Gate"
  if (hasMaterial) return { label: 'Gate', isCombined: false };

  // 11. SPECIFIC GATE TYPES
  if (/driveway|residential gate/.test(kw)) return { label: 'Driveway Gate', isCombined: false };
  if (/sliding|slide gate/.test(kw)) return { label: 'Sliding Gate', isCombined: false };
  if (/swing|swing gate|pedestrian/.test(kw)) return { label: 'Swing Gate', isCombined: false };
  if (/commercial|industrial|warehouse|hoa|business/.test(kw)) return { label: 'Commercial Gate', isCombined: false };

  // 12. GENERIC GATE
  if (hasGate || /service|company|contractor|near me|system/.test(kw)) return { label: 'Automatic Gates', isCombined: false };

  // 13. DEFAULT
  return { label: 'Gate', isCombined: false };
}

/** Format heading suffix: "Solutions" for combined labels, "Services" otherwise */
export function getHeadingSuffix(mapping: ServiceMapping): string {
  return mapping.isCombined ? 'Solutions' : 'Services';
}
