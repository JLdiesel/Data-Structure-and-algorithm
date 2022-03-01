function combinationSum(candidates: number[], target: number): number[][] {
  const nums: number[] = [];
  const list: number[][] = [];
  let count = 0;
  if (!target || !candidates.length) return [];
  function dfs(begin: number, target: number) {
    count++;
    if (target === 0) {
      list.push([...nums]);
      return;
    }
    //因为数组是不重复的，所以第一个值取完之后
    for (let i = begin; i < candidates.length; i++) {
      const item = candidates[i];
      if (item <= target) {
        nums.push(item);
        dfs(i, target - item); //因为是可以重复选择的 所以begin=i  如果不能重复  则=begin+1
        nums.pop();
      }
    }
  }
  dfs(0, target);
  console.log('执行了', count);

  return list;
}
function combinationSum2(candidates: number[], target: number): number[][] {
  const ans = [];
  let count = 0;
  const dfs = (target, nums: number[], idx) => {
    count++;
    if (idx === candidates.length) {
      return;
    }
    if (target === 0) {
      ans.push(nums);
      return;
    }
    // 直接跳过
    dfs(target, nums, idx + 1);
    // 选择当前数
    if (target - candidates[idx] >= 0) {
      dfs(target - candidates[idx], [...nums, candidates[idx]], idx);
    }
  };

  dfs(target, [], 0);
  console.log('执行了', count);
  return ans;
}
console.log(combinationSum([2, 3, 5, 7], 7));
