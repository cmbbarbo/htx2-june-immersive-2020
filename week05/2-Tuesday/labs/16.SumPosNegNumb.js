
/*
Create a function sumPlusMinus() that takes an array and sums 
separately positive and negative numbers

it should return an object like this:

{
    plus: 74, // sum of all positive numbers
    minus: -54 // sum of all negative numbers
}

*/


// var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// // Write code here
// // var sumPlusMinus = nums => {
// //     let posNumsSum = nums.filter(num => num > 0).reduce((acc, value) => acc + value);
// //     let negNumsSum = nums.filter(num => num < 0).reduce((acc, value) => acc + value);

// //     return {plus: posNumsSum, minus: negNumsSum};
// //}

// let sumPlusMinus = arr =>  (
//      arr.reduce((acc,value)=>(
//         {
//             plus: value > 0 ? acc.plus + value : acc.plus,
//             minus: value < 0 ? acc.minus + value : acc.minus
//         })
//     ,{plus: 0, minus: 0}))


// console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}  


// function Person(name, age, gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }


// Person.prototype.greeting = function(){
//     console.log(this.name);
// }

// let michael = new Person("michael", 21, "M");
// michael.greeting();



class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greeting(){
        console.log(this.name);
    }
}

let michael = new Person("michael", 21, "M");
michael.greeting();


