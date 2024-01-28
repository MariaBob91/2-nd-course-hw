// //Задание 1

// function comparison(a, b) {
//     return a < b ? a : b;
// }

// console.log(comparison(2, 5));

// //Задание 2
// function putNumber(n) {

//     if (n % 2 === 0) {
//         return('Число четное');
//     } else {
//         return('Число нечетное');
//     }
// }

// console.log(putNumber(2));

// //Задание 3.1
// function square(n) {
//     console.log(n * n);
// };

// square(2);

// //Задание 3.2
// function square2(n) {
//     return n * n;
// }

// console.log(square2(5));

// //Задание 4
// function userAge() {
//     const age = prompt('Сколько вам лет?');

//     if (age < 0) {
//         alert('Вы ввели неправильное значение');
//     } else if (age >= 0 && age <= 12) {
//         alert('Привет, друг!');
//     } else {
//         alert('Добро пожаловать!')
//     }
// }

// //Задание 5
// function getNumber(a, b) {
//     if (isNaN(Number(a)) || isNaN(Number(b))) {
//         return('Одно или оба значения не являются числом');
//     } else {
//         return a * b
//     }
// }

// //Задание 6
// function cubeNumber() {
//     let num = prompt("Введите число");
//     num = Number(num);

//     if (isNaN(num)) {
//         return('Переданный параметр не является числом');   
//     } else {
//         return `${num} в кубе равняется ${num ** 3}`;
//     }
// }

// console.log(cubeNumber(2));

// //Задание 7
// function getArea() {
//     return Math.PI * this.radius * this.radius;
// }

// function getPerimeter() {
//     return 2 * Math.PI * this.radius;
// }

// const circle1 = {
//     radius: 3,
//     getArea,
//     getPerimeter
// };
// console.log(circle1.getPerimeter());

// const circle2 = {
//     radius: 10,
//     getArea,
//     getPerimeter
// };

// console.log(circle2.getPerimeter());


function monthNumber() {

    let month = Number(prompt("Введите число от 1 до 12"));

    if (month >= 3 && month <= 5) {
        return "Весна";
    } else if (month >= 6 && month <= 8) {
        return "Лето";
    } else if (month >= 9 && month <= 11) {
        return "Осень";
    } else if (month == 12 || month == 1 || month == 2) {
        return "Зима";
    } else {
        return "Неверное значение";
    }
}


