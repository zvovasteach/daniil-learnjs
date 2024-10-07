'use-strict';
function sumInput() {
  const value = [];
  let input = 0;
  let sum = 0;
  let number = 0;
  do {
    input = prompt('Введите число', '0');
    number = +input;
    if (input === null) {
      break;
    } else if (typeof number === 'number' && !Number.isNaN(number)) {
      value.push(number);
    }
  } while (typeof number === 'number' && !Number.isNaN(number));
  for (let i = 0; i < value.length; i++) {
    sum = sum + value[i];
  }
  alert(sum);
}
sumInput();
