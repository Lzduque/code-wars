function SeriesSum(n) {
  // Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
  let seriesArr = [];
  for (let i = 0 ; i < n ; i++) {
    seriesArr.push(1/(1 + i * 3));
  }

  let x = 0;
  if (seriesArr === undefined || seriesArr.length == 0) {
  } else {
    x = seriesArr.reduce((a , b) => a + b);
  }
    let result = x.toFixed(2).toString();
    return result;
}

console.log(SeriesSum(1), "1.00");
console.log(SeriesSum(2), "1.25");
console.log(SeriesSum(3), "1.39");
console.log(SeriesSum(4), "1.49");
console.log(SeriesSum(0), "0.00");