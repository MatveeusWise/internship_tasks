function countZeros(n) {
    let toBigInt = BigInt(n);
    let result = BigInt(1);
    let zeroCounter = 0;

    if (n % 2 === 0) {
        for (let i = BigInt(2); i <= toBigInt; i += BigInt(2)) {
            result *= i;
        }
    } else {
        for (let i = BigInt(1); i <= toBigInt; i += BigInt(2)) {
            result *= i;
        }
    }
    while (result % BigInt(10) === BigInt(0)) {
        zeroCounter++;
        result /= BigInt(10);
    }
    return zeroCounter;
}