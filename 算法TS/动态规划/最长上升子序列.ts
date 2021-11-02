const nums = [10, 2, 2, 5, 1, 7, 101, 18];
function longestUp(nums: number[]) {
  if (!nums || nums.length === 0) return 0;
  const dp: number[] = new Array(nums.length).fill(1);
  let max = dp[0];
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] <= nums[j]) continue;
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    max = Math.max(dp[i], max);
  }
  console.log(max);

  return max;
}
longestUp(nums);
export {};
