function indexOf(text: string, pattern: string): number {
  if (!text || !pattern) return -1;
  const plen = pattern.length;
  const tlen = text.length;
  if (tlen < plen) return -1;
  //next数组
  const nextArr = next(pattern);
  let pi = 0,
    ti = 0;
  let tmax = tlen - plen;
  while (pi < plen && ti - pi <= tmax) {
    if (pi < 0 || text.charAt(ti) === pattern.charAt(pi)) {
      ti++;
      pi++;
    } else {
      pi = nextArr[pi];
    }
  }
  return pi === plen ? ti - pi : -1;
}
// function next1(pattern: string) {
//   const len = pattern.length;
//   const next = new Array(len);
//   let i = 0;
//   let n = (next[i] = -1);
//   let imax = len - 1;
//   while (i < imax) {
//     if (n < 0 || pattern.charAt(i) === pattern.charAt(n)) {
//       next[++i] = ++n;
//     } else {
//       n = next[n];
//     }
//   }
//   return next;
// }
function next(pattern: string) {
  const len = pattern.length;
  const next = new Array(len);
  let i = 0;
  let n = (next[i] = -1);
  let imax = len - 1;
  while (i < imax) {
    if (n < 0 || pattern.charAt(i) === pattern.charAt(n)) {
      i++;
      n++;
      if (pattern.charAt(i) === pattern.charAt(n)) {
        next[i] = next[n];
      } else {
        next[i] = n;
      }
    } else {
      n = next[n];
    }
  }
  return next;
}
export {};
