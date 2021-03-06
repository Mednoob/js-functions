// Permutations

function permutations(arr) {
    const res = [];

    for (let n = 0; n < arr.length; n++) {
        const p = permutations(arr.slice(0, n).concat(arr.slice(n + 1, arr.length)));
        const ar = p.length ? p.map(x => [arr[n]].concat(x)) : [arr[n]];
        res.push(...ar);
    }

    return res;
}

console.log(permutations([1, 2])); // [[1, 2], [2, 1]]
