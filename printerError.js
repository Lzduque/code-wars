function printerError(s) {
    const l = s.length;
    let errors = 0;
    for (letter of s) {
        if (letter.match(/[n-z]/)) {
            errors += 1;
        }
    }
    return `${errors}/${l}`;
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"), "3/56")