/*
The parking lot in the Codeville Devtropolis Shopping Mall needs an upgrade, and you've decided
this is the perfect opportunity to install a smart parking system.

The system will use special parking sensors to keep track of all parking spots and monitor which
ones are available. Every time a vehicle enters the parking lot, the system directs them to an
available spot for their particular vehicle type, or notifies them that no spots are available.

Instructions
We need to write a function called whereCanIPark() that returns the coordinates of an available
parking spot for the vehicle, or returns false if there is no available spot. Our function receives
an array of arrays representing parking spots, and a string with type of the vehicle that is
looking for a parking spot.

There are three kinds of possible vehicles: regular cars, small cars, and motorcycles. Regular
cars can only park in R spots. Small cars can park in R or S spots. Motorcycles can park in R, S,
or M spots. In the array of parking spots, spots are written in both lower-case and upper-case.
An upper-case letter means that the particular spot is AVAILABLE, while lower-case letters mean
that the spot is UNAVAILABLE.

Our function must return an array with the coordinates of the spot as an [X, Y] pair. See the
example input and output below for an illustration.

Note: There may be multiple available spots for a particular vehicle. It does not matter which
spot your function chooses, as long as the spot is available. And if there are no available spots,
remember to return false.

Examples
Input:
  const spots = [
    // COLUMNS ARE X
    //    0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'R', 'M'], // 1
    ['s', 'M', 's', 'S', 'R', 'm'], // 2
    ['S', 'r', 's', 'm', 'R', 'M'], // 3
    ['S', 'r', 's', 'm', 'R', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S'], // 5
  ]
  const vehicle = 'regular' // possible options are 'regular', 'small', or 'motorcycle'
    
Output:
  [4, 0]
*/

const eligibleVehicleSpaces = {
  regular: 'R',
  small: 'R,S',
  motorcycle: 'R,S,M',
};

const whereCanIPark = (spots, vehicle) => {
  const requiredSpot = eligibleVehicleSpaces[vehicle].split(',');
  const availableSpots = [];

  spots.forEach((row, y) => {
    row.forEach((spotStatus, x) => {
      if (requiredSpot.includes(spotStatus)) {
        availableSpots.push([x, y]);
      }
    });
  });

  if (!availableSpots.length) return false;

  return availableSpots[0];
};

const runTests = () => {
  let ok = true;

  // Test #1
  const spots = [
    ['s', 's', 's', 'S', 'r', 'M'],
    ['s', 'M', 's', 'S', 'r', 'M'],
    ['s', 'M', 's', 'S', 'r', 'm'],
    ['S', 'r', 's', 'm', 'r', 'M'],
    ['S', 'r', 's', 'm', 'r', 'M'],
    ['S', 'r', 'S', 'M', 'M', 'S']
  ];
  const vehicle = 'regular';
  // ok = whereCanIPark(spots, vehicle) === false;
  
  if (ok) { // Test #2
    const spots = [
      ['r', 'm', 's', 'S', 'R', 's'],
      ['s', 'r', 's', 's', 'r', 'm'],
      ['s', 'm', 's', 's', 'r', 'm'],
      ['S', 'r', 's', 'm', 'R', 'm'],
      ['S', 'R', 's', 'm', 'r', 's'],
      ['s', 'r', 'S', 'M', 'M', 's']
    ]
    const vehicle = 'motorcycle';
    const possibleAnswers = [ // lighthouse supplied answers, which includes INCORRECT values!
      "0_3", "0_4",
      "3_0", "3_4",
      "4_0", "4_1",
      "5_2", "5_3",
      "5_4",
    ];

    const answer = whereCanIPark(spots, vehicle);
    const answerStr = `${answer[0]}_${answer[1]}`;
    ok = possibleAnswers.find(goodAnswer => goodAnswer === answerStr);
  }

  if (ok) { // Test #3
    const spots = [[]];
    const vehicle = 'regular';
    ok = whereCanIPark(spots, vehicle) === false;
  }

  if (!ok) {
    throw new Error('test failed!');
  }
};

runTests();
