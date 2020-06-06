function DNAStrand(dna) {
    const original = dna.split('');
    const complimentary = [];
    for (let i = 0; i < original.length; i++) {
        switch (original[i]) {
            case "A":
                complimentary.push("T");
                break;
            case "T":
                complimentary.push("A");
                break;
            case "C":
                complimentary.push("G");
                break;
            case "G":
                complimentary.push("C");
                break;
        }
    }
    return complimentary.join('');
}

console.log(DNAStrand("AAAA"), "TTTT", "String AAAA is");
console.log(DNAStrand("ATTGC"), "TAACG", "String ATTGC is");
console.log(DNAStrand("GTAT"), "CATA", "String GTAT is");