/*
This is the Codeville Fall Festival, and nothing says fall more than pumpkin spice. At this year's
festival, there will be three ways for the people of Codeville to get their pumpkin spice fix:

Pumpkin pie
Pumpkin spice lattes
Pumpkin spice macarons
Instructions
Each item differs in both cost and the grams of pumpkin spice per serving. To help festival-goers
maximize their pumpkin spice consumption, help them determine the maximum amount of pumpkin spice
they can ingest with the amount of money they are bringing to the festival.

A slice of pumpkin pie costs $5 each, and include a whopping 30g of pumpkin spice
Pumpkin spice lattes cost $3 each, and include 15g of pumpkin spice
Pumpkin spice macarons cost $1 each, and include 3g of pumpkin spice

We need to write a function, pumpkinSpice(money) that will take in a number, or how much the
festival-goer has to spend on treats, and return an array with the 4 elements as outlined below:

The first element should represent how many slices of pumpkin pie the client can buy
The second element should represent how many pumpkin spice lattes the client can buy
The third element should represent how many pumpkin spice macarons the client can buy
The fourth element should represent how many grams of pumpkin spice the client will be buying

Our function should start by calculating how many slices of pumpkin pie we can buy. Then, we'll want
to use the remaining money to do the calculations for the lattes, followed lastly by the macarons.

Example Input:
  const money = 9
    
Example Output:
  [1, 1, 1, 48]
*/

const pumpkinSpice = (money) => {
  const pumpkinPie = { cost: 5, spiceIncluded: 30 };
  const pumpkinLatte = { cost: 3, spiceIncluded: 15 };
  const pumpkinMacarons = { cost: 1, spiceIncluded: 3 };
  const purchaseItem = (cost, cash) => {
    return {
      unit: Math.floor(cash / cost),
      leftover: cash % cost,
    };
  };

  let remainingBalance = money;
  let totalSpiceAmount = 0;
  const piePurchasePower = purchaseItem(pumpkinPie.cost, remainingBalance);
  remainingBalance = piePurchasePower.leftover;
  totalSpiceAmount += piePurchasePower.unit * pumpkinPie.spiceIncluded;

  const lattePurchasePower = purchaseItem(pumpkinLatte.cost, remainingBalance);
  remainingBalance = lattePurchasePower.leftover;
  totalSpiceAmount += lattePurchasePower.unit * pumpkinLatte.spiceIncluded;

  const macaronsPurchasePower = purchaseItem(pumpkinMacarons.cost, remainingBalance);
  remainingBalance = macaronsPurchasePower.leftover;
  totalSpiceAmount += macaronsPurchasePower.unit * pumpkinMacarons.spiceIncluded;

  return [
    piePurchasePower.unit,
    lattePurchasePower.unit,
    macaronsPurchasePower.unit,
    totalSpiceAmount,
  ];
}

const runTests = () => {
  let ok = true;

  const result = pumpkinSpice(9);
  const expected = [1, 1, 1, 48];
  ok = JSON.stringify(result) === JSON.stringify(expected);

  if (ok) {
    const result = pumpkinSpice(19);
    const expected = [3, 1, 1, 108];
    ok = JSON.stringify(result) === JSON.stringify(expected);
  }

  if (ok) {
    const result = pumpkinSpice(134);
    const expected = [26, 1, 1, 798];
    ok = JSON.stringify(result) === JSON.stringify(expected);
  }

  if (ok) {
    const result = pumpkinSpice(0);
    const expected = [0, 0, 0, 0];
    ok = JSON.stringify(result) === JSON.stringify(expected);
  }

  if (ok) {
    const result = pumpkinSpice(9.58);
    const expected = [1, 1, 1, 48];
    ok = JSON.stringify(result) === JSON.stringify(expected);
  }
  
  if (!ok) {
    throw new Error('test failed!');
  }
};

runTests();
