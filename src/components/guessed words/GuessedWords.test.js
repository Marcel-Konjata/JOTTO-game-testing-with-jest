import React from "react";
import { shallow } from "enzyme";
import GuessedWord from "./GuessedWords.component";


const mockingProps = {
    guessedWords: [
        {guessedWord: "string", letterMatchCount: 2}
    ]
}


/**
 * Creates enzyme ShallowWraper for the GuessWord component 
 * @function 
 * @param {object} props 
 * @returns {ShallowWrapper}
 */

const GuessedWordWrapper =(props = {})=> {
    const passedProps = {...mockingProps, ...props};
    return shallow(<GuessedWord {...passedProps} />);
}


describe('no words guessed', ()=>{

    test('renders without crash', () => {
     const Component =  GuessedWordWrapper({guessedWords: []});
        expect(Component).toHaveLength(1);

     const GuessInfo =  Component.find('#guessed-word-info');
        expect(GuessInfo.length).not.toBe(0);

    });
    test('renders instruction ', () => {
        
    });
})
    


test('words were guessed ', () => {
    
})
