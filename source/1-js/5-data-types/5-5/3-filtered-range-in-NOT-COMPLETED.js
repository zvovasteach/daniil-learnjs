const filterRange = function (arr, a, b) {
  const filtered = arr.sort((item) => a <= item && item <= b);
  console.log(arr);
  return filtered;
};
console.log(filterRange([5, 3, 8, 1], 1, 4));
