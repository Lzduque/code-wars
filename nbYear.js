const nbYear = (p0, percent, aug, p) => nbYearRe(p0, percent, aug, p, 0);

const nbYearRe = (p0, percent, aug, p, years) => {
    if (p0 >= p) {
        return years;
    } else {
        const newP = p0 + p0 * percent / 100 + aug;
        return nbYearRe(newP, percent, aug, p, years + 1);
    }
};

console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);