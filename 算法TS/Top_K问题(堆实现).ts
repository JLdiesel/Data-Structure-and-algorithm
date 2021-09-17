//从N个数中找出最大的K个元素
import BH from '../数据结构TS/12-BinaryHeap'
const data = [55, 23, 51, 554, 22, 66, 88, 44, 66, 34, 75, 85]
const k = 5
//从N个数中找出最小的K个元素 大顶堆  const BBH=new BH<number>((a,b)=>a-b)
//小顶堆
const BBH=new BH<number>((a,b)=>b-a)
for (let i = 0; i < data.length; i++){
  if (BBH.getSize() < k) {
    BBH.add(data[i])
  } else {
    BBH.replace(data[i])
  }
}
console.log(BBH);



