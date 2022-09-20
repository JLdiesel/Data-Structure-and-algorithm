var canPartitionKSubsets = function (nums, k) {
  let sum = 0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  const allSum = sum / k
  if (nums[nums.length - 1] > allSum) return false
  if ((allSum | 0) !== allSum) return false
  function dfs(nums, index, bucket) {
    if (index === nums.length) return true
    for (let i = 0; i < k; i++) {
      if (i > 0 && bucket[i] == bucket[i - 1]) continue;
      if (bucket[i] + nums[index] > allSum) continue
      bucket[i] += nums[index]
      if (dfs(nums, index + 1, bucket)) return true
      bucket[i] -= nums[index]
    }
    return false
  }
  return dfs(nums, 0, new Array(k).fill(0))
  // function backtrack(nums, index, bucket, k, target) {
  //   // 结束条件优化
  //   if (index == nums.length) return true;
  //   for (let i = 0; i < k; i++) {
  //     // 优化点二
  //     if (i > 0 && bucket[i] == bucket[i - 1]) continue;
  //     // 剪枝
  //     if (bucket[i] + nums[index] > target) continue;
  //     bucket[i] += nums[index];
  //     if (backtrack(nums, index + 1, bucket, k, target)) return true;
  //     bucket[i] -= nums[index];
  //   }
  //   return false;
  // }
  // return backtrack(nums, 0, new Array(k).fill(0), k, allSum)
};
console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1],
  4));
