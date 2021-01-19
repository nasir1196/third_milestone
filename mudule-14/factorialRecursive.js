function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1); // when using recursive method then the function call self as per as. like as: 1!=1*1, 2!=1*2, 3!=1*2*3, 4!=1*2*3*4, 5!=1*2*3*4*5 when calculate way to recursive method !5=(5-1)!*5; !6=(6-1)!*6; !7=(7-1)!*7; !8=(8-1)!*8; !n=(n-1)!*n; !x=(x-1)!*x;
  }
}
let result = factorial(50);
console.log(result);
