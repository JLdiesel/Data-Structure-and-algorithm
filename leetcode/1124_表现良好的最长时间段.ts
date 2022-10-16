/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  let ans = 0;
  hours.unshift(0);
  const map = {};
  map[0] = 0;
  let count = 0;
  for (let i = 1; i < hours.length; i++) {
    if (hours[i] > 8) {
      count += 1;
    } else {
      count -= 1;
    }
    if (map[count] === undefined) {
      map[count] = i;
    }
    let j = count - 1;
    while (map[j] !== undefined) {
      ans = Math.max(ans, i - map[j]);
      j--;
    }
  }
  return ans;
};
