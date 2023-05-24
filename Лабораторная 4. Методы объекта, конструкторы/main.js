// let user = {
//     name: "Джон",
//     age: 30
// };

// user.sayHi = function() {
//     alert("Привет!");
// };

// user.sayHi(); // Привет!

let user_information = {
    name: "Джон",
    age: 30,
    mail: "user@gmail.com",
    phone: "78888888888",
    address: "Moscow"
};

let order = {
    number: 5555,
    mail_user: "user@gmail.com",
    address: "Moscow"
}

// document.getElementById('user_information').innerText = 'Name: ' + user_information.name + '\n' +
// 'Age: ' + user_information.age + '\n' + 'Mail: ' + user_information.mail;

let users = [
    { id: 1, name: "John", email: "John@gmail.com"},
    { id: 2, name: "Alice", email: "Alice@gmail.com"},
    { id: 3, name: "Bob", email: "Bob@gmail.com"},
    { id: 4, name: "Mike", email: "Mike@gmail.com"},
];

let goods = [
    { id: 1, name: "Капучино", cost: 1000},
    { id: 2, name: "Американо", cost: 500},
    { id: 3, name: "Латте", cost: 400},
]

let orders = [
    { id: 1, userId: 1, stockId: 2, amount: 5 },
    { id: 2, userId: 2, stockId: 1, amount: 3 },
    { id: 3, userId: 1, stockId: 3, amount: 7 },
    { id: 4, userId: 3, stockId: 2, amount: 4 }
];

let warehouses = [
    { id: 1, name: "stock1", location: "Moscow"},
    { id: 2, name: "stock2", location: "Moscow"},
    { id: 3, name: "stock3", location: "Moscow"},
]

function findOrdersByUser(userId) {
    return orders.filter(function (order) {
        return order.userId === userId;
    });
}

function myFunction() {
    let userIdToFind = document.getElementById("userId").value;
    let userOrders = findOrdersByUser(Number(userIdToFind));
    console.log("Заказы пользователя с ID " + userIdToFind + ":");
    userOrders.forEach(function(order) {
        document.getElementById('order_information').innerText += 'Заказ №' + order.id + '\n';
    });
}

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Вася");
document.getElementById('user').innerText = 'User: ' + user.name;

function UserG(name, id) {
    this.id = id
    this.name = name;

    this.getId = function() {
        document.getElementById('userG').innerText = 'ID: ' + this.id;
    };
}

let vasya = new UserG("Вася", 1);

vasya.getId(); // Меня зовут: Вася

