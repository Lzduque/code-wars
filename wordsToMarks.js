function wordsToMarks(string) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const letters = string.split('');
    return letters.reduce((acc, letter) => (acc + (alphabet.indexOf(letter) + 1)), 0);
}

console.log(wordsToMarks("attitude"), 100, wordsToMarks("attitude") === 100);
console.log(wordsToMarks("friends"), 75, wordsToMarks("friends") === 75);
console.log(wordsToMarks("family"), 66, wordsToMarks("family") === 66);
console.log(wordsToMarks("selfness"), 99, wordsToMarks("selfness") === 99);
console.log(wordsToMarks("knowledge"), 96, wordsToMarks("knowledge") === 96);