/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    while (nums[i] && nums[i] > 0 && nums[i] !== nums[nums[i] - 1]) {
      swap(i, nums[i] - 1);
    }
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] - 1 !== i) return i + 1;
  }
  return len + 1;
  function swap(a, b) {
    const item = nums[a];
    nums[a] = nums[b];
    nums[b] = item;
  }
};
