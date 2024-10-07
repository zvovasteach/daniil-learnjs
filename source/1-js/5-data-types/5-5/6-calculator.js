function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };
  this.calculate = function (str) {
    const test = str.split(' ');
    // console.log(test);
    const a = +test[0];
    const b = +test[2];
    const c = test[1];
    // console.log(a);
    // console.log(b);
    // console.log(c);
    console.log(this.methods[c](a, b));
    return this.methods[c](a, b);
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
const calc = new Calculator();
calc.addMethod('*', (a, b) => a * b);
calc.addMethod('/', (a, b) => a / b);
calc.addMethod('**', (a, b) => a ** b);
calc.calculate('5 * 7');
