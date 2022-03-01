//structure>>>nonimal

export declare class TagedProtector<T extends string> {
  protected _tag: T;
}
export type Nonimal<T, Tag extends string> = T & TagedProtector<Tag>;

export type CNY = Nonimal<number, 'CNY'>;
export type USD = Nonimal<number, 'USD'>;
const CNYCount = 100 as CNY;
const USDCount = 100 as USD;
function addCNY(source: CNY, input: CNY) {
  return source + input;
}
addCNY(CNYCount, CNYCount);
// addCNY(CNYCount, USDCount);
/* 
类型“USD”的参数不能赋给类型“CNY”的参数。
  不能将类型“USD”分配给类型“TagedProtector<"CNY">”。
    属性“_tag”的类型不兼容。
      不能将类型“"USD"”分配给类型“"CNY"”。
*/
