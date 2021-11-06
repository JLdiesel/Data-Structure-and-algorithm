function lcs(nums1: string, nums2: string) {
  if (!nums1 || nums1.length === 0) return 0;
  if (!nums2 || nums2.length === 0) return 0;
  const dp: number[][] = new Array(nums1.length + 1);
  for (let i = 0; i <= nums1.length; i++) {
    dp[i] = new Array(nums2.length + 1);
    dp[i][0] = 0;
  }
  for (let i = 1; i <= nums2.length; i++) {
    dp[0][i] = 0;
  }
}
