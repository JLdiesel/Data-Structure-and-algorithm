/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
  let arr = [1];
  let p3 = 0,
    p5 = 0,
    p7 = 0;
  for (let i = 0; i < k; i++) {
    const three = 3 * arr[p3];
    const five = 5 * arr[p5];
    const seven = 7 * arr[p7];
    const min = Math.min(three, five, seven);
    arr.push(min);
    if (three === min) p3++;
    if (five === min) p5++;
    if (seven === min) p7++;
  }
  return arr[k - 1];
};
