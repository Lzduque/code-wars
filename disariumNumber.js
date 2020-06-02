const sum = (nums) => nums.reduce((a, b) => a + b);

function disariumNumber(n) {
    const digits = n.toString().split('').map(Number);
    const powered = [];
    for (let i = 1; i <= digits.length; i++) {
        powered.push(Math.pow(digits[i - 1], i));
    }

    return sum(powered) === n ? "Disarium !!" : "Not !!";
}

console.log(disariumNumber(89), "Disarium !!", disariumNumber(89) === "Disarium !!");
console.log(disariumNumber(564), "Not !!", disariumNumber(564) === "Not !!");
console.log(disariumNumber(1024), "Not !!", disariumNumber(1024) === "Not !!");
console.log(disariumNumber(135), "Disarium !!", disariumNumber(135) === "Disarium !!");
console.log(disariumNumber(136586), "Not !!", disariumNumber(136586) === "Not !!");