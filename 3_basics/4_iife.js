// IIFE
// Immediately Invoked Function Expression 

// after writing the function execute it immediately

(function one () {
    // named 
    console.log(`db connected`);
    
}) ();

// first parenthesis is for writing the function definition
// second parenthesis id for its execution

// Very specific ans according to interview
// Global scope ke polution ko hatane ke liye humne iffe
// ka use kiya hai

//  if we want to add one more function so before that we 
// have endup this function with semicolon ;

(function two(){
    console.log(`Two DB Connected`);
}) ();

((name) => {
    console.log(`Hi ${name}`);
    // if we want to add name iife  
})('mansi')