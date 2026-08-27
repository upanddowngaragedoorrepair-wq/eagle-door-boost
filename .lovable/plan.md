# Scroll-Triggered Animated Progress Bar (CallBand)

## Goal
Make the "92% of repairs done same day" bar in the "Get Your Free Estimate Today" band animate only when the visitor scrolls it into view, and make it noticeably more eye-catching.

## Changes

### 1. Scroll-triggered animation (CallBand.tsx)
- Replace the load-triggered CSS animation with an IntersectionObserver on the band: the bar stays at 0% until the section enters the viewport (~30% visible), then fills to 92% once (never re-triggers).
- Add a counting number: the "92%" text counts up from 0 → 92 in sync with the fill (requestAnimationFrame, ~1.8s ease-out).

### 2. Visual upgrade
- Taller bar (h-4) with a soft inner track, gold gradient fill with a moving shimmer sweep across the bar after it fills, and a soft gold glow around the fill.
- Percentage badge styled as a small gold pill instead of plain text so the stat pops.
- Smooth cubic-bezier easing so the fill feels premium, with a slight overshoot feel (ease-out curve, no bounce so it stays clean).
- Mobile: bar spans full width under the headline; no layout shift, no CTA pushed below the fold.

### 3. CSS (index.css)
- Replace `progress-fill` keyframe animation with a width `transition` driven by a data/state attribute.
- Add a `progress-shimmer` keyframe for the post-fill sweep.

## Technical details
- Files touched: `src/components/CallBand.tsx`, `src/index.css`.
- No new dependencies; IntersectionObserver is native and the component is lazy-loaded already, so performance stays intact.
- GTM tracking (`cta_call_click`) untouched.
