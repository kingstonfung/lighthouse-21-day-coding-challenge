/*
The local transit system has been too expensive for too long! To encourage more people to use the
bus, you are restructuring ticket pricing. From now on, passengers will be charged a dynamic price,
which will depend on the number of people on the bus (peak times have higher fare!) and the distance
that the passenger travels.

Instructions
We'll be implementing a function called dynamicPricing(), which will return the cost of a particular
trip given the number of people on the bus, and the distance traveled by the passenger. This
function receives two numbers: numberOfPeople and distanceTraveled.

The base ticket price is $1. Passengers will be charged $0.25 per kilometer. If there are 30 or
more people on the bus, there should be $0.25 added to the total.

The value that your functions returns must be a string, formatted as such: $4.25. Your values must
be shown to two decimal points of precision.

Examples
Input:

  const numberOfPeople = 15
  const distanceTraveled = 10

Output:
  $3.50


Input:
    const numberOfPeople = 35
    const distanceTraveled = 5

Output:
  $2.50
*/

const STARTING_PRICE = 1.00;
const COST_PER_KM = 0.25;
const HIGH_CAPACITY_SURCHARGE = 0.25;
const HIGH_CAPACITY_HEAD_COUNT = 30;

const dynamicPricing = (numberOfPeople = 0, distanceTraveled = 0) => {
  let totalPrice = STARTING_PRICE;
  const costOfDistance = distanceTraveled * COST_PER_KM;

  if (numberOfPeople >= HIGH_CAPACITY_HEAD_COUNT) totalPrice += HIGH_CAPACITY_SURCHARGE;

  totalPrice = totalPrice + costOfDistance;

  return `$${totalPrice.toFixed(2)}`;
}

const runTests = () => {
  let ok = true;

  // Test #1
  const result = dynamicPricing(15, 10);
  ok = result === '$3.50';

  if (ok) { // Test #2
    const result = dynamicPricing(30, 19);
    ok = result === '$6.00';
  }

  if (ok) { // Test #3
    const result = dynamicPricing(0, 0);
    ok = result === '$1.00';
  }

  if (ok) { // Test #3
    const result = dynamicPricing();
    ok = result === '$1.00';
  }

  if (!ok) {
    throw new Error('test failed!');
  }
};

runTests();
