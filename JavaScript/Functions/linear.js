//Linear equation is calculated as follows: ax + b = c. Write a function which calculates
// value of a linear equation, solveLinEquation.
function linearEq(x,m,c) {  
    let y = m*x + c
    return y  
}
console.log(linearEq(3,5,7))