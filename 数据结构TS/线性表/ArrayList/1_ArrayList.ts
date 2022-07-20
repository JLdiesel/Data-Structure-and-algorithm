import { ArrayType } from './Interface';
class ArrayList<T> implements ArrayType<T> {
  static DEFAULT_CAPACITY = 10;
  //元素的长度
  private _size: number;
  private elements: T[];
  constructor(capacity) {
    if (capacity < ArrayList.DEFAULT_CAPACITY) {
      this.elements = new Array();
    } else {
    }
  }
  size(): number {
    return this._size;
  }
  isEmpty(): boolean {
    return this._size === 0;
  }
  contains(element: T): boolean {
    throw new Error('Method not implemented.');
  }
  add(element: T): void;
  add(index: number, element: T): void;
  add(index: unknown, element?: T): void {
    if (element) {
      //添加index element
      if (index < 0 || index > this._size) {
        throw new Error(`index:${index} but size:${this._size}`);
      }
      for (let i = this._size - 1; i >= index; i--) {
        this.elements[i + 1] = this.elements[i];
      }
      this.elements[index as number] = element;
      this._size++;
    } else {
      this.elements[this._size--] = index as T;
    }
  }

  get(index: number): T {
    this.checkIndex(index);
    return this.elements[index];
  }
  set(index: number, element: T): T {
    this.checkIndex(index);
    const old = this.elements[index];
    this.elements[index] = element;
    return old;
  }
  remove(index: number): T {
    const oldValue = this.elements[index];
    for (let i = index + 1; i <= this._size; i++) {
      this.elements[i - 1] = this.elements[i];
    }
    this._size--;
    return oldValue;
  }
  indexOf(element: T): number {
    throw new Error('Method not implemented.');
  }
  clear(): void {
    this._size = 0;
    throw new Error('Method not implemented.');
  }
  checkIndex(index: number) {
    if (index < 0 || index >= this._size) {
      throw new Error(`index:${index} but size:${this._size}`);
    }
  }
}
