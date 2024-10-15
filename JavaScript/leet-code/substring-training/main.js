function lengthOfLongestSubstring(string) {
    let maxLength = 0;
    let left = 0;
    let charMap = {};

    for (let i = 0; i < string.length; i++) {

        let currentChar = string[i];

        if (charMap[currentChar] !== undefined && charMap[currentChar] >= left) {
            left = charMap[currentChar] + 1;
        }
        charMap[currentChar] = i;
        maxLength = Math.max(maxLength, i - left + 1);

        console.log(`Itération ${i + 1}: charMap =`, charMap, `, left = ${left}, maxLength = ${maxLength}`);    
    }
    
    return maxLength;
}


// Exemples d'utilisation
// console.log(lengthOfLongestSubstring("abcabcbb")); // Résultat : 3
// console.log(lengthOfLongestSubstring("bbbbb"));    // Résultat : 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Résultat : 3
// console.log(lengthOfLongestSubstring(""));         // Résultat : 0 (chaîne vide)
// console.log(lengthOfLongestSubstring("abcdefg"));  // Résultat : 7 (tous uniques)
