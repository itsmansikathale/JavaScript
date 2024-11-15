//  Reduce method 

//  reduce method using function


const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval){

    //Here acc = accumelator 
    // currval = Current Value
    // console.log(`acc: ${acc} and currval : ${currval}`);
    // return acc + currval
// }, 1)
//  here 1 is the starting value that we are giving to accumelator
//  here we're just understading reduce in simple way 




//  Reduce Method using Arrow Function
// Imp: We will mostly make use of this code

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)




console.log(myTotal);

const shoppingCart = [
    {
        itemName : "Js course",
        price: 2599
    },
    {
        itemName : "Web Development",
        price: 7999
    },
    {
        itemName : "Mobile Development",
        price: 9599
    },
]

//  Here we're adding the total amount
const amt = shoppingCart.reduce((acc, item) =>
    acc + item.price, 0)
console.log(amt);
