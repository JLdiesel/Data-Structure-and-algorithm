let findLength = function (A: Array<number>, B: Array<number>): number {
  return A.length < B.length ? findMax(A, B) : findMax(B, A);
};
function findMax(A, B): number {
  let max: number = 0;
  let an: number = A.length;
  let bn: number = B.length;
  for (let len = 1; len <= an; len++) {
    max = Math.max(max, maxLen(A, 0, B, bn - len, len));
  }
  // for (let j = bn - an; j >= 0; j--) {
  //     max = Math.max(max, maxLen(A, 0, B, j, an));
  // }
  for (let i = 1; i < an; i++) {
    max = Math.max(max, maxLen(A, i, B, 0, an - i));
  }
  return max;
}

function maxLen(
  a: Array<number>,
  i: number,
  b: Array<number>,
  j: number,
  len: number
): number {
  let count = 0,
    max = 0;
  for (let k = 0; k < len; k++) {
    if (a[i + k] == b[j + k]) {
      count++;
    } else if (count > 0) {
      max = Math.max(max, count);
      count = 0;
    }
  }
  return count > 0 ? Math.max(max, count) : max;
}

console.log(findLength([0, 0, 0, 0, 1], [1, 0, 0, 0, 0]));
