// Optional chaining as a function

function optionalChaining(obj, prop) {
    if (typeof obj === "undefined" || obj === null) return obj;
    if (typeof obj[prop] === "undefined" || obj[prop] === null) return undefined;

    return obj[prop];
}

const obj = { a: "b", b: { a: "c" } };
console.log(optionalChaining(obj, "a")); // 'b'
console.log(optionalChaining(obj, "c")); // undefined

// Nested
console.log(
    optionalChaining(
        optionalChaining(obj, "b"),
        "a"
    )
); // 'c'
