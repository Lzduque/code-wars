function growingPlant(upSpeed, downSpeed, desiredHeight) {
    var i = 1;
    for (let height = upSpeed; height < desiredHeight; height += upSpeed) {
        height -= downSpeed;
        i++;
    }
    return i;
}

console.log(growingPlant(100, 10, 910), 10, growingPlant(100, 10, 910) === 10);
console.log(growingPlant(10, 9, 4), 1, growingPlant(10, 9, 4) === 1);