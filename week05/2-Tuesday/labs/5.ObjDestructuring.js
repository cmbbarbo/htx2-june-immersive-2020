// ***Object Destructuring
/* 
Declare mult() function that will multiply values of the x,y,z 
fields of the passed object
*/
var obj = {
    x: 5,
    y: 20,
    z: 3
}

mult = (obj) => {
    var{x,y,z} = obj;
    return x * y * z;
}
console.log(mult(obj));
//300


/*
Create Person() function that will destructure each person object.
Sample result:
{n: "Mike", c: "Spain", a: 23, p:100}

If input object doesn't have postsQuantitiy field it should get default value 0.
*/

let person = obj => {
    var {name: n,info: {},postsQuantity: p} = obj;
    console.log(`name ${name}, info: `)
    
}
var person1 = {
    name: "Mike",
    info: {
        country: "Spain",
        age: 23
    },
    postsQuantitiy: 100
}

var person2 = {
    name: "Alice",
    info: {
        country: "Italy",
        age: 25
    }
}

console.log(person(person1));

