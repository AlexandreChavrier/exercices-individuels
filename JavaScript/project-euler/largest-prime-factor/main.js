// 600851475143

function findLargestPrimeFactor(number) {
    const array = [];
    let i = 2;

    while (number !== 1) {
        if (number % i === 0) {
            number = number / i;
        } else {
            i++;
        }
    }
    return i;
}

console.log(findLargestPrimeFactor(600851475143))