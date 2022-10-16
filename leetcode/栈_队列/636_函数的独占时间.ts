/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  const arr = [],
    result = new Array(n).fill(0);
  let pre = 0;
  for (let i = 0; i < logs.length; i++) {
    const item = logs[i];
    const [a, b, c] = item.split(':');
    const fn = Number(a);
    const duration = Number(c);
    if (b.includes('s')) {
      if (arr.length) {
        result[arr[arr.length - 1]] += duration - pre;
      }
      pre = duration;
      arr.push(fn);
    } else {
      const time = duration - pre + 1;
      pre = duration + 1;
      result[fn] += time;
      arr.pop();
    }
  }
  return result;
};
