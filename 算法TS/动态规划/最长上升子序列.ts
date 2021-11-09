const nums = [10, 7, 101, 18];
function longestUp(nums: number[]) {
  if (!nums || nums.length === 0) return 0;
  const dp: number[] = new Array(nums.length).fill(1);
  let max = dp[0];
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] <= nums[j]) continue;
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    max = Math.max(dp[i], max);
  }
  console.log(max);

  return max;
}
//纸牌法
function longestUp2(nums: number[]) {
  if (!nums || nums.length === 0) return 0;
  let len: number = 0;
  let top: number[] = new Array(nums.length);
  for (const num of nums) {
    let j = 0;
    while (j < len) {
      if (top[j] >= num) {
        top[j] = num;
        break;
      }
      j++;
    }
    if (j === len) {
      len++;
      top[j] = num;
    }
  }
  return len;
}
//纸牌法二分查找优化
function longestUp3(nums: number[]) {
  if (!nums || nums.length === 0) return 0;
  let len: number = 0;
  let top: number[] = new Array(nums.length);
  for (const num of nums) {
    let begin = 0;
    let end = len;
    while (begin < end) {
      let mid = (begin + end) >> 1;
      if (num <= top[mid]) {
        //右开
        end = mid;
      } else {
        //左闭
        begin = mid + 1;
      }
    }
    top[begin] = num;
    if (begin === len) len++;
  }
  return len;
}

console.log(longestUp3(nums));

export {};
