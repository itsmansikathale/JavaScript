const score = 400
console.log(score)

// Only number is there in balance
const balance = new Number (20);
// console.log(balance)

//  Converting the number into string
// console.log(balance.toString().length)

// toFixed is a precision value that we mostly use in ecommerce  
// wesite for the calculation purpose
// console.log(balance.toFixed(2));

const otherName = 890.677
// console.log(otherName.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

// More different methods of numbers are
// If uou use console log here then u will get the number 
//  value according to the method in the following code 
Number.MAX_VALUE
Number.MIN_VALUE
Number.MAX_SAFE_INTEGER
Number.EPSILON

// ********************** Maths ***************************//
console.log(Math)
// this will send an object as a output 

// console.log(Math.abs(-4))
// this will convert the -ve no into +ve
//  +ve no will remain the same


// console.log(Math.round(4.7))
// console.log(Math.ceil(6.2))
// console.log(Math.floor(3.7))

console.log(Math.random())
// this will return value from 0 to 1 

console.log(Math.random()*10+1)

console.log(Math.floor(Math.random()* 10)+1)
// to avoid the no 0 in the floor we have added +1

const min = 10
const max = 30

console.log(Math.floor(Math.random() * (max-min +1)+ min )
// Here we have added min in the last to get the starting of 
// no with the minimum no 