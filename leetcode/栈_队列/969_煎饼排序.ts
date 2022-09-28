/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
  const iArr = new Array(arr.length).fill(0);
  const result = [];
  let last = arr.length - 1;
  for (let i = 0; i < iArr.length; i++) {
    iArr[arr[i] - 1] = i;
  }

  function swap(k) {
    if (k === 0) return;
    result.push(k + 1);
    let left = 0,
      right = k;
    while (left < right) {
      const m = arr[left];
      arr[left] = arr[right];
      arr[right] = m;
      const s = iArr[arr[left] - 1];
      iArr[arr[left] - 1] = iArr[arr[right] - 1];
      iArr[arr[right] - 1] = s;
      left++;
      right--;
    }
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    const nowIndex = iArr[i];

    if (nowIndex === last) {
      last--;
      continue;
    }
    if (nowIndex !== 0) {
      swap(nowIndex);
    }
    swap(last);
    last--;
  }
  return result;
};
console.log(pancakeSort([1, 3, 2, 4]));

console.log(pancakeSort([1, 2, 3, 4]));
console.log(pancakeSort([1, 3, 4, 2]));
console.log(pancakeSort([3, 2, 4, 1]));
console.log(pancakeSort([3, 2, 1, 4]));
