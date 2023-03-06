function vowelOne(s){
    let number = "";
    for (let i = 0; i < s.length; i++) {
        if ("aeiouAEIOU".indexOf(s[i]) != -1) {
            number += "1";
        } else if ((s[i].toUpperCase != s[i].toLowerCase)){
            number += "0";
        }
    }
    return number;
}