var calculate = function(s:string) {
    s = s.trim();
    const stack:number[] =[];
    let preSign = '+';
    let num = 0;//num为每一个要加的数字
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        if (!isNaN(Number(s[i])) && s[i] !== ' ') {
            //如果不是符号并且不是空
            //证明num是连续的，需要累加
            num = num * 10 + (s[i] as unknown as number )- 0;
        }
        if (isNaN(Number(s[i])) || i === n - 1) {
            //如果是符号，或者i为最后一个
            switch (preSign) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop() * num);
                    break;
                default:
                    stack.push(stack.pop() / num | 0);
            }   
            preSign = s[i];
            num = 0;
        }
    }
    let ans = 0;
    while (stack.length) {
        ans += stack.pop();
    }
    return ans;
};
console.log(
calculate('1+5/2'));
