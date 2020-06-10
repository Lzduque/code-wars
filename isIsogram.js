function isIsogram(str) {
    const letters = str.toLowerCase().split('').sort();
    const letterCount = {};
    for (let letter of letters) {
        if (letterCount[letter]) {
            return false
        } else {
            letterCount[letter] = 1;
        }
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics"), true, isIsogram("Dermatoglyphics") === true);
console.log(isIsogram("isogram"), true, isIsogram("isogram") === true);
console.log(isIsogram("aba"), false, "same chars may not be adjacent", isIsogram("aba") === false);
console.log(isIsogram("moOse"), false, "same chars may not be same case", isIsogram("moOse") === false);
console.log(isIsogram("isIsogram"), false, isIsogram("isIsogram") === false);
console.log(isIsogram(""), true, "an empty string is a valid isogram", isIsogram("") === true);