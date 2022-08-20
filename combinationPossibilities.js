// Combination Possibilities
// ⁿCᵣ = n! / (r! * (n - r)!)

function factorial(n) {
    let res = 1;

    for (let x = 2; x <= n; x++) res *= x;

    return res;
}

// n = amount of items in set
// r = amount of items selected from the set
function combinationPossibilities(n, r = n) {
    return factorial(n) / (factorial(r) * factorial(n - r))
}

console.log(combinationPossibilities(4, 2)); // 6
