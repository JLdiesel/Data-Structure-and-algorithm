/**
 * 数组索引是行号，数组元素是列号  cols[4]=5 第四行的皇后在第五列
 */
let cols: number[];
//一共有多少总摆法
let ways: number = 0;
function placeQueens(n: number) {
  if (n < 1) return;
  cols = new Array<number>(n).fill(0);
  place(0);
  console.log(ways);
}
placeQueens(8);
/**
 * 从第row行开始摆放皇后
 * @param row
 */
function place(row: number) {
  //当第n层成功摆放元素，则返回
  if (row === cols.length) {
    ways++;
    show();
    return;
  }
  for (let col = 0; col < cols.length; col++) {
    if (isValid(row, col)) {
      //合法的位置  第row行 第col列 摆放皇后
      cols[row] = col;
      place(row + 1);
    }
  }
}
//第row行第col列是否合法
function isValid(row: number, col: number) {
  for (let i = 0; i < row; i++) {
    //cols[i]:第i行皇后的列号 如果第col列已经有皇后了 则不能放
    if (cols[i] === col) return false;
    //如果斜线上有皇后，则不能放
    // y1=x1+b,y2=x2+b  y1-y2=x1-x2
    // y1=-x1+b,y2=-x2+b  y1-y2=x2-x1
    //y1-y2=abs(x1-x2)
    if (row - i === Math.abs(col - cols[i])) return false;
  }
  return true;
}
//展示
function show() {
  for (let row = 0; row < cols.length; row++) {
    for (let col = 0; col < cols.length; col++) {
      //如果第row行的皇后位置等于列
      if (cols[row] === col) {
        console.log('1 ');
      } else {
        console.log('0 ');
      }
    }
    console.log();
  }
  console.log('---------------------');
}
