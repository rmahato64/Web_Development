/* //Declare a function fullName and it print out your full name.
function fulName(){
    console.log("My full name is Rakesh mahato")
}
fulName()

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(fName,lName){
    let fullname = `my name is ${fName} ${lName}`
    return fullname
}
console.log(fullName('Mahato','Rakesh'))

//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumber(a,b){
    let sum = a + b
    return sum
}
console.log(addNumber('Sum of 4 and 8 is ', 4,8))
//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaRec(l,b){
    let area = l * b
    return 'area of rectangle is '+ area

}
console.log(areaRec(2,4))

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). 
//Write a function which calculates perimeterOfRectangle.
function recPeri(l,w){
    return 2 * (l + w)
}
console.log(recPeri(4,6))

//A volume of a rectangular prism is calculated as follows: volume = length x width x height. 
//Write a function which calculates volumeOfRectPrism.
function volumn(ll,ww,hh){
    return ll * ww * hh
}
console.log(volumn(2,2,2))

//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function circleArea(r){
    return Math.PI * r **2
}
console.log(circleArea(2))
//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circleCir(r){
    return Math.PI * r * 2
}
console.log(circleCir(4))
//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(m ,v){
    let den = m/v
    return den
}
console.log(density(40,20 ))
//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. 
//Write a function which calculates a speed of a moving object, speed.
function speed(d,t){
    return d/t
}
console.log(`the speed of car is  ${speed(100,2)}`)
//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const weigh = (mass) => mass * 9.8
console.log(weigh(10))
//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. 
//Write a function which convert oC to oF convertCelciusToFahrenheit.
const degreeToFaren = (celcius) =>{
    let faren = (celcius * 9/5) + 32
    return `${celcius} degree celcius is equal to ${faren}`
}
console.log(degreeToFaren(30))

/* Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
Check if a person is underweight, normal, overweight or obese based the information given below.
The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */

/* function BMI(weight,height){
    let bmi = weight / (height*height)
    if(bmi<18.5){
        return (`your bmi is ${bmi} so you are underweight`)
        //console.log(`your bmi is ${bmi} so you are underweight`)
    }
    else if(bmi>=18.5 || bmi<=24.9){
        //console.log(`your bmi is ${bmi} so you are normal`)
        return (`your bmi is ${bmi} so you are normal`)
    }
    else if(bmi >=24 || bmi <= 29.9){
        //console.log(`your bmi is ${bmi} so you are overweight`)
        return (`your bmi is ${bmi} so you are oberweight`)
        
    }
    else{
        //console.log(`your bmi is ${bmi} so you are obese`)
        return (`your bmi is ${bmi} so you are obese`)

    }
    
}
console.log(BMI(80,2)) */

//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
//let month = window.prompt("what is the month you want to check").toLocaleLowerCase


/* function checkmonth(month){
    if(month == 'January' || month == 'december' || month == 'february'){
        return 'Winter'

    }
    else if (month == 'march' || month == 'april' || month == 'may'){
        return 'spring'
    }
    else if (month == 'june' || month == 'july' || month == 'august'){
        return 'summer'
    }
    else if (month == 'september' || month == 'october' || month == 'november'){
        return 'autumn'
    }
}
console.log(checkmonth('January'))

/* Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out 
using Math.max method.
console.log(findMax(0, 10, 5));
10;
console.log(findMax(0, -10, -2));
0; */

/* function findMax(a,b,c) {
    if(a>b && a>c){
        return a
    }
    else if (b>a && b>c) {
        return b
    }
    else if (c>a && c>b){
        return c
    }
}

console.log(findMax(-100,10,-30))  */


//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates 
//value or values of a quadratic equation, solveQuadEquation.

/* function quadratic(a,b,c) {
    let root = Math.sqrt((b ** 2)-4*a*c)
    let plus = (-b + root)/(2*a)
    let minus = (-b - root)/(2*a)
    return plus + ',' + minus
}
console.log(quadratic(2,9,6)) */


//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array
/* function printArray(numbers = [1,2,3,4,5]) {
    
    for(let i = 0; i< numbers.length; i++){
        
        console.log(numbers[i])
        
    }
    return numbers
    
}
console.log(printArray()) */

//Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
/* function capitalizeArray(name = ['Rakesh','Tekendra','Saroj']) {
    for(let i = 0; i<name.length; i++){
        console.log(name[i].toUpperCase())
    }
    return name  
}
capitalizeArray() */

//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item




//Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item


//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
/* let sum = 0;
function sumOfNumbers(number){
    for (let i = 0; i <= number; i++) {
        sum += i
        
    }
    return sum
}
console.log(sumOfNumbers(10)) */


//Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
/* let sum = 0;
function sumOfNumbers(number){
    for (let i = 0; i <= number; i++) {
        if(i %2 != 0){
            sum += i

        }
        
    }
    return sum
}
console.log(sumOfNumbers(10)) */

//Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
/* let sum = 0;
function sumOfNumbers(number){
    for (let i = 0; i <= number; i++) {
        if(i %2 == 0){
            sum += i

        }
        
    }
    return sum
}
console.log(sumOfNumbers(10)) */

/* function hiddenVariables() {
    console.log(arguments)
}
hiddenVariables() */

//Declare a function name swapValues. This function swaps value of x to y.
var a ;
var b ;

/* function swap(a,b) {
    b = [a, a = b][0]
    
    return  a + ',' + b
}
console.log(swap(1,2)) */

/* const swapValue = (a,b) =>{
    b = [a, a = b][0]
    return  a + ',' + b
} 
console.log(swapValue(10,20)) */

//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
/* var a = [3,5,7,8]
function reverseArray(input){
    let empty = new Array;
    for(let i = input.length-1; i >= 0; i-- ){
        empty.push(input[i])
    }
    return empty

}
console.log(reverseArray(a))
//console.log(a.reverse())       // this is reversing array method from JavaScript
console.log(a) */

//const array = [1,2,3,"taco"];

/* function reversee(array){
  return array.map((item,idx) => array[array.length-1-idx])
}
console.log(reversee(array)) */

/* 
const reversing = (array) =>{
    return array.map((item,idx) => array[array.length-1-idx])
}

console.log(reversing(array))

 */

//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
/* let sum = 0;
function sumOfNumbers(number){
    for(let i=0; i<=number; i++){
        sum +=i

    }
    return sum
}
console.log(sumOfNumbers(1000)) */

 //Write a functon which takes any number of arguments and return the sum of the arguments

/* function sum1() {
    let s = 0;
    for (let i=0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
 
console.log(sum1(1,4,2, 3, 4,10, 20));  */

//Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

/* function sumOdd(number){
    let sum = 0;
    for(let i = 1; i<=number; i++){
        if(i % 2 !== 0){
            sum +=i

        }

    }
    return sum
}

console.log(sumOdd(100)) */

//Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

/* function sumeven(number){
    let sum = 0;
    for(let i = 1; i<=number; i++){
        if(i % 2 == 0){
            sum +=i

        }

    }
    return sum
}

console.log(sumOdd(100)) */



//Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

/* function counter(number){
    let empty = []
    for (let i = 0; i <= number; i++) {
        if (i%2==0) {
            empty.push(i)
            
        }
        
        
    }
    return empty.length
}
console.log(counter(100)) */

//this can also be done by following method

/* function counter(number){
    let odd = 0;
    let even = 0;
    for (let i = 1; i <= number; i++) {
        if (i%2==0) {
            even++   
        }
        else{
            odd++
        }
  
    }
    return `the number of even is ${even} and the number of off is ${odd}`
}
console.log(counter(100)) */

//Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. 
//The function return the hexadecimal number.

/* function ramdomHexa(){
    let character = '0123456789abcdefABCDEF'
    let hatch = '#'
    for(let i =0; i<6; i++){
        //id +=character[i]
        hatch +=character[Math.floor(Math.random()*character.length)]       //character[i] here i = Math.floor(Math.random()*character.length)
    }
    return hatch
}
console.log(ramdomHexa()) */

//Declare a function name userIdGenerator. When this function is called it generates seven character id. 
//The function return the id.
/* let character = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
function idGenerator(){
    let id = ''
    
    for(let i = 0; i<7; i++){
        //id +=character[i]
        id += character[Math.floor(Math.random()*character.length)]    //character[i] here i = Math.floor(Math.random()*character.length)
        
    }
    return id
}
console.log(idGenerator()) */

//Modify question number n . Declare a function name userIdGeneratedByUser. 
//It doesn’t take any parameter but it takes two inputs using prompt(). 
//One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.


//Write a function name rgbColorGenerator and it generates rgb colors.
/*  const rgb = ()=>{
    let r = Math.floor(Math.random()*256),
     g = Math.floor(Math.random()*256),
     b = Math.floor(Math.random()*256)
    return `(${r}, ${g},${b} )`

}

console.log(rgb())  */

//Write a function generateColors which can generate any number of hexa or rgb colors.

/* function ramdomHexa(){
    let character = '0123456789abcdefABCDEF'
    let hatch = '#'
    for(let i =0; i<6; i++){
        //id +=character[i]
        hatch +=character[Math.floor(Math.random()*character.length)]       //character[i] here i = Math.floor(Math.random()*character.length)
    }
    return hatch
} */
/*  function rgb(){
    let r = Math.floor(Math.random()*256),
     g = Math.floor(Math.random()*256),
     b = Math.floor(Math.random()*256)
    return `rgb(${r}, ${g},${b} )`

}
console.log(rgb()) */

/* function colors (rgb,number){
    let colorArray = []
    for(let i = 0; i<number; i++){
        colorArray.push(rgb())

    }
    return colorArray
}
console.log(colors(rgb,3))
 */

//Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray(){

}

//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

/* function factorial(n){
    for(let i=n-1; i>=1;i--) {
      n*=i
       
    }
    return n
}
console.log(factorial(6)) */


//Call your function isEmpty, it takes a parameter and it checks if it is empty or not
//Call your function sum, it takes any number of arguments and it returns the sum
/* function sum(){
    let som = 0;
    for(let i= 0; i<=arguments.length; i++){
        som +=i
    }
    return som
}

console.log(sum(1,2,3,4)) */

//Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. 
//Check if all the array items are number types. If not give return reasonable feedback.
/* let number = ['somthing',11,8,3,'rakesh']
function sumOfArraysItems(number){
    let sum = 0
    for(let i=0; i<number.length; i++){
        if(typeof number[i] != 'number'){
            console.log (`${number[i]} , this is not a number`)
        }
        else{
            sum +=number[i]

        }
    }
    return `The sum of the rest number in array is ${sum}`
    
}
console.log(sumOfArraysItems(number))  */

//Write a function called average, it takes an array parameter and returns the average of the items. 
//Check if all the array items are number types. If not give return reasonable feedback.

 
/* let number = ['somthing',11,8,3,'rakesh',6,8,'saroj']
function averageOfArraysItems(number){
    let average = 0
    let count = 0
    
    for(let i=0; i<number.length; i++){
        if(typeof number[i] != 'number'){
           count++
            console.log (`${number[i]} , this is not a number`)
            
        }
        
        else{
            average +=number[i]
        }
        
    }
    let ave = average / (number.length - count)
    return ave
     
    
}
console.log(averageOfArraysItems(number))  */


//Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. 
//If the array length is less than five it return 'item not found'
 function modifyArray(arr) {
     //let arra= []
     let modified='';
     if(arr.length < 5){
        return `Item not found`
     }
     else{
        modified= arr[4].toUpperCase()
        arr.splice(4,1,modified)

        return arr
     }

 }
 console.log(modifyArray(['Avocado', 'Tomato','Mango', 'Lemon','Hello']))
 console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
 console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));
 
 

 


