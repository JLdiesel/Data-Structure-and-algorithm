function lcs(nums1: number[], nums2: number[]) {
  if (!nums1 || nums1.length === 0) return 0;
  if (!nums2 || nums2.length === 0) return 0;
  return lcsMain(nums1, nums1.length, nums2, nums2.length);
}
function lcsMain(nums1: number[], i: number, nums2: number[], j: number) {
  if (i === 0 || j === 0) return 0;
  if (nums1[i - 1] === nums2[j - 1]) {
    return lcsMain(nums1, i - 1, nums2, j - 1) + 1;
  }
  return Math.max(
    lcsMain(nums1, i - 1, nums2, j),
    lcsMain(nums1, i, nums2, j - 1)
  );
}
//时间空间 nums1的长度*nums2的长度
function lcs2(nums1: string, nums2: string) {
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
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  // console.log(dp);

  return dp[nums1.length][nums2.length];
}
//时间空间 2*nums2的长度
function lcs3(nums1: string, nums2: string) {
  if (!nums1 || nums1.length === 0) return 0;
  if (!nums2 || nums2.length === 0) return 0;
  const dp: number[][] = new Array(2);
  for (let i = 0; i <= 2; i++) {
    dp[i] = new Array(nums2.length + 1);
    dp[i][0] = 0;
  }
  for (let i = 1; i <= nums2.length; i++) {
    dp[0][i] = 0;
  }
  for (let i = 1; i <= nums1.length; i++) {
    const row = i & 1;
    const prevRow = (i - 1) & 1;
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[row][j] = dp[prevRow][j - 1] + 1;
      } else {
        dp[row][j] = Math.max(dp[prevRow][j], dp[row][j - 1]);
      }
    }
  }
  return dp[nums1.length & 1][nums2.length];
}
//一维数组
function lcs4(nums1: string, nums2: string) {
  if (!nums1 || nums1.length === 0) return 0;
  if (!nums2 || nums2.length === 0) return 0;
  const dp: number[] = new Array(nums2.length + 1);
  dp.fill(0);

  for (let i = 1; i <= nums1.length; i++) {
    let cur = 0;

    for (let j = 1; j <= nums2.length; j++) {
      let leftTop = cur;
      cur = dp[j];
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[j] = leftTop + 1;
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
    }
  }
  return dp[nums2.length];
}
//用长度更短的数组当做列
function lcs5(nums1: string, nums2: string) {
  if (!nums1 || nums1.length === 0) return 0;
  if (!nums2 || nums2.length === 0) return 0;
  let rowsNums = nums1,
    colsNums = nums2;
  if (nums1.length < nums2.length) {
    colsNums = nums1;
    rowsNums = nums2;
  }
  const dp: number[] = new Array(colsNums.length + 1);
  dp.fill(0);
  for (let i = 1; i <= rowsNums.length; i++) {
    let cur = 0;
    for (let j = 1; j <= colsNums.length; j++) {
      let leftTop = cur;
      cur = dp[j];
      if (rowsNums[i - 1] === colsNums[j - 1]) {
        dp[j] = leftTop + 1;
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
    }
  }
  return dp[colsNums.length];
}
console.log(lcs5('abcba', 'abcbcba'));
export default {};
//dp(i,j)是[nums1前i个元素]与[nums2前j个元素]的最长公共子序列长度
