/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let p1 = fruits[0],
    p2 = null,
    p1Last = 0,
    p2Last = 0,
    result = 0,
    count = 1;
  for (let i = 1; i < fruits.length; i++) {
    const item = fruits[i];
    if (item === p1) {
      count++;
      p1Last = i;
      continue;
    } else if (item === p2) {
      count++;
      p2Last = i;
      continue;
    } else {
      result = Math.max(result, count);
      if (fruits[i - 1] === p1) {
        if (p2 === null) {
          p2 = fruits[i];
          count++;
        } else {
          count = i - p2Last;
          p2 = fruits[i];
        }

        p2Last = i;
      } else if (fruits[i - 1] === p2) {
        count = i - p1Last;
        p1 = fruits[i];
        p1Last = i;
      }
    }
  }
  result = Math.max(result, count);
  return result;
};
