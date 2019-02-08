"use strict"

function firstString(string, number) {
    string = "String "; 
    number = 3;
    console.log(string.repeat(number)); 
}

firstString()

function secondString (string, number) {
    string = "Array "; 
    number = 5; 
    let makeArray = []; 

    for (let i = 0; i < number; i++) {
        makeArray.push(string); 
    } 
    // return makeArray;
    // console.log(makeArray);    
    thirdFunction(makeArray);
}

secondString()

function thirdFunction(makeArray) {
    console.log(makeArray);
}

thirdFunction()