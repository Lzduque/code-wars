function duplicateEncode(word){
  let newWord = word.toLowerCase().split("");
  let wordObj = {};

  // got through the array and identify how many times each of them appear
  // that needs to be saved to an array of objects with the letter as key
  newWord.forEach(function(letter) {
    if (wordObj.hasOwnProperty(letter)) {
      wordObj[letter] ++;
    } else {
      wordObj[letter] = 1;
    }
  })

  // then go through the array again and check each letter if the number of times it appears is one or larger and push that to a new array
  let result = "";
  newWord.forEach(function(letter) {
    if (wordObj[letter] === 1) {
      result += "(";
    } else {
      result += ")";
    }
  });

  // then joing that array
  return result;
}

console.log(duplicateEncode("din"),"(((");
console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())","should ignore case");
console.log(duplicateEncode("(( @"),"))((");
