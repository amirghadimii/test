# DESIGN BRIEF — Showroom 764179 redesign (binding)

The current design is REJECTED ("افتضاح"). Do NOT polish it — replace the visual design completely. Keep every feature and the tech setup working.

## References — study and follow
1. https://www.fosterandpartners.com — the benchmark: the projects carry the page, the interface nearly disappears; editorial index grid, huge imagery, restrained typography, project metadata as quiet captions.
2. https://www.zaha-hadid.com — projects index pattern and drama of full-bleed imagery.
3. Dribbble Select shot: "PMA – Architecture Portfolio Website Design" by LAIN — strict grids, monochrome imagery, editorial rhythm, subtle drafting/blueprint details.
4. Framer template "Zuxen" (framer.com marketplace) — editorial grid hero, filterable gallery, bold black-and-white type, generous white space.

## Direction
- Monochrome warm-concrete palette (off-white, raw concrete grey, off-black) with ONE clay/bronze accent. No gradients, no glass, no rounded card grid.
- Oversized editorial typography; projects shown full-bleed or in a mixed-size editorial grid with index numbers (01, 02, …) and quiet metadata captions (name, location, year, category).
- Hairline rules and drafting-style details (thin lines, small caps labels) instead of boxes and shadows.
- The interface steps back; the buildings carry every page.

## Keep ALL features and setup (re-verify each)
Views: Home, Projects, Project Detail, Approach, Services, About, Contact, Admin. Category filter with localised counts; admin add-project accepting Jalali (1380–1410) and Gregorian years with Persian digits; FA/EN toggle with full RTL/LTR flip; contact form validation with localStorage fallback (ark.messages.v1); Vazirmatn/Inter fonts.
Tech: Next.js static export stays (output: "export"). Do NOT remove basePath "/test/764179-preview" or assetPrefix from next.config.ts — the preview is served from that subpath. Keep src/app/api OUT of the build (static export).

## Deliverable
Improved SOURCE pushed to folder 764179/ of https://github.com/amirghadimii/test (branch main). Typecheck + lint clean, static build succeeds. (The Pages preview is rebuilt from your source afterwards by Muse.)
