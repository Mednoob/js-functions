// Factorial of `n`

function factorial(n) {
    let res = 1;

    for (let x = 2; x <= n; x++) res *= x;

    return res;
}

console.log(factorial(0)); // 1         0! = 1
console.log(factorial(1)); // 1         1! = 1
console.log(factorial(2)); // 2         2! = 1 * 2
console.log(factorial(3)); // 6         3! = 1 * 2 * 3
console.log(factorial(4)); // 24        4! = 1 * 2 * 3 * 4
console.log(factorial(5)); // 120       5! = 1 * 2 * 3 * 4 * 5
