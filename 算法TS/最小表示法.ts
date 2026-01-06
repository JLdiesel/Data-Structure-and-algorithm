const s = 'bbacb';
/**
 * 获取字符串中最小的子序列
 * @param s 给定的字符串
 * @return 最小的子序列
 */
function getMin(s: string) {
  // 左指针
  let i = 0,
    // 右指针
    j = 1,
    // 重复字符的个数
    k = 0,
    // 字符串长度
    n = s.length;
  while (i < n && j < n && k < n) {
    // 左指针所指向的字符
    const a = s[(i + k) % n],
      // 右指针所指向的字符
      b = s[(j + k) % n];
    // 如果两个字符相同，则重复字符的个数加1
    if (a == b) k++;
    else {
      // 如果两个字符不同，则将指针向前移动
      a > b ? (i += k + 1) : (j += k + 1);

      // 如果左指针和右指针指向同一个位置，则将左指针向前移动一位
      if (i == j) i++;
      // 重复字符的个数重置为0
      k = 0;
    }
  }
  // 取左指针和右指针中的较小值
  i = Math.min(i, j);
  // 返回最小的子序列
  return s.substring(i) + s.substring(0, i);
}

console.log(getMin(s));
