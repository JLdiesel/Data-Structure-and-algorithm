function strStr(haystacks: string, needles: string): number {
  const next = nextarr(needles, needles.length);
  // const needle = [...needles];
  // const haystack = [...haystacks];
  let j = 0;
  for (let i = 0; i < haystacks.length; i++) {
    while (j > 0 && haystacks[i] !== needles[j]) {
      j = next[j - 1] + 1;
      if (needles.length - j + i > haystacks.length) {
        return -1;
      }
    }
    if (haystacks[i] === needles[j]) {
      ++j;
    }
    if (j === needles.length) {
      return i - needles.length + 1;
    }
  }
  return -1;
}

// aabaaf  6
function nextarr(arr: string, m: number) {
  let k = -1;
  let next: number[] = [-1];
  for (let i = 1; i < m; i++) {
    //i 3  k -1 arr[0]===arr[3]
    //i 4  k  0 arr[1]===arr[4]  k=1
    //
    while (k !== -1 && arr[k + 1] !== arr[i]) {
      k = next[k];
    }
    if (arr[k + 1] === arr[i]) {
      k++;
      //0
    }
    next[i] = k;
  }
  console.log(next);
  //[-1,0,-1,0,1,-1]
  return next;
}
console.log(strStr('aabaabaaf', 'aabaaf'));
export default strStr;
