function convert(s: string, numRows: number): string {
  const len = s.length,
    r = numRows;
  if (r <= 1 || len <= r) return s;
  const t = (r - 1) * 2; //周期
  const cache = [];
  for (let i = 0; i < r; i++) {
    //遍历每一行
    for (let j = 0; j < len - i; j += t) {
      //每一行的周期
      //第一个字符
      cache.push(s[j + i]);
      if (i > 0 && i < r - 1 && j + t - i < len) {
        //如果不是第一行或者最后一个行并且该周期内该行有数字
        //第二个字符
        cache.push(s[j + t - i]);
      }
    }
  }
  return cache.join('');
}
console.log(convert('PAYPALISHIRING', 3));
