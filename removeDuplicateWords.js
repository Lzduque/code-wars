const unwords = (words) => words.split(' ');
const words = (unwords) => unwords.join(' ');

const removeDuplicateWords = (s) => {
    const allWords = unwords(s);
    const wordsCount = {};
    for (const words of allWords) {
        if (!wordsCount[words]) {
            wordsCount[words] = 1;
        }
    }
    const uniqueWords = Object.keys(wordsCount);
    return words(uniqueWords);
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta', 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta' === 'alpha beta gamma delta');