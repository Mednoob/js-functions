// Generate random number between two numbers

function random(min, max) {
    if ([min, max].some(x => typeof x !== "number")) throw new Error("Invalid argument");

    return min + Math.round(Math.random() * (max - min))
}
