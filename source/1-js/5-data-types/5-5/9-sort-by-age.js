const vasya = { name: 'Вася', age: 25 };
const petya = { name: 'Петя', age: 30 };
const masha = { name: 'Маша', age: 28 };

const arr = [vasya, petya, masha];
const sortByAge = arr.sort((a, b) => a.age - b.age);
console.log(sortByAge);
