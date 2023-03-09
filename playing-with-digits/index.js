function digPow(n, p){
    let digits = String(n).split('').map(Number);
    let sum = digits.reduce((acc, digit, index) => acc + Math.pow(digit, p + index), 0);
    return sum % n === 0 ? sum / n : -1;
}