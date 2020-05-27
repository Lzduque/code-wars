function seven(m) {
    let digits = m.toString().split('');

    for (var step = 0; digits.length > 2; step++) {
        const lastDigit = Number(digits.pop());
        const firstDigits = Number(digits.join(''));
        digits = (firstDigits - (2 * lastDigit)).toString().split('');;
    }

    return [Number(digits.join('')), step];
}

console.log(seven(371), [35, 1]);
console.log(seven(1021), [10, 2]);
console.log(seven(1603), [7, 2]);
console.log(seven(483), [42, 1]);