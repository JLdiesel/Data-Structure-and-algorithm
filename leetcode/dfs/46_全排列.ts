/*
 * @Author: your name
 * @Date: 2022-02-22 18:59:27
 * @LastEditTime: 2022-02-28 18:15:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web\Data-Structure-and-algorithm\leetcode\dfs\46_全排列.ts
 */
function permute(nums: number[]) {
  const list = [];
  if (!nums.length) return list;
  const result: number[] = [];
  const used: boolean[] = [];
  dfs(0);
  function dfs(index: number) {
    if (index === nums.length) {
      list.push([...result]);
      return;
    }
    for (const indexs in nums) {
      if (used[indexs]) continue;
      result[index] = nums[indexs];
      used[indexs] = true;
      dfs(index + 1);
      used[indexs] = false;
    }
  }
  return list;
}
function permute2(nums: number[]) {
  const list = [];
  if (!nums.length) return list;
  const result: number[] = [];
  dfs(0);
  function dfs(index: number) {
    if (index === nums.length) {
      list.push([...result]);
      return;
    }
    for (const item of nums) {
      if (result.includes(item)) continue;
      result.push(item);
      dfs(index + 1);
      result.pop();
    }
  }
  return list;
}
function permute3(nums: number[]) {
  const list = [];
  if (!nums.length) return list;
  dfs(0);
  function dfs(index: number) {
    if (index === nums.length) {
      list.push([...nums]);
      return;
    }
    for (let i = index; i < nums.length; i++) {
      swap(index, i);
      dfs(index + 1);
      swap(index, i);
    }
  }
  function swap(i: number, j: number) {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }
  return list;
}
