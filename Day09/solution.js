/*
As Mayor, you want one of your legacies to be bettering street design enough to improve
traffic flow and reduce congestion. You've decided to start by installing special sensors
on some streets to monitor how often cars pass by, and track their speeds.

Instructions
Complete the function, carPassing(cars, speed), that takes in an array of car objects,
and the speed of a car as it passes the sensor. This function should create a new object
with with a property called speed, and another property called time and add it to the cars
array. We can retrieve the current time, for setting the time property, by using the
Date.now() function, which is built into JavaScript!

Our function should return an array that includes all of the elements in cars as well as
our new element.

Examples
Input:
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38
    
Output:
[
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  },
  {
    time: 1568431216417,
    speed: 38
  }
]
*/
const carPassing = (cars, speed) => {
  const newCarEntry = {
    time: Date.now(),
    speed,
  }

  const newCarsList = [
    ...cars,
    newCarEntry
 ];

  return newCarsList;
}

const runTests = () => {
  // Mock the Date.now() method with staic answers:
  Date._original_now = Date.now;
  Date.now = () => 1234567890;

  let ok = true;

  const cars = [
    { time: 1568329654807, speed: 40 },
    { time: 1568329821632, speed: 42 },
    { time: 1568331115463, speed: 35 },
  ];
  const speed = 38;
  const expected = [
    { time: 1568329654807, speed: 40 },
    { time: 1568329821632, speed: 42 },
    { time: 1568331115463, speed: 35 },
    { time: 1234567890, speed: 38 },
  ];

  const result = carPassing(cars, speed);
  ok = JSON.stringify(result) === JSON.stringify(expected);

  if (ok) {
    const cars = [];
    const speed = 100;
    const expected = [{ time: 1234567890, speed: 100 }];
    const result = carPassing(cars, speed);

    console.log(result);
    ok = JSON.stringify(result) === JSON.stringify(expected);
  }

  if (!ok) {
    throw new Error('test failed!');
  }

  // Restore mocked method, and delete old reference.
  Date.now = Date._original_now;
  delete Date._original_now;
};

runTests();
