// map Method: 

const myNums = [1,2,4,5,7]

// const newNums = myNums.map((num) => {return num +10 })
//  here we can add 10 without adding scope ,
// and in that case u dont need to make use of return
// statement



//  Chaining: 
//  Here we are leaning about chaining
// We can make use of 2-3 methods together.
// like e.g .map() .map() .filter()


 
const newNums = myNums
.map((num) => num * 10)
//it will pass the value of output in the ,
// new map method
.map((num) => num + 2)
.filter((num) => num >=10)
console.log(newNums);
