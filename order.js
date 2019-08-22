function order(words) {
  let wordsArray = words.split(" ");
  console.log("wordsArray: ", wordsArray); // [ 'is2', 'Thi1s', 'T4est', '3a' ]
  let positionArray = wordsArray.map((word) => Number(word[word.search(/[0-9]/g)]));
  console.log("positionArray: ", positionArray); // [ 2, 1, 4, 3 ]


  return "Thi1s is2 3a T4est"
}

console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
console.log(order(""), "");