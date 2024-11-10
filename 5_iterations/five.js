// For Each Loop

// Simple for Each Loop
const coding = ["python", "java"]
coding.forEach (function (val){
    // console.log(val);
    
})




// for Each loop using call back function

coding.forEach ((item) => {
    // console.log(item);
    
})



// for Each Loop using function
function printMe(item) {
    // console.log(item);
    
}

// coding.forEach(printMe)


//  here we will not just use parameter item,
// we will also use index and array 
// in the below Example

// coding.forEach ((item, index, arr) =>{
//     console.log(item,index,arr);
    
// })




const myCoding = [
    {
        languageName: "cpp",
        languageFileName : "c++"
    },
    {
        languageName: "java",
        languageFileName : "java"

    }
]


myCoding.forEach((item) =>{
    console.log(item.languageName);
    
})