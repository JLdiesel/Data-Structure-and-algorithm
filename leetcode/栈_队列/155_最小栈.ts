class MinStack {
  private stack: Array<number>;
  private stack2: Array<number>;
  constructor() {
    this.stack = [];
    this.stack2 = [];
  }

  push(val: number): void {
    if (this.stack2.length === 0) {
      this.stack2.push(val);
    } else {
      this.stack2.push(Math.min(val, this.stack2[this.stack2.length - 1]));
    }

    this.stack.push(val);
  }

  pop(): void {
    this.stack2.pop();
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.stack2[this.stack2.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
