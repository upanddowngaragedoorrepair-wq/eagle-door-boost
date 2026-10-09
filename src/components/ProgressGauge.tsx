import { useEffect, useRef, useState } from 'react';

interface ProgressGaugeProps {
  label: string;
  /** Target percentage 0–100 */
  value: number;
  caption?: string;
  /** Animation length in ms (default 3500) */
  duration?: number;
  /** Optional external trigger; otherwise self-detects scroll into view */
  start?: boolean;
  className?: string;
}

const R = 52;
const C = 2 * Math.PI * R;
const TICKS = 60;

/**
 * Circular progress gauge. Styles live in the "PROGRESS GAUGE" block of src/index.css.
 */
export function ProgressGauge({ label, value, caption, duration = 3500, start, className = '' }: ProgressGaugeProps) {
  const target = Math.max(0, Math.min(100, Math.round(value)));
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  const [current, setCurrent] = useState(0);
  const done = useRef(false);
  const go = start ?? seen;

  useEffect(() => {
    if (start !== undefined) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (e) => {
        if (e.some((x) => x.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [start]);

  useEffect(() => {
    if (!go || done.current) return;
    done.current = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCurrent(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setCurrent(eased * target);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [go, target, duration]);

  const shown = Math.round(current);

  return (
    <div
      ref={ref}
      className={`progress-gauge ${className}`}
      role="progressbar"
      aria-valuenow={shown}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div className="progress-gauge__dial">
        <svg viewBox="0 0 140 140" aria-hidden="true">
          <circle className="progress-gauge__track" cx="70" cy="70" r={R} />
          <circle
            className="progress-gauge__fill"
            cx="70"
            cy="70"
            r={R}
            strokeDasharray={C}
            strokeDashoffset={C * (1 - current / 100)}
            transform="rotate(-90 70 70)"
          />
        </svg>
        <span className="progress-gauge__value">
          {shown}
          <span className="progress-gauge__pct">%</span>
        </span>
      </div>
      <p className="progress-gauge__label">{label}</p>
      {caption && <p className="progress-gauge__caption">{caption}</p>}
    </div>
  );
}

export default ProgressGauge;
