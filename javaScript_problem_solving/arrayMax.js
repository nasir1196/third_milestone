// Highest Number find out

let marks = [45, 56, 98, 34, 70, 64, 90, 97, 80, 99, 93];
let max = marks[0];

for (let i = 0; i < marks.length; i++) {
  let element = marks[i];
  if (element > max) {
    max = element;
  }
}
console.log("This number is a max number :", max);

// smallest Number find

let marks = [45, 56, 98, 34, 70, 64, 90, 97, 80, 99, 93];
let smallest = marks[0];

for (let i = 0; i < marks.length; i++) {
  let element = marks[i];
  if (element < smallest) {
    smallest = element;
  }
}
console.log("This number is a smallest number :", smallest);
