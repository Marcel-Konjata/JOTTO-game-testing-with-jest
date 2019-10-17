/**
 * checks the guessed word and return number of correct letters
 * @param {string} guessedWord 
 * @param {string} generatedWord 
 */



 export const getNumberOfCorrectLetters = (guessedWord, generatedWord) => {
    const guessedLettersSet = new Set([...guessedWord]);
    const numberOfCorrectLetters = [...guessedLettersSet].filter(letter=> generatedWord.includes(letter));
    return numberOfCorrectLetters.length  ;
}


