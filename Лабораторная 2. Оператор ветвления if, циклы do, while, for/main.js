let otgatki = 0
let zagadka1 = prompt('Что тяжелее килограмм пуха или килограмм железа?')
if (zagadka1 === 'одинаково') {
    otgatki += 1
    document.getElementById('otgatka1').innerText = 'Загадка 1 - Правильно';
} else {
    console.log('Неверно')
    document.getElementById('otgatka1').innerText = 'Неверно';
}
let zagadka2 = prompt('Сколько будет 3+3*3?')
if (Number(zagadka2) === 12) {
    otgatki += 1
    document.getElementById('otgatka2').innerText = 'Загадка 2 - Правильно';
} else {
    console.log('Неверно')
    document.getElementById('otgatka2').innerText = 'Неверно';
}
console.log(otgatki)
document.getElementById('result').innerText = 'Количество правильных ответов: ' + otgatki;

for (let i = 1; i < 11; i++) {
    document.getElementById("output").innerText += i + "\n";
}

let four = 0
while (Number(four) === 0) {
    if (prompt('Еще по одной?')) {
        four += 1
    }
}

let numberBook = 19
let factorial = 1
for (let i = 2; i < numberBook + 1; i++) {
    factorial *= i
}
document.getElementById("factorial").innerText = 'Факториал: ' + factorial;

const secondName = 'pitsenko';
function reverseString(str) {
    return str.split("")
        .reverse()
        .join("");
}
let polindrom = false
if (reverseString(secondName) === secondName) {
    polindrom = true
} else {
    polindrom = false
}
document.getElementById("polindrome").innerText = polindrom

for (let i = 1; i < numberBook + 1; i++) {
    let g = 0;
    for (let j = 1; j < numberBook + 1; j++) {
        if (i % j === 0 && j <= i) {
            g += 1;
        }
    }
    if (Number(g) === 2) {
        document.getElementById("output1").innerText += i + "\n";
    }
}