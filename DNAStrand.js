function DNAStrand(dna) {
    const original = dna.split('');
    const complimentary = [];
    const pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };

    for (let letter of original) {
        complimentary.push(pairs[letter]);
    }
    return complimentary.join('');
}

console.log(DNAStrand("AAAA"), "TTTT", "String AAAA is");
console.log(DNAStrand("ATTGC"), "TAACG", "String ATTGC is");
console.log(DNAStrand("GTAT"), "CATA", "String GTAT is");