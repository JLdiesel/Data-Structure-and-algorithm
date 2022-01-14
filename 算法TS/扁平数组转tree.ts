interface arrType {
  id: number;
  name: string;
  pid: number;
  children?: Array<arrType>;
}
let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
];

const newArr: Array<arrType> = [];
arr.forEach((item) => {
  if (item.pid === 0) {
    newArr.push({ ...item, children: [] });
  } else {
    add(item, newArr);
  }
});
function add(oldObj, arrs) {
  if (arrs.length === 0) return;
  const pid = oldObj.pid;
  arrs.forEach((item) => {
    if (pid === item.id) {
      item.children.push({ ...oldObj, children: [] });
    } else {
      add(oldObj, item.children);
    }
  });
}
console.log(newArr);

const newArr2 = [];
const map = new Map<number, Array<arrType>>();
arr.forEach((item) => {
  const newItem = { ...item, children: [] };
  map.set(item.id, newItem.children);
  if (item.pid === 0) {
    newArr2.push(newItem);
  } else {
    const itemArr = map.get(item.pid);
    itemArr.push(newItem);
  }
});
console.log(newArr2);

export {};
