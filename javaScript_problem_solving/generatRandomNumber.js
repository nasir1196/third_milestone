let num = 2.5;
let result1 = Math.ceil(num);
let result2 = Math.floor(num);
let result3 = Math.round(num);
console.log(result3);

console.log('====================================');

for (let i = 0; i < 10; i++) {
  let randomNumber = Math.random() * 6;
  let output = Math.round(randomNumber);
  console.log(output);
}
