// Array.prototype.join as a function

function join(arr, str) {
    let res = "";

    for (let n = 0; n < arr.length; n++) {
        res += String(arr[n]);

        if (n < arr.length - 1) res += str;
    }

    return res;
}

console.log(join(["a", "b", "c"], "-")); // "a-b-c"
