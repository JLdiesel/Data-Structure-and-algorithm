/**
 * @param {number[]} arr
 * @return {number[]}
 */
var threeEqualParts = function (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) count++;
  }
  const num = count / 3;
  if ((num | 0) !== num) return [-1, -1];
  if (!count) return [0, arr.length - 1];
  let i, j, k;
  for (let n = 0, nowCount = 0; n < arr.length; n++) {
    if (!arr[n]) continue;
    if (!nowCount) {
      if (i === undefined) {
        i = n;
      } else if (j === undefined) {
        j = n;
      } else {
        k = n;
      }
    }
    nowCount++;
    if (nowCount === num) {
      nowCount = 0;
    }
  }
  while (k <= arr.length - 1) {
    if (arr[i] === arr[j] && arr[j] === arr[k]) {
      i++;
      j++;
      k++;
    } else {
      return [-1, -1];
    }
  }
  return [i - 1, j];
};

threeEqualParts([1, 0, 1, 0, 1, 0]);
