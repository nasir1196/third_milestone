function isLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}
let thisYear = isLeapYear(2017);
if (thisYear == true) {
  console.log(thisYear, "This Year Is A Leap Year");
} else {
  console.log(thisYear, "This Year Is Not A Leap Year");
}

