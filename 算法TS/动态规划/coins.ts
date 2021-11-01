function coins1(n: number) {
  if (n < 1) return Number.MAX_VALUE;
  if (n === 1 || n === 25 || n === 5 || n === 20) return 1;
  return (
    Math.min(coins1(n - 25), coins1(n - 1), coins1(n - 20), coins1(n - 5)) + 1
  );
}
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
function coins3(n: number) {
  if (n < 1) return -1;
  const dp: number[] = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    let min = dp[i - 1];
    if (i >= 5) min = Math.min(dp[i - 5], min);
    if (i >= 20) min = Math.min(dp[i - 20], min);
    if (i >= 25) min = Math.min(dp[i - 25], min);
    dp[i] = min + 1;
  }
  return dp[n];
}
function coins4(n: number) {
  if (n < 1) return -1;
  const dp: number[] = new Array(n + 1).fill(0);
  const faces = new Array(dp.length);
  for (let i = 1; i <= n; i++) {
    let min = Number.MAX_VALUE;
    if (i >= 1 && dp[i - 1] < min) {
      min = dp[i - 1];
      faces[i] = 1;
    }
    if (i >= 5 && dp[i - 5] < min) {
      min = dp[i - 5];
      faces[i] = 5;
    }
    if (i >= 20 && dp[i - 20] < min) {
      min = dp[i - 20];
      faces[i] = 20;
    }
    if (i >= 25 && dp[i - 25] < min) {
      min = dp[i - 25];
      faces[i] = 25;
    }
    dp[i] = min + 1;
  }
  printCoins(faces, n);

  return dp[n];
}
function printCoins(faces: number[], n: number) {
  while (n > 0) {
    console.log(faces[n]);
    n -= faces[n];
  }
}
console.log(coins3(41));
console.log(coins4(41));
