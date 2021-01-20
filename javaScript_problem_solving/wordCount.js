let speech = "I am become a web    developer. I will work hard achieve my goal";
let count = 0;
for (let i = 0; i < speech.length; i++) {
  let char = speech[i];
  if (char == " " && speech[i - 1] != " ") {
    count++;
  }
}
count++;
console.log(count);

function wordCount(speech) {
  let count = 0;
  for (let i = 0; i < speech.length; i++) {
    let char = speech[i];
    if (char == " " && speech[i - 1] != " ") {
      count++;
    }
  }
  count++;
  return count;
}
let result=wordCount('I am a student');
console.log(result);