
const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
}

function getLatinCharacterList(texte) {
    const arr = texte.split("");
    return arr;
}

function translateLatinCharacter(lettre) {
    let morse = latinToMorse[lettre.toUpperCase()];
    return morse;
}

function encode(texte) {
    let encodedMessage = [];
    let arr = getLatinCharacterList(texte)
    for (i = 0; i < arr.length; i++)
        encodedMessage.push(translateLatinCharacter(arr[i])); 
    return encodedMessage.join(" ")
}

function getMorseCharacterList(texte) {
    const arr = texte.split(" ");
    return arr;
}

function translateMorseCharacter(morse) {
    let lettre = morseToLatin[morse];
    return lettre;
}


function decode(morseText) {
    let decodedMessage = [];
    let arr = getMorseCharacterList(morseText);
    for (let i = 0; i < arr.length; i++) {
        decodedMessage.push(translateMorseCharacter(arr[i]));
        if (arr[i] === "/")
        decodedMessage.push(" ");
    }
    return decodedMessage.join("");
}

console.log(encode("Hello, World"));
console.log(decode(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."));
