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


// ----------------------------//------------------------------

// Memory Allocation
// There are two types of memory 
// 1) Stack Memory : In all Primitive types we use stack .
// It  gives copy of the variable that we have declared in memory.

let myName = "mansi"
let anothername = myName

anothername = "manu"

console.log(myName);
console.log(anothername);


// 2) Heap Memory  : In all Non -primitive types we use heap .
// It gives direct reference of the original value that we have
//created  in memory.


let mansi = {
   id :1,
    email: "mansi@gmail.com",
}

let manu = mansi
manu.id = 2

// Here if we want to update the value we use  . (dot)