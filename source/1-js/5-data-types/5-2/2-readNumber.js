'use-strict';
function readNumber() {
  let value;
  while (Number.isNaN(value / 2)) {
    value = Number(prompt('Введите число', '0'));
  }
  if (typeof value === 'number') {
    return `Число: ${value}`;
  } else {
    return 'Число: null';
  }
}
alert(readNumber());
