function minDistance(word1: string, word2: string): number {
  if (!word2 && !word1) return 0;
  const rows = word1.length;
  const cols = word2.length;
  const dp: number[][] = new Array(rows + 1);
  for (let i = 0; i <= rows; i++) {
    dp[i] = new Array(cols + 1);
  }
  dp[0][0] = 0;
  for (let i = 1; i <= rows; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= cols; j++) {
    dp[0][j] = j;
  }
  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= cols; col++) {
      const top = dp[row - 1][col] + 1;
      const left = dp[row][col - 1] + 1;
      let leftTop = dp[row - 1][col - 1];
      if (word1[row - 1] !== word2[col - 1]) {
        leftTop++;
      }
      dp[row][col] = Math.min(top, leftTop, left);
    }
  }
  return dp[rows][cols];
}
console.log(minDistance('', 'ros'));
