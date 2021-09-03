import RBTree from './数据结构TS/8_RBTree'
const RBT = new RBTree((e1: number, e2: number) => {
  return e1 - e2;
});

let arr = [5, 10, 11, 12, 15, 17, 18, 30];
arr.forEach((item) => {
  RBT.add(item);
});
RBT.remove(10)
RBT.remove(30)
RBT.remove(11)

console.log(RBT);


