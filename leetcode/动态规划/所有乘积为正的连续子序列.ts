const arr = [1, 1, -1, -1];
function getAll() {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    findAll(i);
  }
  function findAll(index) {
    let flag = true;
    const cache = [];
    for (let i = index; i < arr.length; i++) {
      if (flag) {
        if (arr[i] === 1) {
          result.push([...cache, arr[i]]);
        } else {
          flag = false;
        }
      } else {
        if (arr[i] === -1) {
          result.push([...cache, arr[i]]);
          flag = true;
        }
      }
      cache.push(arr[i]);
    }
  }
  console.log(result);
}
getAll();
export {};
