// DFA States Generator for Base N Number Divisible by A Specific Number

// `num` = The number
// `base` = The base for the number
function dfaStates(num, base = 2) {
    const obj = {};
    let x = 0;

    for (let n = 0; n < num * base; n++) {
        const k = `${Math.floor(n / base)}`;
        if (!obj[k]) obj[`${k}`] = {};

        obj[k][`${n % base}`] = `${x}`;
        x = ++x % num;
    }

    return obj;
}

console.log(dfaStates(3));
// Will print DFA States for binary (base-2) number divisible by 3
// '{"0":{"0":"0","1":"1"},"1":{"0":"2","1":"0"},"2":{"0":"1","1":"2"}}'

console.log(dfaStates(5, 3));
// Will print DFA States for ternary (base-3) number divisible by 5
// '{"0":{"0":"0","1":"1","2":"2"},"1":{"0":"3","1":"4","2":"0"},"2":{"0":"1","1":"2","2":"3"},"3":{"0":"4","1":"0","2":"1"},"4":{"0":"2","1":"3","2":"4"}}'
