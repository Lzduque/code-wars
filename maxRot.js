function maxRot(n) {
    let str = n.toString();
    const ps = [str];

    for (let i = 0; i < str.length; i++) {
        str = str.slice(0, i) + str.slice(i + 1) + str[i];
        ps.push(Number(str))
    }
    return Math.max(...ps);
}

console.log(maxRot(56789), 68957, maxRot(56789) === 68957);
console.log(maxRot(38458215), 85821534, maxRot(38458215) === 85821534);
console.log(maxRot(195881031), 988103115, maxRot(195881031) === 988103115);
console.log(maxRot(896219342), 962193428, maxRot(896219342) === 962193428);
console.log(maxRot(69418307), 94183076, maxRot(69418307) === 94183076);