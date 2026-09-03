/*
 * Before / After comparison slider.
 * Drag (mouse or touch) or use arrow keys to wipe between the two photos.
 * No dependencies — a single clip-path driven overlay per pair, lazy-loaded images.
 * Swap the image imports in `pairs` to drop in real job photos.
 */
import { useCallback, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import beforeUpload from '@/assets/before-after/gate-before-wooden.jpg';
import afterUpload from '@/assets/before-after/gate-after-swing.jpg';
import before2 from '@/assets/before-after/chain-link-before.jpg';
import after2 from '@/assets/before-after/chain-link-after.jpg';
import before3 from '@/assets/service-proof/gate-repair-welding.webp';
import after3 from '@/assets/service-proof/gate-repair-teamwork.webp';
import before4 from '@/assets/projects/project-9.webp';
import after4 from '@/assets/projects/project-10.webp';

interface Pair {
  before: string;
  after: string;
  caption: string;
}

const pairs: Pair[] = [
  { before: beforeUpload, after: afterUpload, caption: 'Swing driveway gate rebuild' },
  { before: before2, after: after2, caption: 'Chain link fence' },
  { before: before3, after: after3, caption: 'Gate repair & welding' },
  { before: before4, after: after4, caption: 'Custom gate installation' },
];

function CompareCard({ pair, priority }: { pair: Pair; priority: boolean }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };

  const endDrag = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPos(p => Math.max(0, p - 5));
    if (e.key === 'ArrowRight') setPos(p => Math.min(100, p + 5));
  };

  return (
    <figure className="card-premium overflow-hidden">
      <div
        ref={ref}
        className="relative select-none touch-none aspect-[4/3] cursor-ew-resize bg-muted"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {/* After (base layer) */}
        <img
          src={pair.after}
          alt={`${pair.caption} — after`}
          width={800}
          height={600}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        {/* Before (clipped overlay) */}
        <img
          src={pair.before}
          alt={`${pair.caption} — before`}
          width={800}
          height={600}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />

        {/* Corner labels */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[hsl(var(--navy-deep)/0.85)] text-white text-[11px] font-bold uppercase tracking-widest pointer-events-none">
          Before
        </span>
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-widest pointer-events-none">
          After
        </span>

        {/* Divider + handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/90 pointer-events-none"
          style={{ left: `${pos}%` }}
        />
        <div
          role="slider"
          tabIndex={0}
          aria-label={`Compare before and after: ${pair.caption}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKeyDown}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-foreground"
          style={{ left: `${pos}%` }}
        >
          <ChevronLeft className="w-4 h-4 -mr-1" />
          <ChevronRight className="w-4 h-4 -ml-1" />
        </div>
      </div>
      <figcaption className="px-4 py-3 text-sm font-bold uppercase tracking-wide text-foreground">
        {pair.caption}
      </figcaption>
    </figure>
  );
}

export function BeforeAfter() {
  return (
    <section id="before-after" className="py-16 md:py-20 bg-background">
      <div className="container-main">
        <h2 className="section-heading text-foreground">Before / After</h2>
        <p className="text-center micro-copy mb-10">
          Drag the handle to see the difference our in-house crew makes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {pairs.map((pair, i) => (
            <CompareCard key={i} pair={pair} priority={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;
