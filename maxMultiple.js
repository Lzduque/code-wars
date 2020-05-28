function maxMultiple(divisor, bound) {
    for (let n = bound; n > 0; n--) {
        if (n % divisor === 0) {
            return n;
        }
    }
}

console.log(maxMultiple(2, 7), 6);
console.log(maxMultiple(3, 10), 9);
console.log(maxMultiple(7, 17), 14);
console.log(maxMultiple(10, 50), 50);
console.log(maxMultiple(37, 200), 185);
console.log(maxMultiple(7, 100), 98);