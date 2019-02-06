"use strict"

let div = document.getElementById("button");

let button = document.createElement("button");

// div.innerHTML = "This is my button"; 

let text = document.createTextNode("myButton");

button.appendChild(text);

div.appendChild(button);

// On click has to be set to equally a function. 
document.getElementById("button").onclick = function () {
    console.log("Button was clicked")
}