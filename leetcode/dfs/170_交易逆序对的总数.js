/**
 * @param {number[]} record
 * @return {number}
 */
var reversePairs = function (record) {
  const temp = [];
  function dfs(arr, l, r) {
    if (l >= r) return 0;
    let ans = 0,
      mid = (l + r) >> 1;
    ans += dfs(arr, l, mid);
    ans += dfs(arr, mid + 1, r);
    let k = l,
      lIndex = l,
      rIndex = mid + 1;
    while (lIndex <= mid || rIndex <= r) {
      if ((arr[lIndex] <= arr[rIndex] && lIndex <= mid) || rIndex > r) {
        temp[k++] = arr[lIndex++];
      } else {
        temp[k++] = arr[rIndex++];
        ans += mid - lIndex + 1;
      }
    }
    for (let i = l; i <= r; i++) {
      arr[i] = temp[i];
    }
    return ans;
  }
  return dfs(record, 0, record.length - 1);
};
