/* 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 */
function isAnagram(s: string, t: string): boolean {
  if (!s || !t) return false;
  if (s.length !== t.length) return false;
  const counts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  for (let i = 0; i < t.length; i++) {
    if (--counts[t.charCodeAt(i) - 'a'.charCodeAt(0)] < 0) {
      return false;
    }
  }

  return true;
}
