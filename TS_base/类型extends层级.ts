/*
 * @Author: your name
 * @Date: 2022-03-01 13:48:05
 * @LastEditTime: 2022-03-01 13:50:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web\Data-Structure-and-algorithm\TS_base\类型层级.ts
 */
type _T = never extends 'jl'
  ? 'jl' extends string
    ? string extends Object
      ? Object extends any
        ? any extends unknown
          ? unknown extends any
            ? 1
            : 2
          : 3
        : 4
      : 5
    : 6
  : 7;
type G=never extends 'jl'?1:2