// singleton : when we declare in literals
//  then singleton is no made

// but when its mede with contructors then it will 
// definately become singleton
// following is a way to declare object in construtor
//  Object.create

// Object literal
// In objects we often use key and values
// {} this is the object

// how to add symbol into keys 
// we use [] to work as a symbol
const sym = Symbol("hi")
const user= {
    name: "mansi",
     "full name": "Mansi Kathale",
     [sym]:"hi",
    "email": "mansi@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// ways to declare objects

// to access objects value
// console.log(user.name);
// console.log(user["email"]);
// console.log(user["full name"])
// console.log(user[sym]);

user.email= "mansikathale@gmail.com"

// to lock particular info
// Object.freeze(user)
// user.email= "mk@gmail.com"
// console.log(user);

// funtions adding in objects
user.greeting = function(){
    console.log("hello User");
}
user.greetingTwo = function(){
    // `` this is string interpulation
    console.log(`hello User, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());