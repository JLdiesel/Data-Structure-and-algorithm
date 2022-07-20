class Queue {
  items: Number[];
  constructor() {
    this.items = [];
  }
   push(element: Number) {
    this.items.push(element);
  }
  //删除第一个数值
  pop() {
    return this.items.shift();
  }
  //返回最后一个数值
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  toString() {
    return this.items.toString();
  }
}
let num2: Queue = new Queue();
console.log(num2.isEmpty()); //true
num2.push(1);
num2.push(2);
num2.push(3);
console.log(num2.isEmpty()); //false
console.log(num2.size()); //3
console.log(num2.toString()); //'1,2,3'
console.log(num2.peek()); //3
console.log(num2.pop()); //1
console.log(num2.pop()); //2
console.log(num2.peek()); //3
