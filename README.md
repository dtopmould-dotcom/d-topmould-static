# D-TOP MOLD — Static Site

Static mirror of d-topmould.com, deployed on Cloudflare Pages.

- 76 pages (35 pages + 41 blog posts)
- Images optimized (PNG→WebP, JPEG compressed)
- Removed: gtranslate, wp-emoji, Google Fonts, Site Kit
- GTM deferred loading
- Quote form backend: `functions/api/quote.js` (Cloudflare Pages Function)

## Deploy

Connect this repo to Cloudflare Pages:
- Build command: (none, static)
- Output directory: `/` (root)
- Functions directory: `functions`
