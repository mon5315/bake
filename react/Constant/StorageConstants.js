const types = {
    User: {
        heart: '',
    },
};

(() => {
    for (let c in types) {
        for (let e in types[c]) {
            types[c][e] = `${c}.${e}`;
        }
    }
})();

export default types;
