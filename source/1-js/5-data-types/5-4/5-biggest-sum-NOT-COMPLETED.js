const arr = [1, 2, 3, 4, 5];
const container = [];
const getMaxSubSum = function () {
  for (let i = 0; i < arr.length; i++) {
    let sum = '';
    sum = sum + arr.slice(i, arr.length);
    container.push(sum);
  }
  console.log(container);

  for (let j = 0; j < container.length; j++) {
    let sumof = 0;
    sumof += +container[j];
    console.log(sumof);
  }
};
getMaxSubSum();
