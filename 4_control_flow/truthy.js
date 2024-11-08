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


