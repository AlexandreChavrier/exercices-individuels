// Le but de cet algo est de faire un petit jeu en JS qui permet de deviner un nombre grâce à des prompt

function demanderNombre() {
    const nombreADeviner = Number(prompt("Entrez un nombre : 0 < ? < 50"));
    if (nombreADeviner < 0 || nombreADeviner > 50) {
        alert("Le nombre doit être compris entre 0 et 50");
        nombreADeviner = Number(prompt("Entrez un nombre : 0 < ? < 50"));
    }
    return nombreADeviner;
}

function guessNumber() {
    const givenNumber = Number(prompt("Devinez le nombre"));
    return givenNumber;
}

function didIWin(nombreADeviner, givenNumber) {
    let bool = true;
    if (givenNumber === nombreADeviner) {
        alert("Bravo Vous avez gagné !")
        return bool;
    }
    else {
        if (givenNumber < nombreADeviner) {
            alert("Plus grand");
        }
        if (givenNumber > nombreADeviner) {
            alert("Plus petit");
        }
        return false;
    }
}

function gamePlay() {
    const nombreADeviner = demanderNombre();
    let result = false;
    let tentatives = 0;
    while (!result) {
        const givenNumber = guessNumber();
        result = didIWin(nombreADeviner, givenNumber);
        tentatives++;
    }
    console.log("Nombre de tentatives :", tentatives);
    return true;
}


console.log(gamePlay());

