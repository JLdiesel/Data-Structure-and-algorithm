/*
 * @Author: your name
 * @Date: 2022-02-22 18:59:27
 * @LastEditTime: 2022-02-22 19:32:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web\Data-Structure-and-algorithm\leetcode\dfs\46_全排列.ts
 */
function permute(digits: number[]) {
  const list = [];
  if (!digits.length) return list;
  const result: number[] = [];
  const used: boolean[] = [];
  dfs(0);
  function dfs(index: number) {
    if (index === digits.length) {
      list.push([...result]);
      return;
    }
    for (const indexs in digits) {
      if (used[indexs]) continue;
      result[index] = digits[indexs];
      used[indexs] = true;
      dfs(index + 1);
      used[indexs] = false;
    }
  }
  return list;
}
console.log(permute([1, 2, 3]));
