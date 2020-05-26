function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let height = 0;
    let heights = [];

    while (height < desiredHeight) {
        heights.push(height += upSpeed);
        heights.push(height -= downSpeed);
    }
    for (let i = 0; i <= heights.length; i++) {
        if (heights[i] >= desiredHeight) {
            return Math.round((i + 1) / 2);
        }
    }
}

console.log(growingPlant(100, 10, 910), 10, growingPlant(100, 10, 910) === 10);
console.log(growingPlant(10, 9, 4), 1, growingPlant(10, 9, 4) === 1);