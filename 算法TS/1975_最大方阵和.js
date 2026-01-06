/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
  let min = 1000000,
    ans = 0,
    flag = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      const item = matrix[i][j];
      if (item < 0) {
        flag += 1;
      }
      min = Math.min(min, Math.abs(item));
      ans += Math.abs(item);
    }
  }

  if (flag % 2 === 0) {
    return ans;
  } else {
    return ans - min * 2;
  }
};
