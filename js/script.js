const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector("letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const word = "magnolia";
const guessedLetters = [];

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
    console.log(guess);
    letterInput.value = "";

    validateInput(input);
    const savedInput = validateInput();
    console.log(savedInput);
});  // This section isn't finished because I had trouble with the last step.

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
    
}

// add some comments on what all the functions do.






