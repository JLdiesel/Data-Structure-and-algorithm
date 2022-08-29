describe('ez test', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('test 1', async () => {
    const res = await new Promise((res, rej) => {
      setTimeout(() => {
        res(123);
      }, 3000);
      vi.runAllTimers();
    });
    expect(res).toBe(123);
  });
});
