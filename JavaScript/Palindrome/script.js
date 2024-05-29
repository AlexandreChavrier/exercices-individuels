function isValidate(date) {
    const arr = date.split('/');
    let tab = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (arr.length !== 3) {
        return false;
    }
    if (((arr[2] % 4 === 0) && (arr[2] % 100 !== 0)) || (arr[2] % 400 === 0)) {
        tab.splice(1, 1, '29');
    }
    if ((arr[0] > tab[arr[1] - 1] || arr[0] < 0) || (arr[1] > 12 || arr[1] < 0) || (arr[2] > 9999 || arr[2] < 999) || isNaN(arr[0]) || isNaN(arr[1]) || isNaN(arr[2])) {
        return false;
    } else {
        return true;
    }
}


function isPalindrome(date) {
    let isValidateResult = isValidate(date);
    if (isValidateResult === false) {
        return false;
    }
    let tab = date.split('/');
    let result = [];
    for (let i = 0; i < tab.length; i++) {
        const str = tab[i];
        for (let j = 0; j < str.length; j++) {
            result.push(parseInt(str[j], 10));
        }
    }
    let result2 = [];
    for (let i = result.length - 1; i >= 0; i--) {
        result2.push(result[i]);
    }
    const final = result.join("");
    const final2 = result2.join("");
    return final === final2 ? true : false;
}


console.log(isPalindrome("11/02kayak/2011"));
console.log(isPalindrome("toto"));