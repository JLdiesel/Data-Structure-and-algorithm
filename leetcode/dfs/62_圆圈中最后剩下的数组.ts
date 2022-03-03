function lastRemaining(n: number, m: number): number {
  if (n === 1) return 0; //如果只有一个人，那个人的编号为0
  return (lastRemaining(n - 1, m) + m) % n; // fn(n,m)=(fn(n-1,m)+m )%n
}
function lastRemaining2(n: number, m: number): number {
  let res = 0;
  for (let i = 2; i <= n; i++) {
    //i是数据规模，代表有多少个人
    res = (res + m) % i;
  }
  return res;
}
console.log(lastRemaining(5, 3));
