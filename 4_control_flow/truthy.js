// Truthy And Falsy Value

// const userEmail = "m@gmail.com"

// const userEmail = ""
// ite an empty string so it is considered as false


const userEmail = []
//in this case it is true and we got the op as got user mail
// Dont check array like this

if (userEmail) {
    console.log("Got user Email");
    
}else {
    console.log("Dont't have user Email");
    
}


// Falsy Value List
// false , 0, -0(Specifically for interviews) ,
// BigInt 0n ,  "", null, undefined, NaN
 

//Other than that all the other values are truthy true value






// truthy values
//"0"(inside string if it has 0 then is considered as true).

// 'false' (inside '' or "" value is false then its a 
// truthy value)

// " " (space between the string is also truthy value)

// [] (empty array is also truthy value)

// {} (object array is also truthy value)

// function() {} (empty function is also truthy value)




// Properly Checking that the array is empty 
// const userEmail = []

if(userEmail.length === 0) {
    console.log("Array is Empty");
}

// Checking for the empty Object 
const emptyObj ={}
// Object O should be capital
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}


// Some More Conditions Checking it from the chrome console
//  directly

// false == 0 
// is also true


// false == ''
// is also true

// 0 == ''
// is also true








// Nullish Coalescing Operator (??): null undefined
// It is mostly associated with only null and undefined

let val1;
val1 = 5 ?? 10
// here we get o/p as 5 .
// we r making use of them because we will make use of 
// database that we will gonna create on mongodb or 
// appwrite or somewhere else.

//  So for that we cannt directly get the response 
// we have to pass two values for that,

//  So because of that there is a chance that it will
//  return null , undefined or didnt respond .

//In that case ur whole code structure can get into trouble.

//For those cases this operator is created or in use.


// val1 = null ?? 10 
// returns 10 here in this case.
// agar null value aata hai to vo safety check karta hai
// kyunki null ke basis pe maybe program to hai vo run
// na kare.


// val1 = undefined ?? 15 
//  it will return 15

val1 = undefined ?? 20 ?? 30
// it will return 20 
//  as this is the first value after undefined
console.log(val1);








//  Ternary Operator 
// Syntax : 
// condition ? true : false

// Example
iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("less tahn 80") : 
console.log("more than 80")

