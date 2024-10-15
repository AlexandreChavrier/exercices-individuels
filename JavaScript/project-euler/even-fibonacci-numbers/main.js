function sumEvenFibonacci(limit) {
    let a = 1;  // premier terme de Fibonacci
    let b = 2;  // deuxième terme de Fibonacci
    let sum = 0;

    // tant que les termes de la suite de Fibonacci ne dépassent pas la limite
    while (b <= limit) {
        // Si le terme actuel est pair, on l'ajoute à la somme
        if (b % 2 === 0) {
            sum += b;
        }
        // Calculer le terme suivant de Fibonacci
        const nextTerm = a + b;
        a = b;  // avancer dans la suite (le terme précédent devient 'a')
        b = nextTerm;  // avancer dans la suite (le terme suivant devient 'b')
    }

    return sum;
}

console.log(sumEvenFibonacci(4000000));