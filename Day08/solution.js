/*
The results are in, and the people of Codeville want you to focus on Smart City upgrades.
You've decided to begin by replacing all of the city's trash cans with smart cans: when citizens
toss their rubbish into the smart can, it automatically sorts items into waste, recycling,
and compost bins.

Instructions
We need to complete a function called smartGarbage(trash, bins), which will be responsible for
increasing the garbage count for waste, recycling, or compost depending on what trash is submitted.
Our function will receive two arguments. The first argument, trash, is a string that will tell our
function what type of item is being submitted. The second argument, bins, is an object containing
three properties (waste, recycling, and compost), which hold some numerical value.
Our function must increase the correct value in the bins object, and the return the newly
updated object.

Examples
Input:
  const bins = {
      waste: 4,
      recycling: 2,
      compost: 5
  }

  const trash = 'recycling'
    
Output:
  {
    waste: 4,
    recycling: 3,
    compost: 5
  }
*/

const smartGarbage = (trash, bins) => {
  const updatedObject = Object.assign(bins, {});
  const garbageCount = updatedObject[trash];
  if (typeof garbageCount !== 'undefined' && !isNaN(garbageCount)) {
    updatedObject[trash]++;
  }

  return updatedObject;
}


const runTests = () => {
  const bins = { waste: 4, recycling: 2, compost: 5 };
  const trash = 'recycling';
  const result = smartGarbage(trash, bins);
  const expected = { waste: 4, recycling: 3, compost: 5 };
  ok = JSON.stringify(result) === JSON.stringify(expected);

  if (ok) {
    const bins = { waste: 4, recycling: 2, compost: 5 };
    const trash = 'waste';
    const result = smartGarbage(trash, bins);
    const expected = { waste: 5, recycling: 2, compost: 5 };
    ok = JSON.stringify(result) === JSON.stringify(expected);
  }

  if (ok) {
    const bins = { waste: 4, recycling: 2, compost: 5 };
    const trash = 'compost';
    const result = smartGarbage(trash, bins);
    const expected = { waste: 4, recycling: 2, compost: 6 };
    ok = JSON.stringify(result) === JSON.stringify(expected);
  }

  if (ok) {
    const bins = { waste: 4, recycling: 2, compost: 5 };
    const trash = 'battery';
    const result = smartGarbage(trash, bins);
    const expected = { waste: 4, recycling: 2, compost: 5 };
    ok = JSON.stringify(result) === JSON.stringify(expected);
  }

  if (!ok) {
    throw new Error('test failed!');
  }
};

runTests();
