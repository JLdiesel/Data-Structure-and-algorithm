/* 
给定一个整数数组，编写一个函数，找出索引m和n，只要将索引区间[m,n]的元素排好序，整个数组就是有序的。
注意：n-m尽量最小，也就是说，找出符合条件的最短序列。函数返回值为[m,n]，若不存在这样的m和n（例如整个数组是有序的），请返回[-1,-1]。
 */
//最右边位置，最右逆序对的后位置   //从左往右找到最后一个逆序对
//最左边位置，最左逆序对的前位置   //从右往左找到最后一个逆序对
function subSort(array: number[]): number[] {
  if (array.length === 0) return [-1, -1];
  //从左扫描到右(正序：逐渐变大)
  let max: number = array[0];
  let r: number = -1;
  for (let i = 1; i < array.length; i++) {
    const v = array[i];
    if (v >= max) {
      max = v;
    } else {
      r = i;
    }
  }
  if (r === -1) return [-1, -1];
  //从右扫描到左(正序：逐渐变大)
  let min: number = array[array.length - 1];
  let l: number = -1;
  for (let i = array.length - 2; i >= 0; i--) {
    const v = array[i];
    if (v <= min) {
      min = v;
    } else {
      l = i;
    }
  }

  return [l, r];
}
console.log(subSort([1, 5, 2, 4, 5, 6, 7, 8]));
export {};
