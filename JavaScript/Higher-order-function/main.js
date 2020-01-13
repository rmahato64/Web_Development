class Counter{
    constructor(){
        this.count = 0;
        this.p=createP(''); 
    }
}


const companies = [
    {Name:'FirstCompany',category:'Social-media', start:2003, end:22007},
    {Name:'SecondCompany',category:'technology', start:2007, end:2009},
    {Name:'ThirdCompany',category:'drinks', start:1990, end:2011},
    {Name:'FourthCompany',category:'paints', start:1973, end:1999},
    {Name:'FifthCompany',category:'beverages', start:1993, end:2005},
    {Name:'sixthCompany',category:'drinks', start:1989, end:21997},
    {Name:'seventhCompany',category:'retailer', start:1803, end:1919},
    {Name:'eighthCompany',category:'food', start:1883, end:2019},
    {Name:'LastCompany',category:'auto', start:1991, end:2014}

]

const age = [23,33,12,45,32,18,20,31,37,27]
/* for(let i = 0; i<companies.length; i++){
    console.log(companies[i])
} */


//forEach
companies.forEach(function(entry){
 
    console.log(entry)
})


