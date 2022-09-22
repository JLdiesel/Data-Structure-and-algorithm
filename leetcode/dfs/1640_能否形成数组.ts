/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  function dfs(index) {
    const preIndex = index
    if (index > arr.length) return false
    if (index === arr.length && !pieces.length) return true
    for (let i = 0; i < pieces.length; i++) {
      const item = pieces[i]
      for (let j = 0; j < item.length; j++) {
        if (item[j] === arr[index]) index++
        else break
      }
      if (preIndex === index) continue
      const removeItem = pieces.splice(i, 1)
      if (dfs(index)) return true
      pieces.push(removeItem)
    }
    return false
  }
  return dfs(0)
};
var canFormArray1 = function (arr, pieces) {
  let index = 0
  while (index < arr.length) {
    const item = pieces.find(item => item[0] === arr[index])
    if (!item) return false
    index++
    for (let i = 1; i < item.length; i++) {
      if (item[i] === arr[index]) index++
      else return false
    }
  }
  return true
};