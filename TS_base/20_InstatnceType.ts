//InstanceType<Type>
//构造一个由 中构造函数的实例类型组成的类型Type
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;
type T1 = InstanceType<any>;
type T2 = InstanceType<never>;

type T3 = InstanceType<typeof String>;
type T4=typeof String

// type T4 = InstanceType<Function>;
export {};
