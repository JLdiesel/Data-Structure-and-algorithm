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
    if (nums1[i1] > nums2[i2]) {
      nums1[cur] = nums1[i1--];
    } else {
      nums1[cur] = nums2[i2--];
    }
    cur--;
  }
}
function merge2(nums1: number[], m: number, nums2: number[], n) {
  let le = m - 1,
    mi = nums1.length - 1,
    re = n - 1;

  while (re >= 0) {
    if (nums1[le] > nums2[re]) {
      nums1[mi] = nums1[le--];
      if (le < 0) {
        mi--;
        break;
      }
    } else {
      nums1[mi] = nums2[re--];
    }
    mi--;
  }

  while (re >= 0) {
    nums1[mi--] = nums2[re--];
  }

  return nums1;
}
const arr1 = [2, 0];
const arr2 = [1];
const result = merge(arr1, 1, arr2, 1);

merge(nums1, 3, nums2, 3);
console.log(nums1);
console.log(nums1[-1]);
export {};
