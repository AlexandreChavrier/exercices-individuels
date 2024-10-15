// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// function multipleOf3Or5(number) {
//     const arraySum = [];
//     let i = 0;

//     while (i < number) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             arraySum.push(i);
//         }
//         i++;
//     }
//     const sum = arraySum.reduce((acc, curr) => acc + curr);
//     return sum;
// }

// console.log(multipleOf3Or5(1000));

function multipleOf3Or5(number) {
    let sum = 0;

    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

console.log(multipleOf3Or5(1000));