var friendsAge=[26,25,24,28,29];
var rubel=friendsAge.indexOf(25);
friendsAge[1]=27;
// console.log(friendsAge);

friendsAge.push(33);
friendsAge.push(38);
console.log(friendsAge.length);
friendsAge.pop();
friendsAge.unshift(38);
friendsAge.unshift(40);
friendsAge.shift();
friendsAge.sort();
friendsAge.reverse();
console.log(friendsAge);