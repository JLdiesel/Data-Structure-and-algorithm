/* import RBTree from './数据结构TS/10_Map'
const RBT = new RBTree((e1: number, e2: number) => {
  return e1 - e2;
});

let arr = [5, 10, 11, 12, 15, 17, 18, 30,10,55,22,33,66,44,77,55,66,55,44,99,888,1231,4561,7423,462,8552,244];
arr.forEach((item,index) => {
  RBT.put(item,index);
});
RBT.remove(10)
RBT.remove(30)
RBT.remove(11)
console.log(RBT.size);

console.log(RBT);
 */
import HashMap from './数据结构TS/11_HashMap'
const map = new HashMap();

map.put('123','123')
map.put('123',123)
map.put('13','123')
map.put(123,'123')
map.put(166,'123')
map.put({name:'jl'},'123')
map.put({name:'jl'},'333')
map.put(123, '163')
console.log(map.get('123'));
console.log(map.get({name:'jl'}));
console.log(map.get(123));
map.remove('123')
map.remove(123)
console.log(map.get(123));

map.traversal()
console.log(map);




