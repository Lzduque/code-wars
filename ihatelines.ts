function ihatelines(arr: number[], index: number): number {
  let line: number[] = arr
  let personIndex = index;
  let personNum = line[personIndex];
  let timeUnits: number = 0;

  while (!(personNum === 1 && personIndex === 0)) {
    let justBought = line[0] - 1
    line.shift();
    if (justBought > 0) {
      line.push(justBought);
    }
    timeUnits ++;
    personIndex --;
    personNum = line[personIndex];
    if (personIndex < 0) {
      personIndex = line.length - 1;
    }
    personNum = line[personIndex];
  }

  return timeUnits + 1
}

console.log(ihatelines([2, 6, 3, 4, 5], 2));

console.log(ihatelines([6,6,7, ...[...Array(10000).map(x => 6)]], 2));