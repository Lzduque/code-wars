function menFromBoys(arr) {
    const evens = new Set;
    const odds = new Set;
    for (let num of arr) {
        num % 2 === 0 ? evens.add(num) : odds.add(num);
    }
    const oddsList = Array.from(odds).sort((a, b) => a - b).reverse();
    const evensList = Array.from(evens).sort((a, b) => a - b);
    return evensList.concat(oddsList);
}

console.log(menFromBoys([7, 3, 14, 17]), [14, 17, 7, 3]);
console.log(menFromBoys([2, 43, 95, 90, 37]), [2, 90, 95, 43, 37]);
console.log(menFromBoys([20, 33, 50, 34, 43, 46]), [20, 34, 46, 50, 43, 33]);
console.log(menFromBoys([82, 91, 72, 76, 76, 100, 85]), [72, 76, 82, 100, 91, 85]);
console.log(menFromBoys([2, 15, 17, 15, 2, 10, 10, 17, 1, 1]), [2, 10, 17, 15, 1]);
console.log(menFromBoys([-32, -39, -35, -41]), [-32, -35, -39, -41]);
console.log(menFromBoys([-64, -71, -63, -66, -65]), [-66, -64, -63, -65, -71]);
console.log(menFromBoys([-94, -99, -100, -99, -96, -99]), [-100, -96, -94, -99]);
console.log(menFromBoys([-53, -26, -53, -27, -49, -51, -14]), [-26, -14, -27, -49, -51, -53]);