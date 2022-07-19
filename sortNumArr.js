// Sort Number Array
// Note: This function doesn't mutate the original array, unlike 'Array.prototype.sort'

function sortNumArr(arr) {
    const res = [];

    for (const item of arr) {
        let index = res.length - 1;
        while (index > -1 && arr[index] > item) --index;
        res.splice(index + 1, 0, item)
    }

    return res;
}

// =======================================================================================================
// I did some tests to compare 'sortNumArr' with 'Array.prototype.sort'.
// There are several times when the average speed of 'sortNumArr' being faster than 'Array.prototype.sort'
// But still, most of the times, 'Array.prototype.sort' is faster than this function
// This is the test code:
const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

// The tests are sorting an array filled with 25 items. Each items are number between 0 - 100.
function test(tests) {
    const testA = [];
    const testB = [];

    for (let n = 0; n < tests; n++) {
        const arr = Array.from({ length: 25 }, () => Math.round(Math.random() * 100));

        let before = 0;
        let after = 0;

        // sortNumArr test
        before = performance.now();
        sortNumArr(arr);
        after = performance.now();
        testA.push(after - before);

        // Array.prototype.sort test
        before = performance.now();
        arr.sort((a, b) => a - b);
        after = performance.now();
        testB.push(after - before);
    }

    console.log(`'sortNumArr' average on ${tests} test: ${average(testA)}ms`);
    console.log(`'Array.prototype.sort' average on ${tests} test: ${average(testB)}ms`);
}

test(100); // 'sortnumArr' and `Array.prototype.sort` average on 100 tests
