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
/* import HashMap from './数据结构TS/11_HashMap';
const map = new HashMap();

for (let i = 0; i < 1000; i++) {
  map.put(i, i);
}
for (let i = 0; i < 1000; i++) {
  map.put(i, i + 2);
}
for (let i = 0; i < 1000; i++) {
  map.put(i, i + 3);
}
console.log(map); */

// console.log(map.index(1));
// console.log(map.index(2));
// console.log(map.index(13));
// console.log(map.index(4));
// console.log(map.index(5));

// map.traversal();

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
// import { SkipList } from './数据结构TS/跳表/skipList';
// const skipList = new SkipList((a: number, b: number) => a - b);
// const count = 100;
// // skipList.put(1, 'a');
// // skipList.put(2, 'b');

// for (let i = 0; i < count; i++) {
//   skipList.put(i, 'a' + i);
// }
// console.log(skipList);
// for (let i = 0; i < count; i++) {
//   console.log(skipList.get(i));
// }
// for (let i = 0; i < count; i++) {
//   console.log(skipList.remove(i));
// }
/* import { Listraph } from './数据结构TS/图/Listraph';
const graph = new Listraph<string>();
graph.addVertex('c1');
graph.addVertex('c2');
graph.addVertex('c3');
graph.addVertex('c4');
graph.addVertex('c5');
graph.addVertex('c6');
graph.addVertex('c7');
graph.addEdge('c1', 'c2', 1);
graph.addEdge('c2', 'c3', 2);
graph.addEdge('c2', 'c4', 3);
graph.addEdge('c3', 'c5', 4);
graph.addEdge('c4', 'c6', 5);
graph.addEdge('c4', 'c3', 6);
graph.addEdge('c5', 'c6', 7);
graph.addEdge('c6', 'c7', 8);
// console.log(graph.bfs('c1'));
// console.log(graph.dfs('c1'));
// console.log(graph.topologicalSort());
console.log('prim切分算法', graph.mst()); // 切分算法
console.log('kruskal生成树算法', graph.mst2());
console.log('Dijkstra 单源最短路径算法', graph.shortestPath('c1'));
console.log(' Dijkstra 能打印出路径点', graph.shortestPath2('c1'));
console.log('Floyd o(V3)  多源最短路径算法 ', graph.shortestPathFloyd());
console.log('bellmanFord', graph.bellmanFord('c1'));
 */
export default {};
/* interface objtype {
  arr?: Array<arrtype>;
}
interface arrtype {
  a?: { b: number };
}
const arr = [1, 2, 3];
const obj: objtype = {
  arr: [],
};
console.log(obj?.arr?.[0].a?.b);
 */
