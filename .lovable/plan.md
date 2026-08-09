# Calls-First CRO Pass

Goal: more phone calls per visitor. The page is attractive but it doesn't force one action — it currently offers three competing choices above the fold and hides the strongest trust signals below it.

## What I see today (from the live page, mobile + desktop)

- Three competing CTAs in the hero: gold "Call Now", outlined "Free Estimate", plus a full lead form. With a calls-only goal, the form and the second button split attention and give hesitant visitors an excuse not to dial.
- The call button sits *after* five bullets and a family-owned line. On mobile it lands roughly 650px down — below the first screen.
- The strongest proof (4.9 Google / 189+ reviews, 5.0 HomeAdvisor / 64 reviews, CSLB license, BBB) is one full screen below the hero. Ad visitors decide in the first 3 seconds.
- The headline "Local Gate Experts / Best Price Guarantee" states a category, not a reason to call now. There is no urgency, no city, no "we can be there today."
- The sticky mobile call bar only appears after 500px of scroll, says "Talk To A Specialist" instead of showing the phone number, and doesn't exist at all on desktop.
- The top ticker occupies the most valuable pixel row with rotating slogans instead of the phone number.
- Between the hero and the next call prompt there are several passive sections (services grid, brand logos, video slider, coupon, projects, reviews, badges, map) with long gaps and no call ask.

## Changes

### 1. Hero: one action

- Reorder mobile so the stack is: urgency badge → headline → one-line subhead → rating strip → big call button → 3 short bullets. Bullets and the family-owned line move under the CTA.
- Headline gets urgency and locality using existing dynamic keyword/city logic (unchanged swap logic): e.g. "Same-Day {Keyword} in {City}" with the sub-line "Licensed techs, free estimates, honest pricing."
- Call button becomes visually dominant: larger, full width on mobile, with the phone number as the label plus a small "Avg. answer under 30 sec" line beneath it.
- "Free Estimate" changes from a competing button to a quiet text link ("Prefer a text quote?") so it stops absorbing taps.
- The hero form collapses on mobile into a one-line secondary strip ("Can't talk right now? Send your info →") that expands on tap. On desktop it stays but sits visually subordinate to the call CTA (smaller header, muted framing).
- A compact rating strip moves into the hero: 4.9 Google stars, 189+ reviews, CSLB LIC#1138855, BBB — one condensed row, reusing existing assets.

### 2. Sticky call bar: always visible, both breakpoints

- Show immediately (no 500px threshold) on mobile, and add a compact desktop version pinned bottom-right.
- Label shows the tracking phone number plus "Tap to call — open now", keeping the CallRail/URL param phone resolution as is.

### 3. Ticker: put the number in the top row

- Replace half the rotating slogans with a persistent "Call now: {phone}" item, and keep the ticker tappable to dial.

### 4. Call asks throughout the page

- Insert a slim, repeated call band after Services, after the video testimonials, and after Recent Projects: one line of context + phone button. Small, not another hero.
- Tighten vertical padding on long sections so the next call ask arrives sooner.
- Service cards' "Tap for details & call" becomes an explicit phone button on each card.

### 5. Section order

New order, front-loading proof and shortening the path to a decision:

```text
Hero (call-first)  →  Rating/trust strip  →  Services  →  Call band
→  Video testimonials  →  Reviews  →  Call band  →  Recent projects
→  Coupon / offer  →  Service area  →  FAQ  →  Contact form  →  Footer
```

Reviews and video proof move up ahead of projects and coupon; nothing is deleted.

### 6. Copy sharpening

- Replace vague reassurance with specific, checkable claims: response window, license number, years, warranty.
- Offer clarity: state the coupon value once in the hero trust row rather than only deep in the page.

## Technical notes

- Frontend/presentation only. No changes to `LocationContext`, `serviceMapping` keyword logic, URL param persistence, Formspree/CallRail submission code, or GTM event names — existing `dataLayer` pushes are preserved and new call CTAs reuse the same `cta_call_click` event with a distinct `cta_location`.
- Files touched: `Hero.tsx`, `HeroForm.tsx`, `Header.tsx`, `UrgencyTicker.tsx`, `StickyCallBar.tsx`, `Services.tsx`, `MidCTA.tsx` (reused as the slim call band), `pages/Index.tsx` for order, plus small spacing tweaks in `index.css`.
- Lazy loading, code splitting, and image formats stay as they are; new elements are text/icon only, so no added image weight.
- Existing colors and fonts are kept (navy / white / gold, Oswald + Inter) — this is a conversion layout pass, not a rebrand.

## Measurement

After this ships, distinct `cta_location` values (`hero`, `sticky`, `ticker`, `band_services`, `band_testimonials`, `card_<service>`) let you see in GTM which prompt actually earns the calls, so the next round is data-driven rather than a guess.
