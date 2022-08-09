/*
 * @Author: your name
 * @Date: 2022-03-01 13:59:58
 * @LastEditTime: 2022-03-01 14:02:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEin
 * @FilePath: \web\Data-Structure-and-algorithm\TS_base\互斥工具类型的实现.ts
 */
type Without<T, U> = { [K in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = Without<T, U> & Without<U, T>;

interface Foo{
    foo:string;
}
interface Bar{
    bar:string;
}
type FooOrBar=XOR<Foo,Bar>
const fooOrBar:FooOrBar={
    foo:'string';
}