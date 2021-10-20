//尾递归 优化
class tailCall {
  facttorial(n: number) {
    if (n <= 1) return n;
    return n * this.facttorial(n - 1);
  }
  //递归改尾递归
  facttorial2(n: number) {
    return this.facttorial3(n, 1);
  }
  facttorial3(n: number, result: number) {
    if (n <= 1) return result;
    return this.facttorial3(n - 1, result * n);
  }
  fib(n: number): number {
    if (n <= 1) return n;
    return fib1(n - 1) + fib1(n - 2);
  }
  //递归改尾递归
  fib1(n: number): number {
    return this.fib2(n, 1, 1);
  }
  fib2(n: number, first: number, second: number): number {
    if (n <= 1) return first;
    return this.fib2(n - 1, second, first + second);
  }
}
