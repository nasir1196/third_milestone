function getArraySum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    sum = sum + element;
  }
  return sum;
}
let result=getArraySum([25,56,74,809,94,34,43]);
console.log(result);

let numbers=[12,12,12,12,12];
let output=getArraySum(numbers);
console.log(output);
