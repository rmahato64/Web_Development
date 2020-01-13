/* const now = new Date;
const months = now.getMonth() +1;
console.log(now)
console.log(months) */


/* const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 100,
    location: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`;         //this here referes to person object can also be written as - person.firstname
    }
  };
  person.firstName = 'rakesh'
  person.country = 'nepal'
console.log(person.getFullName())  
console.log(person) */


//Create an empty object called dog

//const dog = {}
//console.log(dog)

//Print the the dog object on the console
//console.log(dog)
//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
/* const dog = {
    name:'doggy',
    legs:4,
    color:'black-white',
    age:2,

    bark: function () {
        return `woof woof`
    }

}
console.log(dog)
//Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.bark()) */

//Set new properties the dog object: breed, getDogInfo
//dog.breed= 'german'
//dog.getdoginfo='doginfo'

//Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, 
//totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description 
//and the same for expenses.

const personAccount = {
    firstName:'Rakesh', 
    lastName : 'Mahato',
    incomes : 15000, 
    expenses : 6000,

}
//Count logged in users,count users having greater than equal to 50 points from the following object.
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };

for(let key in users){
    console.log(`${key} : ${users[Thomas[key]]}`)
}


  const key = Object.keys(users)
  //console.log(key.length)
  const userCopy = Object.assign({},users)
  //console.log(userCopy)
  //console.log(Object.values(users))
 // console.log(Object.entries(users))
  let score = users.Alex.points
  console.log(score)
 /*  let count=0;
  for(let i=1;i<=key.length;i++){
      if(score>=50){
          console.log(count++)

      }
      
  } */



