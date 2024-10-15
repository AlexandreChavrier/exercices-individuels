function isPalindrome(number) {
    const str = number.toString();

    return str === str.split('').reverse().join('');
}

function largestPalindrome() {
    let largestPalindrome = 0;

    for (let i = 999; i >= 100; i--) {
        for (let j = i; j >= 100; j--) {
            const result = i * j;
            if (isPalindrome(result) && result > largestPalindrome ) {
                largestPalindrome = result;
            }
        }
    }
    return largestPalindrome;
}   

console.log(largestPalindrome())

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 * 99.
// Find the largest palindrome made from the product of two 3-digit numbers.