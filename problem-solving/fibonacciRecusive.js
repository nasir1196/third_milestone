// using function with recursive method
function fibonacciRecursive(n) {
  if (n == 1) {
    return [0, 1];
  } else {
    let fibo = fibonacciRecursive(n - 1);
    let getFibo = fibo[n - 1] + fibo[n - 2];
    fibo.push(getFibo);
    return fibo;
  }
}
let output = fibonacciRecursive(10);
console.log(output);

// for method fibonacci
let fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

// while method fibonacci
let fibon = [0, 1];
let i = 2;
while (i <= 10) {
  fibon[i] = fibon[i - 1] + fibon[i - 2];
  i++;
}
console.log(fibon);

// Other Method fibonacci
let veryOld = 0;
let old = 1;
let new1 = 1;
for (let i = 0; i <= 10; i++) {
  console.log(veryOld);
  old = new1;
  new1 = old + veryOld;
  veryOld = old;
}
