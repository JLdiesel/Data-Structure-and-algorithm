/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length > 1 && nums[0] === 0) return false;
  if (nums.length === 1 && nums[0] === 0) return true;
  for (let i = 0; i < nums.length; i++) {
    if (i + nums[i] >= nums.length - 1) return true;
    if (nums[i] === 0) {
      let count = 2;
      for (let j = i - 1; j >= 0; j--) {
        if (nums[j] >= count) break;
        count++;
      }
      if (count === i + 2) return false;
    }
  }
  return true;
};
var canJump = function (nums) {
  if (nums.length > 1 && nums[0] === 0) return false;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + i >= nums.length - 1) return true;
    if (nums[i] === 0 && max <= i) return false;
    max = Math.max(nums[i] + i, max);
  }
};
