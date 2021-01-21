
let depth = 60;
let animals = 0;
if (depth <= 10) {
  animals = depth * 50;
} else if (depth <= 20) {
  let first = 10 * 50;
  let remaining = depth - 10;
  let second = remaining * 100;
  animals = first + second;
} else if (depth <= 30) {
  let first = 10 * 50;
  let second = 10 * 100;
  let remaining = depth - 20;
  let third = remaining * 200;
  animals = first + second + third;
} else if (depth <= 40) {
  let first = 10 * 50;
  let second = 10 * 100;
  let third = 10 * 200;
  let remaining = depth - 30;
  let fourth = remaining * 300;
  animals = first + second + third + fourth;
} else {
  let first = 10 * 50;
  let second = 10 * 100;
  let third = 10 * 200;
  let fourth = 10 * 300;
  let remaining = depth - 40;
  let fifth = remaining * 400;
  animals = first + second + third + fourth + fifth;
}
console.log(animals);

console.log("================");

// using with function

function animalsCount(depth) {
  let animals = 0;
  if (depth <= 10) {
    animals = depth * 50;
  } else if (depth <= 20) {
    let first = 10 * 50;
    let remaining = depth - 10;
    let second = remaining * 100;
    animals = first + second;
  } else if (depth <= 30) {
    let first = 10 * 50;
    let second = 10 * 100;
    let remaining = depth - 20;
    let third = remaining * 200;
    animals = first + second + third;
  } else if (depth <= 40) {
    let first = 10 * 50;
    let second = 10 * 100;
    let third = 10 * 200;
    let remaining = depth - 30;
    let fourth = remaining * 300;
    animals = first + second + third + fourth;
  } else {
    let first = 10 * 50;
    let second = 10 * 100;
    let third = 10 * 200;
    let fourth = 10 * 300;
    let remaining = depth - 40;
    let fifth = remaining * 400;
    animals = first + second + third + fourth + fifth;
  }
  return animals;
}
let result = animalsCount(100);
console.log('Total Animals',result);