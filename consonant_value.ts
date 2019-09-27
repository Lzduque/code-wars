function solve(s: string): number {
  // go through the letters and slice the string when it finds a vowel, and add previous string to an array
  // then, fro each piece of string split it and transform it into numbers
  // then add each one and compare the values
  let string: string = s;
  let obj: {string : number};
  let acc: number = 0
  for ( let i  = 0 ; i <= string.length + 1 ; i++) {
    if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
      console.log("i: ", i);
      let subs = string.slice(acc, i);
      acc = i + 1;
      // string = string.slice(i + 1);
      // obj[subs] =
      console.log("subs: ", subs)
    }
  }
  return 26
}

console.log(solve("zodiac"), 26);
// console.log(solve("chruschtschov"), 80);
// console.log(solve("khrushchev"), 38);
// console.log(solve("strength"), 57);
// console.log(solve("catchphrase"), 73);
// console.log(solve("twelfthstreet"), 103);
// console.log(solve("mischtschenkoana"), 80);
