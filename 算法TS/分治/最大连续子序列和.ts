const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//暴力法，枚举所有情况 O(n^3)
function maxSubarray(nums: number[]) {
  if (nums === null || nums.length === 0) return 0;
  let max = Number.MIN_VALUE;
  for (let begin = 0; begin < nums.length; begin++) {
    let sum = 0;
    for (let end = begin; end < nums.length; end++) {
      for (let i = begin; i <= end; i++) {
        sum += nums[i];
      }
      max = Math.max(max, sum);
    }
  }
  return max;
}
//暴力法，枚举所有情况 O(n^2)
function maxSubarray2(nums: number[]) {
  if (nums === null || nums.length === 0) return 0;
  let max = Number.MIN_VALUE;
  for (let begin = 0; begin < nums.length; begin++) {
    let sum = 0;
    for (let end = begin; end < nums.length; end++) {
      //sum是[begin,end]的和
      sum += nums[end];
      max = Math.max(max, sum);
    }
  }
  return max;
}
//分治法 2T(n/2)+O(n)
function maxSubarray3(nums: number[]) {
  if (nums === null || nums.length === 0) return 0;

  return maxSubarray4(nums, 0, nums.length);
}
/**
 * 求解[begin,end)中最大连续子序列的和
 */
function maxSubarray4(nums: number[], begin: number, end: number) {
  if (end - begin < 2) return nums[begin];
  const mid = (begin + end) >> 1;
  let leftMax = Number.MIN_VALUE;
  let leftSum = 0;
  for (let i = mid - 1; i >= begin; i--) {
    leftSum += nums[i];
    leftMax = Math.max(leftMax, leftSum);
  }
  let rightMax = Number.MIN_VALUE;
  let rightSum = 0;
  for (let i = mid; i < end; i++) {
    rightSum += nums[i];
    rightMax = Math.max(rightMax, rightSum);
  }
  return Math.max(
    maxSubarray4(nums, begin, mid),
    rightMax + leftMax,
    maxSubarray4(nums, mid, end)
  );
}
maxSubarray(nums);
