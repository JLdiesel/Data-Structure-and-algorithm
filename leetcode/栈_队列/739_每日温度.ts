//请根据每日 气温 列表 temperatures ，请计算在每一天需要等几天才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 0 来代替。
//单调栈方法
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

//倒推法
function dailyTemperatures2(temperatures: number[]): number[] {
  if (!temperatures || !temperatures.length) return null;
  const result = new Array(temperatures.length);
  result[result.length - 1] = 0;
  for (let i = temperatures.length - 2; i >= 0; i--) {
    let j = i + 1;
    while (true) {
      if (temperatures[i] < temperatures[j]) {
        result[i] = j - i;
        break;
      } else if (result[j] === 0) {
        result[i] = 0;
        break;
      }
      j = j + result[j];
    }
  }

  return result;
}
const arr = [73, 74, 75, 71, 69, 72, 76, 73];
dailyTemperatures2(arr);
