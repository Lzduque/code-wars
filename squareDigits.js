function squareDigits(num) {
    const digits = num.toString().split('').map(Number);
    const squaredDigits = digits.map(digit => Math.pow(digit, 2));
    const squaredNums = Number(squaredDigits.join(''));
    return squaredNums;
}

console.log(squareDigits(9119), 811181, squareDigits(9119) === 811181);