function getDivisorsCnt(n) {
    const possibleDivisors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            possibleDivisors.push(i);
        }
    }
    return possibleDivisors.length;
}


console.log(getDivisorsCnt(1), 1, getDivisorsCnt(1) === 1);
console.log(getDivisorsCnt(10), 4, getDivisorsCnt(10) === 4);
console.log(getDivisorsCnt(11), 2, getDivisorsCnt(11) === 2);
console.log(getDivisorsCnt(54), 8, getDivisorsCnt(54) === 8);