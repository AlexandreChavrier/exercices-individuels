// Cet algo représente le jeu connu du Mastermind en JS avec des prompts. Ce jeu se joue avec un joueur qui
// choisit une combinaison de couleur et un autre joueur qui doit deviner ces couleurs et dans quel ordre.
// Un codemaker et un codebreaker. A chaque tour, le codebreaker doit faire une proposition, le codemaker doit
// lui répondre en indiquant le nombre de couleurs bien placées et le nombre de bonne couleur mais mal placées.

function isCombinationCorrect(arr1, arr2) {
    for (let i = 0; i < 4; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function clue(arr1, arr2) { // arr1 = find et arr2 = combinaison 
    let clue = [0, 0];
    for (let i = 0; i < (arr1.length, arr2.length); i++) {
        if (arr2.includes(arr1[i])) {
            clue[1]++;
        }
        if (arr1[i] === arr2[i]) {
            clue[0]++;
        }
    }
    clue[1] -= clue[0];
    return clue;   
}
console.log(clue(["green", "green", "yellow", "white"], ["green", "green", "green", "green"]));

function randomCombination(arr) {
    for (let i = arr.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
    }
    return arr.slice(4);
}


function playGame() {
    alert("Bienvenue sur le jeu Mastermind ! Devinez la bonne combinaison de 4 couleurs parmis : blue, red, yellow, green, white, black, purple, orange.\nUn indice vous sera donné si vous entrez une mauvaise réponse.\nL'indice aura la forme x,y : le x représentant le nombre de bonnes couleurs à la bonne place et le y le nombre de bonnes couleurs.\nVeuillez séparer les couleurs par des espaces. Bonne partie !");
    const color = ["blue", "red", "yellow", "green", "white", "black", "purple", "orange"];
    let combination = randomCombination(color);
    console.log(combination);
    let count = 1;
    let gameState = false;

    while (gameState === false && count <= 12) { // Je peux donc noter ici while(!gameState)
        let playerAnswer = prompt("Entrez votre réponse ici").split(" ");
        gameState = isCombinationCorrect(combination, playerAnswer);
        if (gameState === false) { // (gameState === false) = (gameState !== true) = (!gameState) : je peux donc noter ici if(!gameState)
            count++;
            let evoIndice = clue(playerAnswer, combination);
            alert("Mauvaise réponse, voici l'indice : " + evoIndice);
        }
    }
    if (count > 12) {
        alert("Vous avez atteint le nombre d'essais maximum, vous avez perdu...");
    } else {
        alert("Vous avez gagné en " + count + " coups");
    }
}

playGame();