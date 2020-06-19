function printerError(s) {
    const l = s.length;
    const errors = s.match(/[^a-m]/g).length;
    return `${errors}/${l}`;
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"), "3/56")