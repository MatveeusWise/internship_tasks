function validParentheses(parens) {
    let parenthesesArray = parens.split("");
    let balanceCheck = [];
    for(let i = 0; i < parens.length; i++) {
        if (parenthesesArray[i] === "(" ){
            balanceCheck.push(parenthesesArray[i])
        }
        else if (parenthesesArray[i] === ")") {
            if (balanceCheck.length === 0) {
                return false;
            } else {
                balanceCheck.pop()
            }
        }
    }
    return true ? balanceCheck.length === 0 ||  parens === "" : false
}