const dashatize = (num) => {
  if (isNaN(num)) return 'NaN'

  let arr = num.toString().split('');

  if (arr[0] == '-') {
    arr.shift();
  }

  let result = '';

  for (let i = 0 ; i < arr.length ; i ++) {
    if (arr.length == 1) {
      result += arr[i]
    } else if (Number(arr[i]) % 2 == 0) {
      console.log("even ", arr[i])
      result += arr[i]
    } else if (i == 0) {
      console.log("odd 1 ", arr[i], arr[i + 1])
      result +=  arr[i] + '-'
    } else if (i != 0 && i != arr.length - 1 && arr[i - 1] % 2 != 0) {
      console.log("odd 2 ", arr[i])
      result +=  arr[i] + '-'
    } else if (i != 0 && i != arr.length - 1 && arr[i - 1] % 2 == 0 && arr[i + 1] % 2 == 0) {
      console.log("odd 4 ", arr[i])
      result +=  '-' + arr[i] + '-'
    } else if (i == arr.length - 1 && arr[i - 1] % 2 == 0) {
      console.log("odd 3 ", arr[i])
      result +=  '-' + arr[i]
    } else {
      console.log("other ", arr[i], i, arr.length - 1)
      result +=  arr[i]
    }
  }
  return result
};


  console.log(dashatize(274), "Should return 2-7-4");
  console.log(dashatize(5311), "Should return 5-3-1-1");
  console.log(dashatize(86320), "Should return 86-3-20");
  console.log(dashatize(974302), "Should return 9-7-4-3-02");
  console.log(dashatize(NaN), "Should return NaN");
  console.log(dashatize(0), "Should return 0");
  console.log(dashatize(-1), "Should return 1");
  console.log(dashatize(-28369), "Should return 28-3-6-9");
