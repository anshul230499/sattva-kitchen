/* Sattva Kitchen — no framework, no account, no tracking. */
const photo = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
const recipes = [
{
  "id": "mango-lassi",
  "name": "Golden Mango Lassi",
  "category": "Drinks",
  "label": "THE SUNNY FAVORITE",
  "time": "10 min",
  "minutes": 10,
  "servings": "2 tall glasses",
  "difficulty": "No-cook",
  "imageUrl": "assets/mango-lassi-feature.webp",
  "source": "",
  "photographer": "Sattva Kitchen / original AI illustration",
  "desc": "Velvety ripe mango, creamy yogurt and a whisper of cardamom. Like sunshine in a glass.",
  "ingredients": [
    "1½ cups ripe mango flesh (fresh or thawed frozen)",
    "1 cup plain unsweetened yogurt",
    "¼–½ cup chilled water or milk",
    "¼ tsp ground cardamom",
    "1–2 tsp maple syrup or sugar, only if needed",
    "A few chopped pistachios for topping (optional)"
  ],
  "steps": [
    "Chill the mango and yogurt so the finished lassi is refreshing without needing ice.",
    "Add mango, yogurt, ¼ cup water or milk, and cardamom to a blender.",
    "Blend until completely smooth. Thin with a little more liquid if desired.",
    "Taste the mango first; add a little sweetener only if it needs it.",
    "Pour into two glasses, sprinkle with optional pistachios and enjoy immediately."
  ],
  "tip": "For a beautiful golden lassi, choose deeply ripe Alphonso, Kesar or Ataulfo mangoes. Some sattvic practices avoid mixing fruit and dairy; this is a contemporary vegetarian favorite.",
  "new": true
},
{
  "id": "rose-lassi",
  "name": "Rose & Cardamom Lassi",
  "category": "Drinks",
  "label": "A FLORAL LITTLE SIP",
  "time": "8 min",
  "minutes": 8,
  "servings": "2 small glasses",
  "difficulty": "No-cook",
  "imageUrl": "https://images.pexels.com/photos/17379741/pexels-photo-17379741.jpeg?auto=compress&cs=tinysrgb&w=1000",
  "source": "https://www.pexels.com/photo/love-relaxation-summer-glass-17379741/",
  "photographer": "Alina Matveycheva",
  "desc": "A delicate blush-pink yogurt drink scented with culinary rosewater and sweet cardamom.",
  "ingredients": [
    "1 cup chilled plain yogurt",
    "½ cup cold water",
    "1–2 tsp culinary-grade rosewater",
    "2 tsp sugar or maple syrup, to taste",
    "⅛ tsp ground cardamom",
    "A few chopped pistachios (optional)",
    "Food-grade rose petals for garnish (optional)"
  ],
  "steps": [
    "Whisk yogurt and water together until completely smooth.",
    "Add 1 teaspoon rosewater, cardamom and sweetener. Whisk again.",
    "Taste before adding more rosewater; a little goes a long way.",
    "Pour into small glasses, top with optional pistachios or food-grade rose petals and serve cool."
  ],
  "tip": "Use culinary rosewater only. The image illustrates a pink milk drink rather than the exact prepared recipe.",
  "new": true
},
{
  "id": "badam-milk",
  "name": "Saffron & Almond Milk",
  "category": "Drinks",
  "label": "GOLDEN HOUR",
  "time": "15 min",
  "minutes": 15,
  "servings": "2 cups",
  "difficulty": "Easy",
  "imageUrl": "https://images.pexels.com/photos/15082977/pexels-photo-15082977.jpeg?auto=compress&cs=tinysrgb&w=1000",
  "source": "https://www.pexels.com/photo/two-glasses-of-milk-with-cinnamon-and-nuts-15082977/",
  "photographer": "Shameel mukkath",
  "desc": "Creamy, gently warmed milk with fragrant saffron, cardamom, and tender ground almonds.",
  "ingredients": [
    "2 cups milk or unsweetened almond milk",
    "3 tbsp finely ground blanched almonds",
    "6–8 saffron strands",
    "2 tbsp warm milk for soaking saffron",
    "¼ tsp cardamom",
    "1–2 tsp jaggery or sugar, optional",
    "Chopped pistachios to finish"
  ],
  "steps": [
    "Steep saffron strands in 2 tablespoons warm milk for 5 minutes.",
    "Warm the remaining milk over low heat without letting it boil vigorously.",
    "Whisk in ground almonds and cook gently for 5 minutes, stirring often.",
    "Add saffron milk and cardamom. Sweeten lightly if desired.",
    "Pour into cups and top with chopped pistachios."
  ],
  "tip": "Add jaggery only after turning off the heat and allowing the milk to cool slightly; this helps avoid curdling.",
  "new": true
},
{
  "id": "cucumber-chaas",
  "name": "Cucumber, Mint & Cumin Chaas",
  "category": "Drinks",
  "label": "COOL & GENTLE",
  "time": "10 min",
  "minutes": 10,
  "servings": "2 glasses",
  "difficulty": "No-cook",
  "imageUrl": "https://images.pexels.com/photos/8679635/pexels-photo-8679635.jpeg?auto=compress&cs=tinysrgb&w=1000",
  "source": "https://www.pexels.com/photo/drink-with-cucumber-slices-8679635/",
  "photographer": "Timur Weber",
  "desc": "A savory, cooling yogurt drink with cucumber, mint, and lightly toasted cumin.",
  "ingredients": [
    "¾ cup plain yogurt",
    "1¼ cups cool water",
    "¼ cup peeled, finely grated cucumber",
    "5 mint leaves, very finely chopped",
    "¼ tsp roasted ground cumin",
    "A pinch of rock salt"
  ],
  "steps": [
    "Whisk yogurt with water until light and pourable.",
    "Squeeze the grated cucumber lightly if very watery and stir it in.",
    "Add mint, roasted cumin and salt.",
    "Whisk again and serve cool, not icy."
  ],
  "tip": "This is a contemporary variation on chaas. The photograph is illustrative of a pale refreshing drink, not the exact recipe.",
  "new": true
},
{
  "id": "sabudana-tikki",
  "name": "Crisp Sabudana Tikki",
  "category": "Snacks",
  "label": "GOLDEN LITTLE BITES",
  "time": "30 min",
  "minutes": 30,
  "servings": "8 small tikkis",
  "difficulty": "Easy, plus soaking",
  "imageUrl": "assets/sabudana-tikki.webp",
  "source": "",
  "photographer": "Sattva Kitchen / original AI illustration",
  "desc": "Crisp golden tapioca and potato patties with peanuts, cumin, and fresh coriander.",
  "ingredients": [
    "¾ cup sabudana (tapioca pearls)",
    "2 medium boiled potatoes, mashed",
    "¼ cup roasted peanuts, crushed",
    "½ tsp cumin seeds",
    "2 tbsp chopped coriander",
    "½ tsp grated ginger (optional)",
    "1 tsp lemon juice",
    "Rock salt or regular salt, to taste",
    "1½ tbsp ghee or oil for shallow-frying"
  ],
  "steps": [
    "Rinse sabudana, cover with just enough water to barely submerge, and soak 4–6 hours or as directed on the pack. Drain thoroughly.",
    "Mix soaked pearls with mashed potato, peanuts, cumin, coriander, optional ginger, lemon and salt.",
    "Shape into 8 small, firm patties; the mixture should hold together without being wet.",
    "Heat a lightly greased skillet over medium-low heat. Cook each side for 4–5 minutes until crisp and golden.",
    "Drain briefly and serve warm with plain mint-coriander yogurt, if desired."
  ],
  "tip": "Soaking time is additional to the stated active cooking time. Test one pearl: it should mash easily between your fingers before cooking.",
  "new": true
},
{
  "id": "sweet-potato-chaat",
  "name": "Warm Sweet Potato Chaat",
  "category": "Snacks",
  "label": "SOMETHING BRIGHT",
  "time": "20 min",
  "minutes": 20,
  "servings": "2 small plates",
  "difficulty": "Easy",
  "imageUrl": "https://images.pexels.com/photos/10497774/pexels-photo-10497774.jpeg?auto=compress&cs=tinysrgb&w=1000",
  "source": "https://www.pexels.com/photo/close-up-of-food-on-bowl-10497774/",
  "photographer": "Nourishment DECODED",
  "desc": "Sweet roasted potato, lemon, coriander and pomegranate jewels in a simple tangy snack.",
  "ingredients": [
    "2 medium sweet potatoes, peeled and cubed",
    "1 tsp ghee or neutral oil",
    "½ tsp roasted ground cumin",
    "1 tbsp lemon juice",
    "2 tbsp pomegranate seeds",
    "2 tbsp chopped coriander",
    "A pinch of rock salt",
    "1 tbsp toasted pumpkin seeds (optional)"
  ],
  "steps": [
    "Steam sweet potato cubes for about 10 minutes, until just fork-tender; drain and pat dry.",
    "Warm ghee in a skillet and sauté the cubes for 4–5 minutes until lightly golden.",
    "Turn off the heat and sprinkle with cumin and salt.",
    "Finish with lemon juice, coriander, pomegranate seeds and optional pumpkin seeds. Serve warm."
  ],
  "tip": "No onion, garlic, packaged chaat masala or hot chili needed. The photo illustrates a sweet-potato and pomegranate salad rather than this exact warm chaat.",
  "new": true
},
{
  "id": "paneer-tikka",
  "name": "Sunshine Paneer Tikka Bites",
  "category": "Snacks",
  "label": "THE SHARING PLATE",
  "time": "30 min",
  "minutes": 30,
  "servings": "3 small plates",
  "difficulty": "Easy",
  "imageUrl": "https://images.pexels.com/photos/3928854/pexels-photo-3928854.jpeg?auto=compress&cs=tinysrgb&w=1000",
  "source": "https://www.pexels.com/photo/food-on-a-plate-3928854/",
  "photographer": "Abhishek Mahajan",
  "desc": "Juicy paneer cubes with a golden yogurt marinade, roasted until gently charred.",
  "ingredients": [
    "250 g paneer, cut into large cubes",
    "¼ cup plain yogurt",
    "½ tsp turmeric",
    "½ tsp coriander powder",
    "½ tsp ground cumin",
    "½ tsp sweet paprika (optional)",
    "1 tsp lemon juice",
    "1 tsp ghee or oil",
    "½ bell pepper, cut into chunks (optional)",
    "Salt to taste"
  ],
  "steps": [
    "Whisk yogurt with turmeric, coriander, cumin, optional paprika, lemon, oil and salt.",
    "Coat paneer cubes and optional bell pepper, then leave to marinate for 10 minutes.",
    "Heat oven to 425°F / 220°C and line a tray with parchment.",
    "Spread out the paneer and bake 10–12 minutes, turning once, until edges begin to color.",
    "Serve immediately with fresh mint and lemon."
  ],
  "tip": "Make sure the yogurt marinade contains no onion or garlic. The illustrative photo may include accompaniments not used in this recipe.",
  "new": true
},
{
  "id": "mango-shrikhand",
  "name": "Silky Mango Shrikhand",
  "category": "Sweets",
  "label": "SPOONFUL OF SUNSHINE",
  "time": "15 min",
  "minutes": 15,
  "servings": "4 little bowls",
  "difficulty": "No-cook, plus chilling",
  "imageUrl": "https://images.pexels.com/photos/31625025/pexels-photo-31625025.jpeg?auto=compress&cs=tinysrgb&w=1000",
  "source": "https://www.pexels.com/photo/gourmet-mango-dessert-with-fresh-toppings-31625025/",
  "photographer": "Anil Sharma",
  "desc": "Thick saffron-scented yogurt folded through with ripe mango and chopped pistachios.",
  "ingredients": [
    "1½ cups thick strained plain yogurt (hung curd)",
    "¾ cup smooth ripe mango purée",
    "2 tbsp powdered sugar, or to taste",
    "¼ tsp ground cardamom",
    "A pinch of saffron soaked in 1 tsp warm milk (optional)",
    "2 tbsp chopped pistachios"
  ],
  "steps": [
    "Stir thick strained yogurt until completely smooth; it should be spoonable, not runny.",
    "Fold in mango purée, powdered sugar, cardamom and optional cooled saffron milk.",
    "Taste, adjusting sweetness based on the ripeness of the mango.",
    "Refrigerate for 30 minutes and serve in small bowls with pistachios."
  ],
  "tip": "If straining your own yogurt, allow 3–4 extra hours in the fridge. The image illustrates a mango dessert, not the exact shrikhand.",
  "new": true
},
{
  "id": "rice-kheer",
  "name": "Slow-Simmered Saffron Kheer",
  "category": "Sweets",
  "label": "AN OLD FAVORITE",
  "time": "45 min",
  "minutes": 45,
  "servings": "4 small bowls",
  "difficulty": "Easy",
  "imageUrl": "https://images.pexels.com/photos/31109623/pexels-photo-31109623.jpeg?auto=compress&cs=tinysrgb&w=1000",
  "source": "https://www.pexels.com/photo/traditional-indian-kheer-in-ceramic-bowl-31109623/",
  "photographer": "Deep Dasgupta",
  "desc": "Creamy rice pudding perfumed with cardamom, saffron, toasted nuts and a little patience.",
  "ingredients": [
    "¼ cup basmati rice, rinsed",
    "4 cups whole milk",
    "3 tbsp sugar or to taste",
    "6 saffron strands",
    "¼ tsp ground cardamom",
    "2 tbsp chopped cashews or pistachios",
    "1 tsp ghee (optional)"
  ],
  "steps": [
    "Soak rinsed rice for 15 minutes, then drain.",
    "Bring milk to a gentle simmer in a heavy-bottomed pot. Add the rice.",
    "Cook uncovered on low heat for 30–35 minutes, stirring often to prevent scorching.",
    "When the rice is very tender and milk has thickened, stir in sugar, saffron and cardamom.",
    "Cook 3 minutes more and garnish with nuts; enjoy warm or chilled."
  ],
  "tip": "Kheer thickens as it cools. Add a little milk to loosen before serving.",
  "new": true
},
{
  "id": "coconut-peda",
  "name": "Coconut & Pistachio Peda",
  "category": "Sweets",
  "label": "A LITTLE CELEBRATION",
  "time": "25 min",
  "minutes": 25,
  "servings": "12 small pedas",
  "difficulty": "Easy",
  "imageUrl": "assets/kesar-peda.webp",
  "source": "",
  "photographer": "Sattva Kitchen / original AI illustration",
  "desc": "Tender milk-and-coconut sweets dressed with pistachios and a hint of saffron.",
  "ingredients": [
    "1½ cups desiccated unsweetened coconut",
    "¾ cup whole milk",
    "⅓ cup milk powder",
    "3 tbsp sugar",
    "¼ tsp cardamom",
    "A few saffron strands",
    "2 tbsp chopped pistachios",
    "½ tsp ghee for shaping"
  ],
  "steps": [
    "Combine milk, milk powder, coconut, sugar and saffron in a nonstick pan on low heat.",
    "Stir 8–10 minutes until the mixture becomes a soft dough that pulls away from the sides.",
    "Add cardamom, turn off the heat and cool until safe to handle.",
    "Grease palms lightly with ghee, shape 12 small discs, and press pistachios into the top.",
    "Allow to firm up before serving; refrigerate leftovers promptly."
  ],
  "tip": "Use gentle heat and keep stirring so the milk solids do not burn. These contain dairy and nuts.",
  "new": true
},
{
  "id": "vegetable-upma",
  "name": "Garden Vegetable Upma",
  "category": "Breakfast",
  "label": "SUNLIT MORNING",
  "time": "25 min",
  "minutes": 25,
  "servings": "2 bowls",
  "difficulty": "Easy",
  "imageUrl": "https://images.pexels.com/photos/20408458/pexels-photo-20408458.jpeg?auto=compress&cs=tinysrgb&w=1000",
  "source": "https://www.pexels.com/photo/indian-round-dish-with-spices-and-sauces-on-the-side-20408458/",
  "photographer": "Jack Baghel",
  "desc": "Fluffy toasted semolina dotted with peas, carrots, curry leaves and roasted cashews.",
  "ingredients": [
    "¾ cup fine semolina (rava or sooji)",
    "1¾ cups hot water",
    "1 small carrot, finely chopped",
    "¼ cup peas",
    "8 curry leaves",
    "½ tsp mustard seeds",
    "1 tbsp ghee or oil",
    "2 tbsp cashews",
    "Salt to taste",
    "1 tsp lemon juice",
    "Fresh coriander"
  ],
  "steps": [
    "Dry-roast semolina on low heat for 5 minutes until fragrant but not brown; transfer to a bowl.",
    "Heat ghee and add mustard seeds, curry leaves and cashews. Stir until aromatic.",
    "Add carrot and peas with hot water and salt; cook for 4 minutes.",
    "Slowly sprinkle in roasted semolina while stirring constantly to avoid lumps.",
    "Cover on low for 3–4 minutes, then fluff and finish with lemon and coriander."
  ],
  "tip": "Use gluten-free millet rava if avoiding wheat. The stock photograph is a South Indian breakfast illustration.",
  "new": true
},
{
  "id": "lemon-rice",
  "name": "Cashew & Curry Leaf Lemon Rice",
  "category": "Mains",
  "label": "THE SUNNY LUNCH",
  "time": "20 min",
  "minutes": 20,
  "servings": "2 bowls",
  "difficulty": "Easy",
  "imageUrl": "https://images.pexels.com/photos/4595316/pexels-photo-4595316.jpeg?auto=compress&cs=tinysrgb&w=1000",
  "source": "https://www.pexels.com/photo/lemon-rice-on-a-ceramic-bowl-4595316/",
  "photographer": "Shiva Kumar",
  "desc": "Bright lemon rice with glossy cashews, mustard seeds and aromatic curry leaves.",
  "ingredients": [
    "2 cups cooked basmati rice, cooled",
    "1 tbsp ghee or neutral oil",
    "½ tsp mustard seeds",
    "8 curry leaves",
    "2 tbsp cashews",
    "¼ tsp turmeric",
    "2 tbsp lemon juice",
    "Salt to taste",
    "2 tbsp chopped coriander"
  ],
  "steps": [
    "Cool freshly cooked rice until separate and fluffy (or use safely refrigerated rice, heated through when serving).",
    "Heat ghee and crackle mustard seeds with curry leaves. Add cashews and toast gently until golden.",
    "Stir in turmeric and rice. Toss carefully so every grain is coated.",
    "Warm through completely, season with salt, and turn off the heat.",
    "Add lemon juice and coriander right before serving."
  ],
  "tip": "Add lemon off the heat to preserve its brightness. The photograph may include chilies or peanuts, but this version uses neither.",
  "new": true
},
  {
    id: 'khichdi', name: 'Golden Moong Dal Khichdi', category: 'Mains', label: 'THE COMFORT BOWL', time: '35 min', minutes: 35, servings: '2 generous bowls', difficulty: 'Easy',
    image: 'photo-1711153419402-336ee48f2138', source: 'https://unsplash.com/photos/a-metal-tray-topped-with-different-types-of-food-bKmSUcAGrvI', photographer: 'fuseviews',
    desc: 'Soft rice and split moong gently simmered with turmeric, cumin, and a spoon of ghee.',
    ingredients: ['½ cup white rice, rinsed','½ cup split yellow moong dal, rinsed','1 small carrot, finely chopped','¼ cup green peas','¼ tsp turmeric','1 tsp cumin seeds','1 tbsp ghee (or neutral oil)','4 cups water','Salt to taste','A little fresh coriander'],
    steps: ['Rinse the rice and moong dal until the water runs almost clear.','Warm ghee in a pot. Add cumin seeds and allow them to bloom gently for 20 seconds.','Add carrot, peas, turmeric, rice, dal, salt, and water. Stir well.','Cover and simmer on low for 25–30 minutes, stirring now and then, until everything turns soft and creamy. Add more warm water for a looser consistency.','Finish with coriander and, if desired, a small extra drizzle of ghee. Serve freshly made.'],
    tip: 'A softer, porridge-like texture is part of khichdi’s charm. For a dairy-free bowl, use oil instead of ghee.'
  },
  {
    id: 'poha', name: 'Lemon & Curry Leaf Poha', category: 'Breakfast', label: 'EASY MORNING', time: '20 min', minutes: 20, servings: '2 bowls', difficulty: 'Easy',
    image: 'photo-1665660710687-b44c50751054', source: 'https://unsplash.com/photos/a-table-full-of-food-Fv3uNhZVMJU', photographer: 'Alaap D',
    desc: 'Soft flattened rice, fragrant curry leaves, peanuts, and a cheerful squeeze of lemon.',
    ingredients: ['2 cups thick poha (flattened rice)','1 tbsp ghee or oil','½ tsp mustard seeds','8–10 curry leaves','2 tbsp roasted peanuts','¼ cup green peas','¼ tsp turmeric','½ tsp grated ginger (optional)','Salt to taste','1–2 tsp lemon juice','Fresh coriander'],
    steps: ['Rinse poha briefly in a colander and let it soften for 5 minutes; it should be moist, not soggy.','Heat ghee or oil. Add mustard seeds and allow them to pop, then stir in curry leaves and optional ginger.','Add peanuts, peas and turmeric with 2 tablespoons of water. Cook until peas are tender.','Fold in softened poha and salt. Cover for 2–3 minutes on low heat.','Switch off heat and finish with lemon juice and coriander. Serve warm.'],
    tip: 'For a milder version, skip the ginger. This recipe deliberately omits the onion often found in restaurant poha.'
  },
  {
    id: 'makhana', name: 'Golden Ghee-Roasted Makhana', category: 'Snacks', label: 'LITTLE CRUNCH', time: '12 min', minutes: 12, servings: '2 snack bowls', difficulty: 'Easy',
    image: 'photo-1776765828683-eb5ec29711e2', source: 'https://unsplash.com/photos/bowl-of-roasted-chickpeas-with-dipping-sauces-on-table-g5WKNwMoWCA', photographer: 'Tanya Barrow',
    desc: 'Light, crunchy lotus seeds tossed with cumin, turmeric, and just a touch of rock salt.',
    ingredients: ['2 cups plain makhana (fox nuts)','1½ tsp ghee','¼ tsp ground cumin','A pinch of turmeric','A pinch of rock salt','A pinch of black pepper (optional)'],
    steps: ['Place makhana in a dry pan over low heat. Stir for 5–7 minutes until crisp all the way through.','Add ghee and toss evenly.','Sprinkle in cumin, turmeric, and salt; stir for another minute without scorching the spices.','Let cool for 2 minutes. They will crisp up further as they rest.'],
    tip: 'Test one after roasting: a properly crisp makhana should snap rather than bend.'
  },
  {
    id: 'idli', name: 'Cloud-Soft Idli & Coconut Chutney', category: 'Breakfast', label: 'SOUTHERN COMFORT', time: '25 min*', minutes: 25, servings: '8 small idlis', difficulty: 'Easy with prepared batter',
    image: 'photo-1741376509109-e9edd6f24f5f', source: 'https://unsplash.com/photos/idli-with-various-chutneys-served-on-a-banana-leaf-V0pCYv4_ZZ0', photographer: 'Mayur Roxan',
    desc: 'Fluffy steamed idlis with a mild, fresh coconut-coriander chutney.',
    ingredients: ['2 cups plain fermented idli batter (prepared in advance; no onion or garlic)','A little oil for greasing','½ cup freshly grated coconut','2 tbsp roasted chana dal','¼ cup water, as needed','2 tbsp chopped coriander','Salt to taste','½ tsp lemon juice'],
    steps: ['Fill an idli steamer with water and bring to a gentle boil.','Lightly grease the idli moulds. Spoon in the prepared batter without overfilling.','Steam for 10–12 minutes until a toothpick comes out clean. Rest 2 minutes before unmoulding.','Blend coconut, roasted chana dal, coriander, lemon juice, salt and a little water until creamy.','Serve idlis hot with coconut chutney.'],
    tip: '*Time assumes the batter is already fermented. Traditional idli fermentation takes several hours; some stricter sattvic traditions avoid fermented foods.'
  },
  {
    id: 'oats', name: 'Cardamom & Banana Morning Oats', category: 'Breakfast', label: 'SLOW MORNINGS', time: '15 min', minutes: 15, servings: '2 bowls', difficulty: 'Easy',
    image: 'photo-1715098841757-0e9690ec12d6', source: 'https://unsplash.com/photos/a-bowl-of-oatmeal-with-banana-slices-on-top-qzRVPgqSWn4', photographer: 'Dimitris Asproloupos',
    desc: 'Creamy oats with soft banana, warm cardamom, and a scattering of soaked almonds.',
    ingredients: ['1 cup rolled oats','2 cups milk or unsweetened plant milk','1 ripe banana, sliced','¼ tsp ground cardamom','1 tsp chopped soaked almonds','1 tsp chopped dates (optional)','A pinch of cinnamon (optional)'],
    steps: ['Combine oats and milk in a small saucepan.','Simmer gently for 5–7 minutes, stirring often, until creamy. Add a splash of water if needed.','Stir in cardamom and half the banana slices.','Pour into bowls and top with the remaining banana, almonds, and optional chopped dates.'],
    tip: 'Ripe banana gives plenty of natural sweetness; taste before adding anything extra.'
  },
  {
    id: 'fruit', name: 'Seasonal Fruit & Yogurt Bowl', category: 'Snacks', label: 'FRESH & SIMPLE', time: '10 min', minutes: 10, servings: '2 bowls', difficulty: 'No-cook',
    image: 'photo-1498507297833-5373e346b4e0', source: 'https://unsplash.com/photos/close-up-photo-of-fruits-on-bowl-pVm2awTOPZo', photographer: 'Dane Deaner',
    desc: 'A colorful, easy bowl of fresh seasonal fruit with plain yogurt and crushed nuts.',
    ingredients: ['1 cup plain yogurt or plant yogurt','1 banana, sliced','½ cup berries or seasonal fruit','½ cup diced apple or pear','2 tsp chopped almonds','A pinch of ground cardamom','1 tsp pumpkin seeds (optional)'],
    steps: ['Wash the fruit and slice into bite-sized pieces.','Spoon yogurt into two bowls.','Arrange fruit on top and scatter over almonds, cardamom and optional pumpkin seeds.','Serve straight away while the fruit is fresh.'],
    tip: 'Some traditional Ayurvedic approaches prefer fruit separately from dairy. Simply enjoy the fruit and yogurt as two separate small courses if that suits your practice.'
  },
  {
    id: 'stew', name: 'Garden Vegetable & Coconut Stew', category: 'Mains', label: 'GENTLE DINNER', time: '30 min', minutes: 30, servings: '3 small bowls', difficulty: 'Easy',
    image: 'photo-1643786661490-966f1877effa', source: 'https://unsplash.com/photos/two-bowls-of-soup-with-peas-carrots-and-broccoli-RHLtemkEAaM', photographer: 'Elena Leya',
    desc: 'Tender seasonal vegetables in a delicate coconut broth with warming cumin.',
    ingredients: ['1 carrot, diced','1 cup chopped bottle gourd or zucchini','½ cup green peas','1 cup green beans, chopped','1 cup thin coconut milk','1 cup water','1 tsp coconut oil','½ tsp cumin seeds','¼ tsp turmeric','Salt to taste','Chopped coriander'],
    steps: ['Warm coconut oil and briefly toast cumin seeds over low heat.','Add diced vegetables, turmeric, water, and a little salt.','Cover and simmer for 12–15 minutes until the vegetables are tender.','Add coconut milk and warm gently for 3–4 minutes without a hard boil.','Top with coriander and enjoy with plain rice or soft chapati.'],
    tip: 'Use whichever fresh vegetables are in season; keeping the seasoning gentle lets their natural flavors shine.'
  },
  {
    id: 'paneer', name: 'Mild Paneer & Green Rice Bowl', category: 'Mains', label: 'A LITTLE NOURISHMENT', time: '30 min', minutes: 30, servings: '2 bowls', difficulty: 'Easy',
    image: 'photo-1771074168436-8692a866cdb1', source: 'https://unsplash.com/photos/a-colorful-bowl-of-rice-chickpeas-salmon-and-salad-HohIHrmr_E0', photographer: 'Sumit Bhatia',
    desc: 'Golden paneer, fluffy cumin rice, peas, and fresh greens in one generous bowl.',
    ingredients: ['150 g plain paneer, cubed','1 cup cooked basmati rice','½ cup peas','1 cup baby spinach','1 tbsp ghee','½ tsp cumin seeds','¼ tsp turmeric','½ tsp ground coriander','Salt to taste','Fresh coriander leaves','Lemon wedge (optional)'],
    steps: ['Warm half the ghee and gently sear paneer cubes until lightly golden; remove from pan.','Add remaining ghee and cumin seeds. Stir in peas with a tablespoon of water and cook until tender.','Add turmeric, coriander powder, spinach and a little salt. Cook until just wilted.','Stir in warm cooked rice and paneer, tossing gently to combine.','Finish with chopped coriander and optional lemon.'],
    tip: 'For a dairy-free version, replace paneer with firm tofu and ghee with oil. Some sattvic traditions do not include soy, so adapt to your preference.'
  },
  {
    id: 'laddoo', name: 'Coconut & Date Little Laddoos', category: 'Sweets', label: 'NATURALLY SWEET', time: '15 min', minutes: 15, servings: '10 small laddoos', difficulty: 'No-cook',
    image: 'photo-1776722089433-3513d173f5ee', source: 'https://unsplash.com/photos/sweet-coconut-balls-topped-with-white-cream-PzbjGm6EPhE', photographer: 'Jonathan Borba',
    desc: 'Soft little sweet bites made with dates, coconut, and fragrant green cardamom.',
    ingredients: ['1 cup pitted soft dates','¾ cup unsweetened desiccated coconut, plus extra to roll','¼ cup blanched almonds','¼ tsp ground cardamom','1 tsp ghee or coconut oil if needed'],
    steps: ['If dates are firm, soak in warm water for 10 minutes, then drain thoroughly.','Pulse almonds in a food processor until finely chopped.','Add dates, coconut and cardamom. Process until the mixture comes together when pressed.','If dry, add a small amount of ghee or coconut oil.','Roll into 10 balls, coat lightly in extra coconut and chill briefly to set.'],
    tip: 'Store refrigerated in an airtight container for up to 4 days. They are naturally sweet, so no added sugar is needed.'
  },
  {
    id: 'tea', name: 'Tulsi & Mint Herbal Infusion', category: 'Drinks', label: 'AFTERNOON PAUSE', time: '10 min', minutes: 10, servings: '2 cups', difficulty: 'Easy',
    image: 'photo-1773479089546-49ff98325518', source: 'https://unsplash.com/photos/a-cup-of-herbal-tea-with-mint-leaves-WcVLb9HIMrk', photographer: 'Swarnim Doegar',
    desc: 'A fragrant, caffeine-free cup to sip slowly during a quiet part of the day.',
    ingredients: ['2 cups water','6–8 fresh tulsi leaves or 1 tsp dried tulsi','5–6 fresh mint leaves','2 thin slices fresh ginger (optional)','A squeeze of lemon (optional)'],
    steps: ['Bring water to a gentle simmer.','Add tulsi, mint and optional ginger.','Turn off the heat, cover and steep for 5–7 minutes.','Strain into cups and add optional lemon to taste.'],
    tip: 'Herbal preparations may not suit everyone, including during pregnancy or with certain medications. Plain warm mint water is a simple alternative.'
  },
  {
    id: 'rice', name: 'Cumin Rice with Golden Dal', category: 'Mains', label: 'LUNCHTIME FAVORITE', time: '35 min', minutes: 35, servings: '2 plates', difficulty: 'Easy',
    image: 'photo-1742281257707-0c7f7e5ca9c6', source: 'https://unsplash.com/photos/indian-thalis-with-rice-and-a-variety-of-dishes-adzbTddUg68', photographer: 'Zoshua Colah',
    desc: 'Fragrant jeera rice and a velvety yellow dal: a timeless, simple everyday meal.',
    ingredients: ['½ cup yellow moong dal','½ tsp turmeric','2 cups water for dal','1 cup cooked basmati rice','1 tbsp ghee or neutral oil','1 tsp cumin seeds, divided','½ tsp grated ginger (optional)','Salt to taste','Fresh coriander'],
    steps: ['Rinse dal and simmer with turmeric and 2 cups water for 20–25 minutes until soft. Mash lightly.','Warm half the ghee in a small pan with half the cumin and optional ginger. Stir into dal and season.','Warm remaining ghee with remaining cumin until fragrant. Add cooked rice and toss gently to coat.','Serve rice beside the dal, with fresh coriander and cooked vegetables if you like.'],
    tip: 'Batch-cook plain rice in advance; cool it promptly and refrigerate, then reheat thoroughly before serving.'
  },
  {
    id: 'fruit-plate', name: 'Fresh Fruit & Seed Plate', category: 'Snacks', label: 'FIVE-MINUTE JOY', time: '5 min', minutes: 5, servings: '2 plates', difficulty: 'No-cook',
    image: 'photo-1562629595-ba188068fb33', source: 'https://unsplash.com/photos/sliced-blueberries-banana-and-pineapple-fruits-in-plate-hRmk-FMpofc', photographer: 'Rebecca Hansen',
    desc: 'Freshly cut fruit with crunchy seeds: simple, colorful, and ready in minutes.',
    ingredients: ['1 banana','½ cup berries or grapes','½ cup diced melon or mango','1 tsp pumpkin seeds','1 tsp chopped soaked almonds','A small squeeze of lime (optional)'],
    steps: ['Wash the fruit and cut into bite-sized pieces.','Arrange on two small plates.','Sprinkle over seeds and chopped almonds.','Serve immediately, with optional lime if desired.'],
    tip: 'Use ripe seasonal fruit. A beautiful snack does not need an elaborate recipe.'
  }
];

const el = (id) => document.getElementById(id);
const recipeGrid = el('recipeGrid');
const searchInput = el('recipeSearch');
const filters = [...document.querySelectorAll('.filter-chip')];
let activeCategory = 'All';
let savedOnly = false;
let currentRecipe = null;
let lastFocus = null;
let toastTimer;
let saved = new Set();
try { saved = new Set(JSON.parse(localStorage.getItem('sattvaSaved') || '[]').filter(id => recipes.some(r => r.id === id))); } catch (_) { saved = new Set(); }

const imageFor = (r, w=900) => r.imageUrl || (r.image?.startsWith('assets/') ? r.image : photo(r.image,w));
const fallbackFor = (r) => 'assets/' + ({Breakfast:'breakfast.webp',Mains:'mains.webp',Snacks:'snacks.webp',Sweets:'sweets.webp',Drinks:'drinks.webp'}[r.category] || 'breakfast.webp');
function persistSaved() {try {localStorage.setItem('sattvaSaved',JSON.stringify([...saved]));}catch (_) {} el('savedCount').textContent=saved.size;}
function notify(msg) { const toast=el('toast'); toast.textContent=msg; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>toast.classList.remove('show'),2600); }
function scrollRecipes() { el('recipes').scrollIntoView({behavior:'smooth',block:'start'}); }
function setActiveChip() { filters.forEach(b=>{const active=!savedOnly && b.dataset.filter===activeCategory;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));}); el('savedButton').setAttribute('aria-pressed', String(savedOnly)); }
function renderRecipes(){
  const query=searchInput.value.toLocaleLowerCase().trim();
  const visible=recipes.filter(r=>(!savedOnly&&(activeCategory==='All'||r.category===activeCategory)||savedOnly&&saved.has(r.id))&&(!query||`${r.name} ${r.desc} ${r.category} ${r.ingredients.join(' ')}`.toLowerCase().includes(query)));
  recipeGrid.innerHTML=visible.map(r=>`<article class="recipe-card"><div class="recipe-image" data-open="${r.id}" role="button" tabindex="0" aria-label="Open ${r.name} recipe"><img src="${imageFor(r,700)}" alt="Food photography illustrating ${r.name}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackFor(r)}'"/><span class="recipe-tag">${r.new?'NEW · ':''}${r.category==='Mains'?'MAIN MEALS':r.category.toUpperCase()}</span><button class="save-recipe ${saved.has(r.id)?'is-saved':''}" type="button" data-save="${r.id}" aria-label="${saved.has(r.id)?'Remove':'Save'} ${r.name}" aria-pressed="${saved.has(r.id)}">${saved.has(r.id)?'♥':'♡'}</button></div><div class="recipe-body"><div class="recipe-eyebrow">${r.label}</div><h3 class="recipe-title" data-open="${r.id}" role="button" tabindex="0">${r.name}</h3><p class="recipe-desc">${r.desc}</p><div class="recipe-meta"><span>◷ &nbsp; ${r.time} &nbsp; · &nbsp; ${r.difficulty}</span><button type="button" data-open="${r.id}">View recipe ↗</button></div></div></article>`).join('');
  el('resultsLine').textContent=`${savedOnly?'Your saved recipes':activeCategory==='All'?'All recipes':activeCategory} · ${visible.length} ${visible.length===1?'recipe':'recipes'}`;
  el('emptyState').hidden=visible.length>0;
  setActiveChip();
}
function toggleSaved(id){ const r=recipes.find(item=>item.id===id); if(!r)return; if(saved.has(id)){saved.delete(id);notify('Removed from your saved recipes.');}else{saved.add(id);notify('Saved for another lovely day.');}persistSaved();renderRecipes();if(currentRecipe?.id===id) updateModalSave(); }
function modalMarkup(r){return `<img class="modal-cover" src="${imageFor(r,1250)}" alt="Food photography illustrating ${r.name}" onerror="this.onerror=null;this.src='${fallbackFor(r)}'" /><div class="modal-inner"><p class="kicker">${r.category.toUpperCase()} / ${r.label}</p><h2>${r.name}</h2><p class="modal-intro">${r.desc}</p><div class="modal-tags"><span>◷ ${r.time}</span><span>◌ ${r.servings}</span><span>✳ No onion or garlic</span><span>♧ Vegetarian</span></div><div class="modal-cols"><div><h3>What you'll need.</h3><ul class="ingredients">${r.ingredients.map(i=>`<li>${i}</li>`).join('')}</ul></div><div><h3>Let's make it.</h3><ol class="steps">${r.steps.map(s=>`<li>${s}</li>`).join('')}</ol><div class="modal-tip"><strong>A little kitchen note:</strong> ${r.tip}</div></div></div><div class="modal-actions"><button type="button" class="btn btn-primary" id="modalSave">${saved.has(r.id)?'♥ Saved recipe':'♡ Save this recipe'}</button><button type="button" class="outline-btn" id="printRecipe">Print recipe ↗</button></div></div>`;}
function updateModalSave(){const button=el('modalSave');if(currentRecipe&&button)button.textContent=saved.has(currentRecipe.id)?'♥ Saved recipe':'♡ Save this recipe';}
function openModal(id){const r=recipes.find(item=>item.id===id);if(!r)return;lastFocus=document.activeElement;currentRecipe=r;el('modalBody').innerHTML=modalMarkup(r);el('modalBackdrop').hidden=false;el('recipeModal').hidden=false;el('recipeModal').setAttribute('aria-hidden','false');el('recipeModal').scrollTop=0;document.body.classList.add('modal-open');el('modalClose').focus();}
function closeModal(){if(el('recipeModal').hidden)return;el('modalBackdrop').hidden=true;el('recipeModal').hidden=true;el('recipeModal').setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');currentRecipe=null;if(lastFocus&&document.contains(lastFocus))lastFocus.focus();}
function pickMenu(){const choose=(category)=>{const pool=recipes.filter(r=>r.category===category);return pool[Math.floor(Math.random()*pool.length)];};const picks=[['Morning',choose('Breakfast')],['Midday',choose('Mains')],['A little snack',choose('Snacks')]];el('dailyPlan').innerHTML=`<div class="daily-plan-header"><h3>A little menu, just for today.</h3><span class="kicker">FRESH IDEAS ✳</span></div><div class="day-grid">${picks.map(([name,r])=>`<button type="button" class="day-pick" data-open="${r.id}"><img alt="${r.name}" src="${imageFor(r,280)}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackFor(r)}'"><span><small>${name}</small><strong>${r.name}</strong></span></button>`).join('')}</div>`;el('dailyPlan').hidden=false;el('dailyPlan').scrollIntoView({behavior:'smooth',block:'nearest'});}
function resetFilters(){savedOnly=false;activeCategory='All';searchInput.value='';renderRecipes();}

// Delegated actions also work after cards are re-rendered.
document.addEventListener('click',e=>{
  const save=e.target.closest('[data-save]');if(save){e.stopPropagation();toggleSaved(save.dataset.save);return;}
  const opener=e.target.closest('[data-open]');if(opener){openModal(opener.dataset.open);return;}
  const category=e.target.closest('[data-category]');if(category){savedOnly=false;activeCategory=category.dataset.category;searchInput.value='';renderRecipes();scrollRecipes();return;}
});
document.addEventListener('keydown',e=>{
  if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-open][role="button"]')){e.preventDefault();openModal(e.target.dataset.open);}
  if(e.key==='Escape')closeModal();
  if(e.key==='Tab'&&!el('recipeModal').hidden){const focusable=[...el('recipeModal').querySelectorAll('button:not([disabled]),a[href]')];if(!focusable.length)return;const first=focusable[0],last=focusable[focusable.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
});
filters.forEach(b=>b.addEventListener('click',()=>{savedOnly=false;activeCategory=b.dataset.filter;renderRecipes();}));
searchInput.addEventListener('input',renderRecipes);
el('clearFilters').addEventListener('click',resetFilters);
el('savedButton').addEventListener('click',()=>{savedOnly=!savedOnly;activeCategory='All';searchInput.value='';renderRecipes();scrollRecipes();if(savedOnly&&saved.size===0)notify('Save your first recipe using the heart icon.');});
el('mobileToggle').addEventListener('click',()=>{const nav=el('mobileNav');const open=nav.hidden;nav.hidden=!open;el('mobileToggle').setAttribute('aria-expanded',String(open));});
el('mobileNav').addEventListener('click',e=>{if(e.target.closest('a')){el('mobileNav').hidden=true;el('mobileToggle').setAttribute('aria-expanded','false');}});
el('modalClose').addEventListener('click',closeModal);
el('modalBackdrop').addEventListener('click',closeModal);
el('modalBody').addEventListener('click',e=>{if(e.target.closest('#modalSave')&&currentRecipe)toggleSaved(currentRecipe.id);if(e.target.closest('#printRecipe'))window.print();});
el('planButton').addEventListener('click',pickMenu);
el('year').textContent=new Date().getFullYear();
persistSaved();renderRecipes();
