const vasya = { name: 'Вася', age: 25 };
const petya = { name: 'Петя', age: 30 };
const masha = { name: 'Маша', age: 29 };

const arr = [vasya, petya, masha];
const getAge = arr.map((a) => a.age);
let sum = 0;
for (let i = 0; i < getAge.length; i++) {
  sum += getAge[i];
}
const getAvarageAge = sum / arr.length;
console.log(getAge);
console.log(sum);
console.log(getAvarageAge);
