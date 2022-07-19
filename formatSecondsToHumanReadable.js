// Format Time in Second to Human Readable Time
// CodeWars Kata: https://www.codewars.com/kata/52742f58faf5485cae000b9a

const times = {
    year: 365 * 24 * 60 * 60,
    day: 24 * 60 * 60,
    hour: 60 * 60,
    minute: 60,
    second: 1
};

function formatSecondsToHumanReadable(seconds) {
  if (seconds <= 0) return "now";

  let leftOver = seconds;
  const values = Object.entries(times).map(([k, v]) => {
    const res = Math.floor(leftOver / v);
    leftOver %= v;
    return [k, res];
  }).filter(x => x[1] > 0);
  
  return values.map((x, i, a) => {
    const separator = (i === (a.length - 1))
      ? ""
      : (
        (i === (a.length - 2)) ? " and " : ", "
      );

    return `${x[1]} ${x[0]}${x[1] > 1 ? "s" : ""}${separator}`;
  }).join("");
}

// I was hoping to make a more readable solution, so I rewrote the function:
function formatSecondsToHumanReadable(seconds) {
    if (seconds <= 0) return "now";

    const arr = [];

    for (const [k, t] of Object.entries(times)) {
        if (seconds >= t) {
            arr.push([k, Math.floor(seconds / t)]);
            seconds %= t;
        }
    }

    let res = "";

    for (let n = 0; n < arr.length; n++) {
        const [k, t] = arr[n]
        res += `${t} ${k}${t > 1 ? "s" : ""}`

        if (n === arr.length - 2) {
            res += " and "
        } else if (n < arr.length - 2) {
            res += ", "
        }
    }

    return res;
}
