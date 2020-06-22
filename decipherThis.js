function decipherThis(str) {
  const words = str.split(' ');

  const fromChar = words.map(word => {
    const char = word.match(/\d+/g);
    const letters = word.match(/[a-zA-Z]+/g);
    return (letters) ? String.fromCharCode(char) + letters : String.fromCharCode(char)
  });

  const correct = fromChar.map(word => {
    if (word.length <= 2) {
      return word
    } else {
      const second = word[1];
      const last = word[word.length - 1];
      return word[0] + last + word.slice(2, word.length - 1) + second;
    }
  });
  return correct.join(' ');
};

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'), 'Have a go at this and see how you do');
console.log(decipherThis('72olle 103doo 100ya'), 'Hello good day');
console.log(decipherThis('82yade 115te 103o'), 'Ready set go');
