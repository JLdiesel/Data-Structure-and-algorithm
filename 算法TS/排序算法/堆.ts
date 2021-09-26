
import Sort from './父类'

export class Heap extends Sort{
    size:number;
   sort() {
    this.size=this.arr.length
    for (let i = (this.size>>1)-1; i >=0; i--) {
        this.siftDown(i)
    }
    console.log(this.arr);
    while (this.size>1) {
        //交换堆顶和堆尾部
        this.swap(0,--this.size)
        //恢复性质
        this.siftDown(0)
     }
    console.log(this.arr);
    
  }

   siftDown(index: number) {
    let element = this.arr[index]
    //当index<第一个叶子节点的索引===非叶子节点的数量=floor(n/2)
    //index是非叶子节点
    let half=this.size>>1
    while (index < half) {
      //左子节点index为2i+1
      let cIndex = (index << 1) + 1;
      let child = this.arr[cIndex]
      //右子节点index为2i+2
      let rIndex = cIndex + 1;
      if (rIndex < this.size && this.cmpElement(this.arr[rIndex], child) > 0) {
        cIndex = rIndex
        child=this.arr[rIndex]
      }
      if (this.cmpElement(element, child) >= 0) break;
      this.arr[index]=child
      index = cIndex;
    }
    this.arr[index]=element
  }
}
