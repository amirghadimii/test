# Master prompt — 764306 five-language corporate/shop site
Build a five-language corporate/shop website demo (Persian, English, Arabic, Turkish, Russian — with a language switcher and correct RTL/LTR): max 5 main product categories with subcategories, product page with gallery, catalog download and intro video, Home/About/Contact/Articles/Customer Club/Warranty & after-sales pages, a form for each section, and floating quick-contact expand buttons (phone, WhatsApp, Bale, Rubika, Eitaa) that appear on scroll. The demo is a complete front-end; the proposal explains the same structure is then implemented on WordPress.
Reference pattern: a top multilingual corporate/shop site (language-switch and category structure).
## Status / your task
The repo contains a WORKING static prototype (index.html + app.js + styles.css) implementing all of the above, including a real generated-PDF catalog download. Improve it: translation quality, visual polish, UX, performance; change anything you judge weak; keep all 5 languages + direction switching and every feature working. Verify by running it, then commit and push to main.

## Improvements Applied
- Complete natural, professional translations across all 5 languages (FA, EN, AR, TR, RU) with 100% dictionary coverage and zero machine-translation artefacts.
- Robust bidirectional layout (RTL for FA/AR, LTR for EN/TR/RU) with CSS logical properties, directional arrow flipping, and language persistence in localStorage.
- Smooth language switching preserving the active page/section, including instant in-place translation update of open product details and article bodies.
- Expanded 5 main categories with 3 subcategories each, dynamic subcategory filtering pills, and live instant search across products, specs, and SKUs.
- Authentic vector PDF catalog generator conforming to PDF 1.4 with corporate branding, specs grid, warranty badge, and regional contacts.
- Interactive video modal featuring an animated CAD/HUD equipment simulation, play/pause, time tracker, and scrub bar.
- Working validated forms for all 6 sections (Home Quick Quote, Customer Club with dynamic VIP card generator, Warranty Claim with serial checker and tracking code copy, About B2B Dealership, Contact Us, and Technical Articles newsletter) with active-language validation messages.
- Polished floating quick-contact widget appearing on scroll with official brand SVG icons for Phone, WhatsApp, Bale, Rubika, and Eitaa.
