function getVowel(str) {
  let vowelsCount = 0;
//   let vowels = ["a", "e", "i", "o", "u"];
  for (let char of str) {
    if (str.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}
let count = [
  "I am become a web developer in 6 month and explore with programming hero team",
];
let output = getVowel(count);
console.log(output);
// console.log(getVowel());
