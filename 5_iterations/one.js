// Loops or Iterations



// for Loop
// Structure / syntax ;

// i = 0 ; is initializing the value 
// this is not again executed as its already initialized.

//i < array.length ;here it is checking for conditions.

// index++ ; increasing the value 
//  note the ++ is run after console log or ,after
// executing the condition and it will iterate

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// //    block scope hain ye  
// }


// Example
for (let i = 0; i <= 10; i++) {
    const element = i;

    if (element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);    
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
// console.log(`Inner loop ${j} and inner loop ${i}`);
// console.log(i + '*' + j + '=' + i*j);

    
  }
    
}


let myArray = [ "1", "2", "3"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}




// 2 Important keyword 

// break and continue


for (let index = 1; index <= 20; index++) {
    if(index ==8){
        console.log(`Detected 8`);
        break
        
    }
    console.log(`Value of i is ${index}`);
    
    
}



// Continue : 
// it skips the iteration for once and then it will 
// continue to execute.
//  it says ek baar maaf kardo 
// ek iterat
for (let index = 1; index <= 20; index++) {
    if(index ==8){
        console.log(`Detected 8`);
       continue
        
    }
    console.log(`Value of i is ${index}`);
    
    
}



