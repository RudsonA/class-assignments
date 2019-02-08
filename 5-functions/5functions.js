"use strict"

function function1 () {
    let var2str = "Setting variable to string"; 
    console.log(var2str);
    function2()
}

let secondVar = "Setting my second variable";
function function2 () {
    // let secondVar = "Setting my second variable";
    console.log(secondVar);
    function3 (x);
    // return secondVar;
}

let x = 1
function function3 (x) {
    // let x = 1
    console.log(secondVar + " + " + x);
    function4(num);
}

let y = "This argument is more than 5 characters"
// let y = "less"
console.log(y.length);
let num = y.length;

function function4 (num) {
    if (num < 5) {
        console.log(true);
    } else {
        console.log(false);
    }
    function5 (num)
}
 
function function5 (num) {
    for (let i = 0; i < num ; i++) {
        let logString = "a";
        logString += " a ";
        console.log(logString);
        
    }
}

function1()

