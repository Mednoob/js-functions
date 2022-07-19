// Nearest multiply of `exp` from `num`

function nearestMultiply(a, b) {
    return Math.max(Math.round(b / a), 1) * a;
}

console.log(nearestMultiply(15, 63)); // 60           The nearest multiply of 15 from 63 is 60
