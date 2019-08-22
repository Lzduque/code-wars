function order(words) {
  var results = ""
  if (words != "") {
    results = words
    .split(" ")
    .map((word) => word[word.search(/[0-9]/g)] + word)
    .sort()
    .map((word) => word.substring(1))
    .join(" ")
  }
  return results
}

console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
console.log(order(""), "");