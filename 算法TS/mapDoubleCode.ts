function mapDoubleCode(str: string): boolean {
    const map :Map<string,string>= new Map();
    map.set('{', '}')
    map.set('[', ']')
    map.set('(', ')')
    const arr:string[]= []
    for (const item of str) {
        if (map.has(item)) {
            arr.push(item)
            console.log(arr);
        } else if (item !==  map.get(arr.pop())) {
            return false
        }
    }
    if (arr.length !== 0) {
        return false
    }
    return true
}
console.log(mapDoubleCode('()'));
