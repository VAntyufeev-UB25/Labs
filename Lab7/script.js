let currentInput = "0";
let previousInput = "";
let operation = null;
let shouldResetDisplay = false;
let memoryValue = 0;

const displayElement = document.getElementById("display");

function updateDisplay() {

    if (currentInput.length > 10) {
        displayElement.style.fontSize = "24px";
    } else {
        displayElement.style.fontSize = "36px";
    }
    displayElement.value = currentInput;
}

function appendNumber(num) {
    if (currentInput === "0" && num !== "." || shouldResetDisplay) {
        currentInput = num;
        shouldResetDisplay = false;
    } else {
        // Запрет на две точки
        if (num === "." && currentInput.includes(".")) return;
        currentInput += num;
    }
    updateDisplay();
}

function clearAll() {
    currentInput = "0";
    previousInput = "";
    operation = null;
    shouldResetDisplay = false;
    updateDisplay();
}

function backspace() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = "0";
    }
    updateDisplay();
}

function toggleSign() {
    if (currentInput !== "0") {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }
}

function setOperation(op) {
    if (operation !== null && !shouldResetDisplay) {
        calculate();
    }
    previousInput = currentInput;
    operation = op;
    shouldResetDisplay = true;
}

function calculate() {
    if (!operation || previousInput === "") return;

    let a = parseFloat(previousInput);
    let b = parseFloat(currentInput);
    let result = 0;

    switch (operation) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': 
            if (b === 0) {
                currentInput = "Ошибка";
                updateDisplay();
                return;
            }
            result = a / b; 
            break;
    }


    currentInput = parseFloat(result.toFixed(10)).toString();
    operation = null;
    previousInput = "";
    shouldResetDisplay = true;
    updateDisplay();
}

function sqrt() {
    let num = parseFloat(currentInput);
    if (num < 0) {
        currentInput = "Ошибка";
    } else {
        currentInput = Math.sqrt(num).toString();
    }
    shouldResetDisplay = true;
    updateDisplay();
}

function percent() {
    let num = parseFloat(currentInput);
    // Процент от числа (просто делим на 100)
    currentInput = (num / 100).toString();
    shouldResetDisplay = true;
    updateDisplay();
}

// Функции памяти
function memory(action) {
    let num = parseFloat(currentInput);
    if (action === 'plus') {
        memoryValue += num;
    } else if (action === 'minus') {
        memoryValue -= num;
    }
    shouldResetDisplay = true;
}


document.addEventListener("keydown", function(event) {
    if (event.key >= "0" && event.key <= "9") {
        appendNumber(event.key);
    } else if (event.key === ".") {
        appendNumber(".");
    } else if (event.key === "+") {
        setOperation("+");
    } else if (event.key === "-") {
        setOperation("-");
    } else if (event.key === "*") {
        setOperation("*");
    } else if (event.key === "/") {
        event.preventDefault(); 
        setOperation("/");
    } else if (event.key === "Enter" || event.key === "=") {
        event.preventDefault();
        calculate();
    } else if (event.key === "Backspace") {
        backspace();
    } else if (event.key === "Escape") {
        clearAll();
    }
});