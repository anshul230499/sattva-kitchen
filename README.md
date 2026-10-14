# Sattva Kitchen — The Quiet Kitchen

A fully functional responsive vegetarian sattvic recipe website. No build tools or dependencies needed.

## Features

- Elegant editorial homepage and collections
- 12 vegetarian, no-onion, no-garlic recipes with real ingredients and directions
- Category filters and ingredient/name search
- Favorite recipes saved locally in the visitor's browser (localStorage)
- Recipe-detail dialog with print button, keyboard and Escape handling
- A random morning / midday / snack menu generator
- Responsive layouts for phone, tablet, and desktop
- Unsplash photography with photographer credits and source links

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

- Photos are loaded remotely from Unsplash and require an internet connection. The photo credits page contains photographer links and the photo source URLs. Photos are illustrative, not the specific recipes prepared here.
- Recipes draw from multiple sattvic approaches. Customs differ, particularly around fermentation, dairy, fruit pairings, and spices. Adjust to your tradition. No medical or nutritional claims are intended.
- There is no mailing list, server, payments, or analytics. Saved recipes exist only in each visitor's browser.
- Original website concept, code and recipe text can be edited freely. Respect third-party photography rights.
