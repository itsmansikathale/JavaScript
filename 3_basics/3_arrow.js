// this keyword is used for the current context 

const user = {
    username:"mansi",
    price: 100,
    welcomeMsg: function(){
        console.log(`${this.username} , welcome`);
        
    }

}

user.welcomeMsg()
user.username = "mani"
// change its contexts
user.welcomeMsg()
