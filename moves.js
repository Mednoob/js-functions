// Moves that can be done when moving forward and slice `num` items until all items are taken

function moves(arr, num) {
    const res = [];

    for (let n = 0; n < arr.length + 1 - num; n++) {
        res.push(arr.slice(n, n + num));
    }

    return res;
}

// one-line
const moves = (a, n) => Array.from({ length: a.length + 1 - n }, (_, i) => a.slice(i, i + n));

console.log(moves([1,2,3,4,5], 2)); // [[1,2], [2,3], [3,4], [4,5]]
console.log(moves([1,2,3,4,5], 3)); // [[1,2,3], [2,3,4], [3,4,5]]
