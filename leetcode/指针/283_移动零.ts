function moveZeroes(nums: number[]) {
  if (!nums) return;
  for (let i = 0, cur = 0; i < nums.length; i++) {
    if (nums[i] === 0) continue;
    if (cur !== i) {
      nums[cur] = nums[i];
      nums[i] = 0;
    }
    cur++;
  }
}
