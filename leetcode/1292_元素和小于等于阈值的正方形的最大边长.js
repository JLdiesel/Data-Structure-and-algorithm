// 二维前缀和 + 二分查找
/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function (mat, threshold) {
  const m = mat.length;
  const n = mat[0].length;
  const preSum = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      preSum[i][j] =
        preSum[i - 1][j] +
        preSum[i][j - 1] -
        preSum[i - 1][j - 1] +
        mat[i - 1][j - 1];
    }
  }
  console.log(preSum);
  let left = 0,
    right = Math.min(m, n);
  let ans = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let found = false;
    for (let i = mid; i <= m; i++) {
      for (let j = mid; j <= n; j++) {
        const total =
          preSum[i][j] -
          preSum[i - mid][j] -
          preSum[i][j - mid] +
          preSum[i - mid][j - mid];
        if (total <= threshold) {
          found = true;
          break;
        }
      }
      if (found) break;
    }
    if (found) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
};
maxSideLength(
  [
    [1, 1, 3, 2, 4, 3, 2],
    [1, 1, 3, 2, 4, 3, 2],
    [1, 1, 3, 2, 4, 3, 2]
  ],
  4
);
