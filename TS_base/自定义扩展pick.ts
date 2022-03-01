import { PlainObject } from './自定义扩展Partial';

/*
 * @Author: your name
 * @Date: 2022-03-01 16:01:24
 * @LastEditTime: 2022-03-01 16:20:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web\Data-Structure-and-algorithm\TS_base\自定义扩展pick.ts
 */
export type ValueTypeFilter<T extends PlainObject, ValueType> = Pick<
  T,
  {
    [Key in keyof T]: T[Key] extends ValueType ? Key : never;
  }[keyof T]
>;
export type PickByValueType<T extends PlainObject, ValueType> = ValueTypeFilter<
  T,
  ValueType
>;
type VType = string | number;

interface ObjType {
  name: string;
  age: number;
  passed: boolean;
}
type newType = PickByValueType<ObjType, VType>;
