/*
You can't hurry love, or local transit in Codeville. While you've been hard at work on a
solution to the larger transit woes, you've decided to implement a new system to at
least be a little more transparent about wait times. The city will be installing a smart
screen, at the busiest bus stop in town, that will show the estimated arrival times for
each of the buses that stop there.

Instructions
For this challenge, we'll implement a function called busTimes(). This function will
calculate the arrival time for a collection of busses based on their current speed and
distance from the stop. It will receive an object called buses, which contains a series
of objects for each bus, with the distance of the bus and the speed that the bus is
traveling at. Our function should return a new object that shows how long until each bus
arrives at the stop.

Examples
Input:
  const buses = {
    pickadilly: {
        distance: 10,
        speed: 5
    },
    uptown: {
        distance: 13,
        speed: 10
    }
  }
    
Output:
  {
    pickadilly: 2,
    uptown: 1.3
  }
*/

const busTimes = (buses) => {
  const newEstimation = {};
  Object.keys(buses).forEach((routeName) => {
    const distance = buses[routeName].distance || 0;
    const speed = buses[routeName].speed || 0;
    newEstimation[routeName] = Math.round((distance / speed) * 10) / 10;
  });

  return newEstimation;
}

const runTests = () => {
  let ok = true;

  // Test #1
  const buses = {
    pickadilly: { distance: 10, speed: 5 },
    uptown: { distance: 13, speed: 10 },
  };

  const result = busTimes(buses);
  const expected = {'pickadilly': 2, 'uptown': 1.3};
  ok = JSON.stringify(result) === JSON.stringify(expected);

  if (ok) { // Test #2
    const buses = {
      'central': { distance: 9, speed: 3 },
      'moose mountain': { distance: 40, speed: 10 },
    };

    const result = busTimes(buses);
    const expected = {'central': 3, 'moose mountain': 4};

    ok = JSON.stringify(result) === JSON.stringify(expected);
  }

  if (ok) { // Test #3
    const buses = {
      'pickadilly': { distance: 20, speed: 10 },
      'uptown': { distance: 11.7, speed: 9 },
      'central': { distance: 40, speed: 20 },
      'moose mountain': { distance: 21.6, speed: 8 },
    };

    const result = busTimes(buses);
    const expected = {'pickadilly': 2, 'uptown': 1.3, 'central': 2, 'moose mountain': 2.7};

    ok = JSON.stringify(result) === JSON.stringify(expected);
  }

  if (!ok) {
    throw new Error('test failed!');
  }
};

runTests();
