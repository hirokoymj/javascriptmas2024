import { renderKeyboard } from './keyboard.js'
document.getElementById('keyboard-container').addEventListener('click', checkGuess)

const guessContainer = document.getElementById('guess-container')
const snowmanParts = document.getElementsByClassName('snowman-part')

const word = "gift"
let guesses = 6

function checkGuess() {
    
}

renderKeyboard()