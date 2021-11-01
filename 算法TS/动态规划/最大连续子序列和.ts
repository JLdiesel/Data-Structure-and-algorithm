const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//暴力法，枚举所有情况 O(n^3)


/**
 * 求解[begin,end)中最大连续子序列的和
 */
function maxSubarray(nums: number[]) {
  const deps = new Array(nums.length)
  deps[0] = nums[0]
  let max = Number.MIN_VALUE;
  for (let i = 1; i < nums.length; i++) {
    if (deps[i-1] < 0) {
      deps[i]=nums[i]
    } else {
      deps[i]=nums[i]+deps[i-1]
    }
    if(deps[i]>max) max=deps[i]
  }
  console.log(max);
}
maxSubarray(nums);
export{}