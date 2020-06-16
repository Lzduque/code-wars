function nbDig(n, d) {
    const squared = [];
    for (let i = 0; i <= n; i++) {
        squared.push(Math.pow(i, 2));
    }
    const flatten = squared.map(number => number.toString().split('')).flat();
    const numOfDs = flatten.filter(n => Number(n) === d).length;
    return numOfDs;
}

console.log(nbDig(5750, 0), 4700);
console.log(nbDig(11011, 2), 9481);
console.log(nbDig(12224, 8), 7733);
console.log(nbDig(11549, 1), 11905);