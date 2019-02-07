"use strict"

let div = document.getElementById("button");

let button = document.createElement("button");

// let text = document.createTextNode("myButton");

// button.appendChild(text);

button.innerHTML = "This is my button"; 

div.appendChild(button);

document.getElementById("button").onclick = function () {
    console.log("Button was clicked")
}
