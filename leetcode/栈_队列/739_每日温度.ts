//请根据每日 气温 列表 temperatures ，请计算在每一天需要等几天才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 0 来代替。

function dailyTemperatures(temperatures: number[]): number[] {
  if (!temperatures || !temperatures.length) return null;
  const result = new Array(temperatures.length).fill(0);
  const stark = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stark.length &&
      temperatures[i] > temperatures[stark[stark.length - 1]]
    ) {
      const last = stark.pop();
      result[last] = i - last;
    }
    stark.push(i);
  }

  return result;
}
const arr = [73, 74, 75, 71, 69, 72, 76, 73];
dailyTemperatures(arr);
