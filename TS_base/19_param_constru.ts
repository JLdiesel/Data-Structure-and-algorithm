//Parameters<Type>
//根据函数类型的参数中使用的类型构造元组类型Type
declare function f1(arg: { a: number; b: string }): void;

//type T0 = []
type T0 = Parameters<() => string>;

//type T1 = [s: string]
type T1 = Parameters<(s: string) => void>;
//type T2 = [arg: unknown]
type T2 = Parameters<<T>(arg: T) => T>;
//type T3 = [arg: {
//    a: number;
//    b: string;
//}]
type T3 = Parameters<typeof f1>;


//type T4 = unknown[]
type T4 = Parameters<any>;

//type T5 = never
type T5 = Parameters<never>;


//类型“string”不满足约束“(...args: any) => any”.
// type T6 = Parameters<string>;

//type T6 = never

// type T7 = Parameters<Function>;

//类型“Function”不满足约束“(...args: any) => any”。
// 类型“Function”提供的内容与签名“(...args: any): any”不匹配

//ReturnType<Type>  构造一个由 function 的返回类型组成的类型Type。

type T8 = ReturnType<() => string>;
//string
export {};
