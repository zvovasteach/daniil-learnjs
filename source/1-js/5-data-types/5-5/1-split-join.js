const camelize = function (str) {
  return str
    .split('-')
    .filter((symbol) => symbol !== '')
    .map((symbol) => symbol[0].toUpperCase() + symbol.slice(1))
    .join('');
};

console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));
