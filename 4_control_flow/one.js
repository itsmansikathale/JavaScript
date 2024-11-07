// Control flow / logic flow 
//  We are making use of these stmt because we dont want that 
// all the unnecessary code should also work.

// Note : single = is an assignment Operator


// Control Statement
// 1 ) if

// if (condition) {
    
// }

//  Yaha par jo if stmt hai wo true hona chahiye
// if (condition= true ){
//     // Agar aisa hua to hi Statement chalenge 
// }



// if (condition = false ) {
//      // if its not true then the code will not execute 
// }
// Example

// const isUserLoggedIn = true

// if (isUserLoggedIn) {
//     // iske andar jo koi bhi stmt hoga vo execute hoga
// }
// There are some  comparison Operators
{/* < less than
> Greater than 
<= Less than equal to
>= Greater than equal to
== Equal to
! NOt Equal to {/* if (3 != 2) */}
// === This will check type 


// const  temp = 10
// if(temp === 10) {
//     console.log("less than 50");
    
// } else{
//     console.log("greater than 50");
    
// }


// Concept related to Scope

// const score = 200

// if (score > 100) {
//     const power = "fly"
//  yaha pe agar const ke jagah pe var hoga to problem dega.
//  is liye yaha pe sirf const ya let ka hi use karein.
// var ye global variable hai is liye ye out of scope bhi run karega .
//  aur ye ek best practice nahi hai for coding
    // console.log(`User power : ${power}`);

    
    // yaha tak to sara code thik se chalega 
        //  problem tab start hogi jab hum iss code niche 
// diye gaye scoope ke bahar print karne ki koshish karenge
// }

//  har bar jab bhi {} ye lagta hain to ek alag scope 
// count hota hain.
// console.log(`User power : ${power}`);
//  error dikhayenga ke power is not defined 



// Shorthand Notation
// the above is an implicit scope : 
// Notes
// Yaha pe maan liya hain maine ki ye scope hain.
// Ye  sirf ek line main he execute hota hain.
// Important to add semicolon at the end.
// const balance = 1000
// if (balance > 500) console.log("bal");
// we can add multiple console log after that ,
// with the help of comma [,]

// if (balance > 500) console.log("bal"), 
// console.log("bal2");
// this method is not recommended 
// Aisa code company me nahi chalega .
//  and ye ek best practice bhi nahi hain. 




// Nesting  
// It is used for checking multiple conditions
// 2 or 3 conditions can be there 

// const  balance = 2000
// if (balance < 1000) {
//     console.log("less than 500");
// }
//hum yaha pe dusre conditions ko check nahi karna chahte.
// yaha pe hume sirf else nahi lagana hai.
//  to isi ke liye hum else if condiiton ka use karte hai
// } else if (balance < 750){
    // console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// }else{
// ye condition or code to definately chalega hi chalega
//     console.log("less than 3550");
// }

// Another Example of nested condition

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard & 2==2){
    console.log("Allow all students to buy the course")
}

//  && this is AND symbol .
//  which is used for checking multiple conditions.
//  if any of the condition is false .
// then it will not execute the code.