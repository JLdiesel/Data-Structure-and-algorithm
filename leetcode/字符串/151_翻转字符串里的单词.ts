function reverseWords(s: string): string {
  if (!s) return s;
  let len = 0; //字符串最终的有效长度
  let cur = 0; //当前用来存放字符的位置
  let firstSpace = true; //是否是第一次遇到空格
  const arr = [...s];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ' ') {
      //非空格字符
      arr[cur++] = arr[i];
      firstSpace = false;
    } else if (!firstSpace) {
      //空格字符 arr[i]是空格字符 arr[i-1]是非空格字符
      arr[cur++] = ' ';
      firstSpace = true;
    }
  }
  len = firstSpace ? cur - 1 : cur;

  if (len <= 0) return '';

  //对整一个有效字符串进行逆序
  reverse(arr, 0, len);
  let prevIndex = -1;
  //对每个单词进行逆序
  console.log(arr);

  for (let i = 0; i < len; i++) {
    if (arr[i] === ' ') {
      reverse(arr, prevIndex + 1, i);
      prevIndex = i;
      console.log(arr, i);
    }
  }
  reverse(arr, prevIndex + 1, len);
  //   const str = arr.toString().replace(/,/g, '');
  return arr.slice(0, len).join('');
}
//将[li,ri)范围内的字符串进行逆序
function reverse(arr: string[], li: number, ri: number) {
  ri--;
  while (li < ri) {
    const tmp = arr[li];
    arr[li] = arr[ri];
    arr[ri] = tmp;
    li++;
    ri--;
  }
}
console.log(reverseWords('ws  sa nb d'));
// console.log([...'w  s n d'].join(''));
