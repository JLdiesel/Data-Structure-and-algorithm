/*
 * @Author: your name
 * @Date: 2022-02-21 10:24:25
 * @LastEditTime: 2022-02-21 10:45:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web\Data-Structure-and-algorithm\leetcode\dfs\17_电话号码的字母组合.ts
 */

function letterCombinations(digits: string): string[] {
  const codes = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z'],
  ];
  if (!digits) return [];
  const cacheArr = new Array(digits.length);
  const letters: string[] = [];
  dfs(0, letters);
  function dfs(index: number, letters: string[]) {
    if (index === digits.length) {
      letters.push(cacheArr.join(''));
      return;
    }
    const code = codes[(digits.charAt(index) as unknown as number) - 2];
    for (const item of code) {
      cacheArr[index] = item;
      dfs(index + 1, letters);
    }
  }
  return letters;
}
letterCombinations('23');
