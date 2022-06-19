// Dash Odd Numbers
// CodeWars Kata: https://www.codewars.com/kata/58223370aef9fc03fd000071

function dashOddNumbers(num) {
  const abs = Math.abs(num);
  if (isNaN(abs)) return 'NaN';

  return (abs.toString().match(/[02468]+|[13579]/g) || []).join("-");
}

// one-line
const dashOddNumbers = num => isNaN(num) ? "NaN" : (`${Math.abs(num)}`.match(/[02468]+|[13579]/g) || []).join("-");
const dashOddNumbers = num => `${Math.abs(num)}`.split(/(?<=[13579])|(?=[13579])/g).join("-");

console.log(dashOddNumbers(3465));
