# PRD — Ritik Kumar Rai Portfolio

## Original problem statement
Build a complete, single-page personal portfolio website using HTML, CSS,
and JavaScript for Ritik Kumar Rai. Dark theme, teal / electric-blue accent,
modern minimal, sticky nav (About, Experience, Education, Achievements,
Contact). Hero CTAs: Contact (mailto), Schedule a Call (placeholder),
Download Resume (placeholder), LinkedIn (external). Fully responsive with
subtle scroll animations.

## User choices (2025-12)
- Stack: Pure HTML / CSS / JS (served from `/app/frontend/public/`)
- Contact CTA: `mailto:rairitikkumar4@gmail.com`
- Accent: designer's pick — **electric cyan `#22D3EE` → teal `#2DD4BF`**
- Fonts: Manrope (display) · Inter (body) · JetBrains Mono (accents)

## Architecture
- Static portfolio: `/app/frontend/public/index.html`, `/styles.css`, `/script.js`
- React app neutered (`App.js` returns `null`) so it doesn't overlay content
- `index.css` reduced to Tailwind base only — no body colour overrides
- No backend routes used

## Sections implemented (2025-12)
1. Sticky pill nav with brand mark, mobile hamburger, active-link highlighting
2. Hero — name, tagline, location, 4 CTAs, stats strip, grid + glow backdrop
3. About — lede + 4 skill groups (Top / Technical / Domain / Soft)
4. Experience — vertical timeline (FBK → INSA → UniTN → Doctaa)
5. Education — 2 cards (Trento BSc, Maastricht Erasmus)
6. Achievements — 5 award cards with icons
7. Contact + footer — repeated CTAs, LinkedIn / GitHub / Email socials

## Interactions
- Smooth scroll (native `scroll-behavior`)
- IntersectionObserver reveal-on-scroll (staggered)
- Nav `.scrolled` state after 12px scroll
- Section-aware active nav link
- Mobile menu open/close on tap and outside-click
- `prefers-reduced-motion` respected

## Placeholders to replace
- Hero + Contact "Schedule a Call" `href="#"`  (Calendly)
- Hero + Contact "Download Resume" `href="#"`  (PDF)
Both marked with `<!-- REPLACE WITH ... -->` comments.

## Testing
- `iteration_1.json` — frontend 100% pass, no failures.

## Backlog / next tasks
- P1: Drop in Calendly + resume PDF links (user provides)
- P2: Add favicon + og:image / twitter card for share previews
- P2: Add a small "Selected Projects" block if user wants to showcase code
- P3: Add hover-lit cursor / magnetic buttons for extra "AI-forward" polish
