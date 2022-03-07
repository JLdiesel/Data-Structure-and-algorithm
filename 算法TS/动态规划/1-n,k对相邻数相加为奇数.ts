function ntok(n: number, k: number) {
  //dp[n][k-1]代表个数中k对奇偶的值
  /* 
    2         3        4     5        6        7          8        9
0 [12]   [132]     [1324] [13524] [135246]
1        [123]     [1423] [14235] [146235]
2                  [1234] [12354] [123546]
3                           [12345] [123465]
                                     [123456]
  */
  const dp: number[][][] = new Array(n);
  dp[2] = new Array(1);
  dp[2][0] = [1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = new Array(i - 1);
    //n个数如果要有n-1个奇偶对，则只能为顺序或者逆序排  例如 5个数要有4个奇偶对 只能12345 或者54321
    dp[i][i - 2] = [...dp[i - 1][i - 3], i];
  }
  for (let i = 3; i <= n; i++) {
    for (let j = 0; j < i - 2; j++) {
      //i是否为偶数
      const iflag = i % 2 === 0;
      //j是否为偶数
      const jflage = j % 2 === 0;
      if (jflage === iflag) {
        //如果偶行偶列或者奇行奇列
        dp[i][j] = [...dp[i - 1][j], i];
      } else {
        {
          //如果是奇行偶列或者偶行奇列
          dp[i - 1][j].splice(Math.floor(dp[i - 1][j].length / 2), 0, i);
          dp[i][j] = [...dp[i - 1][j]];
        }
      }
    }
  }
  return dp[n][k - 1];
}

console.log(ntok(5, 1));
