function printSpaces(nbr) {
    let spaces = '';
    for (let i = 0; i < nbr; i++) {
        spaces += ' ';
    }
    return spaces;
}

function character() {
    const PROBABILITE_PLUS = 0.3;
    const PROBABILITE_O = 0.3;

    const result = Math.random();
  
    if (result <= PROBABILITE_PLUS) {
        return '+';
    } else if (result <= PROBABILITE_PLUS + PROBABILITE_O) {
        return 'o';
    } else {
        return '*';
    }
}

function randomCharacter(n) {
    let chaine = '';
    for (let i = 0; i < n; i++) {
        chaine += character();
    }
    return chaine;
}

function drawPlusRectangle(largeur, hauteur, nbr) {
    let result = "";
    for (let y = 0; y < hauteur; y++) {
      let line = "";
      for (let x = 0; x < largeur; x++) {
        line += "#";
      }
      result += printSpaces(nbr + 1 - Math.floor(line.length / 2)) + line + "\n";
    }
    return result;
  }

function defaultSapin(nbr) {
    return printSpaces(nbr + 1) + '+\n' + printSpaces(nbr) + '/' + '*' + '\\\n';
}

function sapin(nbr) {
    let arr = [];

    let i = 0;
    let j = 1;
    let k = 0;
    let count = 0;
    
    while (i < nbr) {
        arr[i] = printSpaces((nbr - (k + 1))) + '/' + '*' + randomCharacter((k * 2) + 1) + '*' + '\\\n';
        while (j < i) { 
            if ((j + 2) % 3 === 0) {
                arr[i] = arr[i - 1];
                count++;
                k--;
                if (count % 2 === 0) {
                    arr[i] = arr[i - 2];
                    k--;
                }
            } 
            j++;
        }
        i++;
        k++;
    }
    return arr.join("");
}

function drawSapin(nbr) {
    if (nbr === 5) {
        return defaultSapin(nbr) + sapin(nbr) + drawPlusRectangle(2, 2, nbr) + '\n';
    } 
    if (nbr === 1 || nbr === 2 || nbr === 3) {
        return defaultSapin(nbr) + sapin(nbr) + drawPlusRectangle(1, 1, nbr) + '\n';
    }
    else {
        return defaultSapin(nbr) + sapin(nbr) + drawPlusRectangle(Math.floor((nbr / 2) - 1), Math.floor(nbr / 2), nbr) + '\n';
    }
}

console.log(drawSapin(50));

