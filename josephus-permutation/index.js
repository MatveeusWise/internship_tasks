function josephus(items, k) {
    let result = [];
    let i = 0;
    while (items.length > 0) {
        i = (i + k - 1) % items.length;
        result.push(items.splice(i, 1)[0]);
    }
    return result;
}