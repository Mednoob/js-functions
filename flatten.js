// Flatten an iterable(array, string) / object

function flatten(obj) {
    const newObj = {};
    for (const [k,v] of Object.entries(obj)) {
        if (typeof v === "object") {
            const flattened = flatten(v);
            for (const [kf, kv] of Object.entries(flattened)) newObj[`${k}.${kf}`] = kv;
        } else newObj[k] = v;
    }

    return newObj;
}

console.log(flatten({a: { b: "b" }, b: "b"}));
// { "a.b": "b", b: "b" }

console.log(flatten({a: { b: "b" }, b: "b", c: ["a", "b", "c"]}));
// { "a.b": "b", b: "b", "c.0": "a", "c.1": "b", "c.2": "c" }

console.log(flatten("abc"));
console.log(flatten(["a", "b", "c"]))
// { "0": "a", "1": "b", "2": "c" }
