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
const user = {
    name: "mansi",
    "full name": "Mansi Kathale",
    [sym]: "hi",
    "email": "mansi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// ways to declare objects

// to access objects value
// console.log(user.name);
// console.log(user["email"]);
// console.log(user["full name"])
// console.log(user[sym]);

user.email = "mansikathale@gmail.com"

// to lock particular info
// Object.freeze(user)
// user.email= "mk@gmail.com"
// console.log(user);

// funtions adding in objects
user.greeting = function () {
    console.log("hello User");
}
user.greetingTwo = function () {
    // `` this is string interpulation
    // console.log(`hello User, ${this.name}`);
}

// console.log(user.greeting());
// console.log(user.greetingTwo());

//------------- Objects(Singleton & Constructor) ------------//
// () its a parenthesis

// it is a singleton object 
// const user = new Object ()

// it is a non singleton object
const hiUser = {}

user.id = "123"
user.name = "abc"
user.isLoggedIn = false

// console.log(user);


//  Objects under Objects
const user1 = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "mansi",
            lastname: "kathale"
        }

    }
}

// console.log(user1.fullname.userfullname);


const obj1 ={1:"a" , 2:"b"}
const obj2 ={3:"a" , 4:"b"}
const obj4 ={5:"a" , 6:"b"}

// combining two objects

// const obj3 =Object.assign({}, obj1, obj2, obj4)
// creating an empty object so that the value of all objects
//  are not stored in the first object i.e obj1

const obj3 ={...obj1, ...obj2}
// * 90% time we make use this syntax where we are using 
// spread Operator
// console.log(obj3);


// - when values come from databases

const users = [
    {
        id: 1, 
        email: "a@gmail.com"
    },
    {
        id: 1, 
        email: "a@gmail.com"
    },
    
    {
        id: 1, 
        email: "a@gmail.com"
    },
    
    {
        id: 1, 
        email: "a@gmail.com"
    },
    
    {
        id: 1, 
        email: "a@gmail.com"
    },
    
    {
        id: 1, 
        email: "a@gmail.com"
    },
]   
 users[1].email
 console.log(hiUser);

 console.log(Object.keys(hiUser));
 console.log(Object.values(hiUser));
 console.log(Object.entries(hiUser));
//  it results array inside array


// to check if the object has this property or not
// when value crashed
console.log(hiUser.hasOwnProperty('isLoggedIn'));