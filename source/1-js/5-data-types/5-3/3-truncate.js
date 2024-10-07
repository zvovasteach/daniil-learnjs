const truncate = function (str, maxlength) {
  if (str.length > maxlength) {
    str = `${str.substring(0, --maxlength)}...`;
    return str;
  } else {
    return str;
  }
};

console.log(truncate('Всем привет!', 20));
console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
