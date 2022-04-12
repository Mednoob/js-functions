// Dash Odd Numbers
// CodeWars Kata: https://www.codewars.com/kata/58223370aef9fc03fd000071

function dashOddNumbers(num) {
  const abs = Math.abs(num);
  if (isNaN(abs)) return 'NaN';

  const matches = abs.toString().match(/[02468]+|[13579]/g);
  return (matches ? matches : []).join("-");
}

console.log(dashOddNumbers(3465));
