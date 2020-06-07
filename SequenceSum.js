var SequenceSum = (function() {
    function SequenceSum() {}

    SequenceSum.showSequence = function(count) {
        if (count < 0) return `${count}<0`
        if (count === 0) return `0=0`
        const series = [];
        for (let i = 0; i <= count; i++) {
            series.push(i);
        }
        const result = series.reduce((a, b) => a + b);
        return `${ series.join("+") } = ${result}`
    };

    return SequenceSum;

})();

console.log(SequenceSum.showSequence(6), "0+1+2+3+4+5+6 = 21", SequenceSum.showSequence(6) === "0+1+2+3+4+5+6 = 21");