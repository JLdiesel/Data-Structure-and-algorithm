function isFlipedString(s1: string, s2: string): boolean {
  if (s1 === s2) return true;
  if (!s1 || !s2) return false;
  return (s1 + s1).includes(s2);
}
console.log(isFlipedString('cdab', 'abdd'));
