const s = 'bbacb';
function getMin(s: string) {
  let i = 0,
    j = 1,
    k = 0,
    n = s.length;
  while (i < n && j < n && k < n) {
    debugger;
    const a = s[(i + k) % n],
      b = s[(j + k) % n];
    if (a == b) k++;
    else {
      a > b ? (i += k + 1) : (j += k + 1);

      if (i == j) i++;
      k = 0;
    }
  }
  i = Math.min(i, j);
  return s.substring(i) + s.substring(0, i);
}
console.log(getMin(s));
