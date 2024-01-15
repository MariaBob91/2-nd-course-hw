//Задание 1
for (let i=0; i<2; i++) {
    console.log('Привет');
}

//Задание 2
for(let i=1; i<6; i++) {
    console.log(i);
}

//Задание 3
for(let i=7; i<=22; i++) {
    console.log(i);
}

//Задание 4
const obj = {
    "Коля": "200",
    "Вася": "300",
    "Петя": "400"
};

for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов.`);
}

//Задание 5
let n=1000;
let num = 0;

while(n >= 50) {
    n /= 2;
    num++;
}

console.log(n);
console.log(num);

//Задание 6
let firstFriday = 5;
for (let i = firstFriday; i <= 31; i += 7) {
    console.log('Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.');
}



const user = {
    name: 'Bob',
    age: 32,
    city: 'London',

    getInfo() {
        return `Пользователь ${user.name}, возраст ${user.age}, проживает в ${user.city}`
    }
};

console.log(user.getInfo());





function getRectangleArea() {
    return this.width * this.height;
}
function getRectanglePerimeter() {
    return this.width * 2 + this.height * 2;
}

const square1 = {
    width: 23,
    height: 5,

    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter
};

const square2 = {
    width: 5,
    height: 35,

    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter
};

console.log(square1.getArea());
console.log(square2.getPerimeter());
console.log(square1.getArea());
console.log(square2.getPerimeter());