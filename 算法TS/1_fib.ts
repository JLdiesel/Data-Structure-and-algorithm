//o(2^n)
function fib1(n: number): number {
    if (n <= 1) return n;
    return fib1(n - 1) + fib1(n - 2)
}
//o(n)
function fib2(n: number): number {
    if (n <= 1) return n;
    let first: number = 0;
    let second: number = 1;
    for (let i = 0; i < n - 1; i++) {
        second = first + second;
        first = second - first;
    }
    return second
}
setTimeout(() => {
    console.log(fib1(3));
}, 0);
setTimeout(() => {
    console.log(fib2(3));
}, 0);

