function whileFactorial(n){
    let i = 1;
    let factor=1;
    while(i<=n){
       factor*=i;
        i++;
    }
    return factor;
}
let result = whileFactorial(10);
console.log(result);