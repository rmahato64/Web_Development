function sum1() {
    let s = 0;
    for (let i=0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
 
console.log(sum1(1,4,2, 3, 4,10, 20));