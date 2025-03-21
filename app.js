let container = document.querySelector(".container");
let text = [
    "A", "computer", "coder,", "also", "known", "as", "a", "programmer",
    "or", "software", "developer,", "crafts", "instructions", "code", "in",
    "various", "programming", "languages", "to", "enable", "computers", "and",
    "software", "to", "perform", "specific", "tasks,", "from", "simple",
    "operations", "to", "complex", "applications."
];


container.innerHTML += `<div class="text">${text.join(" ")}</div>`;

let correctWords = 0;
let incorrectWords = 0;

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) { 
        event.preventDefault();

        let inputField = document.querySelector(".data");
        let inputData = inputField.value.trim();

        if (text.length > 0) {
            if (text[0] === inputData) {
                correctWords++;
            } else {
                incorrectWords++;
            }
            text.shift(); 
            updateTextDisplay();
        }

        inputField.value = "";

    }
});

function updateTextDisplay() {
    let displayElement = document.querySelector(".text");

    if (text.length > 0) {
        displayElement.innerHTML = text.join(" ");
    } else {
        displayElement.innerHTML = "Completed!";
        setTimeout(result, 2000); 
    }
}

function result() {
    let container2 = document.querySelector(".container2");

    if (container2) {
        container2.innerHTML = `<div class="result">
            ✅ Correct Words: ${correctWords} <br>
            ❌ Incorrect Words: ${incorrectWords}
        </div>`;
    }
}
