/**
 * @param {number[]} arr
 * @return {number}
 */
//暴力
var maxChunksToSorted = function (arr) {
  let result = 0,
    flag = false,
    cacheMax = arr[0],
    cacheMin = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) {
      if (!flag) {
        cacheMin = i;
        flag = true;
      }
      cacheMax = Math.max(cacheMax, arr[i]);
    }
    if (arr[i] === i) {
      if (!flag) {
        result++;
      }
    }
    if (arr[i] === cacheMin) {
      if (i >= cacheMax) {
        result++;
      } else {
        while (cacheMax !== i || arr[i] > cacheMax) {
          cacheMax = Math.max(cacheMax, arr[i]);
          i++;
        }
        result++;
      }
      flag = false;
    }
  }
  return result;
};
var maxChunksToSorted = function (arr) {
  let m = 0,
    res = 0;
  for (let i = 0; i < arr.length; i++) {
    m = Math.max(m, arr[i]);
    if (m === i) {
      res++;
    }
  }
  return res;
};
//下标和加起来相同
var maxChunksToSorted = function (arr) {
  let res = 0,
    l = 0,
    r = 0;
  for (let i = 0; i < arr.length; i++) {
    l += i;
    r += arr[i];
    if (l === r) {
      res++;
    }
  }
  return res;
};
