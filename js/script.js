const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector("letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

let word = "magnolia";
const guessedLetters = [];
let remainingGuesses = 8;

const getWord = async function () {
    const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await response.text();
    const wordArray = words.split("\n");
    console.log(wordArray);
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomIndex].trim();
    placeholder(word);
}; // look at step 5 again since I don't understand the getWord async function and how it works

// fire off the game
getWord();

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●")
    }
    wordInProgress.innerText = placeholderLetters.join("");

};

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    // Empty message paragraph.  don't use value because it is text based.
    message.innerText = "";
    
    // Let's grab what was entered in the input
    const guess = letterInput.value;
    // Let's make sure that it is a single letter
    const goodGuess = validateInput(guess);

    if (goodGuess) {
        // We've got a letter!  Let's make a guess!
        makeGuess(guess);
    }
    letterInput.value = "";
}); 


const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "add a letter";
    } else if (input.length > 1) {
        message.innerText = "Only enter one letter";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "that's not a letter";
    } else {
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter."
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters)
        showGuessedLetters();
        updateGuessesRemaining(guess);
        updateWordInProgress();
        
    }
};

const showGuessedLetters = function () {
    // Clear the list first
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }

};

const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    console.log(wordArray);
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●")
        }
    } 
    wordInProgress.innerText = revealWord.join("");
    checkIfWin();
    // Ask skillcrush to explain how this function works
}; 

const updateGuessesRemaining = function (guess) {
    const upperWord = word.toUpperCase();
    if (!upperWord.includes(guess)) {
        // womp womp - bad guess, lose a chance
        message.innerText = `Sorry, the word has no ${guess}`;
        remainingGuesses -= 1;
    } else {
        message.innerText = `Good guess!  The word has the letter ${guess}`;
    }

    if (remainingGuesses === 0) {
        message.innerHTML = `Game over!  The word was <span class="highlight">${word}</span>`;
    } else if (remainingGuesses === 1) {
        remainingGuessesSpan.innerText = `${remainingGuesses} guess`; // figure out this line of code.
    } else {
        remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;  // figure out this line as well.
    }
}; // look up when to use innerText and when to use innerHTML

const checkIfWin = function () {
    if (word.toUpperCase === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the correct word!  Congrats!</p>`;
    }
    
};

const startOver = function () {
    guessLetterButton.classList.add("hide");
    remainingGuessesElement.classList.add("hide");
    guessedLettersElement.classList.add("hide");
    playAgainButton.classList.remove("hide");
};

startOver();

playAgainButton.addEventListener("click", function () {
    // reset all original values - grab new word
    message.classList.remove("win");
    guessedLetters = [];
    remainingGuessesElement = 8;

    remainingGuessesSpan.innerText = `${remainingGuesses}`
    guessedLettersElement.innerText = "";
    message.innerText = "";

    // show the right UI elements
    guessLetterButton.classList.remove("hide");
    remainingGuessesElement.classList.remove("hide");
    guessedLettersElement.classList.remove("hide");
    playAgainButton.classList.add("hide");

    //Grab a new word
    getWord();
})

// When I get stuck look back at my previous code for inspiration and also ask Slack for help.





/* 
<a href="tel:8134504187">
<i class="fa-solid fa-phone fa-2x"></i>
<br>
<br>
813-450-4187
</a>
*/
// this is for my phone number and making it so if you click on my number it will automatically call the number

// learn PHP since it is similar to JavaScript
