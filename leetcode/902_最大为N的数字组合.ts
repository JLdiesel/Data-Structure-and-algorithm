/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet = function (digits, n) {
  let level = 1;
  let originN = n;
  while (n > 10) {
    level += 1;
    n /= 10;
  }
  digits = digits.map(Number);
  function dfs(digits, n, now, level) {
    if (level === 0) return;
    for (let i = 0; i < digits.length; i++) {
      const nows = now * 10 + digits[i];
      if (nows <= n) {
        count += 1;
        dfs(digits, n, nows, level - 1);
      } else {
        return;
      }
    }
  }
  let count = 0;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] <= originN) {
      count = count + 1;
      dfs(digits, originN, digits[i], level - 1);
    } else {
      return count;
    }
  }
  return count;
};
var atMostNGivenDigitSet1 = function (digits, n) {
  const s = '' + n;
  const m = digits.length,
    k = s.length;
  const dp = new Array(k + 1).fill(0).map(() => new Array(2).fill(0));
  dp[0][1] = 1;
  for (let i = 1; i <= k; i++) {
    for (let j = 0; j < m; j++) {
      if (digits[j][0] === s[i - 1]) {
        dp[i][1] = dp[i - 1][1];
      } else if (digits[j][0] < s[i - 1]) {
        dp[i][0] += dp[i - 1][1];
      } else {
        break;
      }
    }
    if (i > 1) {
      dp[i][0] += m + dp[i - 1][0] * m;
    }
  }
  return dp[k][0] + dp[k][1];
};
