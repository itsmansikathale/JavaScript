// Array is a object for storing a collection of multiple 
// items under a single variable name

// JS array are resizable

// mixing of different datatypes also possible 

// they are not associative arrays
// indexing starts from 0

// Js works on by making shallow copy is a copy whose 
// properties share the same reference(call by reference)

// changes in this will make changes in the 
// original object as well

// In arrays we can get access to prototype 
// And also we get the property named as length
// inside inspect
// nos => prototype => prototype => No prototype

// different ways to declare arrays
// 1)
// const arr = [0,3,2 ,8, "mansi" ]

// console.log(arr[0])

//  2)
// const cartoon = ["shinchan", "doreamon"]

//another way to declare array:here we can make use of keywords
//Note:we don't need to use to this[],can directly declare array 

// 3)
// const arr2 = new Array(1,2,3,4,5)
// console.log(arr[0])

// Array methods 
// 1) push():: this method will add values to the array
// arr2.push(7)
// console.log(arr2)

// 2) pop():: this will remove the last element from the array 
// Note : We don't need to give any value 
// arr2.pop()
// console.log(arr2)

// 3)unshift()::this will add a value in the beginning of the array 
// arr2.unshift(45)
// console.log(arr2)

// 4)shift():: it is similar to pop method
// arr2.shift()
// console.log(arr2)

// 5)includes:: this will check in the array that the value 
// entered is available or not,
// this will return boolean value
// console.log(arr2.includes(7))

// 6)indexOf::Checks if the value is available in array or not
// console.log(arr2.indexOf(3))

// 7)join:: In this arrays datatype is changed into strings
// const newArr = arr2.join()
// console.log(newArr)
// console.log(arr2)

// 8)slice :: It return copy of the sliced portion
// 9)splice :: It removes the portion whose index no we have
// added in the splice function --- line no 78
// console.log("A",arr2 )

// const mySlice = arr2.slice(2,4)
// console.log(mySlice);
// console.log("B" , arr2)

// const mySplice = arr2.splice(2,4)
// console.log("C", arr2)
// console.log(mySplice)

// To check more methods of array
// chrome - inspect - console - type arr = [1,2,3] - enter
// click prototype
//  You will more methods of arrays




// --------------------- Part 2 : ARRAY --------------------//


// in th below code we are using flash ([][])
// but this is not best practice
const nums = ["one", "two", "three"]
const cartoon = ["shinchan", "doreamon", "perman"]

// nums.push(cartoon)
// console.log(nums);
// console.log(cartoon);
// console.log(cartoon[3][1]);

// 10)concat:Combines two different arrays 
// returns new array without modification
const series = nums.concat(cartoon)
// console.log(series);

// this is mostly used 
// Another way to combine two arrays Is by using
// Spread Operator [...name ,...anothername]
// here we can easily combine 2 or more arrays

const all_series = [...nums,...cartoon]
// console.log(all_series);

// 11) flat; It combines subarray and a copy of new array
const arrOrg  = [1,2,3,[4,5,6],7,8,[9,0]]
const anotherArr2 = arrOrg.flat(Infinity)
console.log(anotherArr2);

//  12) isArray: checking that that is it an array or not
 console.log(Array.isArray("mansi"))

//  13)from :this will create individual array of each string
// Data type can be different as well
console.log(Array.from("mansi"))

// IMPORTANT
// this will return empty array 
// You have to specify them by key, value, strings 
console.log(Array.from({name:"mansi"}))

// 14) of : returns new array  from given array
let score1= 100
let score2= 200
let score3= 300
console.log(Array.of(score1,score2,score3))


