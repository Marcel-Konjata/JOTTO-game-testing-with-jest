import React from "react";
import PropTypes from "prop-types";

/**
 * Functional stateless component that has conditional return
 * must recieve guessedWords prop of the form of array of objects
 * example of guessedWords: [
        {guessedWord: "string", letterMatchCount: 2}
    ]
 * @function
 * @param {object} props 
 * @returs {JSX.Element}
 */

export default function GuessedWordsComponent({ guessedWords = [] }) {
    return (
        <div>
            {guessedWords.length < 1 ? (
                <h3 id="guessed-word-info">some info</h3>
            ) : (
                <table>
                    <th>
                        <td>Guessed word</td>
                        <td>Matched letters</td>
                    </th>
                    <tbody>
                    {guessedWords.map(
                        (data,index) => <tr key={index}>
                            <td>{data.guessedWord}</td>
                            <td>{data.letterMatchCount}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            )}
        </div>
    );
}

GuessedWordsComponent.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string,
            letterMatchCount: PropTypes.number
        })
    ).isRequired
};
