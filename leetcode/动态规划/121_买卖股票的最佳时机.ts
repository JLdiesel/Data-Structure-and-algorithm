// O(n)
function maxProfit(prices: number[]): number {
  if (!prices || !prices.length) return 0;
  //前面扫描过的最小价格
  let minPrice = prices[0];
  //前面扫描过的最大利润
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      //把第i天的股票卖出
      maxProfit = Math.max(prices[i] - minPrice, maxProfit);
    }
  }
  return maxProfit;
}
//动态规划
function maxProfit2(prices: number[]): number {
  if (!prices || !prices.length) return 0;
  const arr = new Array(prices.length - 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = prices[i + 1] - prices[i];
  }
  console.log(arr);
  const max = maxSubarray2(arr);
  return max < 0 ? 0 : max;
}
//最大连续子序列和
function maxSubarray2(nums: number[]) {
  if (!nums || nums.length === 0) return 0;

  let dep = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (dep < 0) {
      dep = nums[i];
    } else {
      dep = nums[i] + dep;
    }
    if (dep > max) max = dep;
  }
  return max;
}
console.log(maxProfit2([1, 4, 2]));
