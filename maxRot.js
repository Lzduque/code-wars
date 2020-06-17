function maxRot(n) {
    const ps = [n];
    const digits = n.toString().split('');

    let currentD = digits;
    let rotateD = [];
    for (let i = 0; i < digits.length; i++) {
        if (i % 2 === 0) {
            rotateD.push(currentD[i]);
            currentD[i] = '';
            const newDs = currentD.concat(rotateD);
            ps.push(Number(newDs.join('')));
        }
    }
    return Math.max(...ps);
}

console.log(maxRot(56789), 68957, maxRot(56789) === 68957);
console.log(maxRot(38458215), 85821534, maxRot(38458215) === 85821534);
console.log(maxRot(195881031), 988103115, maxRot(195881031) === 988103115);
console.log(maxRot(896219342), 962193428, maxRot(896219342) === 962193428);
console.log(maxRot(69418307), 94183076, maxRot(69418307) === 94183076);