function ipToInt32(ip){
    const octets = ip.split(".").map(Number);
    return octets.reduce((acc, digit, index) => acc + (digit * Math.pow(256, octets.length - index - 1)), 0)
}