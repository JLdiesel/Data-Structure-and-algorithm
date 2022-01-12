/**
 *
 * @param t 被匹配的字符串
 * @param p 匹配的字符串
 * @returns
 */
function indexOf(t: string, p: string) {
  const tlen = t.length;
  const plen = p.length;
  if (!tlen || !plen) return -1;
  if (tlen < plen) return -1;
  let ti: number = 0,
    pi: number = 0,
    tmax = tlen - plen;

  while (pi < plen && ti - pi <= tmax) {
    if (t[ti] === p[pi]) {
      ti++;
      pi++;
    } else {
      ti -= pi - 1;
      pi = 0;
    }
  }
  return pi === plen ? ti - pi : -1;
}
console.log(indexOf('abccc', 'abc'));
console.log(indexOf('abccc', 'ccc'));
console.log(indexOf('abccc', 'bc'));
console.log(indexOf('abccc', 'bcc'));
export default indexOf;
