/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const thousands = ['', 'M', 'MM', 'MMM'];
  const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  let result = '';
  result += thousands[0 ^ (num / 1000)];
  result += hundreds[0 ^ ((num % 1000) / 100)];
  result += tens[0 ^ ((num % 100) / 10)];
  result += ones[num % 10];
  return result;
};

var intToRoman = function (num) {
  const thousands = ['', 'M', 'MM', 'MMM'];
  const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  const roman = [];
  roman.push(thousands[Math.floor(num / 1000)]);
  roman.push(hundreds[Math.floor((num % 1000) / 100)]);
  roman.push(tens[Math.floor((num % 100) / 10)]);
  roman.push(ones[num % 10]);
  return roman.join('');
};
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let result = '';
  const romMap = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };
  let t = 0 ^ (num / 1000);
  while (t) {
    result += 'M';
    t--;
  }
  num = num % 1000;
  [100, 10, 1].forEach((item) => {
    let b = 0 ^ (num / item);
    if (b === 9) {
      result += romMap[9 * item];
      b -= 9;
    }
    if (b === 4) {
      result += romMap[4 * item];
      b -= 4;
    }
    if (b >= 5) {
      b -= 5;
      result += romMap[5 * item];
      while (b) {
        result += romMap[item];
        b--;
      }
    } else {
      while (b) {
        result += romMap[item];
        b--;
      }
    }
    num = num % item;
  });
  return result;
};
