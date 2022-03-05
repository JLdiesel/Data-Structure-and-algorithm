function trap(height: number[]): number {
  if (height.length < 2) return 0;
  let lastIndex = height.length - 2;
  const leftMaxes = new Array(height.length);
  leftMaxes[0] = height[0];
  const rightMaxes = new Array(height.length);
  rightMaxes[height.length - 1] = height[height.length - 1];
  for (let i = 1; i < height.length; i++) {
    leftMaxes[i] = Math.max(height[i], leftMaxes[i - 1]);
  }
  for (let i = height.length - 2; i >= 0; i--) {
    rightMaxes[i] = Math.max(height[i], rightMaxes[i + 1]);
  }
  let water = 0;
  for (let i = 0; i <= lastIndex; i++) {
    //求出左右两边最大值的较小值
    const min = Math.min(leftMaxes[i], rightMaxes[i]);
    //说明这根柱子不能放水
    if (min <= height[i]) continue;
    //说明这根柱子能放水
    water += min - height[i];
  }
  return water;
}
/* 
空间 O1 时间 On
*/
function trap2(height: number[]): number {
  if (height.length < 2) return 0;
  let l = 0,
    r = height.length - 1,
    lowerMax = 0;
  let water = 0;
  while (l < r) {
    const lower = height[l] < height[r] ? height[l++] : height[r--];
    lowerMax = Math.max(lower, lowerMax);
    water += lowerMax - lower;
  }
  return water;
}
