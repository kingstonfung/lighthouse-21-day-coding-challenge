/*
There's a new attraction at this year's town festival. The organizers have decided to bring in
several inflatable attractions, but they have no clue how to much blow them up. Each attraction
needs to be pumped to a precise volume to achieve maximum festival fun!

The attractions are each made up of a combination of several different shapes: cones, spheres and
prisms. For example, the giant inflatable duck is made up of two spheres (the body and head) and a
cone (the beak) 🦆.

Instructions
Each shape has a different calculation for determining volume, so we'll need to create a few
functions that will help us figure out the volume of the various inflatable attractions.

In this challenge, we'll need to implement four functions.

The first three will calculate the volume of the individual shapes:

sphereVolume()will calculate the volume of a sphere given a radius
coneVolume() will calculate the volume of a cone given a radius and a height
prismVolume() will calculate the volume of a prism given a height, a width, and a depth

The fourth function, totalVolume(), will receive an array containing the different shapes that make
up a single attraction. The totalVolume function should use the previous three functions to
calculate the total volume of an attraction.

Don't worry about getting the answers to the perfect precision: our tests will check to see that
you're within a correct range.

Examples
Input:
  const sphere = {
    type: 'sphere',
    radius: 2
  }

  sphereVolume(sphere.radius)
    
Output:
  33.5102

Input:
  const cone = {
    type: 'cone',
    radius: 3,
    height: 5
  }

  coneVolume(cone.radius, cone.height)
    
Output:
  47.12385

Input:
  const prism = {
    type: 'prism',
    height: 3,
    width: 4,
    depth: 5
  }

  prismVolume(prism.height, prism.width, prism.depth)
    
Output:
  60

Input:
  const largeSphere = {
    type: 'sphere',
    radius: 40
  }

  const smallSphere = {
    type: 'sphere',
    radius: 10
  }

  const cone = {
    type: 'cone',
    radius: 3,
    height: 5
  }

  const duck = [
    largeSphere,
    smallSphere,
    cone
  ]

  totalVolume(duck)
    
Output:
  272318.257
*/// Use the value below whenever you need the value of Pi

const PI = 3.14159 

const sphereVolume = radius => (4/ 3) * PI * Math.pow(radius, 3);

const coneVolume = (radius, height) => PI * Math.pow(radius, 2) * (height / 3);

const prismVolume = (height, width, depth) => height * width * depth;

const totalVolume = function (solids) {
  const totalVolumes = solids.map((shape) => {
    if (shape.type === 'sphere') return sphereVolume(shape.radius);

    if (shape.type === 'cone') return coneVolume(shape.radius, shape.height);

    if (shape.type === 'prism') return prismVolume(shape.height, shape.width, shape.depth);
  });

  return totalVolumes.reduce((accumulator, currentValue) => accumulator + currentValue);
}

const runTests = () => {
  let ok = true;
  
  const sphere = { type: 'sphere', radius: 2 };
  const result = sphereVolume(sphere.radius);
  ok = result > 33 && result < 34;

  if (ok) {
    const cone = { type: 'cone', radius: 3, height: 5 };
    const result = coneVolume(cone.radius, cone.height);
    ok = result > 47 && result < 48;
  }

  if (ok) {
    const prism = { type: 'prism', height: 3, width: 4, depth: 5 };
    const result = prismVolume(prism.height, prism.width, prism.depth);
    ok = result > 59 && result < 61;
  }

  if (ok) {
    const largeSphere = { type: 'sphere', radius: 40 };
    const smallSphere = { type: 'sphere', radius: 10 };
    const cone = { type: 'cone', radius: 3, height: 5 };
    const duck = [ largeSphere, smallSphere, cone ];
    const result = totalVolume(duck);
    ok = result > 272310 && result < 272320;
  }

  if (!ok) {
    throw new Error('test failed!');
  }
};

runTests();
