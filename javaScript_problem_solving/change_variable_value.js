var a = 5;
var b = 8;
console.log("before swap a = ", a, ", b = ", b);
let exchange = a;
a = b;
b = exchange;
console.log("after swap a = ", a, ", b = ", b);

let x = 7;
let y = 8;
x = x + y;
y = x - y;
x = x - y;
console.log("x = ", x, ", y = ", y);

let p=12;
let q=15;
[p,q]=[q,p];
console.log("p = ",p,', q = ',q);

