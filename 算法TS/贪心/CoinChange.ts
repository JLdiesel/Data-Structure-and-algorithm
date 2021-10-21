function coinChange(money: number) {
  const faces = [5, 10, 25, 1];
  faces.sort((a, b) => a - b);
  let coins = 0;
  for (let i = faces.length - 1; i >= 0; i--) {
    while (money >= faces[i]) {
      money -= faces[i];
      coins++;
    }
  }
  console.log(coins);
}
coinChange(41);
