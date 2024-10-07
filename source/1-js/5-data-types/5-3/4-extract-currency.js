const extractCurrencyValue = function (currency) {
  if (currency.at(2) / 2 !== Number()) {
    return currency.substring(1, currency.length);
  }
};
console.log(extractCurrencyValue('$120'));
