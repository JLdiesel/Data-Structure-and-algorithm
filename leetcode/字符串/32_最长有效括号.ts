/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (!s) return 0
  let left = 0, right = 0, max = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      left++
    } else {
      right++
    }
    if (left === right) {
      max = Math.max(max, left * 2)
    } else if (right > left) {
      left = 0
      right = 0
    }
  }
  left = 0, right = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ')') {
      left++
    } else {
      right++
    }
    if (left === right) {
      max = Math.max(max, left * 2)
    } else if (right > left) {
      left = 0
      right = 0
    }
  }
  return max
};