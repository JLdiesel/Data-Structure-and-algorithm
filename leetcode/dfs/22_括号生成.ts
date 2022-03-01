/*
 * @Author: your name
 * @Date: 2022-02-28 18:30:59
 * @LastEditTime: 2022-03-01 18:00:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web\Data-Structure-and-algorithm\leetcode\dfs\22_括号生成.ts
 */
function generateParenthesis(n: number): string[] {
  //当左括号、右括号数量一样时，只能选择左括号
  /* 
  什么情况可以选左括号？  左括号数量>0
  什么情况可以选右括号？  右括号的数量>0 &&右括号的数量！=左括号的数量
  */
  const list: string[] = [];

  if (n < 0) return list;
  if (n === 0) {
    list.push('');
    return list;
  }

  function dfs(
    index: number,
    leftRemain: number,
    rightRemain: number,
    strings: string[]
  ) {
    if (index === n << 1) {
      list.push(strings.join(''));
      return;
    }
    //枚举这一层所有可能的选择
    //选择一种可能之后，进入下一层搜索
    //选择左括号，进入下一层
    if (leftRemain) {
      strings[index] = '(';
      dfs(index + 1, leftRemain - 1, rightRemain, strings);
    }
    if (rightRemain && leftRemain !== rightRemain) {
      //选择右括号，进入下一层
      strings[index] = ')';
      dfs(index + 1, leftRemain, rightRemain - 1, strings);
    }
  }
  dfs(0, n, n, []);

  return list;
}
console.log(generateParenthesis(2));
