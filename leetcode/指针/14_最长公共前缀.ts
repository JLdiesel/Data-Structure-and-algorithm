/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // strs.sort((a, b) => a.length < b.length);
  let len = strs[0].length;
  let min = strs[0];
  for (let i = 1; i < strs.length; i++) {
    if (len === 0) return '';
    const item = strs[i];
    for (let j = 0; j < len; j++) {
      if (min[j] === item[j]) continue;
      min = min.slice(0, j);
      len = j;
    }
  }
  return min;
};
