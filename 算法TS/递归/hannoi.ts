//将n个碟子从p1移动到p3
//o(n²)
function hannoi(n: number, p1: string, p2: string, p3: string) {
  if (n <= 1) return move(n, p1, p3);
  hannoi(n - 1, p1, p3, p2);
  move(n, p1, p3);
  hannoi(n - 1, p2, p3, p1);
}
function move(n: number, from: string, to: string) {
  console.log(`${n}从${from}移动到${to}`);
}
hannoi(3, 'a', 'b', 'c');
