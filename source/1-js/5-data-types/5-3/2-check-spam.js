const checkSpam = function (str) {
  const regex = new RegExp('viagra', 'i');
  const regex2 = new RegExp('xxx', 'i');
  if (regex.test(str) || regex2.test(str)) {
    return true;
  } else {
    return false;
  }
};
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));
