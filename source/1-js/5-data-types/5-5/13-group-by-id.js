const users = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

const groupById = (arr) => {
  const obj = arr.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
  return obj;
};

const usersById = groupById(users);
console.log(usersById);
