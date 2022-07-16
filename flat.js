// Array.prototype.flat as a function (recursive)

function flat(arr, depth = 1) {
    const res = [];

    for (const item of arr) {
        if (Array.isArray(item) && depth > 0) {
            res.push(...flat(item, depth - 1));
        } else {
            res.push(item);
        }
    }

    return res;
}

const arr = [1,2,[3,4,[5,6]]];
console.log(flat(arr)); // [1,2,3,4,[5,6]]
console.log(flat(arr, 1)); // [1,2,3,4,[5,6]]
console.log(flat(arr, 2)); // [1,2,3,4,5,6]
console.log(flat(arr, 0)); // [1,2,[3,4,[5,6]]]
