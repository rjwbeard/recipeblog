const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Recipe = sequelize.define(
  "Recipe",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    activeTime: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    totalTime: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    yield: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    method: {
      type: DataTypes.STRING(5000),
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

const seedRecipes = async () => {
  await Recipe.sync({ force: true });
  await Recipe.create({
    name: "Pizza Dough",
    description:
      "Pizza is the perfect vehicle for leftovers- make this dough and pile it high with whatever's in the fridge!",
    ingredients: `
      - 1 T sugar
      - 2.25 T active dry yeast
      - 1.5 c. water
      - 4 T olive oil
      - 4 c. AP flour
      - 1 t salt
    `,
    activeTime: "20 min.",
    totalTime: "2 hours 30 min.",
    yield: "2 medium pies",
    method: `
      1. Heat the water to 110F. Mix the water, yeast, and sugar in a small bowl. Let it sit for 10 minutes or until frothy.
      2. While the yeast is blooming, mix all of the dry ingredients in a large bowl.
      3. Whisk the oil into the yeast once it has bloomed and add the wet ingredients to the dry.
      4. Knead the dough for 5-7 minutes until is smooth and only slightly tacky.
      5. Place the dough in a lightly greased bowl and place a plate on top. Let the dough rest in the refrigerator for 2-3 hours.
      6. Preheat the oven to 550 degrees. Turn the dough out onto a well-oiled baking sheet and divide it in two with a bench scraper.
      7. Stretch each half of dough to fit a half sheet pan and cover with desired toppings.
      8. Bake each pizza separately for 8-10 minutes or until golden brown.
      9. Wait a few minutes before slicing!
    `,
    notes: "anyAdditionalNotes",
    image:
      "https://images.pexels.com/photos/842519/pexels-photo-842519.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  }).catch((e) => {
    console.error(e);
  });

  await Recipe.create({
    name: "Mushroom Pot Pie",
    description:
      "Skip the dough-making hassle and use prepared puff pastry for the crust of this super savory pie.",
    ingredients: `
    - 4 T EVOO
    - 4 T butter
    - 1 lb. fresh mushrooms, sliced
    - 1/2 c. mixed dried mushrooms
    - 2 c. yellow onion, diced
    - 1 1/2 c. vegetable stock
    - 1 c. parsnip, diced
    - 1 c. carrot, diced
    - 1 c. potato, diced
    - 1 package puff pastry
    - 3/4 c. heavy cream
    - 1 large egg
    - 3 c. kale, chopped
    - 1 T fresh rosemary, picked
    - 1 T fresh thyme, picked
    - 1/4 c. AP flour
    `,
    activeTime: "40 min.",
    totalTime: "90 min.",
    yield: "6 servings",
    method: `
    1. Place the dried mushrooms in a small bowl and cover with 2 c. boiling water. Preheat the oven to 425.
    2. While the dried mushrooms are soaking, brown the sliced fresh mushrooms over medium-high heat, working in batches to ensure they sear and don't steam. Heat the olive oil in a large cast iron skillet for 2 minutes before adding the mushrooms and then season liberally with salt and black pepper. Avoid fussing with the pan as they cook so the mushrooms can develop good color. As each batch is complete, transfer the cooked mushrooms to a bowl to accumulate any juices. Add more oil to the pan and repeat as necessary.
    3. In the same cast iron skillet, lower the heat to medium and then add the butter and onion. Cook, stirring occasionally, until the onions are translucent.
    4. Add the kale, rosemary, adn thyme, then season with salt and pepper and cook for about 3 minutes.
    5. Sprinkle the flour over the onion and kale mixture, stirring and cooking for about 2 minutes until the flour is toasted.
    6. Strain the rehydrated mushrooms, reserving the liquid left behind. Slowly pour the cream, stock, and mushroom liquid into the cast iron, stirring constantly. Cook until the mixture has noticeably thickened, about 5 minutes.
    7. Turn off the heat. Slice the rehydrated mushrooms, then add them to the pan along with the seared fresh mushrooms and any accumulated juices. Add the parsnips, carrots, and potatoes, stir, and season with salt and pepper.
    8. Carefully unfold the puff pastry and lay it atop the skillet. Be careful, as the skillet will be warm! Cut the excess puff pastry off using clean kitchen scissors, leaving about an inch of dough to crimp.
    9. Crimp the edges of the puff pastry, aiming to create a seal between the dough and the skillet. Beat an egg in a small bowl and apply an eggwash with a pastry brush all over the crust.
    10. Vent the top of the pie with a few small slash marks and place it in the oven to bake with a sheet pan underneath it (in case of spillage!) for about 30 minutes, or until golden brown.
    `,
    notes: "anyAdditionalNotes",
    image:
      "https://images.pexels.com/photos/6605636/pexels-photo-6605636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  }).catch((e) => {
    console.error(e);
  });

  await Recipe.create({
    name: "Dream Brownies",
    description: "Perfectly chocolately and salty!",
    ingredients: `
    - 4 large eggs
    - 1 1/4 c. dutch process cocoa
    - 1 t salt
    - 1 t baking powder
    - 2 t instant coffee
    - 1 T vanilla extract
    - 1 c. unsalted butter
    - 1 3/4 c. sugar
    - 1 1/2 c. AP flour
    - 1 c. dark chocolate chips
    - 1 c. chopped walnuts
    `,
    activeTime: "20 min.",
    totalTime: "1 hour",
    yield: "1 dozen",
    method: `
    1. In a large bowl, beat the eggs, cocoa, salt, baking powder, espresso or coffee, and vanilla until smooth.
    2. Melt the butter in a saucepan over medium-low heat and add the sugar, stirring to dissolve and combine.
    3. Add the hot butter and sugar mixture to the egg and cocoa mixture. Stir until smooth.
    4. Add the flour, chocolate chips, and nuts. Stir until combined.
    5. Grease a 9 by 13 pan and spoon the batter in.
    6. Bake for 27-30 minutes.
    `,
    notes: "anyAdditionalNotes",
    image:
      "https://images.pexels.com/photos/7157867/pexels-photo-7157867.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  }).catch((e) => {
    console.error(e);
  });

  await Recipe.create({
    name: "Maple Mustard Dressing",
    description:
      "The secret to this dijon dressing is a splash of sweet pickle brine :)",
    ingredients: `
    - 2 cloves garlic, minced
    - 1/2 a shallot, minced
    - 2 T apple cider vinegar
    - 2 T dijon mustard
    - 1 T sweet pickle brine
    - 1 T maple syrup
    - 1/3 c. EVOO
    - 1 t dried dill (optional)
    `,
    activeTime: "10 min.",
    totalTime: "10 min.",
    yield: "8oz",
    method: `
    1. Add all of the ingredients except the EVOO to a bowl and mix thoroughly. Allow the mixture to rest and garlic to mellow for at least 10 minutes.
    2. Slowly stream in the EVOO while constantly whisking. Adjust the seasoning to your taste and enjoy.
    `,
    notes: "anyAdditionalNotes",
    image:
      "https://images.pexels.com/photos/3535391/pexels-photo-3535391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  }).catch((e) => {
    console.error(e);
  });

  await Recipe.create({
    name: "Kale + Bean Soup",
    description:
      "Our favorite soup! Make a big batch and freeze some for an easy meal down the road.",
    ingredients: `
    - 1 lb. ground sausage
    - 4 T EVOO
    - 2 medium yellow onion, diced
    - 2 large carrots, diced
    - 2 celery stalks, diced
    - 8 c. vegetable stock
    - 2 c. dried beans
    - 8 oz kale, chopped
    - 2 T za'atar
    - 1 T aleppo pepper
    - 1 t thyme
    - 1 t oregano
    `,
    activeTime: "30 min.",
    totalTime: "1 hour",
    yield: "4 quarts",
    method: `
    1. Rinse and sort the dried beans, then set them to cook in an InstaPot.
    2. Brown the sausage over medium high heat in a large stock pot, stirring and crumbling it as you go.
    3. Remove the sausage using a slotted spoon and place it aside in a bowl.
    4. Turn the heat down to medium and add EVOO as needed to coat the bottom of the pan. Add the onion, carrot, and celery and season well with salt and pepper. Cook, stirring occassionally, until the onions are translucent, about 7 minutes.
    5. Add the za'atar, aleppo, thyme, and oregano and stir to combine. Add vegetable stock and bring it to a simmer.
    6. As the pot reaches a simmer, add the kale, beans, and sausage. Allow the soup to simmer for at least 20 minutes before enjoying. Best served with crusty bread!
    `,
    notes: "anyAdditionalNotes",
    image:
      "https://images.pexels.com/photos/1703272/pexels-photo-1703272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  }).catch((e) => {
    console.error(e);
  });

  await Recipe.create({
    name: "Veggie Burgers",
    description: "Easy and filling weeknight dinner!",
    ingredients: `
    - 1 can black beans, drained + rinsed
    - 1 lb. shiitake mushrooms, sliced
    - 2 T EVOO
    - 3/4 c. bell pepper, finely diced
    - 1 c. yellow onion, finely diced
    - 6 cloves garlic, minced
    - 2 t ground cumin
    - 1 t chili powder
    - 1 t smoked paprika
    - 1/2 c. bread crumbs
    - 2 large eggs
    - 1 t miso
    - 1 T worcestershire sauve
    - 2 T ketchup or BBQ sauce
    `,
    activeTime: "20 min.",
    totalTime: "40 min.",
    yield: "6 servings",
    method: `
    1. Preheat the oven to 325. Spread the black beans on a large baking sheet and the shiitakes on another baking sheet.
    2. Drizzle the mushrooms with EVOO and season with salt and pepper. Place both baking sheets in the oven and after 6 minutes, rotate them. After 6 more minutes, 12 minutes total, remove both trays. The mushrooms should have shrunked dramatically and the beans should be dried and split.
    3. Meanwhile, heat EVOO in a non-stick pan and add the onion, garlic, and bell pepper. Season with salt and pepper and cook until the onions are translucent. Remove from heat and blot gently to remove excess moisture.
    4. Add the onion, pepper, and garlic mixture to a food processor along with the cumin, chili powder, smoked paprika, bread crumbs, eggs, miso, worcestershire, and sauce. Pulse until combined.
    5. Add the beans and mushrooms and pulse until combined. Form into patties, about 1/3 cup each.
    6. Bake on a parchment lined sheet tray at 375 for 20 minutes, flipping halfway.
    `,
    notes: "anyAdditionalNotes",
    image:
      "https://images.pexels.com/photos/3607284/pexels-photo-3607284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  }).catch((e) => {
    console.error(e);
  });

  await Recipe.create({
    name: "Chocolate Chip Cookies",
    description: "Salty, chewy, and nutty!",
    ingredients: `
    - 1 cup unsalted butter, softened
    - 1 c. light brown sugar
    - 1/2 c. sugar
    - 2 large eggs
    - 1 T vanilla extract
    - 2 1/4 c. AP flour
    - 1 t baking soda
    - 2 t salt
    - 1 1/2 c. dark chocolate chips
    - 1 c. chopped walnuts
    `,
    activeTime: "35 min.",
    totalTime: "4 hours",
    yield: "2 dozen",
    method: `
    1. Sift together the flour, salt and baking soda. Whisk to combine.
    2. Add the butter and sugars to a large bowl or stand mixer. Beat on medium for several minutes until light and fluffy.
    3. Add the eggs and vanilla, mixing to combine. Scrape down the sides of the bowl at least once to ensure it's evenly mixed.
    4. Working in small batches, add the dry ingredients to the wet and combine thoroughly. Stir in the chocolate and nuts.
    5. Portion the dough into 1/4 cup balls and flatten slightly. Refrigerate for at least 3 hours or freeze for 1 hour before baking!
    6. Preheat the oven to 375. Bake for about 17 minutes, rotating halfway.
    `,
    notes: "anyAdditionalNotes",
    image:
      "https://images.pexels.com/photos/8456501/pexels-photo-8456501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  }).catch((e) => {
    console.error(e);
  });

  await Recipe.create({
    name: "Sesame Noodle Sauce",
    description: "A delicious weeknight treat!",
    ingredients: `
    - 1/4 c. soy sauce
    - 1/3 c. tehina
    - 1 T peanut butter
    - 3 T sesame oil
    - 2 T chili oil
    - 1 1/2 T rice vinegar
    - 1 T ginger, minced
    - 1 T garlic, minced
    `,
    activeTime: "10 min.",
    totalTime: "20 min.",
    yield: "6 servings",
    method: `
    1. Add everything to a bowl and mix well! Delicious enjoyed with linguine or soba noodles and served chilled. Top with toasted sesame seeds, sliced scallions, or furikake!
    `,
    notes: "anyAdditionalNotes",
    image:
      "https://images.pexels.com/photos/4518697/pexels-photo-4518697.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  }).catch((e) => {
    console.error(e);
  });
};

seedRecipes();

module.exports = { Recipe };
