function maxValue(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const dp: number[][] = new Array(rows);
  for (let i = 0; i < rows; i++) {
    dp[i] = new Array(cols);
  }
  dp[0][0] = grid[0][0];
  for (let i = 1; i < cols; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }
  for (let j = 1; j < rows; j++) {
    dp[j][0] = dp[j - 1][0] + grid[j][0];
  }
  console.log(dp);

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      dp[row][col] =
        Math.max(dp[row - 1][col], dp[row][col - 1]) + grid[row][col];
    }
  }
  return dp[rows - 1][cols - 1];
}
console.log(
  maxValue([
    [1, 2, 5],
    [3, 2, 1],
  ])
);
