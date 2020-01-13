//Higher order function
//function that takes or return other function
/* 
const square = (n) => {
    return n*n 
      }      //this is an arrow function and can be also written as follows
function square (n){
    return n*n
} */
/* const cube = (callback,n) =>{
    return callback(n) * n

}
console.log(cube(square,3))

const one = (a) => a **4
const two = (b) => b **3

const polynomial = (one, two,a,b,n)=>{
    return one(a) + two(b) + n
}
console.log(polynomial(one,two,2, 3,6))
 

const numbers = [1, 2, 4];

let sum =0
numbers.forEach(function(any){
    
     sum += any
    
})
console.log(sum)
*/


// map, reduce, filter, some, every, find

let numbers= [1,2,4,6,81,3,5,9,11]
const square = numbers.map(function(item){
    return (item * item)
})
console.log(square)

const products = [
    {product:'apple',price:3,type:'fruits'},
    {product:'coke',price:2,type:'drinks'},
    {product:'potato',price:4,type:'vegetable'},
]
const types = products.map(function(item){
    return item.price
})
console.log('prices are',types)














