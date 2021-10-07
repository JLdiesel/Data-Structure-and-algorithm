function strStr(haystacks: string, needles: string): number {
  const next = nextarr([...needles], needles.length);
  const needle = [...needles];
  const haystack = [...haystacks];
  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1] + 1;
      if (needle.length - j + i > haystack.length) {
        return -1;
      }
    }
    if (haystack[i] === needle[j]) {
      ++j;
    }
    if (j === needle.length) {
      return i - needle.length + 1;
    }
  }
  return -1;
}
function nextarr(arr: string[], m: number) {
  let k = -1;
  let next: number[] = [-1];
  for (let i = 1; i < m; i++) {
    while (k !== -1 && arr[k + 1] !== arr[i]) {
      k = next[k];
    }
    if (arr[k + 1] === arr[i]) {
      ++k;
    }
    next[i] = k;
  }
  return next;
}
export default strStr;
