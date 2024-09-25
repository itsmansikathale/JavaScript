// this keyword is used for refering the current context 
// this keyword talks about the current value 

const user = {
    username:"mansi",
    price: 100,
    welcomeMsg: function(){
        console.log(`${this.username} , welcome`);
        console.log(this)
    }

}

// user.welcomeMsg()
// user.username = "mani"
// // change its contexts
// user.welcomeMsg()

console.log(this)
// if we print this o/p is empty {} parenthesis

// if we type this inside inspect => console it will return 
// window

// pehle ke timme pe js sirf browser pe chalti thi isliye 
// wo window object ka use karti hai 

// Abhi to bun ki tarah aur bhi standalone softwares aa gaye hai 
// isliye  ye {} return karti hai

// IMP Concept  According to interviews


// browser ke andaar jo global object hain vo hai window object 
// jiske wajah se hum onclick jaise events ko perform karte hai 
// browser main


// function one() {
//     let username = "mansi"
//     console.log(this); 
// o/p : undefined
//     // it will not print the actual o/p inside function 
//     // as this will not print objects inside functions
// }
// one()


// const two  = function() {
//     let username = "mansi"
//     console.log(this.username);
// }
// two()
// returns undefined again


// Ways to declare functions especially arrow function

// if we remove function from the above stmt and add
//  => 
// this will become arrow function
// const two  = () => {
//     let username = "mansi"
//     console.log(this.username);
    // if we completely print this the o/p is {}
    // if we remove username o/p is undefined
    // this can be used in arrow function as well
// }

// two()

// types / ways to declare arrow function
//1) basic arrow function 
// or explicit return
// const addTwo= (num1, num2) => {
//  return num1 + num2   
// }
// console.log(addTwo(10,20))

// when we make use of parenthesis {} then we have
// to make use of return keyword 

// 2) Implicit arrow function : 
// Implicit matlab Maan liya 
// here we remove the return keyword 
//  and and add them in same line

// const addTwo = (num1, num2) => num1 + num2
// or 
// const addTwo = (num1, num2) => (num1 + num2)

// running this with objects
 const addTwo = (num1, num2) => ({username:'mansi'})
console.log(addTwo(10,20))
//In both the above cases we dont need to use return keyword

