function solution(str, ending) {
    // return str.endsWith(ending) ? true : false;
    const strDigits = str.split('');
    const endingDigits = ending.split('');
    const lStr = strDigits.length;
    const lEnding = endingDigits.length;
    const strEnd = strDigits.slice((lStr - lEnding), lStr);
    return strEnd.join('') === endingDigits.join('');
}

console.log(solution('abcde', 'cde'), true);
console.log(solution('abcde', 'abc'), false);