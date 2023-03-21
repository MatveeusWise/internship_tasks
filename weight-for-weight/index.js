function orderWeight(strng) {
    const digits = strng.split(" ").map((number, index, array) => {
        return {
            number: number,
            weight: number.split("").map(digit => parseInt(digit))
                .reduce((sum, currentDigit) => sum + currentDigit, 0)
        };
    });
    digits.sort((a, b) => {
        if (a.weight !== b.weight) {
            return a.weight - b.weight;
        } else {
            return a.number.localeCompare(b.number);
        }
    });
    return digits.map(item => item.number).join(" ");
}