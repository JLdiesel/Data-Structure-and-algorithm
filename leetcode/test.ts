function permute(nums) {
  if (!nums.length) return;
  const map = new Set();
  dfs(0);

  function dfs(index) {
    if (index === nums.length) {
      if (is(nums)) {
        if (map.has(`${nums[4]}${nums[5]} x ${nums[6]}${nums[7]}${nums[8]}`)) {
          return;
        }
        map.add(`${nums[4]}${nums[5]} x ${nums[6]}${nums[7]}${nums[8]}`);
        console.log(
          `${nums[0]}${nums[1]} x ${nums[2]}${nums[3]} = ${nums[4]}${nums[5]} x ${nums[6]}${nums[7]}${nums[8]}`
        );
      }
      return;
    }
    for (let i = index; i < nums.length; i++) {
      if (isRepeat(nums, index, i)) continue;
      swap(index, i);
      dfs(index + 1);
      swap(index, i);
    }
  }
  function isRepeat(nums, index, i): boolean {
    for (let j = index; j < i; j++) {
      if (nums[j] === nums[i]) return true;
    }
    return false;
  }
  function is(arr) {
    return (
      (arr[0] * 10 + arr[1]) * (arr[2] * 10 + arr[3]) ===
      (arr[4] * 10 + arr[5]) * (arr[6] * 100 + arr[7] * 10 + arr[8])
    );
  }
  function swap(i, j) {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }
}
permute([1, 2, 3, 4, 5, 6, 7, 8, 9]);
