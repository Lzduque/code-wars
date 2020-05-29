const unwords = (words) => words.split(' ');
const words = (unwords) => unwords.join(' ');

const removeDuplicateWords = (s) => {
    const allWords = unwords(s);
    const uniqueWords = [];
    for (const word of allWords) {
        if (!uniqueWords.includes(word)) {
            uniqueWords.push(word);
        }
    }
    return words(uniqueWords);
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta', 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta' === 'alpha beta gamma delta');