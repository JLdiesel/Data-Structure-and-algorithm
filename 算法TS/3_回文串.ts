function isPalindrome(x: number) {
  if (x < 0 || (!(x % 10) && x)) return false;
  let res = 0;
  while (x > res) {
    res = res * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return res === x || x === Math.floor(res / 10);
}
console.log(isPalindrome(1234321));
export {};
