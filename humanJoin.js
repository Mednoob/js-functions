// Join array items into a string with human-like sentence
//
// For example if we have items such as: a, b, c; we would say it as `a, b, and c`
// and if we have: a, b; we would say it as `a and b`

function humanJoin(arr) {
    let res = "";

    for (let n = 0; n < arr.length; n++) {
        res += String(arr[n]);
        if (n !== arr.length - 1) res += arr.length > 2 ? ", " : " ";
        if (n === arr.length - 2) res += "and ";
    }

    return res;
}

// one-line
const humanJoin = arr => arr.reduce((p, c, i) => p + String(c) + (i === arr.length - 1 ? "" : arr.length > 2 ? ", " : " ") + (i === arr.length - 2 ? "and " : ""), "");

console.log(humanJoin([])); // ""
console.log(humanJoin(["a"])); // "a"
console.log(humanJoin(["a", "b"])); // "a and b"
console.log(humanJoin(["a", "b", "c"])); // "a, b, and c"
console.log(humanJoin(["a", "b", "c", "d"])); // "a, b, c, and d"
