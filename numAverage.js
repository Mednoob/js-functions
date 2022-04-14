// Average of An Array of Number

function numAverage(arr) {
    return arr.reduce((p,c) => p+c, 0) / arr.length;
}

console.log(numAverage([4,5,3])); // 4
