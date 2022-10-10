describe('ez test', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  function noZero(num) {
    let count = 0;
    while (num > 0) {
      let remainder = num % 10;
      if (remainder == 0) {
        return count;
      }
      num = (num / 10) | 0;
      count++;
    }
    return true;
  }
  it('test 1', async () => {
    expect(noZero(20)).toBe(0);
    expect(noZero(100)).toBe(0);
    expect(noZero(1022)).toBe(2);
    expect(noZero(1002)).toBe(1);
    expect(noZero(1000)).toBe(0);
  });
});
