let numberList = [12, 2, 4, 3, 2, 5, 4, 6, 5, 6, 5, 4, 3, 6, 4, 2, 5, 23];
let freshList = [];
for (let i = 0; i < numberList.length; i++) {
  let element = numberList[i];
  let index = freshList.indexOf(element);
  if (index == -1) {
    freshList.push(element);
  }
}
console.log(freshList);

function getDuplicate(list) {
  let newList = [];
  for (let i = 0; i < list.length; i++) {
    let element = list[i];
    let index = newList.indexOf(element);
    if (index == -1) {
      newList.push(element);
    }
  }
  return newList;
}
let result = getDuplicate([2, 3, 4, 3, 4, 32, 54, 3, 2, 3, 2, 3, 4, 5, 6, 6]);
console.log(result);
