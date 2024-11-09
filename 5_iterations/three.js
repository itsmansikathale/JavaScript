// for of  loop 

//The three.js topic is mostly Array Specific

// Adding Strings in the array
["", "", ""]

// Adding Object in the array 
[{}, {},{}]




// Syntax of for of loop
// for (const element of object) {
    
// }

// Example
const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}




// Second Example
// printing Independent String

const greetings  = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}




//Maps : It is similar to array but its in iteration.

//  Check How we can set value in the map.
//  Duplicate values nahi add kar sakte
// Unique value will be added. 
// And it will be in a sequential way .

const map = new Map()
map.set('IN', "India")
map.set('Fr', "France")


// map.set('Fr', "France")
// Duplicatation is not allowed .

// console.log(map);


// for of loop using map method ;


// here we are passing key and value in the below example.
for (const  [key, value] of map) {
    console.log(key, ':-' , value);
}



// for of loop in map using object 

const myObject = {
    'game1': 'NFS'
 

}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
}


// output is ;
// myObject is not iterable