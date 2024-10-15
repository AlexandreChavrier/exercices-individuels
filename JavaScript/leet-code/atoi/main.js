function myAtoi(string) {
    string = string.trim();

 

    const digits = "0123456789";
    let sign = 1;
    let i = 0;
    let result = 0;

    if (string[i] === '-' || string[i] === '+') {
        sign = string[i] === '-' ? -1 : 1;
        i++;
    }

    while (i < string.length) {
        const char  = string[i];

        if (digits.includes(char)) {
            const digit = Number(char);

            if (result > Math.floor((2**31 - 1) / 10) || (result === Math.floor((2**31 - 1) / 10) && digit > 7)) {
                return sign === -1 ? -Math.pow(2, 31) : Math.pow(2, 31) - 1;
            }
            result = result * 10 + digit;  
        } else {
            break;
        }
        i++;
    }
    return result * sign
}


const test1 = "10"
const test2 = "--19-2"
const test3 = "ay65"
const test4 = " 89"
const test5 = " -89"
const test6 = "0-1"
const test7 = "aduba"
const test8 = "00986"

console.log(myAtoi(test2))
