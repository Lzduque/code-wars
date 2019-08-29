function getMiddle(s) {
    //  split word into letters
    //  check if its odd or even
    //  return one middle letter if it's odd
    //  return the 2 middle letters if it's even
    let arr = s.split("");
    if (arr.length % 2 == 0) {
      return arr[(arr.length/2) - 1] + arr[(arr.length/2)]
    } else if (arr.length % 2 != 0){
      return arr[Math.round(arr.length/2) -1]
    } else {
      return ''
    }
  }

console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");
