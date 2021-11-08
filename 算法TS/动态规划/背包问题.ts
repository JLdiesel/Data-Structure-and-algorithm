/**
 *dp[i,j],最大承重为j，有前i件物品可选时的最大价值
 * @param values 价值数组
 * @param weights 重量数组
 * @param capacity 背包容量
 */
const values = [6, 3, 5, 4, 6];
const weights = [2, 2, 6, 5, 4];
//dp[i,j],最大承重为j，有前i件物品可选时的最大价值
//如果j<weights[i], dp[i][j]=dp[i-1][j]
//如果不选择第i个物品，dp[i][j]=dp[i-1][j]
//如果选择第i件物品,dp[i][j]=values[i]+dp[i-1][j-weight[i]]
//dp[i][j]=Math.max(dp[i-1][j],values[i]+dp[i-1][j-weight[i]])
function knapsack(values: number[], weights: number[], capacity: number) {
  if (!values || values.length === 0) return 0;
  if (!weights || weights.length === 0) return 0;
  if (values.length !== weights.length || capacity <= 0) return 0;
  const dp: number[][] = new Array(weights.length + 1);
  for (let i = 0; i <= weights.length; i++) {
    dp[i] = new Array(capacity + 1);
    dp[i][0] = 0;
  }
  for (let i = 1; i <= capacity; i++) {
    dp[0][i] = 0;
  }
  for (let i = 1; i <= values.length; i++) {
    for (let j = 1; j <= capacity; j++) {
      //如果背包承重小于最后一件物品的重量
      if (j < weights[i - 1]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        //否则就是选择更大的价值
        dp[i][j] = Math.max(
          dp[i - 1][j],
          values[i - 1] + dp[i - 1][j - weights[i - 1]]
        );
      }
    }
  }
  return dp[values.length][capacity];
}
console.log(knapsack(values, weights, 10));
