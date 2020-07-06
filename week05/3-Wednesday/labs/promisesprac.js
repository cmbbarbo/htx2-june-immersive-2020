// let promise = new Promise((resolve, reject)=>{
    
//     if(false){
//         setTimeout(()=>{
//             console.log("success");
//             resolve("successful completion")
//         }, 1000)

//     }else{
//         reject("there was an error in the code")
//     }
    
   


// });



// promise.then((result)=>{
//     console.log(result);

// })

// promise.catch(error => {
//     console.error(error)
// })

// console.log("JS");


function setup(){
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(json =>{
        console.log(json);
    })
}

setup();