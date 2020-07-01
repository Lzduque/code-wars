function longest(s1, s2) {
    const sorted = [...new Set(s1 + s2)].sort();
    return sorted.join('');
}

console.log(longest("aretheyhere", "yestheyarehere") === "aehrsty");
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding") === "abcdefghilnoprstu");
console.log(longest("inmanylanguages", "theresapairoffunctions") === "acefghilmnoprstuy");