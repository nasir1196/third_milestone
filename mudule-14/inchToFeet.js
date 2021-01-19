function inchToFeet(inch) {
  var feet = inch / 12;
  return feet;
}
var allNumbers = [288, 389, 435, 265];
var firstNumber = inchToFeet(allNumbers[0]);
var secondNumber = inchToFeet(allNumbers[1]);
var thirdNumber = inchToFeet(allNumbers[2]);
var fourthNumber = inchToFeet(allNumbers[3]);
console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);
console.log(fourthNumber);
