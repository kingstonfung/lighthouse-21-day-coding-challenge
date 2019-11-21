/*
The town festival is tomorrow and the organizers have only just realized that they've booked two
bakeries to cater desserts, but only have one kitchen available. Instead of just choosing one
bakery, let's help them figure out a way to work together.

Both of bakeries have a specialty, so they have each have a stock of specific ingredients.

Lucky for the festival organizers, we've found a recipe book in the town library with TONS of fusion
recipes, unfortunately it's 1000 of pages long and we don't have much time. Let's write a function
that helps determine which recipes match the ingredients that both bakeries have in stock.

Instructions
We need to complete a function called chooseRecipe(), which will receive three parameters:

An array of ingredients in stock at Bakery A
An array of ingredients in stock at Bakery B
An array of recipe objects. Each recipe has a name property(string) and an ingredient
property(array)

We are limiting our search to two ingredient recipes. We want to find a recipe that utilizes one
ingredient from Bakery A and one from Bakery B.

Our chooseRecipe() function should return the name of the correct recipe.

Note: In the tests there will always be a single correct answer, and you will NOT need to consider
special cases. For example, you do NOT need to worry about cases where one bakery has BOTH the
ingredients for a recipe.

Examples Input:
  const bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
  const bakeryB = ['milk', 'butter', 'cream cheese'];
  const recipes = [
    { name: 'Coconut Sponge Cake', ingredients: ['coconut', 'cake base'] },
    { name: 'Persian Cheesecake', ingredients: ['saffron', 'cream cheese'] },
    { name: 'Custard Surprise', ingredients: ['custard', 'ground beef'] },
  ];
    
Output:
  "Persian Cheesecake"
*/

const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  let foundRecipe = '';

  for (let recipe of recipes) {
    if (foundRecipe) break;

    let foundCount = 0;
    let bakeryAFound = false;
    let bakeryBFound = false;

    recipe.ingredients.forEach((ingredient) => {
      if (!bakeryAFound && bakeryA.includes(ingredient)) {
        bakeryAFound = true;
        foundCount++;
      }
      if (!bakeryBFound && bakeryB.includes(ingredient)) {
        bakeryBFound = true;
        foundCount++;
      }
    });
    
    if (foundCount > 0 && foundCount === recipe.ingredients.length) {
      foundRecipe = recipe.name;
    }
  }

  console.log('foundRecipe', foundRecipe);
  return foundRecipe;
};

const runTests = () => {
  let ok = true;

  const bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
  const bakeryB = ['milk', 'butter', 'cream cheese'];
  const recipes = [
    { name: 'Coconut Sponge Cake', ingredients: ['coconut', 'cake base'] },
    { name: 'Persian Cheesecake', ingredients: ['saffron', 'cream cheese'] },
    { name: 'Custard Surprise', ingredients: ['custard', 'ground beef'] },
  ];
  const result = chooseRecipe(bakeryA, bakeryB, recipes);
  const expected = 'Persian Cheesecake';
  ok = result === expected;

  if (ok) {
    const bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
    const bakeryB = ['milk', 'butter', 'cream cheese'];
    const recipes = [
      { name: 'Coconut Sponge Cake', ingredients: ['coconut', 'cake base'] },
      { name: 'Persian Cheesecake', ingredients: ['saffron', 'cream'] },
      { name: 'Custard Surprise', ingredients: ['custard', 'ground beef'] },
      { name: 'Custard Cake', ingredients: ['milk', 'eggs'] },
    ];
    const result = chooseRecipe(bakeryA, bakeryB, recipes);
    const expected = 'Custard Cake';
    ok = result === expected;

  }

  if (!ok) {
    throw new Error('test failed!');
  }
};

runTests();
