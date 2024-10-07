const ucFirst = function (str) {
  const strUpper = str[0].toUpperCase();
  const strLower = str.slice(1, str.length[-1]);
  str = strUpper + strLower;
  return str;
};
console.log(ucFirst('вася'));
