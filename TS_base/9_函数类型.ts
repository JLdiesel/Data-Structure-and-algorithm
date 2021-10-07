//函数类型
// type CalcFn = (n1: number, n2: number) => number;
//相当于
interface CalcFn {
  (n1: number, n2: number): number;
}

function calc(num1: number, num2: number, calcFn: CalcFn) {
  return calcFn(num1, num2);
}

const add: CalcFn = (num1, num2) => {
  return num1 + num2;
};
console.log(calc(10, 11, add));

export default {};
