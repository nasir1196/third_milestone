// function isPrime(n) {
//   for (let i = 2; i <= n - 1; i++) {
//     if (n % i == 0) {
//       return "This Number is not a Prime Number";
//     }
//   }
//   return "This Number is a Prime Number";
// }

// let result = isPrime(7);
// console.log(result);

function checkPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return "This Number is not a Prime Number";
    }
  }
  return "This Number is a Prime Number";
}

let checkResult = checkPrime(17);
console.log(checkResult);
