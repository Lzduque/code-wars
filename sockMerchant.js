function sockMerchant(n, ar) {
  ar.sort();
  let pairCount = 0;
  console.log(ar);

  for (let i = 0 ; i < n ; i ++) {
    if (ar[i] === ar[i + 1]) {
      pairCount ++;
      i++;
    }
  }
  return pairCount;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]), 3);