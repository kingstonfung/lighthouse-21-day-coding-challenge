/*
It's time to order the banners and flags for the festival, and you need to decide on the key colour
scheme.

You want to use colour theory to make sure the colours complement one another. To do so we'll need
to choose a main colour and use code to determine the best complementary colours.

Instructions
We'll complete a function festivalColours() that calculates the split complementary colours for a
given colour. We'll be working with a special colour system called HSL, which stands for Hue,
Saturation, and Lightness.

Here's an example of an HSL colour picker.

The function will receive an H(Hue) value, and must return an array of the values for the two split
complementary colours. The smaller number should be the first element, and the larger number should
be the second element.

You can take a peek at this website for the formula you'll need to use to calculate the split
complementary colours.

Examples
Input:
  const color1 = 100
    
Output:
  [250, 310]

Additional Notes:
  Split Complementary
  A split-complementary color scheme is a three-color combination that consists of a base color
  (H0) and two colors (H1 and H2) that are 150 degrees and 210 degrees apart from H0 respectively.

  formula: H1 = |(H0 + 150 degrees) - 360 degrees|
  formula: H2 = |(H0 + 210 degrees) - 360 degrees|
*/

const festivalColours = (color1) => {
  const calculation = (baseValue, degreeIncrement) => {
    let colorValue = baseValue + degreeIncrement;
    if (colorValue > 360) {
      colorValue = colorValue - 360;
    }

    return colorValue;
  }

  const h1 = calculation(color1, 150);
  const h2 = calculation(color1, 210);
  return [h1, h2];
}

const runTests = () => {
  let ok = true;

  const color1 = 100;
  const result = festivalColours(color1);
  const expected = [250, 310];
  ok = JSON.stringify(result) === JSON.stringify(expected);

  if (ok) {
    const color1 = 160;
    const result = festivalColours(color1);
    const expected = [310, 10];
    ok = JSON.stringify(result) === JSON.stringify(expected);
  }

  if (ok) {
    const color1 = 220;
    const result = festivalColours(color1);
    const expected = [10, 70];
    ok = JSON.stringify(result) === JSON.stringify(expected);
  }

  if (!ok) {
    throw new Error('test failed!');
  }
};

runTests();
