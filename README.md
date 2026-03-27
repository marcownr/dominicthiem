# Dominic Thiem Web (Static)

This folder contains a static export of the Dominic Thiem website (no WordPress required).

## Structure
- `index.html` (DE home)
- `about.html`, `partner.html`, `investments.html`, `projekte.html`, `kontakt.html`, `impressum.html`, `datenschutz.html`
- `projekte/*.html` (DE project subpages)
- `en/index.html` and `en/.../index.html` (EN routes)
- `404.html`
- `assets/media/*` (all website media files, flat structure)
- `assets/css/mobile-nav.css` (global mobile navigation styles)
- `assets/js/mobile-nav.js` (global mobile navigation behavior)

## Deploy on GitHub Pages
1. Push the contents of this folder to a GitHub repository.
2. In GitHub: `Settings -> Pages`.
3. Source: `Deploy from a branch`.
4. Branch: `main` (or `master`), folder: `/root`.
5. Save.

## Notes
- Contact pages use a static `mailto:` fallback form.
- All WordPress media URLs were replaced with local files in `assets/media`.
