class ArrayList<T> {
  static ELEMENT_NOT_FOUND: -1 = -1;
  private elements: T[] = [];

  constructor() {}

  private rangeCheck(index: number) {
    if (index < 0 || index > this.elements.length - 1) {
      throw RangeError("ArrayList 下标越界");
    }
  }

  /**
   * 向末尾添加元素
   * @param element 要添加的元素
   */
  add(element: T): T;
  /**
   * 向指定位置添加元素
   * @param index 
   * @param element 
   */
  add(index: number, element: T): T;
  add(e1: number | T, e2?: T): T {
    if (typeof e1 === "number" && e2 !== undefined) {
      if (e1 === this.elements.length) {
        this.elements.push(e2);
      } else {
        this.rangeCheck(e1);
        this.elements.splice(e1, 0, e2);
      }
      return e2;
    } else {
      // 虽然单从 if 只能判断 e1 是 T | number 类型的，但是结合重载标记可以推断这里只能是 T
      this.elements.push(e1 as T);
      return e1 as T;
    }
  }

  /**
   * 清除所有元素
   */
  clear() {
    this.elements = [];
  }

  /**
   * 判断是否包含该元素
   * @param element
   * @returns { boolean }
   */
  contains(element: T): boolean {
    return this.indexOf(element) !== ArrayList.ELEMENT_NOT_FOUND;
  }

  /**
   * 遍历
   * @param fn 循环调用的函数
   */
  forEach(fn: (e: T, index?: number) => void) {
    this.elements.forEach((e, index) => fn(e, index))
  }

  /**
   * 获取指定位置的元素
   * @param index
   * @returns
   */
  get(index: number): T {
    this.rangeCheck(index);
    return this.elements[index];
  }

  /**
   * 寻找元素索引, 如果有 equals 用 equals 方法判断, 没有则用 === 判断
   * @param  { T } element
   * @returns { number }
   */
  indexOf(element: T & {equals?: (arg: any) => boolean}): number {
    if (typeof element.equals === "function") {
      for (let i = 0; i < this.elements.length; i++) {
        if (element.equals(this.elements[i])) {
          return i;
        }
      }
    } else {
      for (let i = 0; i < this.elements.length; i++) {
        if (element === this.elements[i]) {
          return i;
        }
      }
    }
    return ArrayList.ELEMENT_NOT_FOUND;
  }

  /**
   * 是否为空
   * @returns { boolean }
   */
  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  /**
   * 寻找元素索引（后 → 前）
   * @param element 
   * @returns 
   */
  lastIndexOf(element: T & {equals?: (arg: any) => boolean}) {
    // reverse 改变原数组，要 copy 一下
    const tempArr: T[] = Array.from(this.elements).reverse()
    const reverseIndex = this.indexOf.call({elements: tempArr}, element)
    return reverseIndex === ArrayList.ELEMENT_NOT_FOUND ? ArrayList.ELEMENT_NOT_FOUND : (this.elements.length - 1 - reverseIndex)
  }

  /**
   * 删除index位置的元素
   * @param index
   * @return
   */
  remove(index: number) {
    this.rangeCheck(index);
    return this.elements.splice(index, 1);
  }

  /**
   * 设置index位置的元素
   * @param index
   * @param element
   * @return 原来的元素ֵ
   */
  set(index: number, element: T) {
    this.rangeCheck(index);
    this.elements[index] = element;
  }

  /**
   * @returns 返回数组的长度
   */
  size(): number {
    return this.elements.length;
  }
}

export {
  ArrayList
}