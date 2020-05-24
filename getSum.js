function getSum(a, b) {
    let result;
    let nums = [];
    const max = Math.max(a, b);
    const min = Math.min(a, b);

    if (a === b) {
        result = a;
        return result;
    } else {
        for (let i = min; i <= max; i++) {
            nums.push(i);
        }
    }

    result = nums.reduce((acc, current) => acc + current, 0);
    return result;
}

console.log(getSum(1, 0), 1, getSum(1, 0) === 1);
console.log(getSum(1, 2), 3, getSum(1, 2) === 3);
console.log(getSum(0, 1), 1, getSum(0, 1) === 1);
console.log(getSum(1, 1), 1, getSum(1, 1) === 1);
console.log(getSum(-1, 0), -1, getSum(-1, 0) === -1);
console.log(getSum(-1, 2), 2, getSum(-1, 2) === 2);