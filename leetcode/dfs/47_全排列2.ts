//全排列 有重复字符
function permute4(nums: number[]) {
  const list = [];
  if (!nums.length) return list;
  dfs(0);
  function dfs(index: number) {
    if (index === nums.length) {
      list.push([...nums]);
      return;
    }
    for (let i = index; i < nums.length; i++) {
      //保证一个数字在index位置只会出现一次
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
  function swap(i: number, j: number) {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }
  return list;
}
