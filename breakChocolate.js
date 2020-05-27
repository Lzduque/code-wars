function breakChocolate(n, m) {
    if (m === 0 || n === 0) {
        return 0;
    }
    return (m - 1) + (n - 1) * m;
}

console.log(breakChocolate(5, 5), 24, breakChocolate(5, 5) === 24);
console.log(breakChocolate(1, 1), 0, breakChocolate(1, 1) === 0);