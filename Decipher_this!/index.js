function decipherThis(str) {
    let words = str.split(" ");
    let splited = []
    for(let i = 0; i < words.length; i++) {
        splited = words[i].split(/(\d+)/)
        splited[1] = String.fromCharCode(splited[1]);
        splited[2] = splited[2].replace(/^(.)(.*)(.)$/, "$3$2$1");
        words[i] = splited.join("");
    }
    return words.join(" ")
};