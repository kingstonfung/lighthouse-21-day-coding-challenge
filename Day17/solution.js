/*
At this year's town festival the Codeville Vegetation Association will be handing out several
awards for the best vegetables in a given category. We'll be testing out a new judging system on
the best tomatoes to start, which can be judged based on their redness OR their plumpness.

Instructions
For this challenge, we'll need to implement a function called judgeVegetable()that will decide
which vegetable is best based on a given judging characteristic. Our function will receive two
parameters: a list of veggies(as an array of objects), and a characteristic to judge the veggies
by (in the case of a tomato, either redness or plumpness).

Our function must return the name of the person who submitted (vegetables.submitter) the vegetable
with the highest ranking in the provided category.

Examples
Input:

   const vegetables = [
      {
        submitter: 'Old Man Franklin',
        redness: 10,
        plumpness: 5
      },
      {
        submitter: 'Sally Tomato-Grower',
        redness: 2,
        plumpness: 8
      },
      {
        submitter: 'Hamid Hamidson',
        redness: 4,
        plumpness: 3
      }
    ]

    const metric = 'redness'
    
Output:
Old Man Franklin
*/

const judgeVegetable = (vegetables, metric) => {
  const sortedVegetables = vegetables.sort((a, b) => {
    if (a[metric] > b[metric]) return -1
    return 1;
  });

  const winner = sortedVegetables[0];
  const winnerName = winner.submitter;
  return winnerName;
}


const runTests = () => {
  let ok = true;

  const vegetables = [
    { submitter: 'Old Man Franklin', redness: 10, plumpness: 5 },
    { submitter: 'Sally Tomato-Grower', redness: 2, plumpness: 8 },
    { submitter: 'Hamid Hamidson', redness: 4, plumpness: 3 }
  ];
  const metric = 'redness';
  const result = judgeVegetable(vegetables, metric);
  const expected = 'Old Man Franklin';
  ok = result === expected;

  if (ok) {
    const vegetables = [
      { submitter: 'Old Man Franklin', redness: 10, plumpness: 5 },
      { submitter: 'Sally Tomato-Grower', redness: 2, plumpness: 8 },
      { submitter: 'Hamid Hamidson', redness: 4, plumpness: 3 }
    ];
    const metric = 'plumpness';
    const result = judgeVegetable(vegetables, metric);
    const expected = 'Sally Tomato-Grower';
    ok = result === expected;
  }

  if (ok) {
    const vegetables = [
      { submitter: 'Somebody Someone', redness: 1, plumpness: 5 },
      { submitter: 'Sally Tomato-Grower', redness: 2, plumpness: 8 },
      { submitter: 'Hamid Hamidson', redness: 4, plumpness: 1 }
    ];
    const metric = 'redness';
    const result = judgeVegetable(vegetables, metric);
    const expected = 'Hamid Hamidson';
    ok = result === expected;
  }
  
  if (!ok) {
    throw new Error('test failed!');
  }
};

runTests();
