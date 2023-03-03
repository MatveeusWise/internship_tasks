const findShort = (s) => {
    return s.split(' ').reduce((shortest, word) => word.length < shortest.length ? word : shortest).length;
};
