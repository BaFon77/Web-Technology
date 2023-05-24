function polindrom(secondName) {
    function reverseString(str) {
        return str.split("")
            .reverse()
            .join("");
    }

    let polindrom = false
    polindrom = reverseString(secondName) === secondName;
    document.getElementById("polindrome").innerText = "Полиндром: " + polindrom
}
polindrom('Pitsenko')

function replace_arr(arr) {
    for (let i = 9; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = Math.pow(arr[i], 2)
        }
    }
    document.getElementById('replace_arr').innerText = 'Массив измененный: ' + arr;
}

let arr = [];

for (let i = 0; i < 15; i++) {
    arr.push(Math.floor(Math.random() * 41 - 10))
}

replace_arr(arr)

class UserS {
    name;
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        document.getElementById('UserName').innerText = "Привет, " + this.name + "!";
    }
}

let user1 = new UserS("Вася");

user1.sayHello();

class Polindrom {
    constructor(firstName) {
        this.firstName = firstName
    }
    reverseString(str) {
        return str.split("")
            .reverse()
            .join("");
    }

    main() {
        polindrom = this.reverseString(this.firstName) === this.firstName;
        document.getElementById("polindromeC").innerText = "Полиндром: " + polindrom

}
}
let polindrom1 = new Polindrom("Вася");
polindrom1.main()
