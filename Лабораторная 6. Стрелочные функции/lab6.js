const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


const calculator = (operator, a, b) => {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "Ошибка: некорректный оператор";
    }
};

let calc = calculator("+", 1, 4)

document.getElementById('calculate').innerText = "Калькулятор: " + calc;

let age = prompt("Сколько Вам лет?", 18);

let welcome = (age < 18) ?
    () => document.getElementById('FuncExp').innerText = true:
    () => document.getElementById('FuncExp').innerText = false;

welcome(); // теперь всё в порядке