type ccc<T extends Array<[number | string, unknown]>> = {
  [I in keyof T]: T[I][0];
};
type aaa<T extends Array<[number | string, unknown]>> = {
  [I in keyof T]: T[I][1];
};
type bbb<T extends Array<number | string>, B extends Array<number | string>> = {
  // [I in keyof T as T[I]]: B[I];
  [I in keyof T as T[I]]: B[I];
};

// type ddd<T extends Array<[number | string, string | number]>> = bbb<
//   ccc<T>,
//   aaa<T>
// >;
type ddd<T extends Array<[number | string, string | number]>> = {
  [I in keyof T as I extends `${number}` ? T[I][0] : never]: T[I][1];
};
type ooo<a, b extends keyof a> = (c: a, d: b) => a[b];
type abc = {
  [I in keyof [1, 2, 3] as [1, 2, 3][I]]: ReturnType<ooo<[1, 2, 3], I>>;
};
type a = ddd<[['1', 2], [3, '4'], [5, 6]]>;
