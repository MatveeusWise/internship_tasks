function whatCentury(year) {
    let century = Math.ceil(parseInt(year) / 100);
    if (century % 100 >= 11 && century % 100 <= 13) {
        century += "th";
    } else {
        switch (century % 10) {
            case 1:
                century += "st";
                break;
            case 2:
                century += "nd";
                break;
            case 3:
                century += "rd";
                break;
            default:
                century += "th";
                break;
        }
    }
    return century;
}