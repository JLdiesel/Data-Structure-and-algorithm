function myPow(x: number, n: number): number {
  if (n === 0) return 1;
  if (n === -1) return 1 / x;
  //是否为奇数
  const odd = (n & 1) === 1;
  let half = myPow(x, n >> 1);
  half *= half;
  return odd ? half * x : half;
}
function myPow2(x: number, n: number): number {
  let res = 1;
  let y = n < 0 ? -n : n;
  while (y > 0) {
    // n & 1    n的每个2进制位
    if (y & 1) {
      //如果最后一个二进制位是1  就累乘上x
      res *= x;
    }
    x *= x;
    //舍弃最后一个二进制位
    y >>>= 1;
  }

  return n < 0 ? 1 / res : res;
}
const myPow3 = function (x, n) {
  // 非递归写法
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (n === 0) return 1;
  let res = 1;
  while (n > 1) {
    if (n & 1) {
      // 按位与 等价n % 2 === 1
      n--;
      res *= x; // 将x^n 转变为 x*x^(n-1)
    }
    x *= x;
    n = n / 2;
    // n = n >>> 1; 无符号右移运算符
  }
  return res * x;
};

console.log(myPow2(2, -2147483648));
