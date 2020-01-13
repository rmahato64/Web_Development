let oldCar = {
    make: 'Toyota',
    model: 'Tercel',
    year: '1996',
    Honda:{
        Mali:2010,
        Shape:'Sedaan'

    }
  };
  
  for (let key in oldCar) {
    console.log(`${key} --> ${oldCar[key]}`);
  }

  let str = 'Turn the page';

for (let index in str) {
  //console.log(`Index of ${str[index]}: ${index}`);
}

let name = 'RakeshMahato'

for(let element in oldCar){
    console.log(element)
    console.log(`Index of ${oldCar[element]}: ${element}`)
}