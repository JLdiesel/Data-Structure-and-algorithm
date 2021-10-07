//最大堆
class BinaryHeap<E> {
  private elements: E[];
  private size;
  private comparator: (e1: E, e2: E) => number;
  constructor(comparator: (e1: E, e2: E) => number, elements?: E[]) {
    this.comparator = comparator;
    this.elements = [];
    this.size = 0;
    if (elements && elements?.length !== 0) {
      this.size = elements.length;
      this.elements = [...elements];
      this.heapify();
    }
  }
  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.elements.length === 0;
  }
  private compare(e1: E, e2: E) {
    return this.comparator(e1, e2);
  }
  clear() {
    this.elements = [];
    this.size = 0;
  }
  get() {
    this.emptyCheck();
    return this.elements[0];
  }
  private emptyCheck() {
    if (this.size === 0) {
      throw new Error('Array is Empty');
    }
  }
  private nullCheck(element: E) {
    if (element === null) {
      throw new Error('element must not be null');
    }
  }
  add(element: E) {
    this.nullCheck(element);
    if (this.size === 0) {
      this.size++;
      this.elements[0] = element;
      return;
    }
    this.elements[this.size++] = element;
    this.siftUp(this.size - 1);
  }
  remove() {
    this.emptyCheck();
    const root = this.elements[0];
    let lastIndex = --this.size;
    this.elements[0] = this.elements[lastIndex];
    this.elements[lastIndex] = null;
    this.siftDown(0);
    return root;
  }
  /**
   *
   * @param index 让index位置的元素下滤
   */
  siftDown(index: number) {
    let element = this.elements[index];
    //当index<第一个叶子节点的索引===非叶子节点的数量=floor(n/2)
    //index是非叶子节点
    let half = this.size >> 1;
    while (index < half) {
      //左子节点index为2i+1
      let cIndex = (index << 1) + 1;
      let child = this.elements[cIndex];
      //左子节点index为2i+2
      let rIndex = cIndex + 1;
      if (
        rIndex < this.size &&
        this.compare(this.elements[rIndex], child) > 0
      ) {
        cIndex = rIndex;
        child = this.elements[rIndex];
      }
      if (this.compare(element, child) >= 0) break;
      this.elements[index] = child;
      index = cIndex;
    }
    this.elements[index] = element;
  }
  /**
   *
   * @param index 让index位置的节点上滤
   */
  private siftUp(index: number) {
    let element = this.elements[index];
    while (index > 0) {
      let pIndex = (index - 1) >> 1;
      let parent = this.elements[pIndex];
      if (this.compare(element, parent) <= 0) break;
      this.elements[index] = parent;
      index = pIndex;
    }
    this.elements[index] = element;
  }

  /**
   * 删除堆顶元素的同时插入新元素
   * @param element  插入的新元素
   */
  replace(element: E) {
    this.nullCheck(element);
    let root = null;
    if (this.size === 0) {
      this.elements[0] = element;
      this.size++;
    } else {
      root = this.elements[0];
      this.elements[0] = element;
      this.siftDown(0);
    }
    return root;
  }
  /**
   *
   * @param elements 传入一个数组批量建堆
   */
  heapify() {
    //自上而下的上滤
    // for (let i = 0; i < this.size; i++) {
    //  this.siftUp(i)
    // }
    //自下而上的下滤;
    for (let i = (this.size >> 1) - 1; i >= 0; i--) {
      this.siftDown(i);
    }
  }
}

export default BinaryHeap;
