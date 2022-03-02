function threeSum(nums: number[]): number[][] {
  const list: number[][] = [];
  nums.sort((a, b) => a - b);
  const lastIndex = nums.length - 3;
  const lastR = nums.length - 1;
  for (let i = 0; i <= lastIndex; i++) {
    if (i && nums[i] === nums[i - 1]) continue;
    let l = i + 1,
      r = lastR;
    const remain = -nums[i];
    while (l < r) {
      const sumLr = nums[l] + nums[r];
      if (sumLr === remain) {
        list.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (sumLr < remain) {
        l++;
      } else {
        r--;
      }
    }
  }
  return list;
}
console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]));
