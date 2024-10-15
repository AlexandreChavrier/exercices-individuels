function convert(string, numRows) {
    if (numRows === 1 || numRows >= string.length) {
        return string;
    }

    let array = new Array(numRows).fill("").map(() => []);
    
    let currentRow = 0; 
    let goingDown = false; 

    for (let i = 0; i < string.length; i++) {
        array[currentRow].push(string[i]);

        if(currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }
        currentRow += goingDown ? 1 : -1;
    }
    stringArray = array.map(subArray => subArray.join(''));
    resultArray = stringArray.join('');

    return resultArray;
}


console.log(convert("PAYPALISHIRING", 8))
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I