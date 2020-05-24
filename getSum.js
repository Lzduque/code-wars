function getSum(a, b) {
    const max = Math.max(a, b);
    const min = Math.min(a, b);

    if (max === min) return max;
    else return min + getSum(min + 1, max);
}

console.log(getSum(1, 0), 1, getSum(1, 0) === 1);
console.log(getSum(1, 2), 3, getSum(1, 2) === 3);
console.log(getSum(0, 1), 1, getSum(0, 1) === 1);
console.log(getSum(1, 1), 1, getSum(1, 1) === 1);
console.log(getSum(-1, 0), -1, getSum(-1, 0) === -1);
console.log(getSum(-1, 2), 2, getSum(-1, 2) === 2);