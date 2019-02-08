"use strict"

function1()
function function1() {
    let var2str = "Setting variable to string";
    console.log(var2str);
    function2()
}

function function2() {
    let secondVar = "Setting my second variable";
    console.log(secondVar);
    let x = 1;
    function3(x);
    // return secondVar;
}

function function3(x) {
    // let x = 1
    console.log(secondVar + " + " + x);
    let y = "This argument is more than 5 characters"
    let num = y.length; 
    function4(num);
    console.log(num);
    
}

function function4(num) {
    // let y = "This argument is more than 5 characters"
    // let y = "less"
    console.log(y.length);
    // let num = y.length;

    if (num < 5) {
        console.log(true);
    } else {
        console.log(false);
    }
    function5(num)
}

function function5(num) {
    for (let i = 0; i < num; i++) {
        let logString = "a";
        logString += " a ";
        console.log(logString);

    }
}