import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

interface SkillBarProps {
  /** Text shown on the left of the bar */
  label: string;
  /** Target percentage, 0–100 */
  value: number;
  /** Optional small line under the bar */
  caption?: string;
  /** Count-up length in ms (default 3500) */
  duration?: number;
  /**
   * Start externally. When omitted, the bar starts itself the first time
   * it scrolls into view.
   */
  start?: boolean;
  /** Extra classes on the wrapper */
  className?: string;
}

const clamp = (n: number) => Math.max(0, Math.min(100, Math.round(n)));

/**
 * Label + big percentage + progress bar that fills to the target.
 * The number counts up 0 → value once, when the bar enters the viewport.
 * All styling lives in the "SKILL BAR" block of src/index.css.
 */
export function SkillBar({
  label,
  value,
  caption,
  duration = 3500,
  start,
  className = '',
}: SkillBarProps) {
  const target = clamp(value);
  const ref = useRef<HTMLDivElement>(null);
  const [observed, setObserved] = useState(false);
  const [shown, setShown] = useState(0);
  const [done, setDone] = useState(false);

  const running = start ?? observed;

  // Self-trigger once when ~30% visible (skipped when `start` is controlled).
  useEffect(() => {
    if (start !== undefined) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setObserved(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [start]);

  // Count up 0 → target, once. Reduced motion shows the final number immediately.
  useEffect(() => {
    if (!running || done) return;

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setShown(target);
      setDone(true);
      return;
    }

    const begin = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - begin) / duration);
      setShown(Math.round(target * (1 - Math.pow(1 - t, 3)))); // ease-out cubic
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [running, done, target, duration]);

  const style = {
    '--skill-bar-target': `${target}%`,
    '--skill-bar-duration': `${duration}ms`,
  } as CSSProperties;

  return (
    <div ref={ref} className={`skill-bar ${className}`.trim()}>
      <div className="skill-bar__head">
        <span className="skill-bar__label">{label}</span>
        <span className={`skill-bar__value${done ? ' is-settled' : ''}`}>{shown}%</span>
      </div>

      <div
        className="skill-bar__track"
        role="progressbar"
        aria-label={label}
        aria-valuenow={shown}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`skill-bar__fill${running ? ' is-running' : ''}`}
          style={style}
        />
      </div>

      {caption && <p className="skill-bar__caption">{caption}</p>}
    </div>
  );
}

export default SkillBar;
