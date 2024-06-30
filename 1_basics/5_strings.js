// to add two strings 

// `` string interpolations : we make placeholders where we can 
// directly inject the variable 

// ${}  it is use to inject / add a variable

const name = "mansi"
const repoCount = 10

// console.log(`Hello my name is ${name} and my repo count 
    // is ${repoCount}`);

//Another way to declare string

const userName = new String('mansivk-hi-hello')

console.log(userName);
// (Here if we see on browser this give o/p as 'm','a'....etc
//     and it also give its key number or in other words its 
//     position no as m -0 , a -1,n-3,......and so on and we can 
// acess them by using [0]
// )

// console.log(userName[6]);

// If we console log on this we will get o/p as different methods 
// it can be prototype, uppercase,etc

// console.log(userName.__proto__);
// it gives blank objects as in this {}

// console.log(userName.length);
// console.log(userName.toUpperCase());

// console.log(userName.charAt(5));
//Here we have to give position number get the albhabet in return


// console.log(userName.indexOf('n'));
// Here we have to give alphabet get the position no  in return

const newString = userName.substring(0,3)
console.log(newString);
//  the last string 3 is not printed

const anotherString = userName.slice(-6,5)
console.log(anotherString);
//  Here we can give negative no 

// The trim method simply removes the starting and end space
const newStringOne = "      mansi       "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mansi.com/mansi%20kathale"
console.log(url.replace('%20', '-'))

// To check whether the string is available or not 
console.log(url.includes('hi'));

//  The below command refers to splitting the string into -(dash)
// Here we have converted them into array
console.log(userName.split('-'));












