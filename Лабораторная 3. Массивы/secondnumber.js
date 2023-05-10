var arr = [];

for (let i = 0; i < 15; i++) {
    arr.push(Math.floor(Math.random() * 41 - 10))
}
document.getElementById('arr').innerText = 'Массив: ' + arr;

let sum = 0;
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
        count++
    }
}
let avg = sum / count;
document.getElementById('avg').innerText = 'Среднее положительных чисел массива: ' + avg;

for (let i = 9; i < arr.length; i++) {
    if (arr[i] < 0) {
        arr[i] = Math.pow(arr[i], 2)
    }
}
document.getElementById('arrchange').innerText = 'Массив измененный: ' + arr;

let sumPositive = 0;
let countPositive = 0;
let sumNegative = 0;
let countNegative = 0;
let zero = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sumPositive += arr[i];
        countPositive++
    }
    if (arr[i] < 0) {
        sumNegative += arr[i];
        countNegative++
    }
    else {
        zero++
    }
}
let avgPositive = sumPositive / countPositive;
let avgNegative = sumPositive / countPositive;
document.getElementById('parameters').innerText = 'среднее арифметическое положительных чисел: ' + avgPositive + '\n'
    + 'среднее арифметическое отрицательных чисел: ' +  avgNegative  + '\n'+ 'число нулей: ' + zero;

let arrPlay = [];
let countPlay = 0;
for (let i = 0; i < 10000000; i++) {
    arrPlay[i] = Math.round(Math.random()*2);
    if (arrPlay[i] === 0) {
        countPlay += 1
    }
}
document.getElementById('play').innerText = 'Красных: ' + countPlay;
