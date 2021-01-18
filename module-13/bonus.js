var marks = [23, 54, 32, 63, 26, 95, 42, 35, 29];
for (let i = 0; i < marks.length; i++) {
    var element = marks[i];
    console.log(element);
}

let shop = [];
var j = 0;
for (let i = 1; i <= 20; i++) {
    shop.push('anythings' + i);
    j++;
}
console.log(shop);
console.log('operation', j);

function largestNumber(numbers) {
    var larger = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if (element > larger) {
            larger = element;
        }
    }
    return larger;
}
var numbers=[23, 54, 32, 63, 26, 95, 42, 35, 29];
numbers.push(102,203,307,499);
var output=largestNumber(numbers);
console.log("largest Number ",output);
