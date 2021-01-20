let xNumber = 785;
let yNumber = 5560;
let zNumber = 8455;

let maxNumber = Math.max(xNumber, yNumber, zNumber);
console.log(maxNumber);

console.log("==================");

if (xNumber > yNumber) {
  if (xNumber > zNumber) {
    console.log("x Number is Bigger");
  } else {
    console.log("z number is bigger");
  }
} else {
  if (yNumber > zNumber) {
    console.log("y number is bigger");
  } else {
    console.log("z number is bigger");
  }
}
