function factorialIterative(num){
    var factor=1;
    for(var i=1; i<=num; i++){
        factor = factor*i;
    }
    return factor;
}
var result=factorialIterative(22);
console.log(result);