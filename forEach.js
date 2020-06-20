const forEach = (xs, cb) => {
    for (let x of xs) {
        cb(x);
    }
}

forEach([1, 2, 3, 4, 5], x => console.log(x * 2))