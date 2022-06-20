// Array.prototype.slice as a function

function slice(arr, start, end) {
    const ind = n => (n < 0 ? arr.length : 0) + n;
    const res = [];

    for (let n = ind(start); n < ind(end); n++) {
        if (Object.hasOwn(arr, n)) res.push(arr[n]);
    }

    return res;
}

console.log(slice([1,2,3,4,5], 0, 2)); // [1,2]
console.log(slice([1,2,3,4,5], 0, -1)); // [1,2,3,4]
