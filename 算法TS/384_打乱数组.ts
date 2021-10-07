class Solution {
  nums: number[];
  resetNum: number[];
  rand = Math.random();
  constructor(nums: number[]) {
    this.nums = [...nums];
    this.resetNum = [...nums];
  }

  reset(): number[] {
    this.nums = this.resetNum;
    return this.nums;
  }

  shuffle(): number[] {
    for (let i: number = 0; i < this.nums.length; i++) {
      this.reverse(
        i,
        Math.floor(i + this.rand * this.nums.length) % this.nums.length
      );
    }
    return this.nums;
  }
  reverse(index, changeIndex) {
    const tmp = this.nums[index];
    this.nums[index] = this.nums[changeIndex];
    this.nums[changeIndex] = tmp;
  }
}
