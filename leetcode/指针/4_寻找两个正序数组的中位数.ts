function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nums3 = nums1.concat(nums2);
  nums3.sort((a, b) => a - b);
  const halfLen = nums3.length / 2;
  return (nums3.length & 1) === 0
    ? (nums3[Math.floor(halfLen)] + nums3[Math.ceil(halfLen)]) / 2
    : nums3[Math.floor(halfLen)];
}
