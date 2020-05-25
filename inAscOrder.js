function inAscOrder(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        console.log("arr[i] ", arr[i], "arr[i + 1] ", arr[i + 1])

        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(inAscOrder([1, 2, 4, 7, 19]), true, inAscOrder([1, 2, 4, 7, 19]) === true);
console.log(inAscOrder([1, 2, 3, 4, 5]), true, inAscOrder([1, 2, 3, 4, 5]) === true);
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]), false, inAscOrder([1, 6, 10, 18, 2, 4, 20]) === false);
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]), false, inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]) === false);