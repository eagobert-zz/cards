
//Create a const named "cardsEl" to define where I want to place my new content
const cardsEl = document.getElementById("cards");

cardsEl.innerHTML = `<h3>Input Text Here: </h3>`;

//Create a text area in javascript
let textarea = document.createElement("textarea")
textarea.rows = "1";
textarea.cols = "20";
textarea.innerHTML = "";
cardsEl.appendChild(textarea)


//Create a button in javascript
let button = document.createElement("button");
button.innerHTML = "Create";
cardsEl.appendChild(button);

