function twoSum(nums: number[], target: number) {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const cmp = target - nums[i];
    if (map.get(cmp) !== undefined) {
      return [map.get(cmp), i];
    }
    map.set(nums[i], i);
  }
}
console.log(twoSum([2, 7, 11, 15], 9));
