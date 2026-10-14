# Sattva Kitchen — Editorial Edition

A minimalist, responsive vegetarian recipe journal. Static HTML, CSS, and JavaScript; no build step or framework required.

## What's included

- Editorial redesign with variable-sized food imagery, lighter Abadi-inspired type, asymmetric composition, a pared-back recipe index, and more specific copy.
- 24 vegetarian onion- and garlic-free recipes, including mango lassi, khichdi, paneer, poha, sweets, and snacks.
- Recipe search, category filters, saved recipes (browser localStorage), complete recipe details, print view, and a random meal-picker.
- New photographs on the homepage from Pexels / Unsplash. Original photo credits link to individual photographers in `credits.html`.

## Running the site

Double-click `index.html` to preview, or run `python -m http.server 8080` inside this folder and open http://localhost:8080.

## GitHub and Vercel

Upload the entire contents of this folder to a GitHub repo named `sattva-kitchen`, then import it as a Vercel project. Choose **Other** as the framework preset. No build or output directory configuration is required.

## Photo and content notes

- This version prioritizes actual published food photography and credits photographers. Some food photos are illustrative of the dish rather than precise reproductions; recipe text and photographs are not represented as original cooking/test photography.
- Most photos are remotely hosted by Pexels and Unsplash and need an internet connection. A limited number of locally bundled AI-generated fallback illustrations, inherited from earlier versions of the website, remain for offline/error scenarios. Replace those with personally photographed dishes for the most authentic result.
- Recipe traditions vary. These are onion- and garlic-free vegetarian recipes, not authoritative definitions of every sattvic dietary rule. Some traditions avoid yogurt, fermentation, specific spices, or combining fruit and dairy.
- Text and design are editable and not linked to a paid service. No analytics or user tracking.

## Fonts

Uses system Abadi if installed, otherwise the web font Jost at light weights. No Abadi font files are included.
