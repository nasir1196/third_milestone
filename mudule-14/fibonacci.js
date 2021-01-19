/*fibo[2] = fibo[2 - 1] + fibo[2 - 2];
fibo[3] = fibo[3 - 1] + fibo[3 - 2];
fibo[4] = fibo[4 - 1] + fibo[4 - 2];
fibo[5] = fibo[5 - 1] + fibo[5 - 2];
fibo[6] = fibo[6 - 1] + fibo[6 - 2];
fibo[7] = fibo[7 - 1] + fibo[6 - 2];
fibo[8] = fibo[8 - 1] + fibo[6 - 2];
fibo[9] = fibo[9 - 1] + fibo[6 - 2];
fibo[10] = fibo[10 - 1] + fibo[6 - 2];
fibo[i] = fibo[i - 1] + fibo[6 - 2];
fibo[n] = fibo[n - 1] + fibo[6 - 2];
fibo[x] = fibo[x - 1] + fibo[6 - 2];
fibo[y] = fibo[y - 1] + fibo[6 - 2];*/

// let fibo = [0, 1];
// for (let i = 2; i <= 10; i++) {
//   fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

// let fibonacci = [0, 1];
// for (let i = 2; i <= 15; i++) {
//   fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }
// console.log(fibonacci);

// function fibonacciSeries(n) {
//   let fibo = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//   }
//   return fibo;
// }
// let result = fibonacciSeries(20);
// console.log(result);

function fibonacciSeriesWhile(n) {
  let fibo = [0, 1];
  let i = 2;
  while (i <= n) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    i++;
  }
  return fibo;
}
let result = fibonacciSeriesWhile(20);
console.log(result);
