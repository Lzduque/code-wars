function repeater(str: string, n: number): string {
    // loop n times and each time add the string to empty string result
    let result: string = "";
    for (let i = 0 ; i < n ; i++) {
        result = result.concat(str)
    }
    return result; // your code here
}

console.log(repeater("a", 5), "aaaaa");
console.log(repeater("Na", 16), "NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa");
console.log(repeater("Wub ", 6), "Wub Wub Wub Wub Wub Wub ");
