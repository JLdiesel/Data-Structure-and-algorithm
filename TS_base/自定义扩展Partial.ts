/*
 * @Author: your name
 * @Date: 2022-03-01 15:48:25
 * @LastEditTime: 2022-03-01 16:02:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web\Data-Structure-and-algorithm\TS_base\自定义扩展.ts
 */
interface IObject {
  foo: number;
  bar: string;
  baz: boolean;
}
type PlainObject = Record<string, any>;

type MarkPropAsOptional<
  T extends PlainObject,
  K extends keyof T = keyof T
> = Omit<T, K> & Partial<Pick<T, K>>;
type Flattern<T> = {
  [K in keyof T]: T[K];
};
type _T2 = Flattern<MarkPropAsOptional<IObject, 'bar'>>;
export { PlainObject };
