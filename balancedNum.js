function balancedNum(number) {
    const digits = number.toString().split('').map(Number);
    const numDigits = Math.ceil((digits.length / 2) - 1);
    const left = [...digits].slice(0, numDigits);
    const right = [...digits].reverse().slice(0, numDigits);
    const sum = (nums) => nums.reduce((a, b) => a + b, 0);

    return sum(left) === sum(right) ? "Balanced" : "Not Balanced";
}

console.log(balancedNum(7), "Balanced");
console.log(balancedNum(959), "Balanced");
console.log(balancedNum(13), "Balanced");
console.log(balancedNum(432), "Not Balanced");
console.log(balancedNum(424), "Balanced");