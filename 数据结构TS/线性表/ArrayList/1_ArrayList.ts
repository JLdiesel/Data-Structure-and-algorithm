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
      console.log(element);
    } else {
      this.checkIndex(index as number);
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
    throw new Error('Method not implemented.');
  }
  indexOf(element: T): number {
    throw new Error('Method not implemented.');
  }
  clear(): void {
    throw new Error('Method not implemented.');
  }
  checkIndex(index: number) {
    if (index < 0 || index > this._size) {
      throw new Error(`index:${index} but size:${this._size}`);
    }
  }
}
