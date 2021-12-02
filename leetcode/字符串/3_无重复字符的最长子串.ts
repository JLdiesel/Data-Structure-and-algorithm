function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;
  //用来保存每一个字符上一次出现的位置
  const map = new Map<string, number>();
  let li = 0; //i-1字符结尾的最长不重复子串的开始索引
  let maxLength = 1;
  map.set(s[0], 0);
  for (let i = 1; i < s.length; i++) {
    let pi = map.get(s[i]) ?? -1; //i位置字符上一次出现的位置
    if (li <= pi) {
      li = pi + 1;
    }
    maxLength = Math.max(i - li + 1, maxLength);
    map.set(s[i], i);
  }
  return maxLength;
}
//假设字符串只包含26个小写字母
function lengthOfLongestSubstring2(s: string): number {
  if (!s) return 0;
  //用来保存每一个字符上一次出现的位置
  const prevIndex = new Array(26);
  let li = 0; //i-1字符结尾的最长不重复子串的开始索引
  let maxLength = 1;
  prevIndex[s.charCodeAt(0) - 'a'.charCodeAt(0)] = 0;
  for (let i = 1; i < s.length; i++) {
    let pi = prevIndex[s.charCodeAt(i) - 'a'.charCodeAt(0)] ?? -1; //i位置字符上一次出现的位置
    if (li <= pi) {
      li = pi + 1;
    }
    prevIndex[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    maxLength = Math.max(i - li + 1, maxLength);
  }
  return maxLength;
}
console.log(lengthOfLongestSubstring2('au'));
