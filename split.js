// String.prototype.split as a function
// This is the string separator version, I haven't figured out how to split string with regex

function split(str, sep) {
    const res = [];
    let temp = "";

    for (let n = 0; n < str.length; n++) {
        if (!sep.length) {
            res.push(str[n]);
            continue;
        }

        if (str.slice(n, n + sep.length) === sep) {
            res.push(temp);
            temp = "";
            n += Math.max(sep.length - 1, 0);
        } else temp += str[n];
    }

    if (sep.length) res.push(temp);

    return res;
}

console.log(split("abc", "")); // ["a", "b", "c"]
console.log(split("abc-def-ghi", "-")); // ["abc", "def", "ghi"]
console.log(split("abc-def-ghi", "-def-")); // ["abc", "ghi"]
