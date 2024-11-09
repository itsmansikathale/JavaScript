// while loop and do while loop

// in while loop we have to initialize the value ,
// e.g let index = 0


let index = 0
while (index <= 20) {
    // console.log(`Value of index is ${index}`);
    index = index + 3   
}


// While condition using Array Loop
// Checking it with array length
let myArray = ["One","Two","Three"]

let arr = 0
while (arr < myArray.length) {
    // console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}



// Do while Loop 

// do jo hain vo bolega ke pehle kaam kya hain.
// aur fir uske baad hum condition check karenge.

// Syntax
// do {
    
// } while (condition);


// Example
let score = 7
do {
    console.log(`Score is ${score}`);
    score++
    
} while (score <= 5);



// here if we add score = 7;
//which is more than that value in the above example. 

//  the output is ;
// Score is 7