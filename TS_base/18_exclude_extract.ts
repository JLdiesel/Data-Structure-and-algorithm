//Exclude<Type, ExcludedUnion>
//通过从Type可分配给 的所有联合成员中排除来构造一个类型ExcludedUnion。
type T4 = Exclude<'a' | 'b' | 'c', 'a'>;

type T5 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;

type T6 = Exclude<string | number | (() => void), Function>;

//Extract<Type, Union>
//通过从Type可分配给 的所有联合成员中提取来构造一个类型Union。

type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
type T1 = Extract<string | number | (() => void), Function>;

//NonNullable<Type>
//通过排除null和undefined来自构造一个类型Type。
type T2 = NonNullable<string | number | undefined>;
type T3 = NonNullable<string[] | null | undefined>;
