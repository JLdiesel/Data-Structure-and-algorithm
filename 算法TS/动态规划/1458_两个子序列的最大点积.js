/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function (nums1, nums2) {
  const deps = new Array(nums1.length + 1)
    .fill(-1000000)
    .map(() => new Array(nums2.length + 1).fill(-1000000));
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      deps[i][j] = Math.max(
        deps[i - 1][j - 1] + nums1[i - 1] * nums2[j - 1],
        deps[i - 1][j],
        deps[i][j - 1],
        nums1[i - 1] * nums2[j - 1]
      );
    }
  }
  return deps[nums1.length][nums2.length];
};
