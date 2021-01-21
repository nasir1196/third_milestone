function factorial(num) {
  let factor = 1;
  for (let i = 1; i <= num; i++) {
    factor *= i;
  }
  return factor;
}
let result = factorial(10);
console.log(result);

// Recursive way to find the value

function factorialRecursive(n) {
//   if (n == 0) {
//     return 0;
//   }
  if (n == 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}
let result1 = factorialRecursive(5);
console.log(result1);
