function unique(arr) {
  const result = [];
  arr.forEach((item) => {
    const x = item;
    if (!result.includes(x)) {
      result.push(x);
    }
  });
  return result;
}

const strings = ['кришна', 'кришна', 'харе', 'харе',
  'харе', 'харе', 'кришна', 'кришна', 'это', 'слишком', 'просто', 'слишком', ':-O', 'слишком', 'это', 'это', 'просто'];

console.log(unique(strings));
