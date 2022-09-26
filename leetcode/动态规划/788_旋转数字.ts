/**
 * @param {number} n
 * @return {number}
 */
function rotatedDigits(n) {
  if (n < 2) return 0;
  if (n < 5) return 1;
  if (n < 6) return 2;
  if (n < 9) return 3;
  if (n < 12) return 4;
  const goods = [0, 1, 2, 5, 6, 8, 9];
  const cache: [number, boolean][] = [
    [1, false],
    [2, true],
    [5, true],
    [6, true],
    [8, false],
    [9, true]
  ];
  let index = 0;
  let count = 4;
  while (true) {
    for (let i = 0; i < goods.length; i++) {
      const resultNum = cache[index][0] * 10 + goods[i];
      if (resultNum > n) return count;
      else {
        if (cache[index][1]) {
          count++;
          cache.push([resultNum, true]);
        } else {
          if ([2, 5, 6, 9].includes(goods[i])) {
            count++;
            cache.push([resultNum, true]);
          } else {
            cache.push([resultNum, false]);
          }
        }
      }
    }
    index++;
  }
}
console.log(rotatedDigits(857));
