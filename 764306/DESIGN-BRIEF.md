# ⚠ REFERENCE IMAGES — READ THIS FIRST (supersedes everything below)

The `references/` folder in this project contains REAL Dribbble reference screenshots (ref-1.webp, ref-2.webp, …).

1. OPEN every image in references/ BEFORE writing any code. In your plan, describe ref-1's layout section by section (hero composition, grid structure, card anatomy, spacing, type scale).
2. BUILD THAT LAYOUT with this project's content and features. The composition, section order, grid and UX patterns must visibly come from the references — a recolor of the previous design is a FAILURE and will be rejected.
3. Do not copy the reference's brand, text or images — only its layout system, structure and UX.
4. RESPONSIVE IS PART OF THE DELIVERABLE: verify with screenshots at 1440px, 768px and 375px widths — no horizontal overflow, no overlapping elements, working mobile navigation, readable type at every width.
5. Keep every feature from the brief below working; verify each one and report pass/fail per feature plus the three responsive screenshots' results.

---

# DESIGN BRIEF — 764306 five-language redesign (binding)

The current generic industrial "NovaTrade" demo is REJECTED: it is not connected to the employer's business. Re-theme the whole site to the employer's brand.

## The business
Employer username on Ponisha: **sabznegar (سبزنگار)**. The ad itself does not name products (it says languages/content will be coordinated later), and its strongest signals — the brand name سبزنگار, per-product downloadable catalogues, portfolio-driven UI — point to a **printing & packaging house (مجتمع چاپ و بسته‌بندی سبزنگار)**. Build the demo as that company's five-language corporate + shop site:
- Brand: سبزنگار | SabzNegar — Print & Packaging. Deep green + warm ivory/sand identity, editorial corporate design, print-inspired details (registration marks, paper textures, CMYK accents used sparingly).
- 5 product categories (each with subcategories): ۱) چاپ کاتالوگ و مجله ۲) بسته‌بندی و جعبه ۳) ساک دستی و بسته‌بندی فروشگاهی ۴) چاپ افست و دیجیتال (کارت ویزیت، تراکت، بروشور) ۵) هدایای تبلیغاتی و چاپ نمایشگاهی.
- ~10 products with spec tables (paper weight, sizes, print type, minimum order), gallery, downloadable generated PDF catalogue per product, and a production-process video modal.
- Pages: Home, About (printing house story, machinery, export markets), Contact (Tehran office + export desk), Articles (print/packaging guides), Customer Club (B2B tiers for repeat print buyers + VIP card), After-Sales (order tracking / reprint claim with tracking code — replaces the generic warranty flow, same mechanics).
- ALL UI strings in all 5 languages (FA/EN/AR/TR/RU) re-written for the print business — no leftover industrial/equipment wording anywhere.

## References — study and follow
1. Dribbble: search "printing company website design", "packaging design agency website", "corporate website design green" — take editorial layouts and typography, not generic templates.
2. Top multilingual corporate sites: prominent language switcher, per-language typography that feels native (RTL for FA/AR, LTR for EN/TR/RU).

## Banned
Generic AI UI: blue/purple gradients, identical rounded-card grids, cookie-cutter hero + 3 cards, leftover placeholder business content.

## Keep ALL mechanics (re-verify each)
5-language dictionary with persistence and full RTL/LTR flipping; category + subcategory filters; live search; product gallery; real client-side PDF catalogue generation; video modal; validated forms on every page; customer-club VIP card; after-sales tracking-code flow; floating quick-contact on scroll (phone, WhatsApp, Bale, Rubika, Eitaa).

## Deliverable
Improved static files pushed to folder 764306/ of https://github.com/amirghadimii/test (branch main). Verify end-to-end in headless Chrome across all 5 languages and report what passed.
