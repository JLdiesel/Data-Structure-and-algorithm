/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    let all = 1 + item;
    let count = 2;
    for (let j = 2; j * j < item; j++) {
      if (count > 4) break;
      if (item % j === 0) {
        all += j;
        all += item / j;
        count += 2;
      }
    }
    if (count === 4) sum += all;
  }
  return sum;
};
