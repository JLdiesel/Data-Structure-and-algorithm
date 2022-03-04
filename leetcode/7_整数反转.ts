function reverse(x: number) {
  let res: number = 0;
  while (x !== 0) {
    res = res * 10 + (x % 10);
    if (res > Number.MAX_SAFE_INTEGER) return 0;
    if (res < Number.MIN_SAFE_INTEGER) return 0;
    x = Math.floor(x / 10);
  }
  return res;
}

function reverse2(x: number) {
  let res: number = 0;
  const flag = x > 0;
  x = Math.abs(x);
  while (x !== 0) {
    let prevRes = res;
    res = prevRes * 10 + (x % 10);
    if ((res - (x % 10)) / 10 !== prevRes) return 0;
    x = Math.floor(x / 10);
  }
  return flag ? res : -res;
}
console.log(reverse(120));
