// Parse Math Expression
// "123 + 456 + (123 - 456) + 789" -> ["123", "+", "456", "+", ["123", "-", "456"], "+", "789"]

const split = str => str.replace(/\s+/g, "").split(/([+-/*])/).filter(Boolean);

function getItem(arr, access) {
    let reference = arr;
    for (const item of access) {
        reference = reference[item];
    }

    return reference;
}

function parseMathExpression(exp) {
    const res = [];
    const access = [];
    const get = getItem.bind(null, res, access);
    let str = "";

    for (let n = 0; n < exp.length; n++) {
        const item = exp[n];
        if (item === ")" && !access.length) throw new Error(`Invalid expression at index ${n}`);

        if (item === "(") {
            const arr = get();

            arr.push(...split(str));
            arr.push([]);

            access.push(arr.length - 1);
            str = "";
        } else if (item === ")") {
            get().push(...split(str));
            access.pop();
            str = "";
        } else {
            str += item;
        }
    }

    res.push(...split(str));

    return res;
}

console.log(parseMathExpression("1")); // ["1"]
console.log(parseMathExpression("1 + 2")); // ["1", "+", "2"]
console.log(parseMathExpression("2 - 1")); // ["2", "-", "1"]
console.log(parseMathExpression("3 * 1")); // ["3", "*", "1"]
console.log(parseMathExpression("3 / 1")); // ["3", "/", "1"]
console.log(parseMathExpression("4 + (1 + 3)")); // ["4", "+", ["1", "+", "3"]]
console.log(parseMathExpression("123 + 456 + (123 - 456) + 789")); // ["123", "+", "456", "+", ["123", "-", "456"], "+", "789"]
console.log(parseMathExpression(")(")); // Error: Invalid expression at index 0
