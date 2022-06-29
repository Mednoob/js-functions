// Simple math eval function (also known as "calculator")

const functions = {
    sqrt: num => Math.sqrt(num),
    cbrt: num => Math.cbrt(num)
};

const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
}

const reg = (/(\d+)\s*([*/])\s*(\d+)/g);

function evalMath(str) {
    str = str.replace(/([a-z]*)\((.*?)\)/gi, (_, f, n) => {
        const num = evalMath(n);
        return functions[f] ? functions[f](num) : num;
    });

    while (str.match(reg)) {
        str = str.replace(reg, (_, a, o, b) => operators[o](parseFloat(a), parseFloat(b)));
    }
    
    let num = 0;
    let lastOpt = "+";

    const arr = str.split(/(\d+|[+-])/g).map(x => x.trim()).filter(Boolean)
    for (const s of arr) {
        if (operators[s]) {
            lastOpt = lastOpt === s ? "+" : s;
        } else {
            if (operators[lastOpt]) num = operators[lastOpt](num, parseFloat(s));
            lastOpt = "";
        }
    }

    return num;
}

console.log(evalMath("123 + 321")); // 444
console.log(evalMath("30 + (-6)")); // 24
console.log(evalMath("6 / 3 + 3")); // 5
console.log(evalMath("sqrt(16) + 3")); // 7
console.log(evalMath("sqrt(64) / cbrt(8) * 3")); // 12

// Bugs
console.log(evalMath("cbrt(sqrt(16) + 4)")); // NaN   Because the regex for brackets locate the nearest bracket closing, so the match will be: "cbrt(sqrt(16)"
