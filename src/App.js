import React, { useState } from "react";
import GuessedWordsComponent from "./components/guessed words/GuessedWords.component";
import Congrats from "./components/finished game notify/Congrats.component";

//entry point of app
function App() {
   
        return (
            <div className="App">
                <h1>The Jotto Game</h1>
                <Congrats succes={true} />
                <GuessedWordsComponent guessedWords={[{guessedWord: 'Train', letterMatchCount: 3 }]} />
            </div>
        );
    }


export default App;
