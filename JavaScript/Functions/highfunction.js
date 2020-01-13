const product = [
    {name:'banana',price:3},
    {name:'Apple',price:4},
    {name:'avacado',price:null},
    {name:'coffee',price:10},
    {name:'tea',price:8},
    {name:'avacado',price:' '}
]
let sum = 0

const prices = product.map(function(item){
   return sum += item.price
    
})
console.log(sum)


//find: it looks for and item and return the first item
const countries=['Finland','Sweeden','Norwar','Switzerland']



