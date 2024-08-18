// this keyword is used for the current context 
// this keyword talks about the current value 

const user = {
    username:"mansi",
    price: 100,
    welcomeMsg: function(){
        console.log(`${this.username} , welcome`);
        console.log(this)
    }

}

// user.welcomeMsg()
// user.username = "mani"
// // change its contexts
// user.welcomeMsg()

console.log(this)
// if we print this o/p is empty {} parenthesis

// if we type this inside inspect => console it will return 
// window

// pehle ke timme pe js sirf browser pe chalti thi isliye 
// wo window object ka use karti hai 

// Abhi to bun ki tarah aur bhi standalone softwares aa gaye hai 
// isliye  ye {} return karti hai

// IMP Concept  According to interviews


// browser ke andaar jo global object hain vo hai window object 
// jiske wajah se hum onclick jaise events ko perform karte hai 
// browser main


function one() {
    console.log(this);
    
}
one()
