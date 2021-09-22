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
/* import HashMap from './数据结构TS/11_HashMap'
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
console.log(map); */
// import BinaryHeap from './数据结构TS/12-BinaryHeap';
// const BH = new BinaryHeap<number>((e1, e2) => e1 - e2)
// BH.add(3)
// BH.add(14)
// BH.add(40)
// BH.add(72)
// BH.add(50)
// BH.add(43)
// BH.add(38)
// BH.add(47)
// BH.add(21)
// BH.add(68)
// BH.remove()
// BH.add(50)


// console.log(BH);
// import   './算法TS/Top_K问题(堆实现)'
import Tire from './数据结构TS/13_Trie'

const tire = new Tire();
tire.add('my',1)
tire.add('cat',2)
tire.add('dog',3)
tire.add('catalog',4)
tire.add('cast',5)
tire.add('金龙', 6)
console.log(tire);
console.log(tire.size===6);
console.log(tire.startsWith('do'));
console.log(tire.startsWith('c'));
console.log(tire.startsWith('cat'));
console.log(tire.startsWith('cata'));
console.log(tire.startsWith('hehe'));
console.log(tire.get('金龙')); 








