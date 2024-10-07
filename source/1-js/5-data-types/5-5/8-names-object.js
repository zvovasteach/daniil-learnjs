const vasya = { name: 'Вася', surname: 'Пупкин', id: 1 };
const petya = { name: 'Петя', surname: 'Иванов', id: 2 };
const masha = { name: 'Маша', surname: 'Петрова', id: 3 };

const users = [vasya, petya, masha];
console.log(users);
const usersMapped = users.map((user) => {
  const test = {
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
  };
  return test;
});

console.log(usersMapped[0].fullName);
