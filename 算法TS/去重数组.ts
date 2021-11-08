const arr1 = [{ id: 'coderwhy' }, { id: 's1mple' }, { id: 'james' }];
const arr2 = [{ id: 's1mple' }, { id: 'james' }, { id: 'kobe' }];
//实现一个混入去重函数
//要求去除Id为重复
function mixIn(arr1: { id: string }[], arr2: { id: string }[]) {
  let newArr = [];
  let setArr = [];
  arr1.forEach((item) => {
    if (!setArr.includes(item.id)) {
      setArr.push(item.id);
      newArr.push(item);
    }
  });
  arr2.forEach((item) => {
    if (!setArr.includes(item.id)) {
      setArr.push(item.id);
      newArr.push(item);
    }
  });
  console.log(newArr);
}
mixIn(arr1, arr2);
