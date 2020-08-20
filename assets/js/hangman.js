var cars =
    [
        "ACURA",
        "ALFA ROMEO",
        "AM GENERAL",
        "AMC",
        "ASTON MARTIN",
        "AUDI",
        "BENTLEY",
        "BMW",
        "BRICKLIN",
        "BRICKLIN",
        "BUICK",
        "CADILLAC",
        "CHEVROLET",
        "CHRYSLER",
        "DAEWOO",
        "DATSUN",
        "DODGE",
        "EAGLE",
        "FERRARI",
        "FIAT",
        "FORD",
        "GEO",
        "GMC",
        "HONDA",
        "HUMMER",
        "HYUNDAI",
        "INFINITI",
        "ISUZU",
        "JAGUAR",
        "JEEP",
        "KIA",
        "LAND ROVER",
        "LEXUS",
        "LINCOLN",
        "LAMBORGHINI",
        "LOTUS",
        "MASERATI",
        "MAZDA",
        "MERCEDES-BENZ",
        "MERCURY",
        "MG",
        "MINI",
        "MITSUBISHI",
        "NISSAN",
        "OLDSMOBILE",
        "PLYMOUTH",
        "PONTIAC",
        "PORSCHE",
        "RAM",
        "RENAULT",
        "ROLLS ROYCE",
        "SAAB",
        "SATURN",
        "SCION",
        "SHELBY",
        "SMART",
        "SUBARU",
        "SUZUKI",
        "TOYOTA",
        "TRIUMPH",
        "VOLKSWAGEN",
        "VOLVO",
    ]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
    answer = cars[Math.floor(Math.random() * cars.length)];
}

function generateButtons() {
    let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
        `
        <button
          class="btnHangman"
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');

    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);

    if (answer.indexOf(chosenLetter) >= 0) {
        guessedWord();
        checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1) {
        mistakes++;
        updateMistakes();
        checkIfGameLost();
        updateHangmanPicture();
    }
}

function updateHangmanPicture() {
    document.getElementById('hangmanPic').src = './images/hangman/' + mistakes + '.jpg';
}

function checkIfGameWon() {
    if (wordStatus === answer) {
        document.getElementById('keyboard').innerHTML = 'You Won!!!';
    }
}

function checkIfGameLost() {
    if (mistakes === maxWrong) {
        document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
        document.getElementById('keyboard').innerHTML = 'You Lost!!!';
    }
}

function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}
function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './images/hangman/0.jpg';

    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();