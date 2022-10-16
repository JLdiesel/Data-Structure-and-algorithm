function process(arr: number[], limit: number) {
  arr.sort((a, b) => a - b);
  limit--;
  let p = 1;
  while (p <= limit / 10) {
    p *= 10;
  }
  const ans = process2(arr, limit, p);
  if (ans !== -1) {
    return ans;
  } else {
    p /= 10;
    let result = 0;
    while (p >= 1) {
      result += arr[arr.length - 1] * p;
      p /= 10;
    }
    return result;
  }
  function process2(arr: number[], limit: number, percent: number): number {
    const now = (limit / percent) % 10 | 0;
    let near = nearFn(arr, now);
    if (near === -1) {
      return -1;
    } else if (arr[near] === now) {
      if (percent === 1) return limit;
      const ans = process2(arr, limit, percent / 10);
      if (ans !== -1) {
        return ans;
      } else if (near > 0) {
        near--;
        let result = 0;
        result += ((limit / (percent * 10)) | 0) * percent * 10;
        result += arr[near] * percent;
        percent /= 10;
        while (percent >= 1) {
          result += arr[arr.length - 1] * percent;
          percent /= 10;
        }
        return result;
      } else {
        return -1;
      }
    } else {
      let result = 0;

      result += ((limit / (percent * 10)) | 0) * percent * 10;
      result += arr[near] * percent;
      percent /= 10;
      while (percent >= 1) {
        result += arr[arr.length - 1] * percent;
        percent /= 10;
      }
      return result;
    }
  }
  function nearFn(arr: number[], now: number) {
    const index = arr.findIndex((item) => item > now);
    return ~index ? index - 1 : arr.length - 1;
  }
}
console.log(process([2, 5, 8], 5234));
export default {};
