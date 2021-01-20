let marks = [45, 56, 98, 34, 70, 64, 90, 97, 80, 99, 93];
let max = marks[0];

for (let i = 0; i < marks.length; i++) {
  let element = marks[i];
if (element > max) {
    max = element;
  }
}
console.log("This number is a max number :", max);
