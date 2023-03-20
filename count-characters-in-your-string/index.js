function count(string) {
    letters = string.split("");
    lettersCount = {};
    for (let i = 0; i < string.length; i++) {
        lettersCount[letters[i]] === undefined ? lettersCount[letters[i]] = 1 : lettersCount[letters[i]]++
    }
    return lettersCount;
}