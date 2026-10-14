# Sattva Kitchen — Editorial Edition

A minimalist, responsive vegetarian recipe journal. Static HTML, CSS, and JavaScript; no build step or framework required.

## What's included

- Editorial redesign with variable-sized food imagery, lighter Abadi-inspired type, asymmetric composition, a pared-back recipe index, and more specific copy.
- 24 vegetarian onion- and garlic-free recipes, including mango lassi, khichdi, paneer, poha, sweets, and snacks.
- Recipe search, category filters, saved recipes (browser localStorage), complete recipe details, print view, and a random meal-picker.
- Photo-sourced images throughout, including coconut sweets and dal with rice, with individual photographer credits and a dedicated `credits.html`. All prior AI-generated image files have been removed.

## Running the site

Double-click `index.html` to preview, or run `python -m http.server 8080` inside this folder and open http://localhost:8080.

## GitHub and Vercel

Upload the entire contents of this folder to a GitHub repo named `sattva-kitchen`, then import it as a Vercel project. Choose **Other** as the framework preset. No build or output directory configuration is required.

## Photo and content notes

- This version prioritizes actual published food photography and credits photographers. Some food photos are illustrative of the dish rather than precise reproductions; recipe text and photographs are not represented as original cooking/test photography.
- Images load remotely from Pexels, Unsplash, and Wikimedia Commons and need an internet connection. There are no bundled AI-generated images and no AI fallback. If a remote photo fails, a neutral text placeholder appears. Original photographed preparations would be the strongest long-term improvement.
- Recipe traditions vary. These are onion- and garlic-free vegetarian recipes, not authoritative definitions of every sattvic dietary rule. Some traditions avoid yogurt, fermentation, specific spices, or combining fruit and dairy.
- Text and design are editable and not linked to a paid service. No analytics or user tracking.

## Fonts

Uses system Abadi if installed, otherwise the web font Jost at light weights. No Abadi font files are included.

## Real photo audit (October 2026)

- Removed all 10 previous bundled `assets/*.webp` generated food illustrations.
- Replaced the directly referenced AI image for Coconut Pistachio Peda with a Pexels photograph of coconut-pistachio sweets by Konstantin Klimov.
- Removed the food photo containing salmon from a vegetarian rice recipe and replaced it with vegetarian Indian dal/rice photography by Kunal Lakhotia.
- Replaced an unrelated chickpea picture on the makhana recipe with an actual roasted makhana photograph by Talupu (Wikimedia Commons CC BY-SA 4.0).
- Removed all AI fallbacks from hero, featured section, recipe grid, meal suggestions, and recipe dialog. Photo credits are available in the recipe panel and on the credits page.
- Images were not downloaded or bundled; availability depends on the external photo providers. Some photographs represent a similar dish rather than the exact listed ingredients.
