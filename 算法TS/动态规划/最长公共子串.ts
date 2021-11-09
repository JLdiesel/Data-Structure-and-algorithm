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
  let max = 0;
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        max = Math.max(dp[i][j], max);
      } else {
        dp[i][j] = 0;
      }
    }
  }
  console.log(max);
}
function lcs2(nums1: string, nums2: string) {
  if (!nums1 || nums1.length === 0) return 0;
  if (!nums2 || nums2.length === 0) return 0;
  let rowsChars = nums1,
    colsChars = nums2;
  if (nums1.length < nums2.length) {
    colsChars = nums1;
    rowsChars = nums2;
  }
  const dp: number[] = new Array(colsChars.length + 1).fill(0);
  let max = 0;
  for (let row = 1; row <= rowsChars.length; row++) {
    let cur = 0;
    for (let col = 1; col <= colsChars.length; col++) {
      let leftTop = cur;
      cur = dp[col];
      if (nums1[row - 1] === nums2[col - 1]) {
        dp[col] = leftTop + 1;
        max = Math.max(dp[col], max);
      } else {
        dp[col] = 0;
      }
    }
  }
  return max;
}
function lcs3(nums1: string, nums2: string) {
  if (!nums1 || nums1.length === 0) return 0;
  if (!nums2 || nums2.length === 0) return 0;
  let rowsChars = nums1,
    colsChars = nums2;
  if (nums1.length < nums2.length) {
    colsChars = nums1;
    rowsChars = nums2;
  }
  const dp: number[] = new Array(colsChars.length + 1).fill(0);
  let max = 0;
  for (let row = 1; row <= rowsChars.length; row++) {
    for (let col = colsChars.length; col >= 1; col--) {
      if (nums1[row - 1] === nums2[col - 1]) {
        dp[col] = dp[col - 1] + 1;
        max = Math.max(dp[col], max);
      } else {
        dp[col] = 0;
      }
    }
  }
  return max;
}
console.log(lcs3('ADCBA', 'ABCBA'));
