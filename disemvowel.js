function disemvowel(str) {
    return str.replace(/a|e|i|o|u/gi, '');
}

console.log(disemvowel("This website is for losers LOL!"),
    "Ths wbst s fr lsrs LL!", disemvowel("This website is for losers LOL!") === "Ths wbst s fr lsrs LL!");