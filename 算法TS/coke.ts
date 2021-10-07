// const readline = require('readline')
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// const arr = []
// let xiabiao=0
// rl.on('line', (input) => {
//   if (xiabiao >= 2) {
//   console.log(arr[0].split(' '));

//     let coke1 = coke(parseInt(arr[0].split(' ')[0]),parseInt(arr[0].split(' ')[1]),parseInt(arr[0].split(' ')[2]))(arr[1])
//      rl.prompt();
//   } else {
//      arr.push(input)
//      xiabiao++
//  }
// });

function coke(la, lb, ls) {
  return function (str: string): Array<number> {
    const arr1 = [...str];
    const newArr = [];
    arr1.forEach((item) => {
      switch (item) {
        case 'a':
          newArr.push(la);
          break;
        case 'b':
          newArr.push(lb);
          break;
        case 's':
          newArr.push(ls);
          break;
        default:
          return new Error('不合规范');
      }
    });
    const mmax = newArr.reduce((pre, next) => pre + next, 0) / 2;
    let prev = 0;
    let now = 0;
    for (let i = 0; i <= str.length; i++) {
      if (now <= mmax) {
        prev = now;
        now = now + newArr[i];
        console.log(now, prev);
      } else {
        return mmax - prev <= now - mmax
          ? [mmax - prev, i - 1]
          : [now - mmax, i];
      }
    }
  };
}
// type num=string;
// const result1:num = readline()
// const result2 = readline()
// const param1=result1.split(' ').map(parseInt)

console.log(coke(1, 2, 3)('abbs'));

export default coke;
