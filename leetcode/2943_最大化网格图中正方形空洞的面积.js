/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} hBars
 * @param {number[]} vBars
 * @return {number}
 */
var maximizeSquareHoleArea = function (n, m, hBars, vBars) {
  hBars.sort((a, b) => a - b);
  vBars.sort((a, b) => a - b);
  function getMaxLong(arr) {
    if (arr.length <= 1) return 1;
    let res = 0;
    let max = 1,
      now = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (now + 1 === arr[i]) {
        max++;
        res = Math.max(max, res);
      } else {
        res = Math.max(max, res);
        max = 1;
      }
      now = arr[i];
    }
    return Math.max(max, res);
  }
  const hres = getMaxLong(hBars);
  const vres = getMaxLong(vBars);
  console.log(hres, vres);
  const res = Math.min(hres + 1, vres + 1);
  return res * res;
};
console.log(maximizeSquareHoleArea(4, 40, [5, 3, 2, 4], [36, 41, 6, 34, 33]));
