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
}
