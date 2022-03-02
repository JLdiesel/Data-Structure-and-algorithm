const data = [
  {
    id: 1,
    children: [
      {
        id: 2,
        children: [
          {
            id: 3,
            children: [
              { id: 4, children: undefined },
              { id: 5, children: undefined }
            ]
          }
        ]
      }
    ]
  }
];
const list = [1, 2, 3, 4, 5];
//返回 [0,1,2,3,3]
function getArr(data, list) {
  const newList = new Array(list.length);
  function dfs(dataList, pid) {
    if (!dataList) return;
    for (const item of dataList) {
      const cindex = list.indexOf(item.id);
      if (cindex !== -1) {
        if (item.id !== 1) {
          newList[cindex] = pid;
        } else {
          newList[cindex] = 0;
        }
      }
      dfs(item.children, item.id);
    }
  }
  dfs(data, 1);
  return newList;
}
console.log(getArr(data, list));
