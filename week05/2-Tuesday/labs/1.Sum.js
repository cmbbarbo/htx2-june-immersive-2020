// Create a function sum() that will sum all arguments passed to it.
// Quantity of the arguments is unknown.

// var sum = (...args) => {
//     let total = 0;

//     total = args.reduce((acc, elem) => acc + elem);
    
//     console.log(total);
// }
// sum(1,3);
// sum(10, 20, 5);

let arr1 = [1, 4, 7];
let arr2 = [...arr1];

arr2.push(99);
console.log(arr1);
console.log(arr2);



