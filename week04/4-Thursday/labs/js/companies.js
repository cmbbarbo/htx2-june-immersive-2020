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