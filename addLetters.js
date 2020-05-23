function addLetters(...letters) {
    if (letters.length === 0) {
        return 'z';
    }

    const dictionary = {};
    const alphabet = [...Array(26)].map((_, y) => String.fromCharCode(y + 97));
    for (let i = 0; i < alphabet.length; i++) {
        dictionary[alphabet[i]] = i + 1;
    };

    const sum = letters.reduce((acc, current) => acc + dictionary[current], 0);

    return alphabet[(sum - 1) % 26];
}

console.log(addLetters('a', 'b', 'c'), 'f', addLetters('a', 'b', 'c') === 'f');
console.log(addLetters('a', 'b'), 'c', addLetters('a', 'b') === 'c');
console.log(addLetters('z'), 'z', addLetters('z') === 'z');
console.log(addLetters('z', 'a'), 'a', addLetters('z', 'a') === 'a');
console.log(addLetters('y', 'c', 'b'), 'd', addLetters('y', 'c', 'b') === 'd');
console.log(addLetters(), 'z', addLetters() === 'z');