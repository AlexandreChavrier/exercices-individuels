class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    setScore(number) {
        return this.score += number;
    }
}

let joueur1 = new Player("Chris");
let scoreJoueur1 = joueur1.setScore(10);
console.log(scoreJoueur1);

