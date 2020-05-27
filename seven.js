const seven = (m) => sevenSteps(m, 0);

const sevenSteps = (m, steps) => {
    if (m < 100) return [m, steps];
    const m_ = (Math.floor(m / 10) - (2 * m % 10));
    return sevenSteps(m_, steps + 1);
};

console.log(seven(371), [35, 1]);
console.log(seven(1021), [10, 2]);
console.log(seven(1603), [7, 2]);
console.log(seven(483), [42, 1]);