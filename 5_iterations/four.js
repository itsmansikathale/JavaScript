// for in loop

// For" in loop using object  

const myObject = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);

    }



    // for in loop using Array

    

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming){
    // console.log(key);
    // Here it will pass the key  as the output
    // here the key start with 0 (Zero)


    // console.log(programming[key]);
    //  here it will pass the value as the output


}


// map using for in loop

const map = new Map()
map.set('In', "India")
map.set('Fr', "France")
map.set('In', "India")

for (const key in map) {
    // console.log(key);   
    // It will not return anything as a output
    // Because map cannot iterate duplicate values
}