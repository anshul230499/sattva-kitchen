const credits = [
 ['Zoshua Colah','Vegetarian thali','https://unsplash.com/photos/indian-thalis-with-rice-and-a-variety-of-dishes-adzbTddUg68'],
 ['fuseviews','Indian thali','https://unsplash.com/photos/a-metal-tray-topped-with-different-types-of-food-bKmSUcAGrvI'],
 ['Dimitris Asproloupos','Banana oatmeal','https://unsplash.com/photos/a-bowl-of-oatmeal-with-banana-slices-on-top-qzRVPgqSWn4'],
 ['Dane Deaner','Fruit and granola bowl','https://unsplash.com/photos/close-up-photo-of-fruits-on-bowl-pVm2awTOPZo'],
 ['Mayur Roxan','Idlis and chutneys','https://unsplash.com/photos/idli-with-various-chutneys-served-on-a-banana-leaf-V0pCYv4_ZZ0'],
 ['Elena Leya','Vegetable soup','https://unsplash.com/photos/two-bowls-of-soup-with-peas-carrots-and-broccoli-RHLtemkEAaM'],
 ['Tanya Barrow','Makhana snacks','https://unsplash.com/photos/bowl-of-roasted-chickpeas-with-dipping-sauces-on-table-g5WKNwMoWCA'],
 ['Alaap D','South Indian breakfast table','https://unsplash.com/photos/a-table-full-of-food-Fv3uNhZVMJU'],
 ['Rebecca Hansen','Fresh fruit plate','https://unsplash.com/photos/sliced-blueberries-banana-and-pineapple-fruits-in-plate-hRmk-FMpofc'],
 ['Dipesh Gurav','Vegetable soup','https://unsplash.com/photos/vegetable-soup-in-gray-bowl-NfoGcdYy_sw'],
 ['Sumit Bhatia','Paneer and rice bowl','https://unsplash.com/photos/a-colorful-bowl-of-rice-chickpeas-salmon-and-salad-HohIHrmr_E0'],
 ['Jonathan Borba','Coconut confectionery','https://unsplash.com/photos/sweet-coconut-balls-topped-with-white-cream-PzbjGm6EPhE'],
 ['Swarnim Doegar','Herbal tea','https://unsplash.com/photos/a-cup-of-herbal-tea-with-mint-leaves-WcVLb9HIMrk']
];
document.getElementById('credits').innerHTML=credits.map(([name,photo,url])=>`<li><strong>${photo}</strong> — ${name} · <a href="${url}" target="_blank" rel="noopener noreferrer">View original photo ↗</a></li>`).join('');
