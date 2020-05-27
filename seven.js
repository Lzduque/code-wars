const seven = (m) => sevenSteps(m, 0);

const sevenSteps = (m, steps) => {
    if (m < 100) return [m, steps];

    let digits = m.toString().split('');
    const lastDigit = Number(digits.pop());
    const firstDigits = Number(digits.join(''));
    digits = (firstDigits - (2 * lastDigit)).toString().split('');

    return sevenSteps(Number(digits.join('')), steps + 1);
};



console.log(seven(371), [35, 1]);
console.log(seven(1021), [10, 2]);
console.log(seven(1603), [7, 2]);
console.log(seven(483), [42, 1]);