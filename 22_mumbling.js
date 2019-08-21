function accum(s) {
    var splitted = s.split("");
    console.log(splitted);
    var result = "";
    for (var i in splitted) {
        switch (i) {
            case "0": {
                result = result.concat(splitted[i].toUpperCase(), "-");
                break;
            }
            case String(splitted.length - 1): {
                var repeated = "";
                for (var j = 0; j < Number(i); j++) {
                    repeated = repeated.concat(splitted[i].toLowerCase());
                }
                result = result.concat(splitted[i].toUpperCase(), repeated);
                break;
            }
            default: {
                var repeated = "";
                for (var j = 0; j < Number(i); j++) {
                    repeated = repeated.concat(splitted[i].toLowerCase());
                }
                result = result.concat(splitted[i].toUpperCase(), repeated, "-");
                break;
            }
        }
    }
    return result;
}
console.log(accum("abcd"), "A-Bb-Ccc-Dddd");
console.log(accum("RqaEzty"), "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy");
console.log(accum("cwAt"), "C-Ww-Aaa-Ttttd");
