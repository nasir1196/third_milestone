function reverseString(str){
    let reverse="";
    for(let i=0; i<str.length; i++){
        let char=str[i];
        reverse=char+reverse;
    }
    return reverse;
}
let result=reverseString('i am nasir');
console.log(result);

// free code camp
// method one 
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

// method two 
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');