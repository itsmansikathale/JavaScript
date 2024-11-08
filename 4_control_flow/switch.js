// This is the basic syntax of switch statement
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



// const month = 11
const month = "dec"
// as we have aded the string in the dec month
// 

switch (month) {
    case 1:
        console.log("January");
        
        break;
    case 2:
        console.log("February");
        
        break;
    case 3:
        console.log("March");
        
        break;
    case 4:
        console.log("April");
        
        break;
    case 5:
        console.log("May");
        
        break;
    case 6:
        console.log("June");
        
        break;
    case 7:
        console.log("July");
        
        break;
    case 8:
        console.log("August");
        
        break;
    case 9:
        console.log("September");
        
        break;
    case 10:
        console.log("October");
        
        break;
    case 11:
        console.log("November");
        
        break;
    case "dec":
        console.log("December");
        
        break;

    default:
        console.log("Default Case Match");
        
        break;
}

// In this if any condition does not work then the , 
// default stmt will definitely work.

// Note :
// ek baar jaha pe bhi ye case match ho jata hain uske baad 
// ka pura ka pura code run karvata hain.
// accept default

// After