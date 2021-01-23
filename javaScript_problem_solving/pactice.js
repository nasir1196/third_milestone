var string2 = [5,4,7,9];
function longestString(array) {
  var result = "";
  for (var i = 0; i < array.length; i++) {
    var currentItem = array[i];
    if (currentItem > result) {
      result = currentItem;
    }
  }
  return result;
}

console.log(longestString(string2));