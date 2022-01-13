function bm(main: string, ptn: string) {
  const badChar: number[] = new Array(256);
  if (main == null || ptn == null) {
    return -1;
  }
  const m = main.length;
  const n = ptn.length;
  badCharRule(ptn, badChar);
  const suffix: number[] = new Array(n);
  const prefix: boolean[] = new Array(n);
  goodSuffixRule(ptn, suffix, prefix);
  let i = n - 1;
  while (i <= m - 1) {
    let j = n - 1;
    while (j >= 0 && main.charAt(i) == ptn.charAt(j)) {
      --i;
      if (--j == -1) {
        return i + 1;
      }
    }
    //计算坏字符规则下移动的位数
    let moveWithBC = j - badChar[main.charAt(i)];
    //计算好后缀规则下移动的位数
    let moveWithGS = Number.MIN_VALUE;
    if (j < n - 1) {
      moveWithGS = moveWithGSF(n, j, suffix, prefix);
    }
    i += Math.max(moveWithBC, moveWithGS);
  }
  return -1;
}

/**
 * 生成坏字符数组
 */
function badCharRule(str: string, badChar: number[]) {
  badChar.fill(-1);
  for (let i = 0; i < str.length; i++) {
    badChar[str.charAt(i)] = i;
  }
}

/**
 * 生成好后缀数组
 */
function goodSuffixRule(str: string, suffix: number[], prefix: boolean[]) {
  suffix.fill(-1);
  prefix.fill(false);
  let n = str.length;
  for (let i = 0; i < n - 1; i++) {
    let j = i;
    let k = 0;
    while (j >= 0 && str.charAt(j) == str.charAt(n - k - 1)) {
      --j;
      ++k;
      suffix[k] = j + 1;
    }
    if (j == -1) {
      prefix[k] = true;
    }
  }
}
/**
 * 计算好后缀情况下的移动位数
 */
function moveWithGSF(
  n: number,
  j: number,
  suffix: number[],
  prefix: boolean[]
) {
  let k = n - j - 1;
  if (suffix[k] != -1) {
    return j - suffix[k] + 1;
  }
  for (let i = k - 1; i >= 0; i--) {
    if (prefix[i]) {
      return n - i;
    }
  }

  return n;
}
console.log(bm('abcdacabc', 'cab'));
