function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let height = upSpeed;
    for (var i = 1; height < desiredHeight; i++) {
        height += upSpeed;
        height -= downSpeed;
    }
    return i;
}

console.log(growingPlant(100, 10, 910), 10, growingPlant(100, 10, 910) === 10);
console.log(growingPlant(10, 9, 4), 1, growingPlant(10, 9, 4) === 1);