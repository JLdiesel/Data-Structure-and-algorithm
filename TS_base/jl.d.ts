//声明模块
declare module 'lodash' {
  export function join(arr:any[]):void
}

//声明变量/函数
declare let myName: string
declare let myAge: number
declare let myHeight: number

declare function myFoo(): void

declare class Person{
  name: string
  age: number
  constructor(name:string,age:number)
}
//把jpg结尾的文件当成模块使用 import from '.jpg'
declare module '*.jpg'
//命名空间
declare namespace ${
  export function ajax(setting:any):any
}