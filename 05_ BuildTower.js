function towerBuilder(nFloors) {
  let result = [];
  const simbol = "*";
  const space = " ";
  let numberOfSimbol = 1;
  let numberOfHouses = (1 + ((nFloors - 1) * 2));

  for (let i = 1 ; i <= nFloors ; i++) {
    let numberOfSpaces = (numberOfHouses - numberOfSimbol) / 2;
    let floor = "";
    floor += space.repeat(numberOfSpaces);
    floor += simbol.repeat(numberOfSimbol);
    floor += space.repeat(numberOfSpaces);
    result.push(floor);
    numberOfSimbol += 2;
  }
  return result;
}

console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ","***"]);
console.log(towerBuilder(3), ["  *  "," *** ","*****"]);
console.log(towerBuilder(4), ["  *  ","  ***  "," ***** ","*******"]);