// {} this curly braces is called as scope

// If  this {} comes with if-else stmt or with functions then we 
// call it as scope of that particular function

// please avoid var variable in scope

// dont consider Objects in the scope

// the below stmts are not scope
// let a = 10
// const b = 20
//  c = 30

// this is called as global scope
//value that we wrote in this scope is available in global scope
// var c= 300

// this is called as block  scope
//value that we wrote in this is not avaliable outside this scope
// if (true){
//     let a = 10
//     const b = 20
//      var c = 30
// }

// console.log(a);
// console.log(b);
// console.log(c);


// Example 2
let a =300
if(true){
    let a=10
    const b=20
    // console.log("INNER ", a);
    
}

console.log(a);


// note
// if go to website -> inspect -> console
//  here the scope is different 

// and if we check it through node in the terminal its different


// Nested Scope 

function one(){
    const username = "mansi"

    function two(){
     const website = "google"
    //  console.log(username);
    }
//    console.log(website);
// as the code run line by line there is no execution of two()
   two()
}

one()

// whenvever u create a new function inside a function then 
// they make another stack or scope


// Example 3 
// cope with if else statement 

if (true) {
    const username = "mansi"
    if(username ==="mansi"){
        const website =" google"
        // console.log(username + website);
        // this will run successfully
        
    }
    // console.log(website);
    // this will throw error beacuse its outside the scope
    
}
// console.log(username);
// this will throw error as this is outside the scope



// --------------------- Interesting ----------------------------
console.log(addOne(10));

function addOne(num){
    return num + 1
}


// here we have hoisted it 
// by adding the const variable
// we cannt get the o/p of this as this will not work
addTwo(5)
const addTwo = function(num){
    return num + 2
}
