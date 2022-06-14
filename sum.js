// Sum two (big) numbers written as string (result is the sum of absolute `a` and absolute `b`)

function sum(a, b) {
    let res = "";
    let left = 0;
    for (let n = 1; n <= Math.max(a.length, b.length); n++) {
        const num = ~~a[a.length - n] + ~~b[b.length - n] + left;
        res = `${num % 10}` + res;
        left = ~~(num / 10);
    }
    res = left + res;
    return res.replace(/^0+/, "");
}

sum("321", "3023"); // "3344"
sum("321", "000003023"); // "3344"
sum("756", "9890"); // "10646"
