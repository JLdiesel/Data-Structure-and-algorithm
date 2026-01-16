/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} hFences
 * @param {number[]} vFences
 * @return {number}
 */
var maximizeSquareArea = function (m, n, hFences, vFences) {
  hFences.sort((a, b) => a - b);
  vFences.sort((a, b) => a - b);
  hFences.unshift(1);
  hFences.push(m);
  vFences.unshift(1);
  vFences.push(n);
  function getGapList(arr) {
    const set = new Set();
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        set.add(arr[j] - arr[i]);
      }
    }
    return set;
  }
  const hGaps = getGapList(hFences);
  const vGaps = getGapList(vFences);
  let max = 0;
  hGaps.forEach((hGap) => {
    if (vGaps.has(hGap)) {
      max = Math.max(max, hGap);
    }
  });
  if (max === 0) return -1;
  return Number((BigInt(max) * BigInt(max)) % BigInt(1e9 + 7));
};
