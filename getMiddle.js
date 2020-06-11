function getMiddle(s) {
    const letters = s.split('');
    const lengthLetters = letters.length;
    if (lengthLetters % 2 === 0) {
        return letters[(lengthLetters / 2) - 1] + letters[lengthLetters / 2]
    } else {
        return letters[Math.floor(lengthLetters / 2)]
    }
}

console.log(getMiddle("test"), "es", getMiddle("test") === "es");
console.log(getMiddle("testing"), "t", getMiddle("testing") === "t");
console.log(getMiddle("middle"), "dd", getMiddle("middle") === "dd");
console.log(getMiddle("A"), "A", getMiddle("A") === "A");