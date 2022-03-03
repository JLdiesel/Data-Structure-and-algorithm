function spiralOrder(matrix: number[][]): number[] {
  const res = [];
  if (!matrix.length) return res;
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;
  while (top <= bottom && left <= right) {
    //left top ->right top
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    //right top ->right bottom
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    if (top > bottom || left > right) break;
    //right bottom  ->left bottom
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;
    //left bottom ->left top
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
    //奇数行 偶数列
  }
}
