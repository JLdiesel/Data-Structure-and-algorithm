/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let min = 0;
  let min2 = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      const ij = nums[i] + nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        const ijk = ij + nums[k];
        const result = Math.abs(target - ijk);
        if (result < min2) {
          min = ijk;
          min2 = result;
        }
      }
    }
  }
  return min;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest2 = function (nums, target) {
  let min = 0;
  let min2 = Number.MAX_SAFE_INTEGER;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    if (i && nums[i] === nums[i - 1]) continue;
    let l = i + 1,
      r = nums.length - 1;
    const needTarget = target - nums[i];
    while (l < r) {
      const result = nums[l] + nums[r];
      const need = Math.abs(needTarget - result);
      console.log(nums[i], nums[l], nums[r]);

      if (need === 0) {
        return target;
      }
      if (need < min2) {
        min = result + nums[i];
        min2 = need;
      }
      if (result > needTarget) {
        r--;
        while (l < r && nums[r - 1] === nums[r]) r--;
      } else {
        l++;
        while (l < r && nums[l + 1] === nums[l]) l++;
      }
    }
  }
  return min;
};
console.log(threeSumClosest2([-4, -2, 0, 1, 2, 4], 55));
