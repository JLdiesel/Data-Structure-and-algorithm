/**
 * 标记着某一列是否有皇后
 */
let cols: boolean[];
//标记某一对角线是否有皇后了 左上->右下
let leftTop: boolean[];
//标记某一对角线是否有皇后了 右上->左下
let rightTop: boolean[];
//一共有多少总摆法
let ways: number = 0;
function placeQueens(n: number) {
  if (n < 1) return;
  cols = new Array<boolean>(n).fill(false);
  leftTop = new Array<boolean>((n << 1) - 1).fill(false);
  rightTop = new Array<boolean>(leftTop.length).fill(false);
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
    //第col列有皇后了
    if (cols[col]) continue;
    const ltIndex = row - col + cols.length - 1;
    const rtIndex = row + col;
    //ltIndex cow-col+cols.length-1 左上角出发的斜线的index
    if (leftTop[ltIndex]) continue;
    //rtIndex  row+col 右上角出发的斜线的index
    if (rightTop[rtIndex]) continue;
    // 摆放皇后
    cols[col] = true;
    leftTop[ltIndex] = true;
    rightTop[rtIndex] = true;
    place(row + 1);
    //回溯 重置
    cols[col] = false;
    leftTop[ltIndex] = false;
    rightTop[rtIndex] = false;
  }
}

//展示
function show() {}
export {};
