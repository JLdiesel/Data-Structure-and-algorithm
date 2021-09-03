
/** 
  @remove  从set集合中删除一个元素并返回一个新的set集合
*/
function remove<T>(set:Set<T>,i:T) {
  const newSet = new Set<T>([...set])
  newSet.delete(i)
  return newSet
}
/** 
  @flattern 数组展开;
*/
function flattern(array: Array<any>): Array<any> {
    if (!Array.isArray(array)) {
        return array
    }
    return [].concat(...array.map(flattern))
}

console.log(flattern([[1,2,3,[4,5,6,[7,8]]]]));

/** 
  @permutation 字符串全排列;
*/
function permutation(str: string) {
  function R(set: Set<string>): Array<string> {
    if (set.size === 1) {
      return [set.values().next().value]
    }
    return flattern([...set].map(char => R(remove(set, char)).map(prem => char + prem)))
  }
  return R(new Set([...str]))
}

console.log(permutation('213'));
