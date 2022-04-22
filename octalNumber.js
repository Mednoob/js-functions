// Octal Number
// 0o321 = 3 * 8^2 + 2 * 8^1 + 1 * 8^0

function octalNumber(num) {
  if (typeof num !== "number") throw new Error("Invalid input");

  return num
    .toString()
    .split("")
    .map((x, i, a) => parseInt(x) * Math.pow(8, a.length - 1 - i))
    .reduce((p,c) => p + c, 0);
}

console.log(octalNumber(321)); // 209
console.log(octalNumber(321) === 0o321); // true
