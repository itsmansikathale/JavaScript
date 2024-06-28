// Its a dynamically typed language
// How the data is stored in memory and how its going to be access
//  and manage is datatype
// There are only two types of Datatype that are available 

// 1) Primitive : These are call by value
// 7 Types  : 
// String , Number, Boolean, null, undefined, BigInt

const score = 100
const scoreValue = 100.6

const isLoggedIn = false
const outsideTemp = null 
let userEmail;  
// e.g is undefined 

const id = Symbol('456')
const anotherId = Symbol('456')
// the both of them are not equal if we console.log this

console.log(id === anotherId);

const BigNumber = 76587648656876743587n

// 2) Non- Primitive: Reference That gives the
//  direct reference to the memory

//  Array, Objects, Functions

// Array
const heros = ["shaktiman", "naagraj", "doga"]

// Objects
let myObj = {
    name: "mansi",       
    age: 20,
}

// Function
const myFunction = function(){
    console.log("Hello World");
}


// To check Which datatype its of use 
console.log(typeof myFunction) ;