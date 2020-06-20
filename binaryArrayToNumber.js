const binaryArrayToNumber = arr => {
    const binary = arr.reverse();
    const result = [];
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === 1) {
            result.push(Math.pow(2, i));
        }
    }
    const sum = result.reduce((acc, current) => acc + current, 0);
    return sum;
};

console.log(binaryArrayToNumber([0, 0, 0, 1]), 1);
console.log(binaryArrayToNumber([0, 0, 1, 0]), 2);
console.log(binaryArrayToNumber([1, 1, 1, 1]), 15);
console.log(binaryArrayToNumber([0, 1, 1, 0]), 6);