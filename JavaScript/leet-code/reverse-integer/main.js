function reverseIntegers(int) {
    result = '';
    let num = Math.abs(int);

    while (num !== 0) {

        let intermediate  = num % 10;
        result += intermediate;
        num  = Math.floor(num / 10);
    }

    let reversed = Number(result) * Math.sign(int);

    if (reversed < -(2**31) || reversed > (2**31 - 1)) {
        return 0;
    }

    return reversed
}

console.log(reverseIntegers(-90890));



