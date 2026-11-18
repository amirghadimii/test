# ⚠ REFERENCE IMAGES — READ THIS FIRST (supersedes everything below)

The `references/` folder in this project contains REAL Dribbble reference screenshots (ref-1.webp, ref-2.webp, …).

1. OPEN every image in references/ BEFORE writing any code. In your plan, describe ref-1's layout section by section (hero composition, grid structure, card anatomy, spacing, type scale).
2. BUILD THAT LAYOUT with this project's content and features. The composition, section order, grid and UX patterns must visibly come from the references — a recolor of the previous design is a FAILURE and will be rejected.
3. Do not copy the reference's brand, text or images — only its layout system, structure and UX.
4. RESPONSIVE IS PART OF THE DELIVERABLE: verify with screenshots at 1440px, 768px and 375px widths — no horizontal overflow, no overlapping elements, working mobile navigation, readable type at every width.
5. Keep every feature from the brief below working; verify each one and report pass/fail per feature plus the three responsive screenshots' results.

---

# DESIGN BRIEF — 764181 EMSYS SEO rebuild (binding)

Rebuild the visual design from real references. This demo presents an SEO work programme for the EMSYS company — it must read like a premium agency's live audit report, NOT a marketing landing page and NOT generic AI UI.

## References — study and follow
1. Dribbble shot: "SEO & Digital Marketing Analytics Dashboard UI Design" by Md saifuzzaman — data-first hierarchy, KPI blocks, clean chart language.
2. Real product reports: Google Search Console / Ahrefs report layouts — dense but calm data tables, trend sparklines, position deltas.
3. Dribbble search "saas dashboard ui light" — take the light data-viz discipline: white surface, ink text, ONE signal colour.

## Direction (unique to this project — do not reuse on others)
- Light "audit report" aesthetic: white/paper background, near-black ink, one signal colour (vivid green for gains), monospace numerals for every metric.
- Structure: KPI header strip (clicks, impressions, avg position with deltas), then the 35-action programme as an interactive checklist grouped in the same 7 sections, each action with priority + impact/effort tags, a 90-day roadmap as a horizontal timeline, progress ring that updates as items are ticked, print stylesheet that exports a clean client report.
- BANNED: gradients, glass cards, hero + 3-cards template, dark slate/emerald theme (that was the previous attempt — replace it).

## Scope lock
The 35 actions and 7 sections come from WORKLIST.md in this folder — reproduce them EXACTLY, nothing added, nothing dropped, no prices, never the word «تضمینی». Persian RTL, Vazirmatn, Persian digits in counters.

## Deliverable
Improved static files pushed to folder 764181/ of https://github.com/amirghadimii/test (branch main). Verify every interaction (checklist state, counters, search, print) in headless Chrome and report results + commit hash.
