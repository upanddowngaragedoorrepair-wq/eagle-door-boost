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
        <div className="progress-gauge__glow" aria-hidden="true" />
        <svg viewBox="0 0 140 140" aria-hidden="true">
          <defs>
            <linearGradient id="gauge-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--gold-cta))" />
              <stop offset="100%" stopColor="hsl(var(--gold-cta-hover))" />
            </linearGradient>
          </defs>
          <circle className="progress-gauge__orbit" cx="70" cy="70" r="67" />
          {[25, 50, 75, 100].map((p) => {
            const a = (p / 100) * 2 * Math.PI - Math.PI / 2;
            return <circle key={p} className="progress-gauge__marker" cx={70 + 67 * Math.cos(a)} cy={70 + 67 * Math.sin(a)} r="1.6" />;
          })}
          {Array.from({ length: 10 }, (_, i) => {
            const a = (i / 10) * 2 * Math.PI - Math.PI / 2;
            return (
              <line key={i} className="progress-gauge__tick"
                x1={70 + 60 * Math.cos(a)} y1={70 + 60 * Math.sin(a)}
                x2={70 + 63 * Math.cos(a)} y2={70 + 63 * Math.sin(a)} />
            );
          })}
          <circle className="progress-gauge__track" cx="70" cy="70" r={R} />
          <circle
            className="progress-gauge__fill"
            cx="70" cy="70" r={R}
            strokeDasharray={C}
            strokeDashoffset={C * (1 - current / 100)}
            transform="rotate(-90 70 70)"
          />
          {current > 0 && (() => {
            const a = (current / 100) * 2 * Math.PI - Math.PI / 2;
            return <circle className="progress-gauge__tip" cx={70 + R * Math.cos(a)} cy={70 + R * Math.sin(a)} r="3.2" />;
          })()}
        </svg>
        <span className="progress-gauge__value">
          <span>{shown}</span>
          <span className="progress-gauge__pct">%</span>
        </span>
      </div>
      <p className="progress-gauge__label">{label}</p>
      {caption && <p className="progress-gauge__caption">{caption}</p>}
    </div>
  );
}

export default ProgressGauge;
