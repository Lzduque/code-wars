function gps(s, x) {
    const speeds = [];
    if (x.length <= 1) {
        return 0;
    } else {
        for (let i = 0; i < x.length - 1; i++) {
            const averageSpeed = (x[i + 1] - x[i]) / s * 60 * 60;
            speeds.push(Math.floor(averageSpeed));
        }
        return speeds.reduce((acc, current) => Math.max(acc, current));
    }
}


console.log(gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61]), 41);
console.log(gps(12, [0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31, 2.52, 3.25]), 219);
console.log(gps(20, [0.0, 0.18, 0.36, 0.54, 0.72, 1.05, 1.26, 1.47, 1.92, 2.16, 2.4, 2.64, 2.88, 3.12, 3.36, 3.6, 3.84]), 80);
console.log(gps(19, []), 0);
console.log(gps(19, [0.0]), 0);