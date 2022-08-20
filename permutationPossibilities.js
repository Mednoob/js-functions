// Permutation Possibilities
// ⁿPᵣ = n! / (n - r)!

function factorial(n) {
    let res = 1;

    for (let x = 2; x <= n; x++) res *= x;

    return res;
}

// n = amount of items in set
// r = amount of items selected from the set
function permutationPossibilities(n, r = n) {
    return factorial(n) / (r >= n ? 1 : factorial(n - r));
}

console.log(permutationPossibilities(4, 2)); // 12
