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
  const map = new Map();

  function dfs(dataList, pid) {
    if (!dataList) return;
    for (const item of dataList) {
      map.set(item.id, pid);
      dfs(item.children, item.id);
    }
  }
  dfs(data, 0);
  return list.map((item) => map.get(item));
}
console.log(getArr(data, list));
