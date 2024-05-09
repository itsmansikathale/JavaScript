// Prefer not to use var
// Because of issue in block scope  and functional scope


const accId = 123;
let accCity = "pune";
var accEmail = "mk@gmail.com";
accState ;

console.log(accId);

 accId= 456;
 accCity= "nagpur";
 accEmail= "va@gmail.com";

 console.table([accCity,accEmail,accId, accState])
 

