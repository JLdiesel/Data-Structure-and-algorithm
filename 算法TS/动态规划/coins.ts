function coins1(n: number) {
  if (n < 1) return Number.MAX_VALUE;
  if (n === 1 || n === 25 || n === 5 || n === 20) return 1;
  return (
    Math.min(coins1(n - 25), coins1(n - 1), coins1(n - 20), coins1(n - 5)) + 1
  );
}
console.log(coins1(41));
function coins2(n: number) {
  if (n < 1) return -1;
  const dp = new Array(n + 1);
  const faces: number[] = [1, 5, 20, 25];
  for (const face of faces) {
    if (n < face) break;
    dp[face] = 1;
  }
  return coins2Main(n, dp);
}
function coins2Main(n: number, dp: number[]) {
  if (n < 1) return Number.MAX_VALUE;
  if (dp[n] === 0) {
    dp[n] =
      Math.min(coins1(n - 25), coins1(n - 1), coins1(n - 20), coins1(n - 5)) +
      1;
  }
  return dp[n];
}
