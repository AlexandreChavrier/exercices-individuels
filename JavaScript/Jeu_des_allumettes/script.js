
function returnTableauNombreDeJoueurs() {
    let tableauJoueur = [];
    let demanderNbrJoueur = Number(prompt("Veuillez entrer le nombre de joueurs"));
    while (demanderNbrJoueur <= 0 || String(demanderNbrJoueur).includes(' ') || isNaN(demanderNbrJoueur)) {
        alert("Veuillez entrer un nombre de joueur valide");
        demanderNbrJoueur = Number(prompt("Veuillez entrer le nombre de joueurs")); 
    }
    tableauJoueur.length = demanderNbrJoueur;
    for (let i = 0; i < tableauJoueur.length; i++) {
    tableauJoueur[i] = i + 1;
    }
    return tableauJoueur;
}

function playGame() {
    let totalAllumettes = 50;
    let tableauJoueur = returnTableauNombreDeJoueurs();
    while (totalAllumettes > 0) {
        for (let i = 0; i < tableauJoueur.length; i++) {
            let nbrAllumettesJoueur = tableauJoueur[i];
            nbrAllumettesJoueur = Number(prompt("Joueur " + (i + 1) + " : " + " combien d'allumettes souhaitez-vous retirer ?"));
            while (nbrAllumettesJoueur <= 0 || nbrAllumettesJoueur > totalAllumettes ||
                nbrAllumettesJoueur > 6 || String(nbrAllumettesJoueur).includes(' ') || isNaN(nbrAllumettesJoueur)) {
                alert("Veuillez retirer un nombre d'allumettes compris entre 1 et 6");
                nbrAllumettesJoueur = Number(prompt("Joueur " + (i + 1) + " : " + " combien d'allumettes souhaitez-vous retirer ?"));
            }
            if (totalAllumettes - nbrAllumettesJoueur < 0) {
                alert("Le nombre demandé est trop grand ! Veuillez recommencer.");
                break;
            } else {
                totalAllumettes -= nbrAllumettesJoueur;
                alert("Il reste " + totalAllumettes + " allumettes.");
            }
            if (totalAllumettes === 0) {
              alert("Joueur " + (i+1) + ", félicitations, vous avez gagné!");
              return;
            }
        }
    }
}


playGame();