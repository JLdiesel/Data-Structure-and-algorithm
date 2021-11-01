function coin(money: number) {
  if (money < 1) return Number.MAX_VALUE;
  if (money === 25 || money == 20 || money === 5 || money === 1) return 1;
   return Math.min(coin(money-25),coin(money-20),coin(money-5),coin(money-1))+1
}
console.log(coin(41));
