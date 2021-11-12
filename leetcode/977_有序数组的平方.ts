/* 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序 */
const nums = [-4, -1, 0, 3, 10];
function sortedSquares(nums: number[]): number[] {
  const len = nums.length;
  let l = 0;
  let r = len - 1;
  let index = len - 1;
  const newNums = new Array(len);
  while (l <= r) {
    if (-nums[l] - nums[r] < 0) {
      newNums[index] = nums[r--] ** 2;
    } else {
      newNums[index] = nums[l++] ** 2;
    }
    index--;
  }
  return newNums;
}
// function compareAbs(a: number, b: number) {
//   return Math.abs(a) - Math.abs(b);
// }
console.log(sortedSquares(nums));

export {};
