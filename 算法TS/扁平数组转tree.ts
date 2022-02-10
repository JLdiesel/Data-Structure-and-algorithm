interface arrType {
  id?: number;
  name?: string;
  pid?: number;
  children?: Array<arrType>;
}
const arr: Array<arrType> = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 5, name: '部门5', pid: 4 },
];
// 方法1  n^2
function arrayToTreedg(items) {
  let res = [];
  function getChildren(res, pid) {
    for (const i of items) {
      if (i.pid === pid) {
        const newItem = { ...i, children: [] };
        res.push(newItem);
        getChildren(newItem.children, newItem.id);
      }
    }
  }
  getChildren(res, 0);
  return res;
}

//方法2  On
const newArr2: Array<arrType> = [];
const map = new Map<number, arrType>();
for (let item of arr) {
  const newItem: arrType = { ...item, children: [] };
  map.set(item.id, newItem);
}
arr.forEach((item) => {
  const newItem = map.get(item.id);
  if (item.pid === 0) {
    newArr2.push(newItem);
  } else {
    const parentItem = map.get(item.pid);

    parentItem.children.push(newItem);
  }
});
// console.log(newArr2);

//方法3   On
function groupBy(arr, callback) {
  const object = {};
  for (let i = 0; i < arr.length; i++) {
    let key = callback(arr[i], i, arr);
    if (object[key]) {
      object[key].push(arr[i]);
    } else {
      object[key] = [arr[i]];
    }
  }
  return object;
}
const groupArr = groupBy(arr, (item) => item.pid);
arr.forEach((item) => (item.children = groupArr[item.id]));
// console.log(groupArr[0]);

// on
function arrayToTree(items) {
  const res: Array<arrType> = [];
  const map = new Map<number, arrType>();
  // 边做map存储，边找对应关系
  for (const i of items) {
    map.set(i.id, {
      ...i,
      children: map.get(i.id) ? map.get(i.id).children : [],
    });
    const newItem = map.get(i.id);
    if (i.pid === 0) {
      res.push(newItem);
    } else {
      let pItem = map.get(i.pid);
      if (!pItem) {
        const netP = {
          children: [],
        };
        map.set(i.pid, netP);
        pItem = netP;
      }
      pItem.children.push(newItem);
    }
  }
  return res;
}
// console.log(arrayToTree(arr));

export {};
