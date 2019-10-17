import React from "react";
import GuessedWordsComponent from "./components/guessed words/GuessedWords.component";
import Congrats from "./components/finished game notify/Congrats.component";
import Input from "./components/Input/Input.component";
import LoadingSpinner from "./components/Loading-Components/LoadingSpinner.component";
import { guessedWordContext } from "./contexts/guessedWord/GuessedWordsContext";
import { useFetch } from "./hooks/useFetch";
import GiveUp from "./components/give up/GiveUp.component";

//entry point of app
function App() {
    const { succes, guessedWords, checkGuess } = React.useContext(guessedWordContext);
    const {secretWord, fetchError} = useFetch();
    
    
    return (
        <div className="App-component">
            <h1>The Jotto Game</h1>
            {secretWord?
            succes ? <Congrats succes={true} /> : <Input secretWord={secretWord} handleCheck={checkGuess}/>
            :
            fetchError? <h3>there was an error reaching out server, reload page to try agian </h3> :
            <LoadingSpinner />
            }
             
             <GuessedWordsComponent
             guessedWords={guessedWords}
             /> 
             {secretWord? <GiveUp secretWord={secretWord} /> : null}
            
        </div>
    );
}

export default App;
