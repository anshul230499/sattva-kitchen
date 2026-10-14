# Sattva Kitchen — The Quiet Kitchen

A fully functional responsive vegetarian sattvic recipe website. No build tools or dependencies needed.

## Features

- Elegant editorial homepage and collections
- New mango-lassi spotlight with sunny editorial food illustration
- 12 additional full recipes: mango lassi, rose lassi, saffron milk, chaas, sabudana tikki, sweet potato chaat, paneer tikka, mango shrikhand, saffron kheer, coconut peda, upma and lemon rice
- 24 vegetarian, no-onion, no-garlic recipes with real ingredients and directions
- Category filters and ingredient/name search
- Favorite recipes saved locally in the visitor's browser (localStorage)
- Recipe-detail dialog with print button, keyboard and Escape handling
- A random morning / midday / snack menu generator
- Responsive layouts for phone, tablet, and desktop
- Original, locally hosted Sunday-morning visual assets for the hero and collection cards
- Unsplash recipe photography with photographer credits and source links

## Run locally

Open `index.html` in a browser. For local development, optionally run:

```bash
python -m http.server 8080
```

Then visit http://localhost:8080.

## Deploy using GitHub + Vercel

1. Create a new GitHub repository (e.g. `sattva-kitchen`).
2. Upload `index.html`, `styles.css`, `app.js`, `credits.html`, `credits.js` and this README to the root.
3. On Vercel choose **Add New → Project**, import the repository, select framework **Other**, and deploy. No build command required.
4. Every subsequent GitHub push will update the Vercel site automatically.

## Notes

- Hero, collection, and illustrated mango-lassi feature imagery is locally included under `assets/` and does not require an internet connection. Some recipe photos are loaded remotely from Unsplash and Pexels and require an internet connection. The photo credits page contains photographer links and the photo source URLs. Photos are illustrative, not the specific recipes prepared here.
- Recipes draw from multiple sattvic approaches. Customs differ, particularly around fermentation, dairy, fruit pairings, and spices. Adjust to your tradition. No medical or nutritional claims are intended.
- There is no mailing list, server, payments, or analytics. Saved recipes exist only in each visitor's browser.
- Original website concept, code and recipe text can be edited freely. Respect third-party photography rights.

## Type system

The typography is inspired by Abadi Light. If Abadi is installed on a visitor's device, the site uses it; otherwise it loads open-source Jost (300–600 weights) from Google Fonts. This keeps the intended airy look without packaging or redistributing the commercial Abadi font.
