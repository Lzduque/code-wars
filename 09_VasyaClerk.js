function tickets(peopleInLine){
  let cash = { 25: 0, 50: 0, 100: 0 };
  let result = "YES";
  // got throught the array and check if the person has a 25 bill, if it has add it to the cash
  // if it doesnt check how much is the change and if is equal cash
  // if is is equal or smaller then cash, just subtract it
  peopleInLine.forEach(function(bill) {
    console.log("cash before: ", cash);
    console.log("bill: ", bill);
    if (bill === 25) {
      cash[25] ++;
    } else if (bill === 50 && cash[25] >= 1) {
      cash[25] --;
      cash[50] ++;
    } else if (bill === 100 && cash[25] >= 3) {
      cash[25] -= 3;
      cash[100] ++;
    } else if (bill === 100 && cash[25] >= 1 && cash[50] >= 1) {
      cash[25] --;
      cash[50] --;
      cash[100] ++;
    } else {
      result = "NO";
    }
    console.log("cash after: ", cash);
  })
  return result;
}

console.log(tickets([25, 25, 50]), "YES")
console.log(tickets([25, 100]), "NO")
console.log(tickets([25, 25, 50, 50, 100]), "YES")
console.log(tickets([25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 25, 100, 50, 100]), "NO")