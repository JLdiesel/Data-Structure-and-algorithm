/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
  const n = nums2.length
  const idx = new Array(nums2.length).fill(0)
  for (let i = 0; i < n; i++) idx[i] = i;
  idx.sort((a, b) => nums2[a] - nums2[b])
  nums1.sort((a, b) => a - b)
  let left = 0, right = nums2.length - 1
  for (const item of nums1) {
    const n2=nums2[idx[left]]
    if (item > n2) {
      nums2[idx[left++]]=item
    } else {
      nums2[idx[right--]]=item
    }
  }

  return nums2
};
advantageCount([2, 0, 4, 1, 2], [1, 3, 0, 0, 2])
