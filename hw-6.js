//Задание 1
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
    if(numbs[i] === 10) {
        break
    };
}

//Задание 2
const numbs = [1, 5, 4, 10, 0, 3];
console.log(numbs.indexOf(4));

либо

const numbs = [1, 5, 4, 10, 0, 3];
let res;
numbs.forEach((el, i) => {
    if (el === 4) res = i;
})
console.log(res);


//Задание 3
const numbs = [1, 3, 5, 10, 20];
console.log(arr.join(' '));


//Задание 4
const arr = [];

    for(let i = 0; i < 3; i++) { 
        const nestArr = [];

        for(let j = 0; j < 3; j++) { 
            nestArr.push(1);
        };
        arr.push(nestArr);
    };
console.log(arr);


 //Задание 5
const arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);


 //Задание 6
const arr = [9, 8, 7, 'a', 6, 5];
const result = arr.filter((el) => typeof el === 'number');
let arrNumbs = result.sort();
console.log(arrNumbs);


 //Задание 7
 const arr = [9, 8, 7, 6, 5];
 let userAnswer = Number(prompt('Угадайте число'));

 if (arr.includes(userAnswer)) {
    alert('Угадал');
 } else {
    alert('Не угадал');
 }


  //Задание 8
  const str = 'abcdef';
  let strReverse = str.split('');
  strReverse.reverse();
  let str2 = strReverse.join('');
  console.log(str2);


  //Задание 9
const arr = [[1, 2, 3,], [4, 5, 6]];
const arrNumbs = arr.flat();
console.log(arrNumbs);


  //Задание 10
const arr = [1, 2, 3, 7, 9, 10];
for (let i = 0; i < arr.length - 1; i++) {

console.log(arr[i] + arr[i + 1]);
}


//Задание 11
let result = [9, 8, 7, 6, 5];
function arr(nums) {
return nums.map(num => num ** 2);
}
console.log(arr(result));


//Задание 12
const arrNew = [];
function getLengthWords(arr) {
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].length;
        arrNew.push(word);
    }
}
getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']);
console.log(arrNew);


//Задание 13
function filterPositive(array) {
    return array.filter(el => el < 0);
}
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));