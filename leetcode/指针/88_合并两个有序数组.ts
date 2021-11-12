const nums1 = [1, 3, 5, 0, 0, 0];
const nums2 = [2, 4, 6];
/**
 *
 * @param nums1 数组1  除去m的数量后会加上n个0占位
 * @param m nums1的元素数量
 * @param nums2 数组2
 * @param n nums2的元素数量
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i1 = m - 1;
  let i2 = n - 1;
  let cur = nums1.length - 1;
  while (i2 >= 0) {
    if (i1 >= 0 && nums1[i1] > nums2[i2]) {
      nums1[cur] = nums1[i1--];
    } else {
      nums1[cur] = nums2[i2--];
    }
    cur--;
  }
}

merge(nums1, 3, nums2, 3);
console.log(nums1);
console.log(nums1[-1]);
export {};
