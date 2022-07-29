// Convert number to how it spelt in Bahasa Indonesia
// 2006 -> "dua ribu enam"
// dua = two
// ribu = thousand(s)
// enam = six

const ths = ["triliun", "miliar", "juta", "ribu"];
const nums = {
    "1": "satu",
    "2": "dua",
    "3": "tiga",
    "4": "empat",
    "5": "lima",
    "6": "enam",
    "7": "tujuh",
    "8": "delapan",
    "9": "sembilan"
}

function toIndonesianNumber(number) {
    if (number === 0) return "nol";

    let str = "";
    if (number < 0) {
        str += "minus ";
        number *= -1;
    }
    if (number > Number.MAX_VALUE) return `${str}tak terbatas`;

    if (number >= 1000) {
        for (let n = 0; n < ths.length; n++) {
            const div = Math.pow(1000, ths.length - n);
            const num = Math.floor(number / div);
            if (div === 1000 && num === 1) {
                str += "seribu ";
            } else if (num > 0) {
                const strnum = `${num}`;
                str += `${strnum.length === 1 ? nums[strnum] : toIndonesianNumber(num)} ${ths[n]} `;
            }

            number %= div;
        }
    }

    if (number < 1) return str.trim();
    if (number === 10) return "sepuluh";
    if (number === 11) return "sebelas";

    const numstr = number.toString();
    if (numstr.length === 1) return nums[numstr];
    if (numstr.startsWith("1") && numstr.length === 2) return `${nums[`${number - 10}`]} belas`

    const puluh = numstr.length === 2;
    const div = puluh ? 10 : 100;
    const mod = number % div;
    const num = Math.floor(number / div);

    str += !puluh && num === 1 ? "seratus " : `${nums[`${num}`]} ${puluh ? "puluh" : "ratus"} `;
    if (mod) str += puluh ? nums[`${mod}`] : toIndonesianNumber(mod);

    return str.trim();
}

console.log(toIndonesianNumber(0)); // "nol"

console.log(toIndonesianNumber(1945)); // "seribu sembilan ratus empat puluh lima"
console.log(toIndonesianNumber(-1945)); // "minus seribu sembilan ratus empat puluh lima"

// One million
console.log(toIndonesianNumber(1000 * 1000)); // "satu juta"

// One billion
console.log(toIndonesianNumber(1000 * 1000 * 1000)); // "satu miliar"

// One trillion
console.log(toIndonesianNumber(1000 * 1000 * 1000 * 1000)); // "satu triliun"
