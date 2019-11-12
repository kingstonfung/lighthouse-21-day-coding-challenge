/*
The citizens of Codeville seem pleased with all the upgrades you're making to the local
infrastructure. Next on your list to tackle is the air quality. You've decided that you want to
install air pollution sensors around the city to monitor air quality and identify problem areas.
We need to write the code for the sensors to trigger a special message when the air is too polluted.

Instructions
For this challenge we will implement a function called checkAir(), which will check a collection of
air samples. The function will take in two arguments. The first argument is an array of strings,
where each string represents a small air sample that is either clean or dirty. The second argument
is a number representing the highest acceptable amount of dirty samples. For example, a threshold
of 0.4 means that there must be less than 40% of total samples classified as dirty for our air to
be considered clean. Our function must return Polluted if there are too many dirty air samples,
or Clean if the proportion of dirty samples is below the threshold.

Examples
Input:
  const samples = [
    'clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'
  ];

  const threshold = 0.3;
    
Output:
  Polluted
*/

const checkAir = function (samples, threshold) {
  const dirtySamples = samples.filter(airSample => airSample === 'dirty');
  const ratio = dirtySamples.length / samples.length;
  
  if (ratio > threshold) return 'Polluted';

  return 'Clean';
}

const runTests = () => {
  let ok = true;

  // Test #1
  const samples = [
    'clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty',
  ];
  const threshold = 0.3
  const result = checkAir(samples, threshold);
  ok = result === 'Polluted';

  if (ok) {
    const samples = [
      'clean', 'dirty', 'dirty', 'dirty', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty',
    ];
    const threshold = 0.5;
    const result = checkAir(samples, threshold);
    ok = result === 'Polluted';
  }

  if (ok) {
    const samples = ['clean', 'clean', 'clean', 'clean', 'clean'];
    const threshold = 0.5;
    const result = checkAir(samples, threshold);
    ok = result === 'Clean';
  }

  if (!ok) {
    throw new Error('test failed!');
  }
};

runTests();
