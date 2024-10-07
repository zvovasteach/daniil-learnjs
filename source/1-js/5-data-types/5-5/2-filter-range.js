const filterRange = function (arr, a, b) {
  const filtered = arr.filter((item) => a <= item && item <= b);
  return filtered;
};
console.log(filterRange([5, 3, 8, 1], 1, 4));
