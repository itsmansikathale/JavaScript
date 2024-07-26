let myDate = new Date()
console.log(myDate)

// will try to convert it into String
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON()) 
// console.log(myDate.toLocaleDateString()) 
// console.log(myDate.toLocaleTimeString()) 

// to check the type of date = Object
// console.log(typeof myDate)

// to declare specific date; 
// Note 
// Here the month starts from 0 = jan and so on.
// let myCreatedDate = new Date(2024,7,5 )
// let myCreatedDate = new Date(2024,7,5, 5,3)

// console.log(myCreatedDate.toDateString())

//Date with its time 
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("08-05-2024")
// console.log(myCreatedDate.toLocaleDateString())

// let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// this will return the time stamp in miliseconds

// console.log(myCreatedDate.getTime())
// this will show the difference between the timestramp

// to convert the time into seconds 
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth())

// console.log(newDate.getMonth() +1 )
// To get proper month

// console.log(newDate.getDay())
//  in this mon =1 , tue=2, wed=3 and so on 

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday:"short",
})

