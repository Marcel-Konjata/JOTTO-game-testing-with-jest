import React from "react";
import { shallow } from "enzyme";
import GuessedWord from "./GuessedWords.component";


const mockingProps = {
    guessedWords: [{ guessedWord: "string", letterMatchCount: 2 }]
};

/**
 * Creates enzyme ShallowWraper for the GuessWord component
 * @function
 * @param {object} props
 * @returns {ShallowWrapper}
 */

const GuessedWordWrapper = (props = {}) => {
    const passedProps = { ...mockingProps, ...props };
    return shallow(<GuessedWord {...passedProps} />);
};

describe("no words guessed", () => {
    let Component;
    beforeEach(() => {
        Component = GuessedWordWrapper({ guessedWords: [] });
    });

    test("renders without crash", () => {
        expect(Component).toHaveLength(1);
    });

    test("renders instruction ", () => {
        const GuessInfo = Component.find("#guessed-word-info");
        expect(GuessInfo.length).not.toBe(0);
    });
});

describe("if user guessed some words", () => {
    let Component;
    const guessedWords = [
        { guessedWord: "train", letterMatchCount: 3 },
        { guessedWord: "jail", letterMatchCount: 2 },
        { guessedWord: "main", letterMatchCount: 3 }
    ];
    beforeEach(() => {
        Component = GuessedWordWrapper({ guessedWords });
    });

    test("renders guessed words ", () => {
        const Table = Component.find("#guessed-words-list");
        expect(Table.length).not.toBe(0);
    });

    test("renders correct number of guess", () => {
        //select all words generated throu map function, ad to key node className = guessed-word
        const guessWordNodes = Component.find(".guessed-word");
        expect(guessWordNodes.length).toBe(guessedWords.length);
    });
});
