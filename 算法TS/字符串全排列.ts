
//返回一个去除原有集合某个字段的集合
function remove<T>(set: Set<T>, i: T): Set<T> {
    const newSet = new Set([...set])
    newSet.delete(i)
    return newSet
}
//字符串全排列
function permutation(str: string) {
    function R(set: Set<String>): Array<string> {
        if (set.size === 1) {
            return set.values().next().value
        }
        [...set].map(c => R(remove(set, c)).map(perm => c + perm))
    }
    return R(new Set(...str))
}
export default permutation