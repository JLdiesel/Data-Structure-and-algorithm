//双端队列
function maxSlidingWindowDeque(nums: number[], k: number): number[] {
  if (nums === null || nums.length === 0 || k < 1) return [];
  if (k === 1) return nums;
  const maxes = new Array(nums.length - k + 1);
  const deque = [];
  for (let i = 0; i < nums.length; i++) {
    //只要nums[队尾]<= nums[i],就删除队尾
    while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
      deque.pop();
    }
    //将i入队
    deque.push(i);
    //检查窗口的索引是否合法
    const w = i - k + 1;
    if (w < 0) continue;
    //检查队头的合法性;
    if (deque[0] < w) {
      //队头不合法(失效，不在滑动窗口索引范围内)
      deque.shift();
    }
    //设置窗口的最大值
    maxes[w] = nums[deque[0]];
  }
  return maxes;
}
function maxSlidingWindow(nums: number[], k: number): number[] {
  if (nums === null || nums.length === 0 || k < 1) return [];
  if (k === 1) return nums;
  const maxes = new Array(nums.length - k + 1);
  let maxIndex = 0;
  //先求出前K个元素的最大值索引
  for (let i = 1; i < k; i++) {
    if (nums[i] > nums[maxIndex]) {
      maxIndex = i;
    }
  }
  maxes[0] = nums[maxIndex];
  //li 是滑动窗口的最左索引，ri是滑动窗口的最右索引
  for (let li = 1; li < maxes.length; li++) {
    let ri = li + k - 1;
    if (maxIndex < li) {
      //最大值的索引不在滑动窗口的合理范围内
      maxIndex = li;
      for (let i = li + 1; i <= ri; i++) {
        if (nums[i] >= nums[maxIndex]) {
          maxIndex = i;
        }
      }
    } else if (nums[ri] >= nums[maxIndex]) {
      //最大值的索引在滑动窗口的合理范围内
      maxIndex = ri;
    }
    maxes[li] = nums[maxIndex];
  }
  return maxes;
}
