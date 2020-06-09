function descendingOrder(n) {
    const digits = n.toString().split('').map(Number);
    const sorted = digits.sort((a, b) => b - a);
    return Number(sorted.join(''));
}

console.log(descendingOrder(0), 0, descendingOrder(0) === 0);
console.log(descendingOrder(1), 1, descendingOrder(1) === 1);
console.log(descendingOrder(123456789), 987654321, descendingOrder(123456789) === 987654321);