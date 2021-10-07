import Sort from '../父类';
//用计数排序实现 分别比较个十百千...位的大小进行排序
//时间O(d*(n+k)) d是最大值的位数 K是进制  稳定排序
//空间O(n+k)
export class RadixSort extends Sort {
  sort() {
    //遍历数组 找出最大的N 创建N个数组
    let max = this.arr[0];
    for (let i = 1; i < this.arr.length; i++) {
      if (this.arr[i] > max) {
        max = this.arr[i];
      }
    }
    //max=593
    //百位数:arr[i]/100%10=5
    //十位数:arr[i]/10%10=9
    //个位数:arr[i]/1%10=3
    for (let divider = 1; divider <= max; divider *= 10) {
      this.countingsort(divider);
    }
  }
  countingsort(divider: number) {
    //开辟内存空间存储次数
    let counts = new Array(10).fill(0);
    for (let i = 0; i < this.arr.length; i++) {
      //arr[i]的基数(个十百位)
      counts[(this.arr[i] / divider) % 10]++;
    }
    //累加次数
    for (let i = 1; i < counts.length; i++) {
      counts[i] += counts[i - 1];
    }
    //counts[i]-1就是该数应该在数组中的位置
    //从后往前遍历 放到有序数组中的合适位置，找到位置就counts[i]-=1
    let newArr = new Array[this.arr.length]();
    for (let i = this.arr.length - 1; i >= 0; i--) {
      //this.arr[i] - min 在counts数组中的索引
      //求出索引counts[this.arr[i] / divider % 10] 该值在有序数组中的下标
      newArr[--counts[(this.arr[i] / divider) % 10]] = this.arr[i];
    }
    //把newArr赋值给arr
    for (let i = 0; i < newArr.length; i++) {
      this.arr[i] = newArr[i];
    }
  }
}
