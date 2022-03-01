/*
 * @Author: your name
 * @Date: 2022-03-01 14:06:02
 * @LastEditTime: 2022-03-01 15:28:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web\Data-Structure-and-algorithm\TS_base\extends.ts
 */
class Base {
  name: string;
}
class Data extends Base {
  age: number;
}
class Dates extends Base {
  age: number;
}
const a = new Base() as Data;
// as 只用于转换存在子类型关系的两个类型
//extends 通过结构化类型系统判断得到的兼容关系
const b = new Data() as Base;
//先向上转型 再向下转型
const c = new Data() as Base as Dates;
const d = new Data() as unknown as Dates;
const e = new Data() as Dates;

type _T1 = Data extends Base ? 1 : 2;
//字符串字面量类型
type _T2 = 'jl' extends string ? 1 : 2;
//联合类型
type _T3 = 1 extends 1 | 2 | 3 | 4 ? 1 : 2;
type _T4 = 5 extends 1 | 2 | 3 | 4 ? 1 : 2;
//精确
type _T5 = { name: 'jl' } extends {} ? 1 : 2;

interface IObject {
  foo: number;
  bar: string;
  baz: boolean;
}

//裸类型参数
type _Extract<T, U> = T extends U ? T : never;
// 分别进行判断 foo extends 'foo'|'bar'  bar extends 'foo'|'bar'    baz extends 'foo'|'bar'
type _ExtractedKeys = _Extract<keyof IObject, 'foo' | 'bar'>;
//不是分别进行判断
type _NonDistributed = keyof IObject extends 'foo' | 'bar' ? true : false;

type Wrapped<T> = [T] extends [Boolean] ? true : false;
type _T1 = Wrapped<true | false>;
