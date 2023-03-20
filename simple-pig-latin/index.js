function pigIt(str) {
    return str.split(" ").map((word) => word !== "!" && word !== "?" ?
        ((word + word[0]).replace(word[0], "") + 'ay')
        : word = word).join(" ");
}