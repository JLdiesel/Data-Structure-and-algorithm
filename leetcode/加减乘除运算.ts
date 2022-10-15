var calculate = function (s: string) {
  function calc(s, l, r) {
    let op = -1, // 最低优先级
      pri = 10000 - 1, //中间运算符优先级
      cur_pri = 10000, //当前优先级
      temp = 0; //额外优先级
    for (let i = l; i <= r; i++) {
      cur_pri = 10000;
      switch (s[i]) {
        case '+':
        case '-':
          cur_pri = 1 + temp;
          break;
        case '*':
        case '/':
          cur_pri = 2 + temp;
          break;
        case '(':
          temp += 100;
          break;
        case ')':
          temp -= 100;
          break;
      }
      if (cur_pri <= pri) {
        pri = cur_pri;
        op = i;
      }
    }
    if (op === -1) {
      console.log(l, r, s.slice(l, r));

      let num = 0;
      for (let i = l; i <= r; i++) {
        if (s[i] < '0' || s[i] > '9') continue;
        num = num * 10 + s[i] - 0;
      }
      return num;
    }

    let a = calc(s, l, op - 1);
    let b = calc(s, op + 1, r);

    switch (s[op]) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
    }
    return 0;
  }
  return calc(s, 0, s.length - 1);
};
function calculate2(s: string) {
  function level(num) {
    switch (num) {
      case '@':
        return -1;
      case '+':
      case '-':
        return 1;
      case '*':
      case '/':
        return 10;
      default:
        return 0;
    }
  }
  function calc(n1, opt, n2) {
    switch (opt) {
      case '+':
        return n1 + n2;
      case '-':
        return n1 - n2;
      case '*':
        return n1 * n2;
      case '/':
        return n1 / n2;
    }
    return 0;
  }
  const num = [];
  const opts = [];
  s += '@';
  let n = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue;
    if (level(s[i]) === 0) {
      n = n * 10 + Number(s[i]);
      continue;
    }
    num.push(n);
    n = 0;
    while (opts.length && level(s[i]) <= level(opts[opts.length - 1])) {
      const opt = opts.pop();
      const num2 = num.pop();
      const num1 = num.pop();
      num.push(calc(num1, opt, num2));
    }
    opts.push(s[i]);
  }
  console.log(num);

  return num[num.length - 1];
}
console.log(calculate2('1+2*3'));
