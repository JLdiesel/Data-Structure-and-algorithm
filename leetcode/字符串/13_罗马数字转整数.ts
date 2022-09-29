/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const rom = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  for (let i = 0, j = 1; i < s.length; i++, j++) {
    const ri = rom[s[i]];
    const rj = rom[s[j]];
    if (j < s.length && ri < rj) {
      result = result + rj - ri;
      i++;
      j++;
    } else {
      result += ri;
    }
  }
  return result;
};
