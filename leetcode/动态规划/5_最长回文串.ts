//动态规划 On2 On2-n
function longestPalindromeDp(s: string): string {
  if (!s) return s;
  const dp: boolean[][] = new Array(s.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(s.length).fill(false);
  }
  //最长回文子串的开始索引
  let begin = 0;
  //长度
  let maxlen = 1;
  //从下到上  从左到右  通过左下角推出右上角
  for (let i = dp.length - 1; i >= 0; i--) {
    for (let j = i; j < dp.length; j++) {
      const len = j - i + 1;
      dp[i][j] = s[i] === s[j] && (len <= 2 || dp[i + 1][j - 1]);
      if (dp[i][j]) {
        //说明s[i,j)是回文子串
        if (len > maxlen) {
          begin = i;
          maxlen = len;
        }
      }
    }
  }
  return s.slice(begin, begin + maxlen);
}
//中心法  On2 O1
function longestPalindrome(s: string): string {
  if (!s) return s;
  //最长回文子串的开始索引
  let begin = 0;
  //长度
  let maxlen = 1;

  for (let i = s.length - 2; i >= 1; i--) {
    let len1 = findCenterLen(s, i - 1, i + 1);
    let len2 = findCenterLen(s, i, i + 1);
    // if (len1.len < len2.len) {
    //   if (len2.len > maxlen) {
    //     maxlen = len2.len;
    //     begin = len2.begin;
    //   }
    // } else {
    //   if (len1.len > maxlen) {
    //     maxlen = len1.len;
    //     begin = len1.begin;
    //   }
    // }
    len1 = Math.max(len1, len2);
    if (len1 > maxlen) {
      maxlen = len1;
      begin = i - ((maxlen - 1) >> 1);
    }
  }
  //处理0号字符右边的间隙
  if (s[0] === s[1] && maxlen < 2) {
    maxlen = 2;
    begin = 0;
  }
  return s.slice(begin, begin + maxlen);
}
/**
 * 以i为中心的最长回文子串的长度
 * @param s
 * @param l
 * @param r
 * @returns 从l开始向左，从r开始向右扫描的最长回文子串的长度
 */
function findCenterLen(s: string, l: number, r: number) {
  while (l >= 0 && s[l] === s[r] && r <= s.length - 1) {
    l--;
    r++;
  }
  // return {
  //   begin: l + 1,
  //   len: r - l - 1,
  // };
  return r - l - 1;
}
//中心法优化  On2 O1
function longestPalindrome2(s: string): string {
  if (!s) return s;
  //最长回文子串的开始索引
  let begin = 0;
  //长度
  let maxlen = 1;
  let i = 0;
  while (i < s.length) {
    //i-1作为l 寻找最长回文子串
    let l = i - 1;
    //找到右边第一个不等于s[i]的位置
    let r = i;
    while (++r < s.length && s[r] === s[i]);

    //r会成为新的i
    i = r;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    //s(l,r)就是刚才找到的最大回文子串
    const len = r - ++l;
    if (len > maxlen) {
      maxlen = len;
      begin = l;
    }
  }

  return s.slice(begin, begin + maxlen);
}
