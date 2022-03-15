//数组扁平化
function flattern(array: Array<any>): Array<any> {
  if (!Array.isArray(array)) {
    return array;
  }
  return [].concat(...array.map(flattern));
}
type array = Array<number | array>;
const arr = [];
function flattern2(arrs: array) {
  for (const item of arrs) {
    if (Array.isArray(item)) {
      flattern2(item);
    } else {
      arr.push(item);
    }
  }
}
flattern2([1, [2, 3, [8, 6, [81]]]]);
console.log(flattern([1, [2, 3, [8, 6, [81]]]]));
console.log(arr);
function flattern3(arr) {
  if (!arr.length) return;
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
let b = [1, [2, 3, [8, 6, [81]]]];
console.log(b.flat(Infinity) as number[]);
export {};
