var isSquare = function(n) {
    return Math.sqrt(n) % 1 === 0;
}

console.log(isSquare(-1), false, "result: ", isSquare(-1) === false, "-1: Negative numbers cannot be square numbers");
console.log(isSquare(0), true, "result: ", isSquare(0) === true, "0 is a square number (0 * 0)");
console.log(isSquare(3), false, "result: ", isSquare(3) === false, "3 is not a square number");
console.log(isSquare(4), true, "result: ", isSquare(4) === true, "4 is a square number (2 * 2)");
console.log(isSquare(25), true, "result: ", isSquare(25) === true, "25 is a square number (5 * 5)");
console.log(isSquare(26), false, "result: ", isSquare(26) === false, "26 is not a square number");