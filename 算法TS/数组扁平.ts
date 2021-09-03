//数组扁平化
function flattern(array: Array<any>): Array<any> {
    if (!Array.isArray(array)) {
        return array
    }
    return [].concat(...array.map(flattern))
}

// console.log(flattern([1, [2, 3, [8, 6, [81]]]]));

let b = [1, [2, 3, [8, 6, [81]]]]
console.log(b.flat(Infinity) as number[]);
export {}