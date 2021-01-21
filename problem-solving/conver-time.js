// let minute = 5;
// let second = 60;
// let result1 = second * minute;
// console.log(result1);

// second to minute convert
function convertSecondToMinute(second) {
  let minute = 60;
  let output1 = second / minute;
  return output1;
}
let result1 = convertSecondToMinute(500);
console.log("Second to Minute: ", result1);

// Minute to second convert
function convertMinuteToSecond(minute) {
  let second = 60;
  let output2 = second * minute;
  return output2;
}
let result2 = convertMinuteToSecond(60);
console.log("Minute to Second: ", result2);

// second to hour convert
function convertSecondToHour(second) {
  let minute = 60;
  let hour = 60;
  let output3 = second / minute / hour;
  return output3;
}
let result3 = convertSecondToHour(3300);
console.log("Second to Hour: ", result3);

// Hour to second convert
function convertHourToSecond(hour) {
  let second = 60;
  let minute = 60;
  let output4 = second * minute * hour;
  return output4;
}
let result4 = convertHourToSecond(24);
console.log("Hour to Second: ", result4);

// Minute to hour convert
function convertMinuteToHour(minute) {
  let hour = 60;
  let output5 = minute / hour;
  return output5;
}
let result5 = convertMinuteToHour(500);
console.log("Minute to Hour: ", result5);

// Hour to Minute convert
function convertHourToMinute(hour) {
  let minute = 60;
  let output6 = minute * hour;
  return output6;
}
let result6 = convertHourToMinute(24);
console.log("Hour to Minute: ", result6);
