import React from "react";
import { getNumberOfCorrectLetters } from "../../utils/getNumberOfCorrectLetters";

export const guessedWordContext = React.createContext();


function GuessedWordcontextProvider({children}){
    // must be empty array  inital state for proper working
    const [guessedWords, setGuessedWords] = React.useState([]);

    const [succes, setSucces] = React.useState(false);


    const checkGuess = (guessedWord, secretWord)=>{
        if(guessedWord === secretWord){
            setSucces(true)
        }
        else{
            const letterMatchCount = getNumberOfCorrectLetters(guessedWord, secretWord)
            const newState = guessedWords.concat([{guessedWord, letterMatchCount}]);
            setGuessedWords(newState);
        }
    }

    return (
        <guessedWordContext.Provider value={{guessedWords, checkGuess, succes}}>
            {children}
        </guessedWordContext.Provider>
    )
}

export default GuessedWordcontextProvider