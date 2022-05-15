// Hexadecimal Number
// 0xfa0  = (((base16_representation_of("f") * 16) + base16_representation_of("a")) * 16) + base16_representation_of("0")
//        = (((15 * 16) + 10) * 16) + 0
//        = ((240 + 10) * 16) + 0
//        = (250 * 16) + 0
//        = 4000

function hexadecimalNumber(num) {
    const str = String(num);
    let res = 0;

    try {
        for (const s of str) res = (res * 16) + parseInt(s, 16);
    } catch {
        throw new Error("Invalid input");
    }

    return res;
}

console.log(hexadecimalNumber("fa0")); // 4000
console.log(hexadecimalNumber("fa0") === 0xfa0); // true
