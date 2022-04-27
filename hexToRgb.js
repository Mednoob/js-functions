// Hex to RGB

function hexToRgb(hex) {
    if (typeof hex !== "string" || hex.length !== 6) throw new Error("Invalid Input");

    return [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)]
        .map(x => (parseInt(x[0], 16) + (parseInt(x[1], 16) / 16)) * 16);
}

console.log(hexToRgb("FFFFFF")); // [255, 255, 255]
console.log(hexToRgb("9400D3")); // [148, 0, 211]
