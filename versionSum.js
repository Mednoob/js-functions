function versionSum(a, b) {
    const sA = a.split(".");
    const sB = b.split(".");
    const res = [];

    for (let n = 0; n < Math.max(sA.length, sB.length); n++) {
        res.push(~~sA[n] + ~~sB[n]);
    }

    return res.join(".");
}

console.log(versionSum("3.1.1", "0.2")); // 3.3.1
console.log(versionSum("0.1.0", "1.0.0")); // 1.1.0
