# Top-Section Polish + Logo-Based Color Identity

## 1. Sticky call bar appears only after scroll
Right now the floating call button is on screen from first paint, which crowds the hero (the hero already has a big call button). Change it to appear only after the visitor scrolls past the hero — roughly the hero's own height — with a smooth slide-up. Once shown it stays; scrolling back to the top hides it again.

## 2. One trust line in the hero, not two
The hero currently repeats "Licensed & Insured — LIC#1138855" in the bullets *and* "LIC#1138855 • BBB Accredited" in the rating strip. Keep the license mention only in the rating strip (stars + 4.9 Google + LIC#1138855). The bullet list drops the license line and instead reads like a small local shop:

- Over 300 gates installed
- Small company — real attention to detail
- Free drawing with every estimate
- In-house techs, no subcontractors
- Same-day service available

The "No Job Is Too Small or Big To Us" chip stays; the second license badge is gone.

## 3. Top ticker: value props instead of repeated phone numbers
The top bar currently alternates the phone number between every item (6 phone repeats) and repeats "licensed". Replace with a clean rotation of proof points, no phone number:

Over 300 Gates Installed • Small Company, Big Attention To Detail • Free Drawing With Every Estimate • In-House Techs — No Subs • Same-Day Service • Free Estimates • Best Price Guarantee

Items stay tappable-to-call (harmless for tracking) but no longer display the number, so the phone appears in the header, the hero button, and the sticky bar only.

## 4. Colors pulled from the logo
Move off the amber/brown palette to the logo's own colors so the page reads family-owned American local:

- Navy `#1B2A4A` — dark sections, header text, footers
- Barn red `#A8232C` — primary CTA / accent (calls, buttons, highlights)
- Cream `#EFE7D6` — page background
- Gold `#E8A21C` — small accents only (stars, ticks, underline shine)

Buttons become a red gradient with cream text, dark bands become navy, headline accent words go red, and stars/checks stay gold. Contrast is checked on both the cream background and navy sections.

## Technical notes
- `StickyCallBar.tsx`: add a scroll listener (passive, rAF-throttled) that flips visibility past the hero height; keep the existing tracking `dataLayer` pushes and both mobile/desktop variants.
- `Hero.tsx`: rewrite the `bullets` array, keep license text in the rating strip only. No changes to `useLocation2`, tracking params, or the form.
- `UrgencyTicker.tsx`: replace `tickerItems` with the new proof points; drop the `isPhone` phone-number rendering (keeps `href={phoneLink}`).
- `index.css`: retune tokens in place — `--primary` to barn red (+ hover/glow), `--background` to cream, `--navy`/`--navy-deep`/`--navy-light` to logo navy, `--gradient-gold` and `.btn-cta` gradients to red, keep a `--gold-*` token for star/accent use. No component-level hardcoded colors added.
- No tracking, routing, form, or SEO logic touched.
