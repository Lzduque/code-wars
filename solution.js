function solution(string) {
    const digits = string.split('');
    let possibilities = [];
    for (let i = 0; i < digits.length - 3; i++) {
        const number = [digits[i], digits[i + 1], digits[i + 2], digits[i + 3], digits[i + 4]].join('');
        possibilities.push(number);
    }

    const result = Math.max(...possibilities.map(Number));
    return result;
}

console.log(solution("1234567890"), 67890, solution("1234567890") === 67890);
console.log(solution("6234567890"), 67890, solution("6234567890") === 67890);
console.log(solution("45678912398"), 91239, solution("45678912398") === 91239);