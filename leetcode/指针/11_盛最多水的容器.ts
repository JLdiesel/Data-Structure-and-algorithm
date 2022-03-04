function maxArea(height: number[]): number {
  if (height.length < 2) return 0;

  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    if (height[left] < height[right]) {
      const minH = height[left];
      maxArea = Math.max(maxArea, minH * (right - left));
      while (height[left] <= minH) left++; //如果left+1<当前的最小值 则面积不可能更大，跳过该次计算
    } else {
      const minH = height[right];
      maxArea = Math.max(maxArea, minH * (right - left));
      while (height[right] <= minH) right--; //如果right-1<当前的最小值 则面积不可能最大，跳过该次计算
    }
  }
  return maxArea;
}
function maxArea2(height: number[]): number {
  if (height.length < 2) return 0;
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const minH = Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, minH * (right - left));
    while (height[left] <= minH) left++;
    while (height[right] <= minH) right--; //如果right-1<当前的最小值 则面积不可能最大，跳过该次计算
  }
  return maxArea;
}
