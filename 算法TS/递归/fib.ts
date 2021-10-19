//时间o(2^n) 空间o(n)
function fib1(n: number): number {
  if (n <= 1) return n;
  return fib1(n - 1) + fib1(n - 2);
}

//时间空间都是 o(n)
function fib3(n: number): number {
  if (n <= 2) return 1;
  const arr = new Array(n + 1).fill(0);
  arr[1] = arr[2] = 1;
  return fib3a(n, arr);
}
function fib3a(n: number, arr: number[]) {
  if (arr[n] === 0) {
    arr[n] = fib3a(n - 1, arr) + fib3a(n - 2, arr);
  }
  return arr[n];
}
//自底向上
function fib5(n: number) {
  if (n <= 2) return 1;
  const arr = new Array(n + 1).fill(0);
  arr[1] = arr[2] = 1;
  for (let i = 0; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}
//空间 o(1) 时间o(n)
function fib6(n: number) {
  if (n <= 2) return 1;
  const arr = new Array(2).fill(0);
  arr[0] = arr[1] = 1;
  for (let i = 3; i <= n; i++) {
    arr[i & 1] = arr[(i - 1) & 1] + arr[(i - 2) & 1];
  }
  return arr[n & 1];
}
//时间o(n) 空间o(1)
function fib2(n: number): number {
  if (n <= 1) return n;
  let first: number = 0;
  let second: number = 1;
  for (let i = 0; i < n - 1; i++) {
    second = first + second;
    first = second - first;
  }
  return second;
}
setTimeout(() => {
  console.log(new Date());
  console.log(1, fib1(40));
}, 0);
setTimeout(() => {
  console.log(new Date());
  console.log(2, fib2(40));
}, 0);
setTimeout(() => {
  console.log(new Date());
  console.log(3, fib3(40));
}, 0);
setTimeout(() => {
  console.log(new Date());
  console.log(3, fib6(40));
}, 0);
