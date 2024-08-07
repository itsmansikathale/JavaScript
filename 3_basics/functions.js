// Functions working
//comprase The code that you have written in a package,
// you can use it anywhere you want to copy
// how to write {a function 

// ----------------------- IMPORTANT ----------------//
// After adding this function 
// myName is a reference
//myName() :whenever we add parenthesis then it will execute code

function myName() {

    console.log("m");
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("i");
}

// if we dont add parenthesis () this will not
//  execute its just a reference
// myName()

// here number1 & number2 are called as parameters(any datatype)
function addTwoNumber(number1, number2) {
    // console.log(number1 + number2);
}

// 2) another way to declare functions
// rule : after return if you want to print some o/p
// then will not work 

function addTwoNumber(number1, number2) {
    let result = number1 + number2
    //    console.log("hello");
    //    return result            
    //    console.log("Hi");
    // return number1 + number2
}

// when you call functions they are called as arguments
const result = addTwoNumber(3, 5)

// console.log("Result :" , result);

// diferent ways to declare  values

// after adding sam this will be the defaukt value 
//  here after if stmt will not work 
//whenever its changed then it will be overwrited automatically
function loginUserMsg(username ="sam" ) {
    // if (username === undefined) {

    // we make use of ! not to show that there is no value 
    // bacause we cannt directly define undefined here 
    // if we do that then it will not go to the if statement
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("mansi"))

// if we dont pass any value then its o/p is undefined
// console.log(loginUserMsg())







 //-----------------------------------------------//  
// ... is a rest operator
 function calculateCartPrice ( val1, val2,...num1) {
    return num1
 }

//  console.log(calculateCartPrice(200,900,790,5000,1000))


//  how to use the object and call them in function
const user = {
    username:"mansi",
    price: 200
}

function handleObject (anyObject){
    console.log(`Username is ${anyObject.username} and price is 
        ${anyObject.price} `)
    }

    // handleObject (user)

    // directly passing the objects using functions
    handleObject ({
        username :"harry",
        price: 399
    })

    // Passing array using functions
    const myArray = [100,200,300,400,500]
    function returnSecondValue(getArray){
        return getArray[1]
    }

    // console.log(returnSecondValue(myArray));

// we can directly add array in functions
    console.log(returnSecondValue([200,320,860]));