"use strict"

function function1 () {
    let var2str = "Setting variable to string"; 
    console.log(var2str);
}

function function2 () {
    let secondVar = "Setting my second variable";
    console.log(secondVar);
    return secondVar;
}

let x = 1
function function3 (x) {
    // let x = 1
    console.log(function2() + " + " + x);
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
}
 
function function5 (num) {
    for (let i = 0; i < num ; i++) {
        let logString = "a";
        logString += " a ";
        console.log(logString);
        
    }
}

function1()
function2()
function3(x)
function4(num)
function5(num)