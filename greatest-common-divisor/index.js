function mygcd(x,y){
    let min = Math.min(x,y);
    let max = Math.max(x,y);
    for (let i = 1; i <= max; i++) {
        if (Number.isInteger(max / i) && (Number.isInteger(min / (max / i)))) {
            return max / i;
        }
    }
}