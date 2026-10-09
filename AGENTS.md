# AGENTS.md

## Rules

- Reusable presentational components (e.g. `SkillBar`) own their markup, animation and accessibility in `src/components`, while all their CSS lives in one clearly labeled block in `src/index.css`, so a designer can restyle a component without reading the component's code.
- Landing-page copy, tracking events, URL-parameter logic and dynamic city/phone/keyword behavior are fixed: change visuals without touching them.
