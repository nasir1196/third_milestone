// function factorialRecursion(num) {
//   if (num == 0) {
//     return 1;
//   }

//   var factor = factorialRecursio(num - 1);
//   var nextFactor = num * factor;
//   return nextFactor;
// }
// var result = factorialRecursion(5);
// console.log(result);

function factorialRecursion(num) {
  if (num == 0) {
    return 1;
  }

  return num * factorialRecursion(num - 1);
}
var result = factorialRecursion(5);
console.log(result);
