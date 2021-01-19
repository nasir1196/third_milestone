// let j = 1;
// let factorial = 1;
// for (let i = 1; i < 10; i++) {
//   factorial * i;
//   j++;
// }
// console.log(factorial, " Factorials");
// console.log(j, " Times Operations");

function factorial(n) {
  let factor = 1;
  for (let i = 1; i <= n; i++) {
    factor = factor * i;
  }
  return factor;
}

let result = factorial(5);
console.log(result);
