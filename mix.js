const countLetters = (string) => {
  const count = {};
  for (letter of string) {
    if (!count[letter]) {
      count[letter] = 1;
    } else {
      count[letter] += 1;
    }
  }
  return count;
}

const cleanUp = (counts) => {
  const result = {};
  for (letter in counts) {
    if (counts[letter] > 1) {
      result[letter] = counts[letter];
    }
  }
  return result;
}

const comparison = (letter, value1, value2) => {
  if (value1 > value2 || value2 === undefined) {
    return `1:${letter.repeat(value1)}`
  } else if (value2 > value1 || value1 === undefined) {
    return `2:${letter.repeat(value2)}`
  } else {
    return `=:${letter.repeat(value1)}`
  }
}


function mix(s1, s2) {
  // get only lower case letters for each of them
  const letters1 = s1.match(/[a-z]/g);
  const letters2 = s2.match(/[a-z]/g);

  // count how many letters each of them have
  const count1 = countLetters(letters1);
  const count2 = countLetters(letters2);

  // clean the letters that repeat only 1 or less
  const cleaned1 = cleanUp(count1);
  const cleaned2 = cleanUp(count2);

  // compare winners and make an array with the strings
  const totalCounts = {
    1: cleaned1,
    2: cleaned2
  }
  const letters = Object.keys(cleaned1).concat(Object.keys(cleaned2));
  const uniqueLetters = [...new Set(letters)].sort();
  const results = [];

  for (let letter of uniqueLetters) {
    const winner = comparison(letter, totalCounts[1][letter], totalCounts[2][letter]);
    results.push(winner);
  }

  // sort in lexicographic order
  // transform into string
  // let sortCodePoint = (a, b) => a > b ? 1 : a < b ? -1 : 0;
  const sortedCP = results.sort((a, b) => a.localeCompare(b));
  const sortedL = sortedCP.sort((a, b) => b.length - a.length);
  return sortedL.join('/');
}

console.log(mix("Are they here", "yes, they are here") === "2:eeeee/2:yy/=:hh/=:rr");

console.log(mix("looping is fun but dangerous", "less dangerous than coding") === "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg");

console.log(mix(" In many languages", " there's a pair of functions") === "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt");

console.log(mix("Lords of the Fallen", "gamekult") === "1:ee/1:ll/1:oo");
console.log(mix("codewars", "codewars") === "");

console.log(mix("A generation must confront the looming ", "codewarrs") === "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr");

console.log(mix("my&friend&Paul has heavy hats! &", "my friend John has many many friends &"), "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss", mix("my&friend&Paul has heavy hats! &", "my friend John has many many friends &") === "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss");

console.log(mix("mmmmm m nnnnn y&friend&Paul has heavy hats! &", "my frie n d Joh n has ma n y ma n y frie n ds n&"), "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss", mix("mmmmm m nnnnn y&friend&Paul has heavy hats! &", "my frie n d Joh n has ma n y ma n y frie n ds n&") === "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss");

console.log(mix("Are the kids at home? aaaaa fffff", "Yes they are here! aaaaa fffff"), "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh", mix("Are the kids at home? aaaaa fffff", "Yes they are here! aaaaa fffff") === "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh");