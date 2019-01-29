let guessedLetter;
let blank = "_";

const Letter = function(character, ) {
    this.character = character;
    this.guessedYet = null;
    this.beenGuessed = function () {
        if(this.guessedYet = true) {
            return this.character;
        } else {
            return blank;
        }
    };
    this.correctGuess = function () {
        if(guessedLetter === this.character) {
            this.guessedYet = true;
        }
    };
};


module.exports = Letter;