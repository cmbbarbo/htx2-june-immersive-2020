const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

<<<<<<< HEAD
var under35 = ages.filter(function(num){
    return num <= 35;
});

var evenNums = ages.filter(function(num){
    return num % 2 == 0;
});
var add5 = ages.filter(function(num){
    return num + 5;
});

console.log(under35);
console.log(evenNums);
console.log(add5);

// for(let i = 0;i < companies.length;i++){
//     console.log(companies[i]);
// }
// console.log("_______________________")
// companies.forEach(function(currentObj){
//     console.log(currentObj);
// });

// console.log("_______________________")
// console.log("_______________________")
// for(let obj of companies){
//     console.log(obj);
// }

// var newCompanies = companies.map(function(currentObj){
//     currentObj.end = 2020;
//     return currentObj;
// });

// console.log(newCompanies);
=======


// Filter out all ages greater than 35 
// var ageFilter = ages.filter((age)=> age<=35)

var greeting = ()=>"hello world"

var result = greeting();

console.log(result)


var ageFilter = ages.filter(age => age <= 35);

console.log(ageFilter)

// console.log(ageFilter)

// Filter all even numbers

var evenNumbers = ages.filter(age => age %2 == 0)

console.log(evenNumbers)

/// map through ages array and return a new ages array where 5 is added to each element.

var newAges = ages.map(function(arrVal){

    return arrVal + 5
})


// var newAges = ages.map(arrVAl => arrVAl +5)
//map through the companies array and change the end date to 2020

    var newComp = companies.map(function(companyObj){

            companyObj.end = 2020;

            return companyObj;
    })


    //console.log(newComp)


//using a for loop print each object of companies array 

for(var i = 0; i<companies.length; i++){

    //console.log(companies[i])
}

//using forEach print each object of companies array

companies.forEach(function(index){
    //console.log(index)
})
>>>>>>> f24067dc7a4c96269fffc1e9ab0fff07da658bb1
