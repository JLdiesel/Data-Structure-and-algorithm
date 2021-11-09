const arr = [
  { id: 'coderwhy', name: 's1mple', age: 18 },
  { id: 'coderwhy', name: 's1mple', age: 18 },
  { id: 's1mple', name: 'james', age: 16 },
  { id: 'james', name: 's1mple', age: 19 },
  { id: 's1mple', name: 'coderwhy', age: 15 },
  { id: 's1mple', name: 'coderwhy', age: 15 },
];
const tagArr = ['id'];
//实现一个去重函数
//要求去除Id和name都重复的字段
//返回新数组
//预期返回
// [
//     { id: 'coderwhy', name: 's1mple' ,age:18},
//     { id: 's1mple', name: 'james',age:16 },
//     { id: 'james', name: 's1mple',age:19 },
//     { id: 's1mple', name: 'coderwhy' ,age:15},
//   ];
function filters(
  arr: { id: string; name: string; age: number }[],
  tagArr: string[]
) {
  return arr.reduce((prev, cur) => {
    if (tagFlag(prev, cur, tagArr)) {
      prev.push(cur);
    }
    return prev;
  }, []);
}
function tagFlag(arr, cur, tagArr) {
  return !arr.find((item) => {
    let flag = true;
    for (const tag of tagArr) {
      if (flag) {
        flag = item[tag] === cur[tag];
      }
    }
    return flag;
  });
}
console.log(filters(arr, tagArr));
export {};
