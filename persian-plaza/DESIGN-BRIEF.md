# ⚠ REFERENCE IMAGES — READ THIS FIRST (supersedes everything below)

The `references/` folder in this project contains REAL Dribbble reference screenshots (ref-1.webp, ref-2.webp, …).

1. OPEN every image in references/ BEFORE writing any code. In your plan, describe ref-1's layout section by section (hero composition, grid structure, card anatomy, spacing, type scale).
2. BUILD THAT LAYOUT with this project's content and features. The composition, section order, grid and UX patterns must visibly come from the references — a recolor of the previous design is a FAILURE and will be rejected.
3. Do not copy the reference's brand, text or images — only its layout system, structure and UX.
4. RESPONSIVE IS PART OF THE DELIVERABLE: verify with screenshots at 1440px, 768px and 375px widths — no horizontal overflow, no overlapping elements, working mobile navigation, readable type at every width.
5. Keep every feature from the brief below working; verify each one and report pass/fail per feature plus the three responsive screenshots' results.

---

# DESIGN BRIEF — Persian Plaza Hotel rebuild (binding)

Rebuild the visual design of this single-file hotel site from real references. Content and features stay; the look must become quiet luxury — the current navy+gold template look is too generic.

## References — study and follow
1. https://www.aman.com — radical calm: huge imagery, whisper-quiet UI, serif display type, almost no visible chrome.
2. Dribbble shot: "Hotel Booking App — Luxury Travel UI" by SHEIKH NAEEM — luxury booking flow composition.
3. Ronas IT "Luxe Escape" hotel concept (Dribbble) — neutral palette discipline: black, warm light grey (#edeae7), white; typography does the luxury, not gold gradients.
4. https://www.espinaspalace.com — Iranian luxury-hotel conventions: Persian hospitality copy, room/suite naming, Tehran context.

## Direction (unique to this project)
- Warm ivory + charcoal + ONE muted bronze accent (flat colour, never gradient). Elegant serif display headlines for Latin + Vazirmatn heavy for Persian, letterspaced small-caps labels.
- Full-bleed photography with slow Ken Burns feel, rooms presented as an editorial index (name, size, capacity, price) rather than identical cards, a slim floating booking bar that follows scroll.
- Keep the working booking modal exactly functional: Jalali date pickers, nights calculation, 10% offer logic, tracking code output (e.g. PP-XXXXXX).
- BANNED: navy+gold gradient luxury clichés, ornamental frames, generic travel-template sections.

## Tech lock
Single-file site in folder persian-plaza/ (index.html + images/ + mark.svg) of https://github.com/amirghadimii/test. Keep it a single index.html using the existing images/ assets; relative paths only. Persian RTL throughout.

## Deliverable
Improved index.html pushed to folder persian-plaza/ (branch main). Verify live-critical flows locally: booking modal math (2 nights, offer, tracking code), gallery, offers, contact. Report results + commit hash.
