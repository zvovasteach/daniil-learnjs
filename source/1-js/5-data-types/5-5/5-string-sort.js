const arr = ['HTML', 'JavaScript', 'CSS'];
const copy = arr.slice();
const sorted = copy.sort((a, b) => a.localeCompare(b));
console.log(sorted);
console.log(arr);
