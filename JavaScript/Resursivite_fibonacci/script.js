function sum1(arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i++)
        j += arr[i];
        return j;
}

const array = [1, 2, 3, 4];

function sum2(arr, i = 0) {
    if (i === arr.length)
        return 0;
    else   
        return arr[i] + sum2(arr, i + 1);
}

function factorial(n) {
    if (n > 1)
        return n * factorial(n - 1);
    else 
        return 1
}

function fibonacci(x) {
    if (x < 0)
        return -1;
    if (x === 0)
        return 0;
    if (x === 1)
        return 1;
    return fibonacci(x - 1) + fibonacci(x - 2);
}

console.log(fibonacci(10));