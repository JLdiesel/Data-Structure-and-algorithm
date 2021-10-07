import Sort from './父类';
export class Insert extends Sort {
  //二分查找
  indexOf(element: number) {
    if (this.arr === null && this.arr.length === 0) return -1;
    let begin = 0;
    let end = this.arr.length;
    while (begin < end) {
      let mid = (begin + end) >> 1;
      if (element < this.arr[mid]) {
        //右开
        end = mid;
      } else if (element > this.arr[mid]) {
        //左闭
        begin = mid + 1;
      } else {
        return mid;
      }
    }
    return -1;
  }
  //传入一个元素 查询应该插入的地方
  search(element: number) {
    if (this.arr === null && this.arr.length === 0) return -1;
    let begin = 0;
    let end = this.arr.length;
    while (begin < end) {
      let mid = (begin + end) >> 1;
      if (element < this.arr[mid]) {
        //右开
        end = mid;
      } else {
        //左闭
        begin = mid + 1;
      }
    }
    return begin;
  }
  /**
   * 通过下标查找需要插入的下表
   * @param index 传入的下标
   * @returns 返回需要插入的下标
   */
  searchIndex(index: number) {
    if (this.arr === null && this.arr.length === 0) return -1;
    let begin = 0;
    let end = index;
    while (begin < end) {
      let mid = (begin + end) >> 1;
      if (this.arr[index] < this.arr[mid]) {
        //右开
        end = mid;
      } else {
        //左闭
        begin = mid + 1;
      }
    }
    return begin;
  }
  sort() {
    console.log(this.arr);
    for (let begin = 1; begin < this.arr.length; begin++) {
      let cur = begin;
      while (cur > 0 && this.cmp(cur - 1, cur) > 0) {
        this.swap(cur, --cur);
      }
    }
    console.log(this.arr);
  }
  sort2() {
    //优化版本1 只需要与前一个比较，如果前一个比较大，那么就把前一个后移一位, 找到比自己小的第一个元素后，赋值给前一个改变位置元素的位置
    console.log(this.arr);
    for (let begin = 1; begin < this.arr.length; begin++) {
      let curIndex = begin;
      //保存初始
      const cur = this.arr[begin];
      while (curIndex > 0 && this.cmpElement(this.arr[curIndex - 1], cur) > 0) {
        this.arr[curIndex] = this.arr[curIndex - 1];
        curIndex = curIndex - 1;
      }
      this.arr[curIndex] = cur;
    }
    console.log(this.arr);
  }
  sort3() {
    //优化版本3 利用二分搜索
    console.log(this.arr);
    for (let begin = 1; begin < this.arr.length; begin++) {
      //保存初始值
      const beginEle = this.arr[begin];
      //寻找需要替换到的下标
      const findIndex = this.searchIndex(begin);
      for (let i = begin; i > findIndex; i--) {
        this.arr[i] = this.arr[i - 1];
      }
      this.arr[findIndex] = beginEle;
    }
    console.log(this.arr);
  }
}
