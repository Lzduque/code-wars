function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  // TODO: code me
  // check if the code is correct
  // check if the expiration date din't pass
  let cd = Date.parse(currentDate);
  let ed = Date.parse(expirationDate);
  return (enteredCode == correctCode && cd <= ed)
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);
console.log(checkCoupon('123', '123', 'July 9, 2015', 'July 9, 2015'), true);
console.log(checkCoupon('123', '123', 'July 9, 2015', 'July 2, 2015'), false);

