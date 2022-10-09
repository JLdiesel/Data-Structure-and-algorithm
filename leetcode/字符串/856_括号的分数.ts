/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  if (s.length === 1) return 1
  let left = 0, prev = 0, score = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') left++
    else {
      left--
      if (!left) {
        if (i - prev === 1) score += 1
        else {
          score += 2 * scoreOfParentheses(s.slice(prev + 1, i))
        }
        prev = i + 1
      }
    }
  }
  return score
};
console.log(scoreOfParentheses("(()(()))"));
