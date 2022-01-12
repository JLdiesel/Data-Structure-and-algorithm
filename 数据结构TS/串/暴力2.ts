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
  let tmax = tlen - plen;
  for (let ti = 0; ti < tmax; ti++) {
    let pi = 0;
    for (; pi < plen; pi++) {
      if (t[ti + pi] !== p[pi]) break;
    }
    if (pi === plen) return ti;
  }
  return -1;
}
console.log(indexOf('abccc', 'abc'));
console.log(indexOf('abccc', 'ccc'));
console.log(indexOf('abccc', 'bc'));
console.log(indexOf('abccc', 'bcc'));
export default indexOf;
