"Use Strict"

let inputElement = document.querySelector("#userInput");

let typeText = document.createElement("input");

typeText.type = "text";

let buttonElement = document.createElement("button");

buttonElement.innerHTML = "Input Button"

inputElement.appendChild(typeText);

inputElement.appendChild(buttonElement);

// let buttonClicked = function () {
//     console.log(typeText.value);
// }

// inputElement.addEventListener("click", buttonClicked);

buttonElement.classList.add("buttonClass"); 

inputElement.addEventListener("click", event => {
    if (event.target.className === "buttonClass") {
        console.log(typeText.value);
    }
})

// buttonElement.addEventListener("click", buttonClicked);