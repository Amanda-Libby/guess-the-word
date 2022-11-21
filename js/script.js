const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector("letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const word = "magnolia";
const guessedLetters = [];
const remainingGuesses = 8;

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
// Figure out where this section is and ask about it.  Although i might have already asked about that on Slack

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
    } // Ask skillcrush to explain how this function works
};

const guessedWord = function () {
    // if statement to check if their word in progress matches the word they should guess

} // This function is in the last section of the "Display word and guessed Letters" step of the project

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




// add some comments on what all the functions do.

// learn PHP since it is similar to JavaScript
