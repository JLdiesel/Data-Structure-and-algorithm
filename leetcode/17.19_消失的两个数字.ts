function missingTwo(nums) {
  let xorsum = 0;
  let n = nums.length + 2;
  for (const num of nums) {
    xorsum ^= num;
  }
  for (let i = 1; i <= n; i++) {
    xorsum ^= i;
  }
  let type1 = 0,
    type2 = 0;
  const lsb = xorsum & -xorsum;
  for (const num of nums) {
    if (num & lsb) {
      type1 ^= num;
    } else {
      type2 ^= num;
    }
  }
  for (let i = 1; i <= n; i++) {
    if (i & lsb) {
      type1 ^= i;
    } else {
      type2 ^= i;
    }
  }
  return [type1, type2];
}
console.log(missingTwo([1, 3]));
/* 数a与不相同的数b异或后的数c与数c的负数之后得到的数d
 d与a 和 d与b 中必定有一个等于0一个不等于0 
*/
function valid(a, b) {
  const huo = a ^ b;
  const lsp = huo & -huo;
  return [a & lsp, b & lsp];
}
let count = 0,
  errocount = 0;
for (let i = 0; i < 500; i++) {
  for (let j = 0; j < 500; j++) {
    if (i === j) continue;
    const result = valid(i, j);
    if (result.includes(0) && result.some((item) => item > 0)) {
      count++;
    } else {
      errocount++;
    }
  }
}
console.log(count, errocount);
