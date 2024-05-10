// Prefer not to use var
// Because of issue in block scope  and functional scope


const accId = 123;
let accCity = "pune";
var accEmail = "mk@gmail.com";
let accState;
// It will retrun Undefined as a output


console.log(accId);


 accCity= "nagpur";
 accEmail= "va@gmail.com";

 console.table([accCity,accEmail,accId,accState])
 

