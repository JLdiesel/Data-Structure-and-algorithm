const nums = [1, 0, 2, 1, 2, 1, 2];
/**
 *
 * @param nums 只包含 0 1 2的数组
 * 空间O(1) 时间O(n)
 */
// 遇到1 跳过 left指针++
// 遇到0  和左指针交换值 begin指针和left指针++
// 遇到2  和右指针交换值 end指针--
// 结束条件  left指针大于end指针
function sortColors(nums: number[]): void {
  //数组下标指针
  let left = 0;
  //头指针
  let begin = 0;
  //尾指针
  let end = nums.length - 1;
  while (left <= end) {
    const v = nums[left];
    if (v === 0) {
      swap(nums, begin++, left++);
    } else if (v === 1) {
      left++;
    } else {
      swap(nums, left, end--);
    }
  }
}
function swap(nums: number[], i: number, j: number) {
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}
sortColors(nums);
console.log(nums);

export {};
