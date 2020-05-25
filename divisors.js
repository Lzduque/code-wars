function divisors(integer) {
    let possibleDiv = [];
    for (let i = 2; i < integer; i++) {
        possibleDiv.push(i)
    }

    const divisors = possibleDiv.filter(number => integer % number === 0);

    return divisors.length === 0 ?
        `${integer} is prime` : divisors;
};

console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(25), [5]);
console.log(divisors(13), "13 is prime", divisors(13) === "13 is prime");