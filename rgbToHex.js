// RGB to Hex
// CodeWars Kata: https://www.codewars.com/kata/513e08acc600c94f01000001

function rgbToHex(r, g, b){
  let res = "";
  for (let n of [r,g,b]) {
    const first = n < 0 ? 0 : Math.min(n / 16, 15.9375);
    const second = (first % 1) * 16;
    res += Math.floor(first).toString(16) + second.toString(16);
  }
  return res.toUpperCase();
}

console.log(rgbToHex(255, 255, 255)); // FFFFFF
console.log(rgbToHex(148, 0, 211)); // 9400D3
