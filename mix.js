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

const maxCounts = (counts) => {
  const result = {};
  for (letter in counts) {
    if (counts[letter] > 1) {
      result[letter] = counts[letter];
    }
  }
  return result;
}

const comparison = (letter, value1, value2) => {
  if (value1 > value2) {
    return `1:${letter.repeat(value1)}`
  } else if (value2 > value1) {
    return `2:${letter.repeat(value2)}`
  } else {
    return `=:${letter.repeat(value1)}`
  }
}

const totalCount = (max1, max2) => {
  const totalCount = {}
  for (letter in max1) {
    totalCount[letter] = {
      1: max1[letter],
      2: max2[letter]
    }
  }
  for (letter in max2) {
    totalCount[letter] = {
      1: max1[letter],
      2: max2[letter]
    }
  }
  return totalCount;
}

const selectMax = (counts) => {
  const result = [];
  for (letter in counts) {
    if (letter['1'] > letter['2']) {
      result[letter] = letter['1']
    } else if (letter['2'] > letter['1']) {
      result[letter] = letter['2']
    } else {
      result[letter] = letter['2']
    }
  }
  return result;
}

function mix(s1, s2) {
  const letters1 = s1.match(/[a-z]/g);
  const letters2 = s2.match(/[a-z]/g);
  const count1 = countLetters(letters1);
  const count2 = countLetters(letters2);
  const max1 = maxCounts(count1);
  const max2 = maxCounts(count2);
  const total = totalCount(max1, max2);


  return total;
  return order(total);
}

console.log(mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr")
// console.log(mix("looping is fun but dangerous", "less dangerous than coding"), "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
// console.log(mix(" In many languages", " there's a pair of functions"), "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
// console.log(mix("Lords of the Fallen", "gamekult"), "1:ee/1:ll/1:oo")
// console.log(mix("codewars", "codewars"), "")
// console.log(mix("A generation must confront the looming ", "codewarrs"), "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr")