// script.js
const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    display.textContent = '0';
}

function deleteDigit() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
}

function appendDigit(digit) {
    currentInput += digit;
    display.textContent = previousInput + ' ' + operator + ' ' + currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && op === '-') {
        currentInput = '-';
        display.textContent = currentInput;
        return;
    }

    if (currentInput === '' && previousInput !== '') {
        operator = op;
        display.textContent = previousInput + ' ' + operator;
        return;
    }

    if (currentInput !== '' && previousInput !== '') {
        calculate();
    }

    operator = op;
    previousInput = currentInput;
    currentInput = '';
    display.textContent = previousInput + ' ' + operator;
}

function calculate() {
    if (currentInput === '' || previousInput === '' || operator === '') return;

    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    display.textContent = result;
    currentInput = result.toString();
    previousInput = '';
    operator = '';
}
