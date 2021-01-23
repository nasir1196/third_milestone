function fibonacciRecurtion(num) {
  //stopping condition
  if (num == 0) {
    return [1];
  }
  if (num == 1) {
    return [1, 1];
  }
  //Recursive condition
  var fibo = fibonacciRecurtion(num - 1);
  var nextFibo = fibo[num - 1] + fibo[num - 2];
  fibo.push(nextFibo);
  return fibo;
}
var result = fibonacciRecurtion(22);
console.log(result);
