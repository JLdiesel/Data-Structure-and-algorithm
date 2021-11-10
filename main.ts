// import {Bubble} from './算法TS/排序算法/冒泡'
// import {Selection} from './算法TS/排序算法/选择'
// import {Heap} from './算法TS/排序算法/堆'
// import {Insert} from './算法TS/排序算法/插入'
// import {MergeSort} from './算法TS/排序算法/归并'
// import {QuickSort} from './算法TS/排序算法/快排'
// const bubble=new Bubble([2,5,6,7,12,6,7,87,545,3,2,45,77,343,1237,76])
// bubble.sort()
// const bubble2=new Bubble([2,5,6,7,12,6,7,87,545,3,2,45,77,343,1237,76])
// bubble2.sort2()
// const selection=new Selection([2,5,6,7,12,6,7,87,545,3,2,45,77,343,1237,76])

// selection.sort()
// const heap=new Heap([2,5,6,7,12,6,7,87,545,3,2,45,77,343,1237,76])
// heap.sort()
// const insert=new Insert([2,5,6,7,12,6,7,87,545,3,2,45,77,343,1237,76])
// insert.sort()
// const insert2=new Insert([2,5,6,7,12,6,7,87,545,3,2,45,77,343,1237,76])
// insert2.sort2()
// const insert3=new Insert([2,5,6,7,12,6,7,87,545,3,2,45,77,343,1237,76])
// insert3.sort3()
// const mergeSort=new MergeSort([2,5,6,7,12,6,7,87,545,3,2,45,77,343,1237,76])
// mergeSort.sort()
// const quickSort=new QuickSort([2,5,6,7,12,6,7,87,545,3,2,45,77,343,1237,76])
// quickSort.sort()

// import { lcs2 } from './算法TS/动态规划/最长公共子序列';
// console.log(lcs2('abcba', 'abcbcba'));

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
/* import Tire from './数据结构TS/13_Trie'

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
 */

/* import { BloomFilter } from './数据结构TS/布隆过滤器/bloomFilter';
const bloomFilter = new BloomFilter(1000_000, 0.1);
for (let i = 0; i <= 10000000; i++) {
  bloomFilter.put(i);
}
let trueCount = 0;
for (let j = 0; j <= 5000000; j++) {
  if (!bloomFilter.contains(j)) {
    trueCount++;
  }
}
// let count = 0;
// for (let j = 1000001; j <= 2000000; j++) {
//   if (bloomFilter.contains(j)) {
//     count++;
//   }
// }

console.log(trueCount);
// console.log(count); */
import { SkipList } from './数据结构TS/跳表/skipList';
const skipList = new SkipList((a: number, b: number) => a - b);
const count = 100;
// skipList.put(1, 'a');
// skipList.put(2, 'b');

for (let i = 0; i < count; i++) {
  skipList.put(i, 'a' + i);
}
console.log(skipList);
for (let i = 0; i < count; i++) {
  console.log(skipList.get(i));
}
for (let i = 0; i < count; i++) {
  console.log(skipList.remove(i));
}
