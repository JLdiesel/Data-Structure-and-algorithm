/*
 * @Author: your name
 * @Date: 2022-03-01 13:53:33
 * @LastEditTime: 2022-03-01 13:58:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web\Data-Structure-and-algorithm\TS_base\枚举分支never.ts
 */
let strOrNum:
  | string
  | number
  | boolean
  | bigint
  | symbol
  | null
  | undefined = 1;
//确保分支被处理
function log() {
  if (typeof strOrNum === 'string') {
    console.log(strOrNum);
  } else if (typeof strOrNum === 'number') {
    strOrNum = '123';
    console.log(strOrNum);
  } else {
    const _neverCheck: never = strOrNum;
    console.log(strOrNum);
  }
}
